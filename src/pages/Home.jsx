import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import SortPopup from "../components/SortPopup";
import { setCategory } from "../redux/action/filters";
import { fetchPizzas } from "../redux/action/pizzas";
import LoaderPizza from "../components/pizzaBlock/LoaderPizza";
const Home = () => {
  const dispatch = useDispatch();
  const fakeItems = new Array(10).fill(0);
  const items = useSelector((state) => {
    return state.pizzas.items;
  });
  const isLoaded = useSelector((state) => {
    return state.pizzas.isLoaded;
  });
  const { category, sortBy } = useSelector((state) => {
    return state.filters;
  });
  console.log(category, sortBy);

  useEffect(
    function () {
      console.log("pizzas");
      dispatch(fetchPizzas());
    },
    [category]
  );

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
        {isLoaded
          ? items && items.map((obj) => <PizzaBlock key={obj.id} item={obj} />)
          : fakeItems &&
            fakeItems.map((item, index) => <LoaderPizza key={index} />)}
      </div>
    </div>
  );
};

export default Home;
