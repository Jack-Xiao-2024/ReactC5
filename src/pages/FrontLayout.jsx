import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useRef, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

// createContext 建立共用環境、匯出 UserContext
export const UserContext = createContext({});

export default function FrontLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const loginModalRef = useRef(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalMode, setLoginModalMode] = useState("");
  return (
    <>
      {/* 讓 isLogin, setIsLogin, userName, setUserName 可以在前台網頁的其他元件中用 useContext 引入使用 */}
      <UserContext.Provider
        value={{
          isLogin,
          setIsLogin,
          userName,
          setUserName,
          loginModalRef,
          isLoginModalOpen,
          setIsLoginModalOpen,
          loginModalMode,
          setLoginModalMode,
        }}
      >
        <ScrollToTop />
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </UserContext.Provider>
    </>
  );
}
