import React,{useState, useEffect} from 'react'
import './MovieDetails.css';
import axios from '../axios'
import requests from '../requests';
import useFetch from './useFetch';
import './Banner.css';
import { useLocation, useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import Row from './Row';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';


function MovieDetails() {
  
  

  const location = useLocation();

   const API_KEY = "e1fc0e161ab3dd25a101919aa21d3dee";

   
   const [trailerUrl, setTrailerUrl] = useState("");
   const [trailerStatus, setTrailerStatus] = useState('Play');
   const {poster,backdrop,title,overview,rating,releaseDate,popularity,adult,movie} = location.state;
   
    
    const newrating = (rating/10)*5
   
    let eightplus;
    if(adult === 'true' || adult === ''){
      eightplus = true;
    }
    else{
      eightplus = false;
    }
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      }; 
      
      const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
          setTrailerStatus('Play');
          
          
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=e1fc0e161ab3dd25a101919aa21d3dee`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
          setTrailerStatus('Close');
        }
      }; 

    
    
      
    return (
      <div className="movie__details">
          <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop}")`, /* ? means that ever the random(movie) is undefined it wont crash */
                backdropPosition: "center center",
              }}>                                        {/*background image*/}
            <div className="banner__contents">

              {/*title*/}
              <h1 className="banner__title">
                  {title}
              </h1>
              

              
              

          </div>
          <div className="banner--fadeBottom"/>
          

              
          </div>
          <div className="review">
              <div className="review__poster">
                <Slide left>
                  <img 
                  
                  className="row__poster row__posterNew" 
                  src={poster} 
                  alt={title}/>
                </Slide>
              </div>
              <div className="movie__rating">
                <Slide right>
                  <p className="rating__no">{newrating} </p>
                  <StarRatings className="star__ratings"
                  rating={newrating}
                  starRatedColor="yellow"
                  starDimension="30px"
                  numberOfStars={5}
                  name='rating'
                  />
                  <p><strong>Release Date: </strong>{releaseDate}</p>
                  <p><strong>Overview:  </strong><br/> {overview}</p>
                  <br/>
                  </Slide>
                  <button onClick={() => handleClick(movie)} className="banner__button mid__button">{trailerStatus} Trailer</button>
                  {trailerUrl && <Flash><p className="see__bottom">Click the Button again to close the Video</p></Flash>}


              </div>
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

          <div className="detail__icon">
            <div className="wrap">
            <Slide left>
            <img src="/images/release.png"></img>
            <p>Release Date:<br/>{releaseDate}</p>
            </Slide>
            </div>
            <div className="wrap">
            <Slide right>
            <img src="/images/popularity.png"></img>
            <p>Popularity:<br/>{popularity}</p>
            </Slide>
            </div>
            {eightplus && <div className="wrap">
            <img src="/images/age-limit.png"></img>
            
            </div>}
          </div>
          <div className="reusing__row">
           
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
          </div>
         
      </div>
    )
}

export default React.memo(MovieDetails)
