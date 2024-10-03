import css from "./FeaturesReviews.module.css"
import Icon from "../Icon/Icon.jsx";
import BookingForm from "../BookingForm/BookingForm";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features.jsx";
import { useState } from "react";
import Details from "../Details/Details";

const FeaturesReviews = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

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

            <Details camper={camper} />
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

