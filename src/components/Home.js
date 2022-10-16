import React, { useState, useEffect } from 'react';
import axios from "axios";
import Category from './Category.js';
import Popup from './Popup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

function Home() {

  const [movie, setMovie] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const apikey = process.env.REACT_APP_API_KEY;
  const pop_url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
  const trnd_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`;
  const ftr_url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    axios.get(pop_url)
    .then(response => { 
      setMovie(response.data.results[0])
    })
  }, []);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="Home">

      <div className="textContainer">
        <div className="textArea">
          <h1 class="my-4">Check out the most popular movie on chicflix!</h1>
          <h2 class="my-3">{movie.title}</h2>
          <text>{movie.overview}</text>
          <button className="textButton" onClick={() => togglePopup()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-info-circle-fill my-3" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </button>
        </div>
          <img className="homepageImage" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      </div>

      {showPopup ? 
        <Popup
          text='Close Me'
          info={movie}
          closePopup={togglePopup}
        />
        : null
      }
    
      <Category title="Popular" url={pop_url} />
      <Category title="Trending Now" url={trnd_url} />
      <Category title="Future Releases" url={ftr_url} />
    
    </div>
  );
}

export default Home;