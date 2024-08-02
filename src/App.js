import NavigationBar from "./routes/Navigation/navigation.component";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticationpage from "./routes/Authentication/Authentication.component";
import { Shoppage } from "./routes/shop/shop.page";
import CheckoutPage from "./routes/checkoutpage/checloutpahe";

const route = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shoppage />,
      },
      {
        path: "/Sign-in",
        element: <Authenticationpage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
