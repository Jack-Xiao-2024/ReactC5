import { useState, useEffect } from "react";
import getTokenFromCookie from "../assets/js/getTokenFromCookie";
import axios from "axios";
import PropTypes from "prop-types";
import showSuccessMessage from "../assets/js/showSuccessMessage";
import showErrorMessage from "../assets/js/showErrorMessage";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const HeartCard = ({ productId, onRemove, openLoginModal }) => {
  const { token, myUserId } = getTokenFromCookie();
  const [heart, setHeart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [collectId, setCollectId] = useState(null); // 收藏的 ID

  // **檢查使用者是否已登入**
  const isUserLoggedIn = () => {
    return !!token && !!myUserId;
  };

  // **檢查該用戶是否已收藏**
  useEffect(() => {
    const checkCollect = async () => {
      if (!isUserLoggedIn()) return;
      try {
        const response = await axios.get(`${BASE_URL}/collects`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { userId: myUserId, productId: productId },
        });

        if (response.status === 200) {
          const collectedItem = response.data.find(
            (item) => item.userId === myUserId && item.productId === productId
          );

          if (collectedItem) {
            setHeart(true);
            setCollectId(collectedItem.id);
          } else {
            setHeart(false);
            setCollectId(null);
          }
        }
      } catch (err) {
        console.error("錯誤：檢查收藏狀態失敗", err);
        setError(err.message);
      }
    };

    checkCollect();
  }, [token, myUserId, productId]);

  // **點擊切換收藏**
  const heartCollect = async (e) => {
    e.preventDefault();

    // 檢查是否已登入
    if (!isUserLoggedIn()) {
      console.log("使用者未登入，開啟登入視窗");
      if (openLoginModal && typeof openLoginModal === "function") {
        openLoginModal();
      } else {
        alert("請先登入才能收藏機構");
      }
      return;
    }

    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      if (!heart) {
        const response = await axios.post(
          `${BASE_URL}/collects`,
          {
            userId: myUserId,
            productId: productId,
            createdAt: new Date().toISOString(),
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setHeart(true);
        showSuccessMessage("收藏機構成功");
        setCollectId(response.data.id);
      } else {
        if (!collectId) throw new Error("收藏 ID 不存在，無法刪除");

        await axios.delete(`${BASE_URL}/collects/${collectId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setHeart(false);
        setCollectId(null);
        showSuccessMessage("取消收藏機構成功");
        // **呼叫 onRemove，讓父組件更新**
        if (onRemove) {
          onRemove(productId);
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "收藏操作失敗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <a className="heart" href="#" onClick={heartCollect}>
      <img
        src={
          heart
            ? `https://raw.githubusercontent.com/Jack-Xiao-2024/ReactC5/a442977a25033104ad6b0fdb00c77acbcfc2c59a/public/images/Interact%20Icon/Heard-02.svg`
            : `https://raw.githubusercontent.com/Jack-Xiao-2024/ReactC5/a442977a25033104ad6b0fdb00c77acbcfc2c59a/public/images/Interact%20Icon/Heard-01.svg`
        }
        alt="heart"
        style={{ cursor: "pointer", opacity: loading ? 0.5 : 1 }}
      />
    </a>
  );
};

HeartCard.propTypes = {
  productId: PropTypes.number,
  onRemove: PropTypes.func,
  openLoginModal: PropTypes.func, // 新增開啟登入視窗的函數
};

export default HeartCard;
