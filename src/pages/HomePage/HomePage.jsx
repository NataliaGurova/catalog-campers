
import { FaGem, FaShieldAlt, FaCompass } from 'react-icons/fa'; // Importing from Font Awesome
import css from './HomePage.module.css'; // Update the path as necessary

const HomePage = () => {
  return (
    <main className={css.container}>
      <section className={css.features}>
        <h2>Why Choose Our Campers?</h2>
        <div className={css.featureList}>
          <div className={css.featureItem}>
            <FaGem className={css.featureIcon} />
            <h3>Luxury Interiors</h3>
            <p>
              Experience the ultimate in comfort with spacious, well-designed interiors, plush bedding, and modern amenities.
            </p>
          </div>
          <div className={css.featureItem}>
            <FaShieldAlt className={css.featureIcon} />
            <h3>Reliability</h3>
            <p>
              Our fleet is meticulously maintained to ensure that your journey is smooth and worry-free.
            </p>
          </div>
          <div className={css.featureItem}>
            <FaCompass className={css.featureIcon} />
            <h3>Freedom to Explore</h3>
            <p>
              Go wherever the road takes you. With our campers, you're not bound by schedules or locations—just pure adventure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;