
import { useState } from "react";
import css from "./FeaturesReviews.module.css"

const FeaturesReviews = ({ camper }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <div className={css.tabs}>
        <button onClick={() => setActiveTab("features")}>Features</button>
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
      </div>

      {/* <div className={css.tabContent}>
        {activeTab === "features" && (
          <ul>
            {camper.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )} */}
      <div className={css.tabContent}>
        {activeTab === "features" && (
          <ul>
            {Object.entries(camper.details).map(([feature, value]) => (
              <li key={feature}>
                {feature}: {typeof value === "number" ? (value ? "Yes" : "No") : value}
              </li>
            ))}
          </ul>
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