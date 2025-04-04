import { Outlet } from "react-router";
import { useRef, useState } from "react";

// 從 ../contexts/UserContext 引入 UserContext
import { UserContext }  from "../contexts/UserContext";

export default function AppLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const loginModalRef = useRef(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalMode, setLoginModalMode] = useState("");
  const [ isCollapseOpen, setIsCollapseOpen ] = useState(false);
  const handleLoginModalOpen = (mode) => {
    setLoginModalMode(mode);
    setIsLoginModalOpen(true);
    setIsCollapseOpen(false);
  };
  return (
    <>
      {/* 讓 isLogin, setIsLogin, userName, setUserName 可以在前台網頁的其他元件中用 useContext 引入使用 */}
      <UserContext.Provider
        value={{
          isLogin,
          setIsLogin,
          userName,
          setUserName,
          isAdmin,
          setIsAdmin,
          loginModalRef,
          isLoginModalOpen,
          setIsLoginModalOpen,
          loginModalMode,
          setLoginModalMode,
          isCollapseOpen,
          setIsCollapseOpen,
          handleLoginModalOpen
        }}
      >
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
