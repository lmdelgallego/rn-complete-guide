class CartItem {
  constructor(quantity, productTitle, productPrice, pushToken, sum) {
    this.quantity = quantity;
    this.productTitle = productTitle;
    this.productPrice = productPrice;
    this.pushToken = pushToken;
    this.sum = sum;
  }
}

export default CartItem;
