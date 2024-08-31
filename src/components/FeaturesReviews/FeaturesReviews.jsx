import css from "./FeaturesReviews.module.css"
import Icon from "../Icon/Icon.jsx";
import BookingForm from "../BookingForm/BookingForm";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features.jsx";
import { useState } from "react";

const FeaturesReviews = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");
//   if (activeTab === "features") {
//     document.body.classList.add(css.activeLine);
//   } else { 
    
// }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className={css.tabs}>
        <button
          className={`${css.btnFeature} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.btnReviews} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.container}>
        <div className={css.tabContent}>
          {activeTab === "features" && (
            <div>
              <ul className={css.iconList}>
                {camper?.adults !== 0 && (
                  <li className={css.iconItem}>
                    <Icon id="adults" width="20" height="20" className={css.iconS} aria-label="adults icon"/>
                    {camper.adults} adults
                  </li>
                )}
                {camper?.transmission && (
                  <li className={css.iconItem}>
                    <Icon id="automatic" width="20" height="20" className={css.iconF} aria-label="transmission icon"/>
                    {capitalizeFirstLetter(camper.transmission)}
                  </li>
                )}
                {camper?.details?.airConditioner && (
                  <li className={css.iconItem}>
                    <Icon id="AC" width="20" height="20" className={css.icon} aria-label="AC icon"/>
                    {camper.details.airConditioner} AC
                  </li>
                )}
                {/* Інші властивості також можна перевіряти таким чином */}
                {camper?.details?.kitchen && (
                  <li className={css.iconItem}>
                    <Icon id="kitchen" width="20" height="20" className={css.iconF} aria-label="kitchen icon"/>
                    kitchen
                  </li>
                )}
            {camper?.details?.beds !== 0 && (
              <li className={css.iconItem}>
                <Icon id="bed" width="20" height="20" className={css.iconF}/>
                {camper.details.beds} beds
              </li>
            )}
            {camper?.details?.airConditioner !== 0 && (
              <li className={css.iconItem}>
                <Icon id="Air" width="20" height="20" className={css.iconF}/>
                {camper.details.airConditioner} Air conditioner
              </li>
            )}
            {camper?.details?.CD !== 0 && (
              <li className={css.iconItem}>
                <Icon id="cd" width="20" height="20" className={css.iconF}/>
                {camper.details.CD} CD
              </li>
            )}
            {camper?.details?.radio !== 0 && (
              <li className={css.iconItem}>
                <Icon id="radio" width="20" height="20" className={css.iconF}/>
                  Radio
              </li>
            )}
            {camper?.details?.hob !== 0 && (
              <li className={css.iconItem}>
                <Icon id="hob" width="20" height="20" className={css.icon}/>
                {camper.details.hob} hob
              </li>
            )}
            {camper?.details?.toilet !== 0 && (
              <li className={css.iconItem}>
                <Icon id="toilet" width="20" height="20" className={css.iconS}/>
                Toilet
              </li>
            )}
            {camper?.details?.shower !== 0 && (
              <li className={css.iconItem}>
                <Icon id="shower" width="20" height="20" className={css.iconF}/>
                  Shower
              </li>
            )}
            {camper?.details?.freezer !== 0 && (
              <li className={css.iconItem}>
                <Icon id="freezer" width="20" height="20" className={css.iconF}/>
                Freezer
              </li>
            )}
            {camper?.details?.gas !== 0 && (
              <li className={css.iconItem}>
                <Icon id="gas" width="20" height="20" className={css.iconS}/>
                {camper.details.gas} Gas
              </li>
            )}
            {camper?.details?.water !== 0 && (
              <li className={css.iconItem}>
                <Icon id="water" width="20" height="20" className={css.iconF}/>
                {camper.details.water} Water
              </li>
            )}
            {camper?.details?.microwave !== 0 && (
              <li className={css.iconItem}>
                <Icon id="microwave" width="20" height="20" className={css.iconF}/>
                Microwave
              </li>
            )}
            </ul>
            <Features camper={camper} />
  
            </div>
        )}

        {activeTab === "reviews" && (
          <ul>
            {camper.reviews.map((review, index) => (
              <li key={index}>
                <Reviews review={review} />
              </li>
            ))}
          </ul>
        )}
        </div>
      <BookingForm/>
      </div>
    </div>
  );
};

export default FeaturesReviews;

