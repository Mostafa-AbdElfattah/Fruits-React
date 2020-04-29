import "./ListOfOldFruits.style.css";
import React from "react";

export const ListOfOldFruits = ({ fruits }) => (
  <div className="item fruitList">
    <div className="viewFruitFirstDiv">
      <h2 className="item_input viewFruitH2"> Fruit</h2>
      <ul>
        {fruits.map((fruit) => (
          <li className="fruitsLi" key={fruit.id}>
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>

    <div className="viewFruitSectDiv">
      <h2 className="item_input viewFruitH2"> Count</h2>
      <ul>
        {fruits.map((fruit) => (
          <li className="fruitsLi" key={fruit.id}>
            {fruit.id}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
