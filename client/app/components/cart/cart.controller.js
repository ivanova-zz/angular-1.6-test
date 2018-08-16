class cartController {
  constructor(CartService) {
    'ngInject';
    this.name = 'cart';
    this.cartService = CartService;

  }

  $onInit(){
    this.products = this.getProducts();
  }

  getProducts(){
    return this.cartService.getProducts();
  }

  deleteOne(product){
    return this.cartService.deleteOne(product);
  }

  delete(product){
    return this.cartService.delete(product);
  }
}

  export default cartController;