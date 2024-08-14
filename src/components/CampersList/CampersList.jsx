// import { NavLink } from "react-router-dom";
import campers from "../../campers.json"
import CamperItem from "../CamperItem/CamperItem";

const CampersList = ({campers}) => {
 
  return (    
    <ul >
   
      {campers.map((camper) => (
        <li key={camper._id}>
          {/* <NavLink to={`/catalog/${camper._id}`} state={location}> */}


            <CamperItem camper={camper} />
{/* 
            <div>
                  <div>
                    <img
                      src={`${camper.gallery[0]}`}
                      alt={camper.name}
                      // width={300}
                      // height={120}
                    />
                  </div>
                  <div className={css.listText}>
                    <b className={css.title}>
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </b>
                    <p className={css.rating}>
                      User Score: {Math.round(movie.vote_average * 10)}%
                    </p>
                  </div>
                </div> */}
          {/* </NavLink> */}
        </li>
      ))}
    </ul>
  ); 
}

export default CampersList;