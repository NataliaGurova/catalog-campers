import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CampersCatalogPage.module.css"
import campers from "../../campers.json"
import { useState } from "react";

const CampersCatalogPage = () => {
  
const [location, setLocation] = useState(""); // State for location input
  const [filteredCampers, setFilteredCampers] = useState(campers);

   const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);

    // Filter campers based on the location input
    const filtered = campers.filter(camper =>
      camper.location.toLowerCase().includes(newLocation.toLowerCase())
    );
    setFilteredCampers(filtered);
  };

  return (
    <main className={css.container}>

      <Filters onChange={handleLocationChange} location={location}/>
      <CampersList campers={filteredCampers}/>
      {/* {movies.length > 0 && <MovieList movies={movies} /> } */}

    </main>
  );
}

export default CampersCatalogPage;
