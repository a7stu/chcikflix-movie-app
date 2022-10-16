import React from 'react';
import { img_url } from '../api/api';
import { useStateValue } from "../context/StateProvider";
import NAimg from "../images/NAimg.png";
import '../styles/Popup.css';

function Popup({info, closePopup}) {

  const [{basket}, dispatch] = useStateValue();

  const addFav = () => {
    dispatch({
      type: "ADD_FAV",
      item: {
        id: info.id,
        title: info.title,
        image: info.poster_path,
        rating: info.vote_average,
        overview: info.overview
      },
    });
  };

  return (
    <div className="popup">
      <div className='popup_inner'>

      {
        info.poster_path === null || info.poster_path === undefined ?

        <img className='popup_img' src={NAimg} />

        : <img className='popup_img' src={`${img_url}${info.poster_path}`} alt="Movie Poster Image" />
      }

        <div class='mx-3'>
        <h2 class='text-white'>{info.title}</h2>
        <p>{info.vote_average}/10</p>
        <p>{info.overview}</p>

        <button className='popup_btn' onClick={closePopup}>Close</button>
        <button className='popup_btn' onClick={addFav}>Like&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        </svg>
        </button>
    
        </div>

      </div>
    </div>
  );
}

export default Popup;