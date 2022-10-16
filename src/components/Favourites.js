import React from 'react';
import { useStateValue } from "../context/StateProvider";
import FavItem from "./FavItem.js";
import '../styles/Favourites.css';

function Favourites() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="Favourites">
      <h1 class='my-4'>{basket.length} liked videos:</h1>
      {basket.map((item) => (
        <FavItem
          id = {item.id}
          title = {item.title}
          image = {item.image}
          rating = {item.rating}
          overview = {item.overview}
        />
      ))}
    </div>
  );
}

export default Favourites;