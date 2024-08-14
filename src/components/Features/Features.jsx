import { useParams } from "react-router-dom";

const Features = () => {
  const {camperId} = useParams()
  // const [cast, setCast] = useState([]);


  // console.log(getMovieCredits(movieId));
  
  
  // useEffect(() => {  
  //   const fetchMovie = async () => {
  //     if (!movieId) return;
  //     try {
  //       const castData = await getMovieCredits(movieId);
  //       setCast(castData.cast);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchMovie();
  // }, [movieId]);

  return (
    <section>
      <div>
        <h3>Features hello</h3>
        {/* <Form/> */}
      </div>
    </section>
  )
}

export default Features;