import React from "react";
import { useState } from "react";
function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="categories">
      <ul>
        <li
          className={`${activeItem === null && "active"}`}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={`${activeItem === index && "active"}`}
            onClick={() => setActiveItem(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
