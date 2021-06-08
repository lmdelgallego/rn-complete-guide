import moment from 'moment';

class Order {
  constructor(id, items, amount, date) {
    this.id = id;
    this.items = items;
    this.amount = amount;
    this.date = date;
  }

  get readableDate() {
    // return 'asdkljmasdjk';
    return moment(this.date).format('MMMM Do YYYY, h:mm');
  }
}

export default Order;
