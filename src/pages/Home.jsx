import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";
import { setPizzas } from "../redux/action/pizzas";
import { setCategory } from "../redux/action/filters";
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.pizzas.items;
  });

  function onSelectItem(index) {
    dispatch(setCategory(index));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectItem}
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавит", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} item={obj} />)}
        {/* <PizzaBlock /> */}
      </div>
    </div>
  );
};

export default Home;
