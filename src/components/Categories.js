import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);

  function onSelect(index) {
    setActiveItem(index);
    onClick(index);
  }
  return (
    <div className="categories">
      <ul>
        <li
          className={`${activeItem === null && "active"}`}
          onClick={() => onSelect(null)}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={`${activeItem === index && "active"}`}
            onClick={() => onSelect(index)}
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
