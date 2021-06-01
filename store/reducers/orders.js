import Order from '../../models/order';
import { ADD_ORDER } from '../actions/orders';

const OrdersInitialState = {
  orders: [],
};
const Orders = (state = OrdersInitialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};

export default Orders;
