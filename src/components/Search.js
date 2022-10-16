import React, { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
import { img_url } from '../api/api';
import NAimg from "../images/NAimg.png";
import filmStrip from "../images/filmStrip.png";
import Popup from './Popup';
import '../styles/Popup.css';
import '../styles/Search.css';

function Search() {

  const apikey = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [clicked, setClicked] = useState([]);

	const getMovieRequest = async (searchValue) => {

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchValue}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  function togglePopup(movie) {
    setClicked(movie);
    setShowPopup(!showPopup);
  }

  return (
    <div className="Search">

      <form class="d-flex collapse navbar-collapse searchBox" role="search">
        <input id="input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => setSearchValue(event.target.value)}/>
        <button type="submit" className="navButton" onClick={getMovieRequest}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </button>
      </form>

      <div className="searchCarousel">

      <Carousel cols={10} rows={1} gap={100} loop>
      {movies.map((movie) => {
        return (
        <Carousel.Item>
        
          <div>
          <img className="film" src={filmStrip} alt="" />
          {
            movie.poster_path === null || movie.poster_path === undefined ?

            <img className="c-images"
            src={NAimg}
            alt="noImage"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => togglePopup(movie)} />

            : <img className="c-images"
            src={`${img_url}${movie.poster_path}`}
            alt="movieImage"
            onClick={() => togglePopup(movie)} />
          }
          </div>
        
        </Carousel.Item>
      );})}
      </Carousel>

      </div>

      {showPopup ? 
        <Popup
          text='Close'
          info={clicked}
          closePopup={togglePopup}
        />
        : null
      }

    </div>
  )
}

export default Search;