import css from "./CamperModal.module.css";
import { FaStar } from "react-icons/fa";
import Icon from "../Icon/Icon";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ModalWindow from "../ModalWindow/ModalWindow";
import FeaturesReviews from "../FeaturesReviews/FeaturesReviews";

const CamperModal = ({ camper, onCloseModal, modalIsOpen }) => {
  const formatPrice = (price) => `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;

  return (
    <ModalWindow modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
        <section className={css.container}>
          
            <h2>{camper.name}</h2>
            
          
          <div className={css.ratingContainer}>
            <div className={css.rating}>
              <p>
                <FaStar color="gold" className={css.star} />
                <span className={css.ratingSpan}>
                  {camper.rating} ({camper.reviews.length} Reviews)
                </span>
              </p>
              <div className={css.map}>
                <p>
                  <Icon id="map" width="16" height="16" className={css.iconMap} />
                  {camper.location}
                </p>
              </div>
            </div>
          </div>

      <PerfectScrollbar className={css.scrollContainer}>
      <div className={css.box}>
          <h2 className={css.price}>{formatPrice(camper.price)}</h2>
          <div className={css.containerImg}>
            {camper.gallery.slice(0, 3).map((image, index) => (
              <div key={index} className={css.camperImg}>
                <img src={image} alt={camper.name} className={index === 2 ? css.imgCar3 : css.imgCar} />
              </div>
            ))}
          </div>
          <p className={css.description}>{camper.description}</p>
          <div className={css.addContainer}>
            <FeaturesReviews camper={camper} />
            </div>
      </div>
      </PerfectScrollbar>
        </section>
    </ModalWindow>
  );
};

export default CamperModal;