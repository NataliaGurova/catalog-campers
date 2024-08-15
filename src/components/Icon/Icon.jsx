const Icon = ({ id, width, height, className = '', fillColor }) => {
  return (
    <svg
      className={`${className}`}
      style={{ background: 'transparent' }}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        // style={{ fill: `${fillColor}` }}
        href={`/sprite.svg#icon-${id}`}
      ></use>
    </svg>
  );
};
// import sprite from "../../assets/sprite.svg";


// const Icon = ({ width, height, id, styles }) => {
//   return (
//     <svg width={width} height={height} className={styles}>
//       <use href={`/symbolSprite.svg#icon-${id}`} ></use>
//     </svg>
    
//   );
// };
export default Icon;