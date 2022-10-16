import React, { useState, useEffect } from 'react';
import { original_img_url } from '../api/api';
import Carousel from 'better-react-carousel';
import Popup from './Popup.js';
import NAimg from "../images/NAimg.png";
import filmStrip from "../images/filmStrip.png";
import axios from 'axios';
import '../styles/Category.css';

function Category({title, url}) {

  const [movie, setMovie] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(response => { 
      setMovie(response.data.results)
    })
  }, []);

  function togglePopup(movie) {
    setClicked(movie);
    setShowPopup(!showPopup);
  }

    return (
      <div className="Category">

      <h1 className="title">{title}</h1>

      <div className="c-container">

      <Carousel cols={10} rows={1} gap={100} loop>
      {movie.map((movie) => {
        return (
        <Carousel.Item key={url}>
        
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
            src={`${original_img_url}${movie.poster_path}`}
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
  );
}

export default Category;