function Footer(){
  return (
  <>
    <footer className="footer">
      <nav className="navbar navbar-expand-lg py-xl-5 py-0 px-xl-0 px-9" data-bs-theme="dark">
        <div className="container flex-xl-row flex-column-reverse align-items-xl-center align-items-start">
          <a className="navbar-brand py-xl-0 py-1 me-xl-9 me-0 align-self-center" href="index.html">
            {/* 桌面版 logo */}
            <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Logo/LB-White.svg" alt="logo" className="d-xxl-inline-block d-none" style={{width: "360px", height: "107px"}}/>
            {/* 手機版 logo */}
            <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Logo/LB-White.svg" alt="logo" className="d-xxl-none d-inline-block" style={{width: "230px", height: "100%"}}/>
          </a>
          <ul className="navbar-nav py-xl-0 py-5 me-xl-auto mb-xl-2 mb-0 fs-xl-6 gap-7 align-self-xl-end align-self-start">
            <li className="nav-item">
              <a className="nav-link" href="index.html">首頁</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">最新消息</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">其他功能</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="booking.html">立即預訂</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#faq">常見問題</a>
            </li>
          </ul>

          <ul className="navbar-nav py-xl-0 pt-11 pb-2 gap-7 d-flex flex-row">
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/">
                {/* 桌面版 FB icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Facebook.svg" alt="facebook" className="d-xxl-inline-block d-none" style={{width: "64px", height: "64px"}}/>
                {/* 手機版 FB icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Facebook.svg" alt="facebook" className="d-xxl-none d-inline-block" style={{width: "32px", height: "32px"}}/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/">
                {/* 桌面版 IG icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Instagram.svg" alt="instagram" className="d-xxl-inline-block d-none" style={{width: "64px", height: "64px"}}/>
                {/* 手機版 IG icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Instagram.svg" alt="instagram" className="d-xxl-none d-inline-block" style={{width: "32px", height: "32px"}}/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://line.me/tw/">
                {/* 桌面版 line icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Line.svg" alt="Line" className="d-xxl-inline-block d-none" style={{width: "64px", height: "64px"}}/>
                {/* 手機版 line icon */}
                <img src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/399576c7c8ec60e611e2d35218b94d8f6a92a78b/assets/images/Icon/IconWhite/Line.svg" alt="Line"  className="d-xxl-none d-inline-block" style={{width: "32px", height: "32px"}}/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="copyright py-xl-9 pt-5 pb-12 fs-xl-7 fs-8 d-flex flex-xl-row flex-column justify-content-xl-between align-items-center border-top border-white text-white opacity-50">
          <p className="mb-xl-0 mb-4">長照好厝邊 ©2024 Copyrights All Rights Reserved</p>
          <p>本專題僅為學習用途，不做任何商業使用。圖片來源請見 GitHub Repo.</p>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer;