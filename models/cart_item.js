import Product from "./product";

class CartItem {
   constructor(id, product, quantity) {
      this.id = id;
      this.product = new Product(
         product.id,
         product.ownerId,
         product.name,
         product.image,
         product.description,
         product.unit_rate
      );
      this.quantity = quantity;
   }

   getTotal() {
      return this.product.unit_rate * this.quantity;
   }

   increaseQuantity(increase) {
      if (this.quantity + increase <= 0) return;
      this.quantity += increase;
   }
}

export default CartItem;
