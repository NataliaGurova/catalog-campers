
import css from "./CamperModal.module.css"
import FeaturesReviews from "../FeaturesReviews/FeaturesReiews";
import Form from "../Form/Form";
// import Icon from "../Icon/Icon";
// import sprite from "../../assets/iconSprite.svg";

const CamperModal = ({ camper }) => {
    const formatPrice = (price) => {
  return `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;
}

  return (
    <div className={css.container}>
    
      <h3>{camper.name}</h3>

      
      <div>
          <div className={css.rating}>
          <p>
              {/* <FaStar color="gold" /> */}
              {camper.rating} ({camper.reviews.length} Reviews)</p>
          <a href="">
            <svg width={16} height={16} className={css.icon}>
              <use href="../../assets/iconSprite.svg#icon-map" ></use>
            </svg>

              {/* <FaStar color="gold" /> */}
            {camper.location}
          </a>
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
        />        
      </div>

      </div>
      <p className={css.description}>{camper.description}</p>
      <FeaturesReviews camper={camper} />
      <Form />
      </div>
  );
};

export default CamperModal;