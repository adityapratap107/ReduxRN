import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
// export const addItemToCart = data => dispatch => {
//   dispatch({
//     type: ADD_TO_CART,
//     payload: data,
//   });
// };
export const removeItemFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
export const increaseItem = index => ({
  type: INCREASE_QUANTITY,
  payload: index,
});
export const decreaseItem = index => ({
  type: DECREASE_QUANTITY,
  payload: index,
});
