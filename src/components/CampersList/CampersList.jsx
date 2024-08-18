
import { useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";
import { selectAdverts } from "../../redux/selectors";
import { useState } from "react";
import css from "./CampersList.module.css"


const CampersList = () => {
  const data = useSelector(selectAdverts);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className={css.container}>
      <ul>
        {data.slice(0, visibleCount).map((camper) => (
          <li key={camper._id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>

      {visibleCount < data.length && (
        <button onClick={handleLoadMore} className={css.btnLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;