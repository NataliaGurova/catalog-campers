import Icon from "../Icon/Icon";
import css from "./Details.module.css"

const Details = ({ camper }) => {
   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return (
          <ul className={css.iconList}>
                {camper?.adults !== 0 && (
                  <li className={css.iconItem}>
                    <Icon id="adults" width="20" height="20" className={css.iconS} aria-label="adults icon"/>
                    {camper.adults} adults
                  </li>
                )}
                {camper?.transmission && (
                  <li className={css.iconItem}>
                    <Icon id="automatic" width="20" height="20" className={css.iconF} aria-label="transmission icon"/>
                    {capitalizeFirstLetter(camper.transmission)}
                  </li>
                )}
                {camper?.details?.airConditioner && (
                  <li className={css.iconItem}>
                    <Icon id="AC" width="20" height="20" className={css.icon} aria-label="AC icon"/>
                    {camper.details.airConditioner} AC
                  </li>
                )}
                {/* Інші властивості також можна перевіряти таким чином */}
                {camper?.details?.kitchen && (
                  <li className={css.iconItem}>
                    <Icon id="kitchen" width="20" height="20" className={css.iconF} aria-label="kitchen icon"/>
                    kitchen
                  </li>
                )}
            {camper?.details?.beds !== 0 && (
              <li className={css.iconItem}>
                <Icon id="bed" width="20" height="20" className={css.iconF}/>
                {camper.details.beds} beds
              </li>
            )}
            {camper?.details?.airConditioner !== 0 && (
              <li className={css.iconItem}>
                <Icon id="Air" width="20" height="20" className={css.iconF}/>
                {camper.details.airConditioner} Air conditioner
              </li>
            )}
            {camper?.details?.CD !== 0 && (
              <li className={css.iconItem}>
                <Icon id="cd" width="20" height="20" className={css.iconF}/>
                {camper.details.CD} CD
              </li>
            )}
            {camper?.details?.radio !== 0 && (
              <li className={css.iconItem}>
                <Icon id="radio" width="20" height="20" className={css.iconF}/>
                  Radio
              </li>
            )}
            {camper?.details?.hob !== 0 && (
              <li className={css.iconItem}>
                <Icon id="hob" width="20" height="20" className={css.icon}/>
                {camper.details.hob} hob
              </li>
            )}
            {camper?.details?.toilet !== 0 && (
              <li className={css.iconItem}>
                <Icon id="toilet" width="20" height="20" className={css.iconS}/>
                Toilet
              </li>
            )}
            {camper?.details?.shower !== 0 && (
              <li className={css.iconItem}>
                <Icon id="shower" width="20" height="20" className={css.iconF}/>
                  Shower
              </li>
            )}
            {camper?.details?.freezer !== 0 && (
              <li className={css.iconItem}>
                <Icon id="freezer" width="20" height="20" className={css.iconF}/>
                Freezer
              </li>
            )}
            {camper?.details?.gas !== 0 && (
              <li className={css.iconItem}>
                <Icon id="gas" width="20" height="20" className={css.iconS}/>
                {camper.details.gas} Gas
              </li>
            )}
            {camper?.details?.water !== 0 && (
              <li className={css.iconItem}>
                <Icon id="water" width="20" height="20" className={css.iconF}/>
                {camper.details.water} Water
              </li>
            )}
            {camper?.details?.microwave !== 0 && (
              <li className={css.iconItem}>
                <Icon id="microwave" width="20" height="20" className={css.iconF}/>
                Microwave
              </li>
            )}
          </ul>
  )
}

export default Details;