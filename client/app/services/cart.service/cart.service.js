
class CartService {

  constructor(localStorageService) {
    'ngInject';
    this.key = 'cart';
    this.localStorage = localStorageService;
    this.products = this.localStorage.get(this.key);
    if(this.products == null) {
      this.products = [];
    } else {
      this.products = JSON.parse(this.products);
    }
  }

  addToCart(product, quantity = 1) {
    if (!this.hasProduct(product)){
      this.products.push({product: product, quantity: quantity});
    } else {
      this.addQuantityProduct(product,quantity)
    }

    this.save();
  }

  hasProduct(product) {

    for( let item of this.products ){
      if(item.product.id == product.id){
        return true;
      }
    }

    return false;
  }

  addQuantityProduct(product,quantity){
    for(let item of this.products ){
      if(item.product.id == product.id){
        item.quantity = item.quantity + quantity;

        break;
      }
    }
  }

  getProducts(){
    return this.products;
  }

  deleteOne(productWithQuantity){
    for(let item of this.products ){
      if(item.product.id == productWithQuantity.product.id){
        item.quantity = item.quantity - 1;

        this.save();
        break;
      }
    }
  }

  delete(index){
    this.products.splice(index, 1);

    this.save();
  }

  save(){
    return this.localStorage.set(this.key, JSON.stringify(this.products));
  }
}

export default CartService;