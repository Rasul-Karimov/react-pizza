import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";

const Home = ({ items }) => {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиты"]} />
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
