import css from "./Features.module.css"

const Features = ({ camper }) => {
  const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
  return(
    <div className={css.detailsContainer}>
        <h2 className={css.detailsTitle}>Vehicle details</h2>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Form</span>
          <span className={css.detailValue}>{capitalizeFirstLetter(camper.form)}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Length</span>
          <span className={css.detailValue}>{camper.length}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Width</span>
          <span className={css.detailValue}>{camper.width}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Height</span>
          <span className={css.detailValue}>{camper.height}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Tank Capacity</span>
          <span className={css.detailValue}>{camper.tank}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailTitle}>Consumption</span>
          <span className={css.detailValue}>{camper.consumption}</span>
        </li>
      </ul>
    </div>

  )
}

export default Features;