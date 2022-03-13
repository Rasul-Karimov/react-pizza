import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import components
import LoaderPizza from "../components/pizzaBlock/LoaderPizza";
import Categories from "../components/Categories";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import SortPopup from "../components/SortPopup";
// import actions
import { addTocart } from "../redux/action/cart";
import { setCategory } from "../redux/action/filters";
import { fetchPizzas } from "../redux/action/pizzas";
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
  useEffect(
    function () {
      dispatch(fetchPizzas(sortBy, category));
    },
    [category, sortBy]
  );
  function onSelectItem(index) {
    dispatch(setCategory(index));
  }

  function onClickAddPizza(obj) {
    dispatch(addTocart(obj));
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
            { name: "популярности", type: "popular", order: "desc" },
            { name: "цене", type: "price", order: "desc" },
            { name: "алфавит", type: "name", order: "asc" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items &&
            items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={onClickAddPizza}
                key={obj.id}
                item={obj}
              />
            ))
          : fakeItems &&
            fakeItems.map((item, index) => <LoaderPizza key={index} />)}
      </div>
    </div>
  );
};

export default Home;
