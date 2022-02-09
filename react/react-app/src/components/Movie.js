import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, image, title, genres, runtime, rating}) {
    return (
        <div style={{float: "left", width: "33%", height: "650px", textAlign: "center"}}>
            <div style={{display: "inline-block", padding: "20px"}}>
                <Link to={`/movie/${id}`}>
                    <img style={{borderRadius: "5px"}} src={image} alt={`${title}_cover_image`}/>
                    <h2>{title}</h2> 
                </Link>
                <ul style={{listStyle: "none", paddingLeft: "0px"}}>
                {genres.map((genre) => (
                    <li key={`${id}${genre}`}>{genre}</li>
                ))}
                </ul>
                <span>Runtime: {runtime}m | Rating: {rating}</span>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    genres: PropTypes.array.isRequired, 
    runtime: PropTypes.number.isRequired, 
    rating: PropTypes.number.isRequired, 
}

export default Movie;