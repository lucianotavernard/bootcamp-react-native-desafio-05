const initialState = {
  data: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload.product],
      };

    case '@cart/REMOVE':
      return {
        ...state,
        data: state.data.filter(product => product.id !== action.payload.id),
      };

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return {
        ...state,
        data: state.data.map(product =>
          product.id === action.payload.id
            ? { ...product, amount: action.payload.amount }
            : product
        ),
      };

    default:
      return state;
  }
}
