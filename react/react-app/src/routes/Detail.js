import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function Detail() {
    const param = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`)).json();
        setMovie(json.data.movie); 
        setLoading(false);
        };
    useEffect(() => getMovie(), []);
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
            <div>
                <Link to="/"><h3>Back</h3></Link>
                <div style={{width: "1024px", marginTop: "30px"}}>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <img style={{borderRadius: "10px"}} src={movie.large_cover_image}/>
                            <div style={{padding: "30px"}}>
                                <h2>{movie.title_english}</h2>
                                <p>{movie.description_full}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Detail;