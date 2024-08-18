import Icon from '../Icon/Icon';
import css from './Filters.module.css';

import { useId, useState } from 'react';


const Filters = () => {
  const [location, setLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const localId = useId();

  // Handle location input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Toggle equipment selection (checkbox logic)
  const handleEquipmentToggle = (id) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle camper type selection (radio button logic)
  const handleTypeSelect = (id) => {
    setSelectedType(id);
  };

  return (
    <section className={css.container}>
      {/* Location Input */}
<form className={css.locationWrapper}>
  <label className={css.locationLabel}>
    Location
    <div className={css.inputWithIcon}>
      <Icon id="map" width="18" height="20" className={css.iconMap} />
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="City"
        className={css.locationInput}
      />
    </div>
  </label>
</form>

      <p>Filters</p>

      {/* Vehicle Equipment (Checkbox Buttons) */}
      <h3 className={css.sectionHeading}>Vehicle equipment</h3>
      <div className={css.buttonGroup}>
        <label className={`${css.button} ${css.acButton} ${selectedEquipment.includes('AC') ? css.active : ''}`}>
          <input
            type="checkbox"
            checked={selectedEquipment.includes('AC')}
            onChange={() => handleEquipmentToggle('AC')}
          />
          <Icon id="AC" width="32" height="32" className={css.iconS} />
          AC
        </label>
        <label className={`${css.button} ${css.automaticButton} ${selectedEquipment.includes('automatic') ? css.active : ''}`}>
          <input
            type="checkbox"
            checked={selectedEquipment.includes('automatic')}
            onChange={() => handleEquipmentToggle('automatic')}
          />
          <Icon id="automatic" width="32" height="32" className={css.iconF} />
          Automatic
        </label>
        <label className={`${css.button} ${css.kitchenButton} ${selectedEquipment.includes('kitchen') ? css.active : ''}`}>
          <input
            type="checkbox"
            checked={selectedEquipment.includes('kitchen')}
            onChange={() => handleEquipmentToggle('kitchen')}
          />
          <Icon id="kitchen" width="32" height="32" className={css.iconF} />
          Kitchen
        </label>
        <label className={`${css.button} ${css.tvButton} ${selectedEquipment.includes('TV') ? css.active : ''}`}>
          <input
            type="checkbox"
            checked={selectedEquipment.includes('TV')}
            onChange={() => handleEquipmentToggle('TV')}
          />
          <Icon id="TV" width="32" height="32" className={css.iconF} />
          TV
        </label>
        <label className={`${css.button} ${css.showerButton} ${selectedEquipment.includes('shower') ? css.active : ''}`}>
          <input
            type="checkbox"
            checked={selectedEquipment.includes('shower')}
            onChange={() => handleEquipmentToggle('shower')}
          />
          <Icon id="shower" width="32" height="32" className={css.iconF} />
          Shower/WC
        </label>
      </div>

      {/* Vehicle Type (Radio Buttons) */}
      <h3 className={css.sectionHeading}>Vehicle type</h3>
      <div className={css.buttonGroup}>
        <label className={`${css.button} ${css.camper1Button} ${selectedType === 'van' ? css.active : ''}`}>
          <input
            type="radio"
            name="camperType"
            value="van"
            checked={selectedType === 'van'}
            onChange={() => handleTypeSelect('van')}
          />
          <Icon id="camper1" width="32" height="32" className={css.icon} />
          Van
        </label>
        <label className={`${css.button} ${css.camper2Button} ${selectedType === 'fully-integrated' ? css.active : ''}`}>
          <input
            type="radio"
            name="camperType"
            value="fully-integrated"
            checked={selectedType === 'fully-integrated'}
            onChange={() => handleTypeSelect('fully-integrated')}
          />
          <Icon id="camper2" width="32" height="32" className={css.icon} />
          Fully
          Integrated
        </label>
        <label className={`${css.button} ${css.camper3Button} ${selectedType === 'alcove' ? css.active : ''}`}>
          <input
            type="radio"
            name="camperType"
            value="alcove"
            checked={selectedType === 'alcove'}
            onChange={() => handleTypeSelect('alcove')}
          />
          <Icon id="camper3" width="32" height="32" className={css.icon} />
          Alcove
        </label>
      </div>
      <div>
        <button type="submit" className={css.searchButton}>Search</button>
      </div>
    </section>
  );
};

export default Filters;

// const Filters = ({onChange, location }) => {


//   return (
//     <section className={css.container}>
//       <input
//         type="text" 
//         value={location} 
//         onChange={onChange} 
//         placeholder="Enter location" 
//       />
//       <p>Filters</p>
//       <h3>Vehicle equipment</h3>
//       <div>
//         <button><Icon id="AC" width="32" height="32" className={css.iconS} />AC</button>
//         <button><Icon id="automatic" width="32" height="32" className={css.iconF} />Automatic</button>
//         <button><Icon id="kitchen" width="32" height="32" className={css.iconF} />Kitchen</button>
//         <button><Icon id="TV" width="32" height="32" className={css.iconF} />TV</button>
//         <button><Icon id="shower" width="32" height="32" className={css.iconF} />Shower/WC</button>
      
//       </div>
//       <h3>Vehicle type</h3>
//       <div>
//         <button><Icon id="camper1" width="32" height="32" className={css.icon} />Van</button>
//         <button><Icon id="camper2" width="32" height="32" className={css.icon} />Fully Integrated</button>
//         <button><Icon id="camper3" width="32" height="32" className={css.icon} />Alcove</button>

//       </div>
      
//     </section>
//   )
// }

// export default Filters;