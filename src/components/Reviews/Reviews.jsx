import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css"

const Reviews = ({ review }) => {
  const firstLetter = review.reviewer_name.charAt(0).toUpperCase();

  return (
    <div className={css.container}>
      <div className={css.review}>
        <div className={css.circle}>{firstLetter}</div>
        <div className={css.reviewerInfo}>
          <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
          <div className={css.stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < review.reviewer_rating ? "gold" : "#e4e5e9"} // Жовті зірочки для рейтингу, решта сірі
              />
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </div>
  );
};

export default Reviews;