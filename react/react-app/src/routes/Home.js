import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const json = await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year")).json();
    setMovies(json.data.movies); 
    setLoading(false);
    };
  useEffect(() => getMovies(), []);
  return (
    <div style={{width: "100%", textAlign: "center"}}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{display: "inline-block", width: "1024px"}}>
            <h1 style={{margin: "40px"}}>Best Movies</h1>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} image={movie.medium_cover_image} title={movie.title_long} genres={movie.genres} runtime={movie.runtime} rating={movie.rating}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
