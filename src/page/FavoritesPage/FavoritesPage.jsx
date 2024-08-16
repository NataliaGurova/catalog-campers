import Favorites from "../../components/Favorites/Favorites";
import css from "./FavoritesPage.module.css"

const FavoritePage = () => {
  
  return (
    <main className={css.container}>
      <h1>FavoritePage</h1>
      <Favorites/>
    </main>
  );
}

export default FavoritePage;