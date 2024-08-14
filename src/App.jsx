
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import NotFound from "./page/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import CampersCatalogPage from "./page/CampersCatalogPage/CampersCatalogPage";
import FavoritesPage from "./page/FavoritesPage/FavoritesPage";
import Navigation from "./components/Navigation/Navigation";
import CamperModal from "./components/CamperModal/CamperModal";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";



const App = () => {
  return (
    <div>
    <Navigation />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
            <Route path='/catalog/:camperId' element={<CamperModal />} >
				      <Route path='features' element={<Features />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};

export default App;
