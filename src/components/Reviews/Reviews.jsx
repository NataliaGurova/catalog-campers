import { useParams } from "react-router-dom";

const Reviews = () => {
  const { camperId } = useParams();
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {  
  //   const fetchMovie = async () => {
  //     if (!movieId) return;
  //     try {
  //       const reviewsData = await getMovieReviews(movieId);
  //       setReviews(reviewsData.results);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchMovie();
  // }, [movieId]);

  return (
    <section>
      <h3>Reviews</h3>
      {/* {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))} */}
    </section>
  );
}

export default Reviews;