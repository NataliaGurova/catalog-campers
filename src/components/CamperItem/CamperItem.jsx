import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./CamperItem.module.css"
import CamperModal from "../CamperModal/CamperModal";
import Icon from "../Icon/Icon";
import { FaStar } from "react-icons/fa";


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
          <h2 className={css.name}>{camper.name}</h2>
          <div className={css.price}>
          <h2>{formatPrice(camper.price)}</h2>
            <button className={css.btnHeart}>
              <span>
                <Icon id="heart" width="24" height="24" className={css.iconHeart}/>
              </span>
          
          </button>
          </div>
        </div>
        <div>
          <div className={css.rating}>
            <p>
              <FaStar color="gold" />
              {camper.rating} ({camper.reviews.length} Reviews)</p>
            <p className="">
              <Icon id="map" width="16" height="16" className={css.iconF}/>
              {camper.location}
            </p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div>
       <ul className={css.iconList}>
            {camper.adults !== 0 && (
              <li className={css.iconItem}>
                <Icon id="adults" width="20" height="20" className={css.iconS}/>
                {camper.adults} adults
              </li>
            )}
            {camper.transmission && (
              <li className={css.iconItem}>
                <Icon id="automatic" width="20" height="20" className={css.iconF}/>
                {camper.transmission}
              </li>
            )}
                {camper.engine && (
                  <li className={css.iconItem}>
                    <Icon id="Petrol" width="20" height="20" className={css.iconS}/>
                    Petrol
                  </li>
                )}
                {camper.details.kitchen !== 0 && (
                  <li className={css.iconItem}>
                    <Icon id="kitchen" width="20" height="20" className={css.iconF}/>
                    Kitchen
                  </li>
                )}
            {camper.details.airConditioner !== 0 && (
              <li className={css.iconItem}>
                <Icon id="AC" width="20" height="20" fillColor="white" className={css.icon}/>
                AC
              </li>
            )}
            {camper.details.beds !== 0 && (
              <li className={css.iconItem}>
                <Icon id="bed" width="20" height="20" className={css.iconF}/>
                {camper.details.beds} beds
              </li>
            )}
            </ul>

        </div>

        <button 
          onClick={handleOpenModal}
          className={css.btnShowMore}
        >Show more</button>

        {showModal && (
  <ModalWindow onCloseModal={handleCloseModal} modalIsOpen={showModal}>
    <CamperModal camper={camper} />
  </ModalWindow>
)}
      </div>
    </div>
  )
}

export default CamperItem;