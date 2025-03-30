import { useEffect, useState, useContext } from "react";
import axios from "axios";
import BannerNoSearch from "../components/BannerNoSearch";
import { useNavigate } from "react-router";
import { UserContext } from "./FrontLayout";
import getTokenFromCookie from "../assets/js/getTokenFromCookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Cart() {
  const [cartsData, setCartsData] = useState([]);
  const { setIsLoginModalOpen, setLoginModalMode ,isLogin } = useContext(UserContext);// 判斷是否登入
  const { token, myUserId } = getTokenFromCookie();

  useEffect(() => {
    if (!token) {
      handleLoginModal();
    }
  }, []);

  //跳出登入視窗
  const handleLoginModal = () => {
    setLoginModalMode("login");
    setIsLoginModalOpen(true);
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/600/carts?userId=${myUserId}&_expand=product`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setCartsData(data);
      } catch (error) {
        console.error("取得購物車資料失敗", error);
      }
    };
    //如果登入成功則重新取得token，
    if (isLogin) {
      fetchCartData();
    }
  }, [isLogin]);

  //一次只選取一張卡片
  const [selectId, setSelectId] = useState(null);

  //點擊下一步跳轉到ProductPage
  const navigate = useNavigate();
  const goToProductPage = () => {
    const result = cartsData.find((item) => {
      return item.id === selectId;
    });
    if (!selectId) {
      alert("請選擇一間機構！");
      return;
    }
    // json-server-auth 預設 1 小時 token 失效，宣告失效時間變數 expired，並做時間處理
    const expired = new Date();
    expired.setTime(expired.getTime() + 60 * 60 * 1000);
    //存入cookie
    document.cookie = `selectProductId=${selectId}; expires=${expired.toUTCString()}; path=/;`;
    //將選中的ID帶入網址
    navigate(`/checkout/${result.productId}`);
  };

  //儲存預刪除的id
  const [deleteId, setDeleteId] = useState(null);

  //handleDeleteClick 方法
  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  //confirmDelete 方法&重新渲染
  const confirmDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/carts/${deleteId}`);
      setCartsData(cartsData.filter((item) => item.id !== deleteId));
      setDeleteId(null); // 關閉 Modal
    } catch (error) {
      console.error("刪除失敗", error);
    }
  };

 // 清空購物車
 const handleDeleteAllClick = async () => {
  // getToken(); // 取得 userId
  if (!myUserId) {
    alert("用戶未登入，無法清空購物車");
    return;
  }

  // 取得當前使用者的購物車資料
  const userCarts = cartsData.filter((item) => item.userId == myUserId);

  if (userCarts.length === 0) {
    alert("購物車已經是空的！");
    return;
  }

  try {
    // 產生 DELETE 請求清除當前使用者的購物車內容
    const deleteRequests = userCarts.map((item) =>
      axios.delete(`${BASE_URL}/carts/${item.id}`)
    );

    // 使用 Promise.all 讓請求並行發送，提高效率
    await Promise.all(deleteRequests);

    // 更新前端狀態，確保 UI 同步
    setCartsData(cartsData.filter((item) => item.userId != myUserId));
    alert("購物車已清空！");
  } catch (error) {
    console.error("清空購物車失敗", error);
    alert("清空購物車失敗，請稍後再試！");
  }
};

  return (
    <>
      <div className="main">
        {/* banner */}
        <BannerNoSearch></BannerNoSearch>
        {/* 背景色 */}
        <div className="order-content">
          <div className="container">
            {cartsData.length === 0 ? 
            // 購物車為空顯示提示訊息
            (<div className="cart-content">
                  {/* 全部刪除按鈕 */}
                  <div className="d-flex justify-content-end px-2 mb-11">
                    <button
                      type="button"
                      className="btn btn-outline-secondary-40 all-font"
                      onClick={handleDeleteAllClick}
                    >
                      全部刪除
                    </button>
                  </div>
                {/* 加入購物車資訊 */}
                <div className="d-flex justify-content-center flex-column align-items-center mb-10 mb-md-14">
                  <img className="img-fluid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH9i4Wm47al7owhheYuyvI9kPffsFjgHdSNLtaL572LmdaxthXFGiKNn4sbYMaVNx9omD5HFbC6qkT6d4DJtvJpNJFjFwoTJHeOCU1MAP4H2P2nvHYUaBC7Q4d-rO3PKXvf564pdE9EBp6/s600/big_family_kurumaisu.png" alt="提示購物車為空" />
                  <h5 className="fs-5 fs-md-4">
                    立即預訂內沒有任何機構
                  </h5>
                  <p className="fs-7 fs-md-6">
                    請加入機構到立即預訂
                  </p>
                </div>
                {/* 頁籤尾頁 */}
                <div className="d-flex justify-content-center mt-3">
                  <div className="flex-column">
                    <button
                      type="button"
                      className="btn next-btn next-btn-size fs-5 btn-primary-40"
                      onClick={goToProductPage}
                    >
                      下一步
                    </button>
                  </div>
                </div>
            </div>) : 
            // 購物車有資料顯示購物車內容
            (<div className="cart-content">
                  {/* 全部刪除按鈕 */}
                  <div className="d-flex justify-content-end px-2 mb-11">
                    <button
                      type="button"
                      className="btn btn-outline-secondary-40 all-font"
                      onClick={handleDeleteAllClick}
                    >
                      全部刪除
                    </button>
                  </div>
                {/* 渲染購物車資料 */}
                {cartsData.map((item) => (
                  <div
                    className="card overflow-hidden mb-11"
                    key={item.id}
                    style={{ maxWidth: "1296px" }}
                  >
                    <div className="row g-0">
                      <div className="col-lg-5">
                        <div className="checkbox-relative h-100">
                          <img
                            src={item.product.images[0]}
                            className="img-fluid card-img rounded-0"
                            alt="building"
                            style={{ height: "290px" }}
                          />
                          <div className="checkbox-mobile">
                            <input
                              className="form-check-input custom-checkbox checkbox-absolute"
                              type="checkbox"
                              id={`checkbox-${item.id}`}
                              checked={selectId === item.id}
                              onChange={() =>
                                setSelectId(
                                  selectId === item.id ? null : item.id
                                )
                              }
                              value=""
                              aria-label="勾選框"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card-body p-4">
                          {/* infor */}
                          <div className="infor mb-3">
                            <div className="checkbox d-flex justify-content-between mb-2">
                              <h5 className="card-title">
                                {item.product.name}
                              </h5>
                              <div className="checkbox-desk">
                                <input
                                  className="form-check-input custom-checkbox"
                                  type="checkbox"
                                  id={`checkbox-${item.id}`}
                                  checked={selectId === item.id}
                                  onChange={() =>
                                    setSelectId(
                                      selectId === item.id ? null : item.id
                                    )
                                  }
                                  value=""
                                  aria-label="勾選框"
                                />
                              </div>
                            </div>
                            <div className="address d-flex">
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 7.92285C1 12.7747 5.24448 16.7869 7.12319 18.3252C7.39206 18.5454 7.52811 18.6568 7.72871 18.7132C7.88491 18.7572 8.1148 18.7572 8.271 18.7132C8.47197 18.6567 8.60707 18.5463 8.87695 18.3254C10.7557 16.7871 14.9999 12.7751 14.9999 7.9233C14.9999 6.08718 14.2625 4.32605 12.9497 3.02772C11.637 1.72939 9.8566 1 8.00008 1C6.14357 1 4.36301 1.7295 3.05025 3.02783C1.7375 4.32616 1 6.08674 1 7.92285Z"
                                  fill="#EA8C55"
                                />
                                <path
                                  d="M6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7Z"
                                  fill="#EA8C55"
                                />
                                <path
                                  d="M1 7.92285C1 12.7747 5.24448 16.7869 7.12319 18.3252C7.39206 18.5454 7.52811 18.6568 7.72871 18.7132C7.88491 18.7572 8.1148 18.7572 8.271 18.7132C8.47197 18.6567 8.60707 18.5463 8.87695 18.3254C10.7557 16.7871 14.9999 12.7751 14.9999 7.9233C14.9999 6.08718 14.2625 4.32605 12.9497 3.02772C11.637 1.72939 9.8566 1 8.00008 1C6.14357 1 4.36301 1.7295 3.05025 3.02783C1.7375 4.32616 1 6.08674 1 7.92285Z"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7Z"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="fs-7 ps-1 mb-5">
                                {item.product.address}
                              </p>
                            </div>
                          </div>
                          <ul className="d-flex ps-0 mb-4 flex-wrap align-items-center gap-2">
                            {item.product.services?.map((service, index) => (
                              <li
                                key={index}
                                className="border border-dark rounded-pill "
                              >
                                <p className="d-flex align-items-center py-1 px-2">
                                  <img
                                    className="me-1"
                                    src={`src/assets/images/Icon/IconBlack/${service.name}.svg`}
                                  />
                                  {service.name || "載入中..."}
                                </p>
                              </li>
                            ))}
                          </ul>
                          {/* 床位房型 */}
                          <div className="card-text d-flex justify-content-between align-items-end mb-2">
                            <div className="beds fs-7">
                              剩餘床位：
                              <span className="last-bed">
                                {item.product.roomCards[0].availableBeds}
                              </span>
                            </div>
                            <div className="room-info text-end">
                              <p className="room-type fs-8">
                                {item.product.roomCards[0].roomType}
                              </p>
                              <p className="room-price fs-5">
                                NTD {item.product.roomCards[0].price}
                              </p>
                            </div>
                          </div>
                          {/* 單獨刪除按鈕 */}
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-outline-secondary-40"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteConfirmModal"
                              onClick={() => handleDeleteClick(item.id)}
                            >
                              <i className="bi bi-x-lg"></i>
                              <span className="fs-6">刪除</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* 頁籤尾頁 */}
                <div className="d-flex justify-content-center justify-content-md-end mt-3">
                  <div className="flex-column">
                    <button
                      type="button"
                      className="btn next-btn next-btn-size fs-5 btn-primary-40"
                      onClick={goToProductPage}
                    >
                      下一步
                    </button>
                  </div>
                </div>
            </div>
            )}
          </div>
              {/* ModalHeader提示框 */}
              <div
                className="modal fade"
                id="deleteConfirmModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* ModalHeader */}
                    <div className="modal-header mx-auto none-border">
                      <div className="d-flex flex-column align-items-center">
                        <svg
                          className="d-black"
                          width="57"
                          height="57"
                          viewBox="0 0 57 57"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1599_1465)">
                            <path
                              d="M48.4336 8.96671V53.3C48.4336 53.9189 48.1878 54.5124 47.7502 54.95C47.3126 55.3875 46.7191 55.6334 46.1003 55.6334H11.1003C10.4815 55.6334 9.88797 55.3875 9.45039 54.95C9.0128 54.5124 8.76697 53.9189 8.76697 53.3V8.96671H48.4336Z"
                              fill="#F7E2D9"
                            />
                            <path
                              d="M8.76697 8.96671H48.4336V15.9667H8.76697V8.96671Z"
                              fill="#EEC2B0"
                            />
                            <path
                              d="M48.4336 8.96671V53.3C48.4336 53.9189 48.1878 54.5124 47.7502 54.95C47.3126 55.3875 46.7191 55.6334 46.1003 55.6334H11.1003C10.4815 55.6334 9.88797 55.3875 9.45039 54.95C9.0128 54.5124 8.76697 53.9189 8.76697 53.3V8.96671H48.4336Z"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.1 8.96668V4.30001C18.1 3.68117 18.3458 3.08768 18.7834 2.65009C19.221 2.21251 19.8145 1.96667 20.4333 1.96667H36.7666C37.3855 1.96667 37.979 2.21251 38.4166 2.65009C38.8541 3.08768 39.1 3.68117 39.1 4.30001V8.96668"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.76685 8.96671H55.4335"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.1 17.1333V45.1333"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.6 17.1333V45.1333"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M39.1 17.1333V45.1333"
                              stroke="#B43900"
                              strokeWidth="2.304"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1599_1465">
                              <rect
                                width="56"
                                height="56"
                                fill="white"
                                transform="translate(0.599976 0.799988)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h5 className="modal-title text-secondary-70">
                          刪除機構
                        </h5>
                      </div>
                    </div>
                    {/* ModalBody */}
                    <div className="modal-body">
                      <p
                        className="text-center fs-6"
                        style={{ color: " #B0B0B0" }}
                      >
                        請問確認刪除勾選的機構嗎？
                      </p>
                    </div>
                    <div className="modal-footer d-flex justify-content-center none-border">
                      <button
                        type="button"
                        className="btn modal-btn btn-secondary-40 fs-6 modal-me"
                        data-bs-dismiss="modal"
                        onClick={confirmDelete}
                      >
                        刪除
                      </button>
                      <button
                        type="button"
                        className="btn modal-btn btn-outline-secondary-40 fs-6"
                        data-bs-dismiss="modal"
                      >
                        保留
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}
