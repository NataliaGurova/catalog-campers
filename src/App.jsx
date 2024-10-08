
import { Route, Routes, useLocation } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchAdverts } from "./redux/operations";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const CampersCatalogPage = lazy(() => import('./pages/CampersCatalogPage/CampersCatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));



const App = () => {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);


  return (
    <div>
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
