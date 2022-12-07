import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  GET_NUMBER_CART,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../ActionTypes';

const initialState = {
  cartItems: [],
  numberCart: 0,
};

const addItem = (state, action) => {
  // console.log('PAYLOAD', action.payload);
  if (state.numberCart === 0) {
    let cart = {
      id: action.payload.id,
      quantity: 1,
      img: action.payload.img,
      name: action.payload.name,
      price: action.payload.price,
      brand: action.payload.brand,
    };
    state.cartItems.push(cart);
  } else {
    let check = false;
    state.cartItems.map((item, key) => {
      if (item.id === action.payload.id) {
        state.cartItems[key].quantity++;
        check = true;
      }
    });
    if (!check) {
      let _cart = {
        id: action.payload.id,
        quantity: 1,
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
        brand: action.payload.brand,
      };
      state.cartItems.push(_cart);
    }
  }
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  //check if item is already in the cartItems
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id,
  );
  //if there is only 1, upon clicking, we should remove the item from the array
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === cartItemToRemove.id
      ? {...item, quantity: item.quantity - 1}
      : item,
  );
};

const deleteCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

const resetCartNumber = (cartItems, cartNumber, payload) => {
  const num = cartItems.find(item => {
    if (item.id === payload.id) {
      return item.quantity;
    }
  });
  return cartNumber - num.quantity;

};

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      addItem(state, action);
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        // cartItems: state.cartItems.filter(
        //   item => item.id !== action.payload.id,
        // ),
        cartItems: deleteCart(state.cartItems, action.payload),
        // numberCart: state.numberCart - 1,
        numberCart: resetCartNumber(
          state.cartItems,
          state.numberCart,
          action.payload,
        ),
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case DECREASE_QUANTITY: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        numberCart: state.numberCart - 1,
      };
    }
    default: {
      return state;
    }
  }
};
