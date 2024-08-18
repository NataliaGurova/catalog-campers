<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AquaTrack is a web application for tracking your daily water intake. With it, you can set a goal and work towards it throughout the day.">
    <title>AquaTracker</title>
    <link
      rel="icon"
      href="./src/assets/favicon/favicon.ico"
      type="image/x-icon"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./src/assets/favicon/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./src/assets/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="./src/assets/favicon/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="./src/assets/faviconandroid-chrome-512x512.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./src/assets/favicon/apple-touch-icon.png"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


<!-- ggggggggggggggggggggggggggggggggggggg -->
CAMPER MODAL

  return (
<PerfectScrollbar className={css.scrollContainer}>
    <section className={css.container}>
    
      <h3>{camper.name}</h3>

      
      <div>
          <div className={css.rating}>
          <p>
              <FaStar color="gold" />
              {camper.rating} ({camper.reviews.length} Reviews)</p>
          <p >
              <Icon id="map" width="16" height="16" className={css.icon}/>
            {camper.location}
          </p>
          </div>
      </div>
      <h3>{formatPrice(camper.price)}</h3>
        <div className={css.containerImg}>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[0]}`} alt={camper.name}
          className={css.imgCar}
        />        
      </div>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[1]}`} alt={camper.name}
          className={css.imgCar}
        />        
      </div>
      <div className={css.camperImg}>
        <img src={`${camper.gallery[2]}`} alt={camper.name}
          className={css.imgCar3}
        />        
      </div>

      </div>
      <p className={css.description}>{camper.description}</p>
      <div className={css.addContainer}>
        <FeaturesReviews camper={camper} />
        <BookingForm />
        </div>
      </section>
        </PerfectScrollbar>
  );

  ==========================================
  const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className={css.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
        content: {
          borderRadius: '20px',
          padding: '40px',
          paddingRight: '0',
          overflow: 'hidden',
          width: '982px',
          margin: 'auto', // Center the modal
        },
      }}
    >
      <div className={css.modalContainer}>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;

========================================

const CamperModal = ({ camper, onCloseModal, modalIsOpen }) => {
  const formatPrice = (price) => `€${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}`;

  return (
    <ModalWindow modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <section className={css.container}>
        <h3>{camper.name}</h3>
        <button type="button" onClick={onCloseModal} className={css.btnClose}>
          <Icon id="xxx" width="24" height="24" className={css.btnX} />
        </button>
        <div>
          <div className={css.rating}>
            <p>
              <FaStar color="gold" />
              {camper.rating} ({camper.reviews.length} Reviews)
            </p>
            <p>
              <Icon id="map" width="16" height="16" className={css.icon} />
              {camper.location}
            </p>
          </div>
        </div>
        <h3>{formatPrice(camper.price)}</h3>
        <div className={css.containerImg}>
          {camper.gallery.slice(0, 3).map((image, index) => (
            <div key={index} className={css.camperImg}>
              <img src={image} alt={camper.name} className={index === 2 ? css.imgCar3 : css.imgCar} />
            </div>
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.addContainer}>
          <FeaturesReviews camper={camper} />
          <BookingForm />
        </div>
      </section>
    </ModalWindow>
  );
};

export default CamperModal;



==================================



.sectionHeading {
  font-size: 18px;
  color: #333;
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px rgba(71, 84, 103, 0.2); 
  width: 360px;
}


/* 
.sectionHeading::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px; 
  background-color: rgba(71, 84, 103, 0.2);
  position: absolute;
  bottom: -24px; 
  left: 0;
} */

========================
      {/* <span className={s.nameSpan}>{review.reviewer_name[0]}</span>
        <div className={s.ratingWrapper}>
          <p className={s.name}>{review.reviewer_name}</p>
          <div className={s.rating}>
            {Array.from({ length: item.reviewer_rating }, (_, index) => (
              <div key={index}>
                <FaStar className={css.star} />
              </div>
            ))}
            {Array.from({ length: 5 - item.reviewer_rating }, (_, index) => (
              <div key={index}>
                <FaStar className={css.empty} />
              </div>
            ))} */}
          {/* </div> */}
        {/* </div> */}
      // </div>