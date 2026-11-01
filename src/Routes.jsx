import App from "./App";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Homepage from "./components/homepage/Homepage";
import Products from "./components/products/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />
      }
    ],
  },
]


export default routes
