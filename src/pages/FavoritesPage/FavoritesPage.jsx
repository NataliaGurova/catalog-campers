import Favorites from "../../components/Favorites/Favorites";
import css from "./FavoritesPage.module.css"

const FavoritePage = () => {
  
  return (
    <main className={css.container}>
      <Favorites/>
    </main>
  );
}

export default FavoritePage;