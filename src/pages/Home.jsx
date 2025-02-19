// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Link } from "react-router";
import Banner from "../components/Banner";
// import axios from "axios";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="index">
        <Banner />

        {/* index 人氣機構精選區段 */}
        <section className="index-hots pb-lg-14 pb-0">
          <div className="hots-container">
            {/* 上方分頁按鈕 */}
            <div
              className="px-lg-0 px-4"
              data-aos="zoom-in-down"
              data-aos-anchor-placement="top-bottom"
            >
              <h4 className="text-center text-primary-100 fs-lg-2 mb-10">
                人氣機構精選
              </h4>
              <ul
                className="hots-content row row-cols-4 nav nav-pills flex-nowrap justify-content-md-center justify-content-start align-items-center mb-13 fs-6 px-1"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="col nav-item px-lg-5 px-2"
                  role="presentation"
                  style={{ width: "180px" }}
                >
                  <button
                    className="nav-link active"
                    style={{ width: "156px" }}
                    id="pills-longTermCareCenter-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-longTermCareCenter"
                    type="button"
                    role="tab"
                    aria-controls="pills-longTermCareCenter"
                    aria-selected="false"
                  >
                    長期照顧中心
                  </button>
                </li>
                <li
                  className="col nav-item px-lg-5 px-2"
                  role="presentation"
                  style={{ width: "180px" }}
                >
                  <button
                    className="nav-link"
                    style={{ width: "156px" }}
                    id="pills-restHome-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-restHome"
                    type="button"
                    role="tab"
                    aria-controls="pills-restHome"
                    aria-selected="false"
                  >
                    安養中心
                  </button>
                </li>
                <li
                  className="col nav-item px-lg-5 px-2"
                  role="presentation"
                  style={{ width: "180px" }}
                >
                  <button
                    className="nav-link"
                    style={{ width: "156px" }}
                    id="pills-nursingHome-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-nursingHome"
                    type="button"
                    role="tab"
                    aria-controls="pills-nursingHome"
                    aria-selected="false"
                  >
                    護理之家
                  </button>
                </li>
                <li
                  className="col nav-item px-lg-5 px-2"
                  role="presentation"
                  style={{ width: "180px" }}
                >
                  <button
                    className="nav-link"
                    style={{ width: "156px" }}
                    id="pills-dayCareCenter-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dayCareCenter"
                    type="button"
                    role="tab"
                    aria-controls="pills-dayCareCenter"
                    aria-selected="false"
                  >
                    日間照顧中心
                  </button>
                </li>
              </ul>
            </div>
            {/* 下方卡片區段 */}
            <div>
              <div
                className="hots-content tab-content"
                id="pills-tabContent"
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
              >
                {/* 長期照顧中心 */}
                <div
                  className="tab-pane fade show active"
                  id="pills-longTermCareCenter"
                  role="tabpanel"
                  aria-labelledby="pills-longTermCareCenter-tab"
                  tabIndex="0"
                >
                  <div className="hots-cards px-4 pb-lg-0 pb-13">
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="kangLeLongTermCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-04.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <Link
                          to='product'
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          康樂長照中心
                        </Link>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          本長照機構設有無障礙設施、專業護理室、康復治療室、活動娛樂區及24小時緊急呼叫系統，提供全方位的照護服務。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="singFuLongTermCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-02.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          幸福頤養園
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          幸福頤養園致力於提供長者溫馨舒適的生活環境。我們的設施包括專業護理病房，確保長者健康；康復訓練區，幫助長者維持和提升體能。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="anKangLongTermCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-03.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          安康長青之家
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          安康長青之家提供全面的長期照護服務，專為長者設計。我們擁有全天候護理中心，確保長者隨時能獲得專業照顧；健康膳食區，提供營養均衡的餐點。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 安養中心 */}
                <div
                  className="tab-pane fade"
                  id="pills-restHome"
                  role="tabpanel"
                  aria-labelledby="pills-restHome-tab"
                  tabIndex="0"
                >
                  <div className="hots-cards px-4 pb-lg-0 pb-13">
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="leKangRestHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-01.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          樂康頤和園
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          樂康頤和園專為銀髮族打造，提供溫馨的安養服務。我們設有舒適的居住空間，讓長者享受如家般的溫暖。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="yiRanRestHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-08.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          怡然頤養居
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          怡然頤養居提供全方位的安養服務，讓長者安心養老。我們設有專業的護理單位，確保每位住民的健康需求得到滿足。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="siangHanRestHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-05.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          祥和樂年苑
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          祥和樂年苑致力於營造一個舒適、健康、快樂的安養環境。我們提供先進的護理設施，全天候照護長者的身體健康。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 護理之家 */}
                <div
                  className="tab-pane fade"
                  id="pills-nursingHome"
                  role="tabpanel"
                  aria-labelledby="pills-nursingHome-tab"
                  tabIndex="0"
                >
                  <div className="hots-cards px-4 pb-lg-0 pb-13">
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="kangFuNursingHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-07.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          康福護理苑
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          康福護理苑提供專業的長期護理服務，致力於守護長者的健康與生活質量。我們設有高規格的醫護照護室，全天候提供專業的醫療支援。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="jingYiNursingHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-10.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          靜怡護理家園
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          靜怡護理家園為長者提供安寧舒適的護理服務。我們擁有設備完善的病房，讓長者在安全舒適的環境中休養。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="yiKangNursingHome"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-06.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          頤康護理居
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          頤康護理居致力於提供全方位的護理服務，讓長者享受高品質的生活。我們設有先進的醫療護理站，隨時守護長者的健康。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 日間照顧中心 */}
                <div
                  className="tab-pane fade"
                  id="pills-dayCareCenter"
                  role="tabpanel"
                  aria-labelledby="pills-dayCareCenter-tab"
                  tabIndex="0"
                >
                  <div className="hots-cards px-4 pb-lg-0 pb-13">
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="cingLangDayCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-09.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          晴朗日間照護中心
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          晴朗日間照護中心為長者提供安心的日間照護服務。我們設有溫馨的休息區，讓長者在日間舒適放鬆。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="chenSiDayCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-11.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          晨曦安養日間中心
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          晨曦安養日間中心提供長者溫馨的日間照護環境。我們擁有設備齊全的護理站，隨時提供健康護理。
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-shadow card-hover-big rounded-2 position-relative"
                      style={{ width: "312px" }}
                    >
                      <div
                        id="nuanYangDayCareCenter"
                        className="heart-icon position-absolute end-0 top-0 z-2"
                      ></div>
                      <div
                        className="hots-card-image rounded-top-2"
                        style={{
                          backgroundImage:
                            "url(https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Building/B-12.png?raw=true)",
                        }}
                      ></div>
                      <div className="px-7 pt-9 pb-11">
                        <a
                          href="intro.html"
                          className="text-secondary-70 stretched-link fs-5 mb-2"
                        >
                          暖陽日間關懷中心
                        </a>
                        <p className="mb-5">
                          <img
                            src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c686e8ab8f54332bdd0d43ab1421309a7ffb91e6/assets/images/Icon/Map.svg"
                            alt="map icon"
                          />
                          台北市中正區中正路
                        </p>
                        <p
                          className="card-para-truncate"
                          style={{ height: "72px" }}
                        >
                          暖陽日間關懷中心致力於為長者提供全方位的日間照護服務。我們設有專業護理區，確保每位長者的健康得到悉心照顧。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* index 為何選擇長照好厝邊區段 */}
        <section className="index-why pt-lg-14 pb-lg-11 py-12">
          <div className="container">
            <h4
              className="text-center text-secondary-80 fs-lg-2 mb-lg-8 mb-5"
              data-aos="flip-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
            >
              為何選擇長照好厝邊？
            </h4>
            <h5
              id="indexWhySubtitle"
              className="text-center fs-lg-4 mb-lg-13 mb-10"
              data-aos="flip-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
              data-aos-delay="100"
            >
              更便捷的搜尋，更合適的機構
            </h5>
            <div className="row row-cols-lg-3 row-cols-1 justify-content-center align-items-stretch gap-lg-0 gap-7">
              <div className="col px-lg-2" style={{ maxWidth: "368px" }}>
                <div
                  id="indexWhyCard1"
                  className="card border-0 text-center h-100"
                  data-aos="flip-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-delay="200"
                  data-aos-anchor="#indexWhySubtitle"
                >
                  <div className="card-body pt-9 pb-10 px-9">
                    <img
                      src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c05cfb3173696d6d96ec4b0ff35ae09339d41735/assets/images/Vector%20Icon/VI-03.svg"
                      className="w-100 mb-5"
                      style={{ height: "80px" }}
                      alt="Convenient reservation"
                    />
                    <h5 className="card-title mb-5 text-secondary-60">
                      便捷預約機構
                    </h5>
                    <p className="card-text text-start fs-6">
                      您還在一間一間打電話尋找長照機構嗎？長照好厝邊幫您快速搜尋合適機構、找到直接線上預約省時又方便！
                    </p>
                  </div>
                </div>
              </div>
              <div className="col px-lg-2" style={{ maxWidth: "368px" }}>
                <div
                  id="indexWhyCard2"
                  className="card border-0 text-center h-100"
                  data-aos="flip-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-delay="400"
                  data-aos-anchor="#indexWhyCard1"
                >
                  <div className="card-body pt-9 pb-10 px-9">
                    <img
                      src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c05cfb3173696d6d96ec4b0ff35ae09339d41735/assets/images/Vector%20Icon/VI-02.svg"
                      className="w-100 mb-5"
                      style={{ height: "80px" }}
                      alt="Compare various choices"
                    />
                    <h5 className="card-title mb-5 text-secondary-60">
                      多樣選擇比較
                    </h5>
                    <p className="card-text text-start fs-6">
                      長照好厝邊提供多家長照機構的詳細資訊及用戶評價，讓用戶透過比較服務內容、評價及價格，選擇最適合的機構。
                    </p>
                  </div>
                </div>
              </div>
              <div className="col px-lg-2" style={{ maxWidth: "368px" }}>
                <div
                  className="card border-0 text-center h-100"
                  data-aos="flip-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-delay="600"
                  data-aos-anchor="#indexWhyCard2"
                >
                  <div className="card-body pt-9 pb-10 px-9">
                    <img
                      src="https://raw.githubusercontent.com/Jack-Xiao-2024/Project_D01/c05cfb3173696d6d96ec4b0ff35ae09339d41735/assets/images/Vector%20Icon/VI-01.svg"
                      className="w-100 mb-5"
                      style={{ height: "80px" }}
                      alt="Instant renewing information"
                    />
                    <h5 className="card-title mb-5 text-secondary-60">
                      即時資訊更新
                    </h5>
                    <p className="card-text text-start fs-6">
                      長照好厝邊平台會即時更新各長照機構目前的可用服務和床位資訊，讓用戶隨時掌握最新情況，安排入住參訪更靈活。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* index 聽聽大家怎麼說區段 */}
        <section className="index-reviews pt-lg-14 pb-lg-11 py-12">
          <div className="container">
            <h4 className="text-center text-primary-100 fs-lg-2 mb-lg-8 mb-5">
              聽聽大家怎麼說
            </h4>
            <h6 className="text-center fs-lg-3 mb-lg-13 mb-10">
              超過
              <p
                className="d-inline-block reviews-number fs-lg-2 fs-4 px-lg-5 px-2 text-secondary-40"
                data-aos="fade-down"
              >
                5000+
              </p>
              使用長照好厝邊
            </h6>
          </div>
          {/* Swiper 用戶評價卡片 */}
          <div className="reviewSwiper-container">
            <div className="swiper indexReviewSwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        便捷預約機構
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        長照預約服務網讓我能輕鬆找到適合的長照機構，省去了繁瑣的現場詢問。網站操作簡單，預約流程流暢，非常方便！
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-04.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">郭先生</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        資訊透明
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        使用這個預約網後，我發現各機構的服務詳情和評價都很清楚，讓我能夠仔細比較，選擇最適合的長照服務，感覺很安心。
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-05.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">李小姐</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        即時更新
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        預約服務網的即時更新功能非常好，讓我隨時能夠掌握各機構的最新服務和床位情況。這樣的靈活性讓我感到很放心！
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-03.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">王先生</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        貼心解答 安心選擇
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        客服非常耐心，回答了我很多疑問，最終選擇的長照機構也非常滿意，感謝這個平台！
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-01.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">張先生</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        快速確認
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        整個預約過程很順利，選擇多樣,，約後很快就收到確認通知，家人都覺得很安心。
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-02.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">林小姐</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card reviews-card d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-secondary-70 mb-1 mx-2">
                        找到理想護理之家
                      </h5>
                      <div className="stars-icon mb-7"></div>
                      <p className="card-text text-start fs-6">
                        這個預約網讓我找到了一家非常適合的護理之家，服務周到，網站使用也非常方便。
                      </p>
                    </div>
                    <div className="users d-flex justify-content-end align-items-center mt-auto">
                      <img
                        className="d-block me-2"
                        src="https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/User/Ellipse-07.png?raw=true"
                        style={{ width: "44px", height: "44px" }}
                        alt="user picture"
                      />
                      <p className="card-text text-white-100 me-4">黃太太</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Swiper next、prev、pagination 底下頁面控制按鈕 */}
          <div className="container d-none d-lg-block">
            <div
              className="d-flex justify-content-center gap-6"
              style={{ width: "100%", height: "30px" }}
            >
              <div className="swiper-prev ms-auto"></div>
              <div className="swiper-pagination mx-0 d-flex justify-content-center align-items-center gap-6"></div>
              <div className="swiper-next me-auto"></div>
            </div>
          </div>
        </section>
        {/* index 常見問題 Ｑ＆Ａ 區段 */}  
        <section className="index-faq bg-primary-30" id="faq">
          <div className="container">
            <h4 className="text-center text-secondary-80 fs-lg-2 mb-lg-9 mb-10">
              常見問題 Ｑ＆Ａ
            </h4>
            <div
              className="faq-content accordion d-flex flex-column gap-2"
              id="accordionIndexFaq"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-lg-4 fs-7"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#IndexFaq-collapseOne"
                    aria-expanded="true"
                    aria-controls="IndexFaq-collapseOne"
                  >
                    1. 如何註冊預約長照服務網的帳號？
                  </button>
                </h2>
                <div
                  id="IndexFaq-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <p className="accordion-body fs-lg-5 bg-white">
                    訪問網站首頁，點擊「註冊｜登入」按鈕，填寫必要的個人資訊，包括姓名、電話和電子信箱，然後按照提示完成註冊程序即可。
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-lg-4 fs-7"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#IndexFaq-collapseTwo"
                    aria-expanded="false"
                    aria-controls="IndexFaq-collapseTwo"
                  >
                    2. 如何查看點愛心收藏的長照機構？
                  </button>
                </h2>
                <div
                  id="IndexFaq-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <p className="accordion-body fs-lg-5 bg-white">
                    您可以在點愛心收藏喜歡的長照機構後，進入會員中心頁面，選擇「收藏機構」，查看收藏的長照機構，若想取消也可以在此取消收藏。
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-lg-4 fs-7"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#IndexFaq-collapseThree"
                    aria-expanded="false"
                    aria-controls="IndexFaq-collapseThree"
                  >
                    3. 如何找到適合的長照機構？
                  </button>
                </h2>
                <div
                  id="IndexFaq-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <p className="accordion-body fs-lg-5 bg-white">
                    您可以利用網站的搜尋功能，根據地區、醫療或照護需求篩選長照機構，查看詳細資訊和用戶評價，以便做出最佳選擇。
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-lg-4 fs-7"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#IndexFaq-collapseFour"
                    aria-expanded="false"
                    aria-controls="IndexFaq-collapseFour"
                  >
                    4. 預約參訪機構需要支付費用嗎？
                  </button>
                </h2>
                <div
                  id="IndexFaq-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <p className="accordion-body fs-lg-5 bg-white">
                    預約參訪不會收取預約費用，但具體長照機構的各項服務收費標準可能會有所不同，建議在參訪前確認清楚。
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-lg-4 fs-7"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#IndexFaq-collapseFive"
                    aria-expanded="false"
                    aria-controls="IndexFaq-collapseFive"
                  >
                    5. 如果遇到技術問題，如何聯繫客服？
                  </button>
                </h2>
                <div
                  id="IndexFaq-collapseFive"
                  className="accordion-collapse collapse"
                >
                  <p className="accordion-body fs-lg-5 bg-white">
                    在網站最底下有提供客服社群聯繫方式。您可以通過這些方式聯繫客服，並描述您遇到的問題，客服將協助您解決。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
