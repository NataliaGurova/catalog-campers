
import css from "./CamperModal.module.css"
import FeaturesReviews from "../FeaturesReviews/FeaturesReiews";
import BookingForm from "../BookingForm/BookingForm";
import { FaStar } from "react-icons/fa";
import Icon from "../Icon/Icon";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ModalWindow from "../ModalWindow/ModalWindow";



const CamperModal = ({ camper, onCloseModal, modalIsOpen }) => {
  const formatPrice = (price) => `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;

  return (
    <ModalWindow modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <PerfectScrollbar className={css.scrollContainer}>
        <section className={css.container}>
          <div>
          <h2>{camper.name}</h2>
          <button type="button" onClick={onCloseModal} className={css.btnClose}>
            <Icon id="xxx" width="32" height="32" className={css.btnX} />
          </button>
          </div>
          <div>
            <div className={css.rating}>
            <p>
              <FaStar color="gold" className={css.star} />
              <span className={css.ratingSpan}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
             </p>
            <div className={css.map}>
            <p >
              <Icon id="map" width="16" height="16" className={css.iconMap}/>
              {camper.location}
            </p>
            </div>
          </div>
          </div>
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
        </section>
      </PerfectScrollbar>
    </ModalWindow>
  );
};

export default CamperModal;