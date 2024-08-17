
import { Route, Routes } from "react-router-dom";
// import HomePage from "./page/HomePage/HomePage";

import SharedLayout from "./components/SharedLayout/SharedLayout";
// import CampersCatalogPage from "./page/CampersCatalogPage/CampersCatalogPage";
// import FavoritesPage from "./page/FavoritesPage/FavoritesPage";
import Navigation from "./components/Navigation/Navigation";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchAdverts } from "./redux/operations";

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));
const CampersCatalogPage = lazy(() => import('./page/CampersCatalogPage/CampersCatalogPage'));
const FavoritesPage = lazy(() => import('./page/FavoritesPage/FavoritesPage'));
// const Navigation = lazy(() => import("./components/Navigation/Navigation"));



const App = () => {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);


  return (
    <div>
    <Navigation />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};

export default App;
