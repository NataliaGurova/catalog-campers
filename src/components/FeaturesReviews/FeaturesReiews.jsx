
import { useState } from "react";
import css from "./FeaturesReviews.module.css"
import Icon from "../Icon/Icon.jsx";

const FeaturesReviews = ({ camper }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <div className={css.tabs}>
        <button onClick={() => setActiveTab("features")}>Features</button>
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
      </div>

      <div className={css.tabContent}>
        {activeTab === "features" && (
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
                {camper.transmission} Automatic
              </li>
            )}
            {camper.details.airConditioner !== 0 && (
              <li className={css.iconItem}>
                <Icon id="AC" width="20" height="20" fillColor="white" className={css.icon}/>
                {camper.details.airConditioner} AC
              </li>
            )}
            {camper.engine && (
              <li className={css.iconItem}>
                <Icon id="Petrol" width="20" height="20" className={css.iconS}/>
                {camper.engine} Petrol
              </li>
            )}
            {camper.details.kitchen !== 0 && (
              <li className={css.iconItem}>
                <Icon id="kitchen" width="20" height="20" className={css.iconF}/>
                {camper.details.kitchen} kitchen
              </li>
            )}
            {camper.details.beds !== 0 && (
              <li className={css.iconItem}>
                <Icon id="bed" width="20" height="20" className={css.iconF}/>
                {camper.details.beds} beds
              </li>
            )}
            {camper.details.airConditioner !== 0 && (
              <li className={css.iconItem}>
                <Icon id="Air" width="20" height="20" className={css.iconF}/>
                {camper.details.airConditioner} Air conditioner
              </li>
            )}
            {camper.details.CD !== 0 && (
              <li className={css.iconItem}>
                <Icon id="cd" width="20" height="20" className={css.iconF}/>
                {camper.details.CD} CD
              </li>
            )}
            {camper.details.radio !== 0 && (
              <li className={css.iconItem}>
                <Icon id="radio" width="20" height="20" className={css.iconF}/>
                {camper.details.radio} radio
              </li>
            )}
            {camper.details.hob !== 0 && (
              <li className={css.iconItem}>
                <Icon id="hob" width="20" height="20" className={css.icon}/>
                {camper.details.hob} hob
              </li>
            )}
            {camper.details.toilet !== 0 && (
              <li className={css.iconItem}>
                <Icon id="toilet" width="20" height="20" className={css.iconS}/>
                {camper.details.toilet} Toilet
              </li>
            )}
            {camper.details.shower !== 0 && (
              <li className={css.iconItem}>
                <Icon id="shower" width="20" height="20" className={css.iconF}/>
                {camper.details.shower} Shower
              </li>
            )}
            {camper.details.freezer !== 0 && (
              <li className={css.iconItem}>
                <Icon id="freezer" width="20" height="20" className={css.iconF}/>
                {camper.details.freezer} Freezer
              </li>
            )}
            {camper.details.gas !== 0 && (
              <li className={css.iconItem}>
                <Icon id="gas" width="20" height="20" className={css.iconS}/>
                {camper.details.gas} Gas
              </li>
            )}
            {camper.details.water !== 0 && (
              <li className={css.iconItem}>
                <Icon id="water" width="20" height="20" className={css.iconF}/>
                {camper.details.water} Water
              </li>
            )}
            {camper.details.microwave !== 0 && (
              <li className={css.iconItem}>
                <Icon id="microwave" width="20" height="20" className={css.iconF}/>
                {camper.details.microwave} Microwave
              </li>
            )}
            </ul>
            <div className={css.detailsContainer}>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Form</span>
          <span className={css.detailValue}>{camper.details.form}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Length</span>
          <span className={css.detailValue}>{camper.details.length}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Width</span>
          <span className={css.detailValue}>{camper.details.width}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Height</span>
          <span className={css.detailValue}>{camper.details.height}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Tank Capacity</span>
          <span className={css.detailValue}>{camper.details.tank}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Consumption</span>
          <span className={css.detailValue}>{camper.details.consumption}</span>
        </li>
      </ul>
    </div>
            </div>
        )}

        {activeTab === "reviews" && (
          <ul>
            {camper.reviews.map((review, index) => (
              <li key={index}>
                <p><strong>{review.author}</strong>: {review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeaturesReviews;

