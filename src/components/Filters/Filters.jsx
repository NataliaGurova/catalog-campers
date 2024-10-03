import Icon from '../Icon/Icon';
import css from './Filters.module.css';

import { useState } from 'react';


const Filters = ({ onChange, location }) => {
  
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  // const [isSelected, setIsSelected] = useState(false);
  

  const handleEquipmentToggle = (id) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  
  const handleTypeSelect = (id) => {
    setSelectedType(id);
  };


  // const [values, setValues] = useState({
  //   login: "",
  //   password: "",
  // });

  // const handleLoginChange = (evt) => {
  //   setValues({
  //     ...values,
  //     login: evt.target.value,
  //   });
  // };

  // const handlePwdChange = (evt) => {
  //   setValues({
  //     ...values,
  //     password: evt.target.value,
  //   });
  // };

  
  // const handleChange = (evt) => {
  //   setIsSelected(evt.target.checked);
  //   console.log(setIsSelected(evt.target.checked));
    
  // };

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
        onChange={onChange}
        placeholder="City"
        className={css.locationInput}
      />
    </div>
  </label>
</form>

      <p>Filters</p>

      {/* Checkbox Buttons */}
      <h3 className={css.sectionHeading}>Vehicle equipment</h3>
      <div className={css.buttonGroup}>
        <label className={`${css.button} ${css.acButton} ${selectedEquipment.includes('AC') ? css.active : ''}`}>
          <input
            type="checkbox"
            value="AC"
            checked={selectedEquipment.includes('AC')}
            onChange={() => handleEquipmentToggle('AC')}
          />
          <Icon id="AC" width="32" height="32" className={css.iconS} />
          AC
        </label>
        <label className={`${css.button} ${css.automaticButton} ${selectedEquipment.includes('automatic') ? css.active : ''}`}>
          <input
            type="checkbox"
            value="automatic"
            checked={selectedEquipment.includes('automatic')}
            onChange={() => handleEquipmentToggle('automatic')}
          />
          <Icon id="automatic" width="32" height="32" className={css.iconF} />
          Automatic
        </label>
        <label className={`${css.button} ${css.kitchenButton} ${selectedEquipment.includes('kitchen') ? css.active : ''}`}>
          <input
            type="checkbox"
            value="kitchen"
            checked={selectedEquipment.includes('kitchen')}
            onChange={() => handleEquipmentToggle('kitchen')}
          />
          <Icon id="kitchen" width="32" height="32" className={css.iconF} />
          Kitchen
        </label>
        <label className={`${css.button} ${css.tvButton} ${selectedEquipment.includes('TV') ? css.active : ''}`}>
          <input
            type="checkbox"
            value="TV"
            checked={selectedEquipment.includes('TV')}
            onChange={() => handleEquipmentToggle('TV')}
          />
          <Icon id="TV" width="32" height="32" className={css.iconF} />
          TV
        </label>
        <label className={`${css.button} ${css.showerButton} ${selectedEquipment.includes('shower') ? css.active : ''}`}>
          <input
            type="checkbox"
            value="shower"
            checked={selectedEquipment.includes('shower')}
            onChange={() => handleEquipmentToggle('shower')}
          />
          <Icon id="shower" width="32" height="32" className={css.iconF} />
          Shower/WC
        </label>
      </div>

      {/* Radio Buttons */}
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
        <button type="submit"
          className={css.btnSearch}
          // disabled={!isSelected}
        >Search
        </button>
      </div>
    </section>
  );
};

export default Filters;
