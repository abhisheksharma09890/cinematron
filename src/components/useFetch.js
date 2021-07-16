import React,{useState,useEffect} from 'react'
import axios from '../axios'; 

const useFetch = (fetchUrl) => {
    const [movies,setMovies] = useState([]);
    const [random,setRandom] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();
      
      async function fetchData(){
        
            const request = await axios.get(fetchUrl);
            //https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
          
            setMovies(request.data.results);
            setRandom(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            
            return request;
          
         


      }
      fetchData();

      return () => abortCont.abort();
      
    }, [fetchUrl]);
    return {movies,random};

}
export default useFetch;
