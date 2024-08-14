import { Link, Outlet } from "react-router-dom";
import css from "./CamperModal.module.css"


const CamperModal = ({ camper }) => {
    const formatPrice = (price) => {
  return `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;
}

  return (
    <div>
    
    <h3>{camper.name}</h3>
      <div>
          <div className={css.rating}>
            <p>
              {/* <FaStar color="gold" /> */}
              {camper.rating} ({camper.reviews.length} Reviews)</p>
            <p>
              {/* <FaStar color="gold" /> */}
              {camper.location}</p>
          </div>
      </div>
      <h3>{formatPrice(camper.price)}</h3>
        <div className={css.containerImg}>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[0]}`} alt={camper.name}
          className={css.imgCar}
        />        
      </div>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[1]}`} alt={camper.name}
          className={css.imgCar}
        />        
      </div>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[2]}`} alt={camper.name}
          className={css.imgCar3}
          minWidth={290}
          minHeight={310}
        />        
      </div>

      </div>
      <p className={css.description}>{camper.description}</p>

            <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
      </div>
  );
};

export default CamperModal;