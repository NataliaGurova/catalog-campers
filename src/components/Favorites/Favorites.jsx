import { useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";

const Favorites = () => {
  const favorites = useSelector((state) => state.adverts.item);
  if (!Array.isArray(favorites)) {
    return <p>Invalid favorites data</p>;
  }


  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorite campers selected</p>
      ) : (
        <ul>
          {favorites.map((camper) => (
            <li key={camper._id}>
              <CamperItem camper={camper} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;