const initialValue = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzas = [].concat.apply([], Object.values(newItem));
      const totalPrice = allPizzas.reduce(
        (accumulator, obj) => accumulator + obj.price,
        0
      );
      return {
        ...state,
        items: newItem,
        itemsCount: allPizzas.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
