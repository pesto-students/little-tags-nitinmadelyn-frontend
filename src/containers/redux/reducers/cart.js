import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item } = action;
      const { items: currentItems } = state;

      return {
        ...state,
        items: [...currentItems, item],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
