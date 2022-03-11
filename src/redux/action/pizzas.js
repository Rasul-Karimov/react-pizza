import axios from "axios";
import { func } from "prop-types";
export function fetchPizzas() {
  return function (dispatch) {
    dispatch(setLoaded(false));
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  };
}

export function setPizzas(items) {
  return {
    type: "SET_PIZZAS",
    payload: items,
  };
}
export function setLoaded(val) {
  return {
    type: "SET_LOADED",
    payload: val,
  };
}
