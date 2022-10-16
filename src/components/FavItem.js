import React from 'react';
import { useStateValue } from "../context/StateProvider";
import { img_url } from '../api/api';
import filmStrip from "../images/filmStrip.png";
import NAimg from "../images/NAimg.png";
import '../styles/FavItem.css';

function FavItem({id, title, image, rating, overview}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFav = () => {
    dispatch({
      type: "REMOVE_FAV",
      id: id,
    })
  }

  return (
    <div className="FavItem">
      <div>
      <img className="filmImg" src={filmStrip} alt="" />
      {
        image === null || image === undefined ?
        <img className="posterImg" src={NAimg} alt="No Image" />
        : <img className="posterImg" src={`${img_url}${image}`} alt="Poster Image" />
      }
      </div>
      <div class='mx-5'>
      <h1 className="likeTitle">{title}</h1>
      <p>{rating}/10</p>
      <p> {overview}</p>
      <button className="likeBtn" onClick={removeFav}>Dislike&nbsp;&nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
      </svg>
      </button>
      </div>
    </div>
  )
}

export default FavItem;