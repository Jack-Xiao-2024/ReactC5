import { createHashRouter } from "react-router";
import FrontLayout from "../pages/FrontLayout";
import Home from "../pages/Home";
import AdminLayout from "../pages/AdminLayout";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";
import News from "../pages/News";
import Other from "../pages/Other";
import Cart from "../pages/Cart";
import ResultsLayout from "../pages/ResultsLayout";
import ResultsSearch from "../pages/ResultsSearch";
import CheckoutSuccess from "../pages/checkoutSuccess";
import Checkout from "../pages/Checkout";
import AccountIndex from "../pages/AccountIndex";
import AccountLayout from "../pages/AccountLayout";
import AccountProfile from "../pages/AccountProfile";
import AccountPurchase from "../pages/AccountPurchase";

const router = createHashRouter([
  {
    // 前台路由
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "account",
        element: <AccountIndex />,
      },
      {
        path: "account/inner",
        element: <AccountLayout />,
        children: [
          {
            path: "profile",
            element: <AccountProfile />
          },
          {
            path: "purchase",
            element: <AccountPurchase />
          }
        ]
      },
      {
        path: "",
        element: <ResultsLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          // {
          //   path: "results/search",
          //   element: <Results />,
          // },
          {
            path: "results/search",
            element: <ResultsSearch />,
          },
        ],
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "other",
        element: <Other />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
      },
      {
        path:'checkoutSuccess',
        element:<CheckoutSuccess/>
      }
    ],
  },
  {
    // 後台路由
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // 尚未設置後台霧遊
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
