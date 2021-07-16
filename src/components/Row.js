import React,{useState, useEffect} from 'react';
import axios from '../axios'; //as we used export default, we can rename it here
import "./Row.css";
import useFetch from './useFetch';
import {Link} from 'react-router-dom';

const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargeRow}) {

    const {movies,random} = useFetch(fetchUrl);
   

    console.log(movies);
    
  

    return (
        <div className="row">
          <h2>{title}</h2> 

          <div className="row__posters" id={title}>
            {movies.map(movie => (
              
              <Link to={{
                pathname:`/MovieDetails/${movie.id}`,
                 state:{
                    poster:`${base_url}${movie.poster_path}`, 
                    backdrop:movie.backdrop_path,
                    title:movie.name || movie.title || movie.original_name,
                    overview:movie.overview,
                    rating:movie.vote_average,
                    releaseDate:movie.release_date,
                    popularity:movie.popularity,
                    adult:movie.adult,
                    movie:movie
                }}}><img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
              src={`${base_url}${movie.poster_path}`} 
              alt={movie.name}/></Link>
              
              
          
            ))}
            </div> 
           
        </div>
    )
}

export default React.memo(Row)
