import css from "./HomePage.module.css"

// const HomePage = () => {
  
//   return (
//     <main className={css.container}>
//       <h1>Welcome to Home</h1>
//     </main>
//   );
// }

// export default HomePage;

import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <main className={css.container}>
//       <section className={css.hero}>
//         <h1 className={css.heroTitle}>Explore the World in Comfort</h1>
//         <p className={css.heroText}>
//           Discover the freedom of the open road with our luxurious camper vans. Whether you're planning a weekend getaway or a cross-country adventure, our campers are equipped with everything you need to travel in style and comfort.
//         </p>
//         <Link to="/catalog" className={css.heroButton}>
//           View Our Campers
//         </Link>
//       </section>

//       <section className={css.features}>
//         <h2>Why Choose Our Campers?</h2>
//         <div className={css.featureList}>
//           <div className={css.featureItem}>
//             {/* <Icon id="luxury" className={css.featureIcon} /> */}
//             <h3>Luxury Interiors</h3>
//             <p>
//               Experience the ultimate in comfort with spacious, well-designed interiors, plush bedding, and modern amenities.
//             </p>
//           </div>
//           <div className={css.featureItem}>
//             {/* <Icon id="reliability" className={css.featureIcon} /> */}
//             <h3>Reliability</h3>
//             <p>
//               Our fleet is meticulously maintained to ensure that your journey is smooth and worry-free.
//             </p>
//           </div>
//           <div className={css.featureItem}>
//             {/* <Icon id="freedom" className={css.featureIcon} /> */}
//             <h3>Freedom to Explore</h3>
//             <p>
//               Go wherever the road takes you. With our campers, you're not bound by schedules or locations—just pure adventure.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className={css.testimonials}>
//         <h2>What Our Customers Say</h2>
//         <div className={css.testimonialList}>
//           <div className={css.testimonialItem}>
//             <p>
//               "Our trip was unforgettable! The camper was incredibly comfortable, and we loved the freedom to explore at our own pace."
//             </p>
//             <p className={css.testimonialAuthor}>– Sarah & John</p>
//           </div>
//           <div className={css.testimonialItem}>
//             <p>
//               "Perfect for our family vacation. The kids had a blast, and we had peace of mind knowing everything we needed was right there."
//             </p>
//             <p className={css.testimonialAuthor}>– The Martinez Family</p>
//           </div>
//         </div>
//       </section>

//       <section className={css.cta}>
//         <h2>Ready to Hit the Road?</h2>
//         <p>
//           Book your dream camper today and start planning your adventure!
//         </p>
//         <Link to="/catalog" className={css.ctaButton}>
//           Book Now
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default HomePage;

import { FaGem, FaShieldAlt, FaCompass } from 'react-icons/fa'; // Importing from Font Awesome

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