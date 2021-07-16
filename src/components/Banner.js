import React from 'react';
import requests from '../requests';
import useFetch from './useFetch';
import './Banner.css';
import { Link } from "react-router-dom";

function Banner() {
  const base_url="https://image.tmdb.org/t/p/original/"
    const {movies, random} = useFetch(requests.fetchTrending);
    
    console.log(movies);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }


    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${random?.backdrop_path}")`, /* ? means that ever the random(movie) is undefined it wont crash */
            backdropPosition: "center center",
          }}>                                        {/*background image*/}
        <div className="banner__contents">

          {/*title*/}
          <h1 className="banner__title">
              {random?.title || random?.name || random?.original_name}
          </h1>
          <div className="banner__buttons">  {/*div with 1 button*/}
          <Link to={{
                pathname:`/MovieDetails/${random?.id}`,
                 state:{
                    poster:`${base_url}${random?.poster_path}`, 
                    backdrop:random?.backdrop_path,
                    title:random?.name || random?.title || random?.original_name,
                    overview:random?.overview,
                    rating:random?.vote_average,
                    releaseDate:random?.release_date,
                    popularity:random?.popularity,
                    adult:random?.adult,
                    movie:random
                }}}>

              <button className="banner__button">More Info</button>
              </Link>

              
          </div>

         <h1 className="banner__description">
             {truncate(random?.overview,200)}
         </h1>
          {/*description*/}

        </div>
        <div className="banner--fadeBottom"/>
        

            
        </header>
    )
}

export default React.memo(Banner)
