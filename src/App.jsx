
import { Route, Routes } from "react-router-dom";
// import HomePage from "./page/HomePage/HomePage";

import SharedLayout from "./components/SharedLayout/SharedLayout";
// import CampersCatalogPage from "./page/CampersCatalogPage/CampersCatalogPage";
// import FavoritesPage from "./page/FavoritesPage/FavoritesPage";
import Navigation from "./components/Navigation/Navigation";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchAdverts } from "./redux/operations";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const CampersCatalogPage = lazy(() => import('./pages/CampersCatalogPage/CampersCatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};

export default App;
