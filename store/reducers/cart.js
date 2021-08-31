import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';
import CartItem from '../../models/cart-item';
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const pushToken = addedProduct.pushToken;

      let updateOrNewCartItem;
      if (state.items[addedProduct.id]) {
        // already have the item in the cart
        updateOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodTitle,
          prodPrice,
          pushToken,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updateOrNewCartItem = new CartItem(
          1,
          prodTitle,
          prodTitle,
          pushToken,
          prodPrice
        );
      }

      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updateCartItems;
      if (currentQty > 1) {
        // need to reduce it, no erase it
        const updatedCardItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productTitle,
          selectedCartItem.productPrice,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updateCartItems = { ...state.items, [action.pid]: updatedCardItem };
      } else {
        updateCartItems = { ...state.items };
        delete updateCartItems[action.pid];
      }

      return {
        ...state,
        items: updateCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case DELETE_PRODUCT:
      if (!state.items[action.pid]) {
        return state;
      }
      const updateItems = { ...state.items };
      const itemTotal = state.items[action.pid].sum;
      delete updateItems[action.pid];
      return {
        ...state,
        items: updateItems,
        totalAmount: state.totalAmount - itemTotal,
      };

    case ADD_ORDER:
      return initialState;
  }
  return state;
};
