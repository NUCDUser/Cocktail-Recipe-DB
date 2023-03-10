import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CocktailDetail from "./components/CocktailDetail";
import Category from "./pages/filters/Category";
import Glass from "./pages/filters/Glass";
import FirstLetter from "./pages/filters/FirstLetter";
import Alcoholic from "./pages/filters/Alcoholic";
import Ingredient from "./pages/filters/Ingredient";
import Search from "./pages/Search";
import { Provider } from "react-redux";
import store from "./utils/store";
import Favorites from "./pages/Favorites";

const AppLayout = () => (
  <Provider store={store}>
    <Header />
    <Outlet />
    <Footer />
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cocktail/:cocktailID",
        element: <CocktailDetail />,
      },
      {
        path: "/category/:categoryQuery",
        element: <Category />,
      },
      {
        path: "/glass/:glassQuery",
        element: <Glass />,
      },
      {
        path: "/ingredient/:ingredientQuery",
        element: <Ingredient />,
      },
      {
        path: "/alcoholic/:alcoholicQuery",
        element: <Alcoholic />,
      },
      {
        path: "/alphabet/:firstLetterQuery",
        element: <FirstLetter />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
