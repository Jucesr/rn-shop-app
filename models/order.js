class Order {
   constructor(id, cart) {
      this.id = id;
      this.date = new Date();
      this.cart = cart;
   }
}

export default Order;
