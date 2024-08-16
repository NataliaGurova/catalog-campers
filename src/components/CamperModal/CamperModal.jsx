
import css from "./CamperModal.module.css"
import FeaturesReviews from "../FeaturesReviews/FeaturesReiews";
import Form from "../BookingForm/BookingForm";
import { FaStar } from "react-icons/fa";
import Icon from "../Icon/Icon";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


const CamperModal = ({ camper }) => {
    const formatPrice = (price) => {
  return `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;
}

  return (
<PerfectScrollbar className={css.scrollContainer}>
    <div className={css.container}>
    
      <h3>{camper.name}</h3>

      
      <div>
          <div className={css.rating}>
          <p>
              <FaStar color="gold" />
              {camper.rating} ({camper.reviews.length} Reviews)</p>
          <p >
              <Icon id="map" width="16" height="16" className={css.icon}/>
            {camper.location}
          </p>
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
      <div className={css.addContainer}>
        <FeaturesReviews camper={camper} />
        <Form />
        </div>
      </div>
        </PerfectScrollbar>
  );
};

export default CamperModal;