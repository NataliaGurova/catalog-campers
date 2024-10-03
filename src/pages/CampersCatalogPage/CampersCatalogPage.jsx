import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CampersCatalogPage.module.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/selectors";

const CampersCatalogPage = () => {
  const data = useSelector(selectAdverts)
  
  const [location, setLocation] = useState(""); 
  const [filteredCampers, setFilteredCampers] = useState(data);

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);

    const filtered = data.filter(camper =>
      camper.location.toLowerCase().includes(newLocation.toLowerCase())
    );
    setFilteredCampers(filtered);
    console.log(filteredCampers);
    
  };

  return (
    <main className={css.container}>
      <Filters onChange={handleLocationChange} location={location} />
      <CampersList data={filteredCampers} />
    </main>
  );
}

export default CampersCatalogPage;


