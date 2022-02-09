import PropTypes from "prop-types"

function Movie({id, image, title, genres, runtime, rating, summary}) {
    return (
        <div> 
            <img src={image} alt={`${title}_cover_image`}/>
            <h2>{title}</h2> 
            <ul>
            {genres.map((genre) => (
                <li key={`${id}${genre}`}>{genre}</li>
            ))}
            </ul>
            <span>Runtime: {runtime}m | Rating: {rating}</span>
            <p>{summary}</p>
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
    summary: PropTypes.string.isRequired
}

export default Movie;