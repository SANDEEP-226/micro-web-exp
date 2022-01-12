import React from "react";
import "../css/ItemCard.css";
import Img from "../assets/lanka01.jpg"

var img = "./assets/lanka01.jpg";

export default function ItemCard() {
  return (
    <div className="outerDiv">
      <div className="circleElement" style={{ backgroundImage: `url(${Img})`}} >
      
      </div>
      <div>
        <h1>Hill station</h1>
        <h2>Best tour ever!!</h2>
      </div>
    </div>
  );
}
