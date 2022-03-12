export const setSortBy = (action) => ({
  type: "SET_SORT_BY",
  payload: {
    type: action.type,
    order: action.order,
  },
});

export const setCategory = (cartIndex) => ({
  type: "SET_CATEGORY",
  payload: cartIndex,
});
