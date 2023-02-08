import React from "react";
import { useShoppingCart } from "../../UserContext";
import { formatCurrency } from "./Currency/formatCurrency";

interface CardType {
  id: number;
  price: number;
  url: string;
  name: string;
  discribtion: string;
}

const CardItem = ({ id, price, url, name, discribtion }: CardType) => {
  const { getCartItemIT, increaseQuality, decreaceQuality } = useShoppingCart();
  const count = getCartItemIT(id);
  return (
    <div>
      <li>
        <img src={url} height={150} alt= "card"/>
      </li>
      <li>{name} </li>
      <li>{discribtion} </li>
      <li style= {{fontWeight:"bold", color:"rgb(105,105,105)"}}>{formatCurrency(price)} </li>
      {count === 0 ? (
        <div className="card-button" onClick={() => increaseQuality(id)}>
          + Add to card
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button className="card-button"style={{ width:"20%", fontSize:"18px"}} onClick={() => increaseQuality(id)}>
            +
          </button>
          <span style={{ color: "rgba(39, 90, 107, 1)",
  padding:"15px", fontSize:"18px"}}>{count}</span>
          <button className="card-button" style={{ width:"20%", fontSize:"18px"}}onClick={() => decreaceQuality(id)}>-</button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
