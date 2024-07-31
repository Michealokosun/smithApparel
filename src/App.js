import NavigationBar from "./routes/Navigation/navigation.component";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticationpage from "./routes/Authentication/Authentication.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

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
        element: <Shop />,
      },
      {
        path: "/Sign-in",
        element: <Authenticationpage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
