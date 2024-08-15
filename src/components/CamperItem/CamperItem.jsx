import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./CamperItem.module.css"
import CamperModal from "../CamperModal/CamperModal";
import Icon from "../Icon/Icon";

const CamperItem = ({ camper }) => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const formatPrice = (price) => {
  return `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;
}
  return (
    <div className={css.container}>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[0]}`} alt={camper.name}
          className={css.imgCar}
        />        
      </div>
      <div>
        <div className={css.title}>
          <h2>{camper.name}</h2>
          <div className={css.price}>
          <h2>{formatPrice(camper.price)}</h2>
          <button>
          ♥
          </button>
          </div>
        </div>
        <div>
          <div className={css.rating}>
            <p>
              {/* <FaStar color="gold" /> */}
              {camper.rating} ({camper.reviews.length} Reviews)</p>
            <p className="">
              {/* <svg width={16} height={16} className={css.icon}>
                <use href="../../assets/icons.svg#icon-phone" ></use>
              </svg> */}
              <Icon id="map" width="16" height="16" fillColor="white" className={css.icon}/>

              {/* <FaStar color="gold" /> */}
              {camper.location}
            </p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>

        <button 
        onClick={handleOpenModal}
        >Show more</button>

        {showModal && (
  <ModalWindow onCloseModal={handleCloseModal} modalIsOpen={showModal}>
    <CamperModal camper={camper} />
  </ModalWindow>
)}
      
  {/* {showModal && (
        <ModalWindow onCloseModal={handleCloseModal} modalIsOpen={handleOpenModal}>
            <CamperModal camper={camper} />
        </ModalWindow>
      )} */}
      </div>
    </div>
  )
}

export default CamperItem;