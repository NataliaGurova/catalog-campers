import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CampersCatalogPage.module.css"
// import campers from "../../campers.json"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdverts, selectError, selectLoading } from "../../redux/selectors";

const CampersCatalogPage = () => {
  const data = useSelector(selectAdverts)
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)
  
const [location, setLocation] = useState(""); // State for location input
  const [filteredCampers, setFilteredCampers] = useState(data);

   const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);

    // Filter campers based on the location input
    const filtered = data.filter(camper =>
      camper.location.toLowerCase().includes(newLocation.toLowerCase())
    );
    setFilteredCampers(filtered);
  };

  return (
    <main className={css.container}>

      <Filters onChange={handleLocationChange} location={location} />
      <CampersList />
      {isLoading && <p>Loading...</p>}
      {error&& <p>Error</p>}
      
      {/* <CampersList campers={filteredCampers}/> */}
      {/* {movies.length > 0 && <MovieList movies={movies} /> } */}

    </main>
  );
}

export default CampersCatalogPage;
