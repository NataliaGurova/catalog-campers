import css from './Filters.module.css';
// import campers from "../../campers.json"

const Filters = ({onChange, location }) => {


  return (
    <section className={css.container}>
      <input
        type="text" 
        value={location} 
        onChange={onChange} 
        placeholder="Enter location" 
      />
      <p>Filters</p>
      <h3>Vehicle equipment</h3>
      <div>
        <button>AC</button>
        <button>Automatic</button>
        <button>Kitchen</button>
        <button>TV</button>
        <button>Shower/WC</button>
      </div>
      <h3>Vehicle type</h3>
      <div>
        <button>Van</button>
        <button>Fully Integrated</button>
        <button>Alcove</button>

      </div>
      
    </section>
  )
}

export default Filters;