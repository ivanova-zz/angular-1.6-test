class productsController {
  constructor(CartService) {
    'ngInject';
    this.name = 'products';
    this.cartService = CartService;

  };
  $onInit(){
    this.storage = 0;
    this.products = [
      {
        id: 0,
        name: 'Product_1',
        price: 0,
      },
      {
        id: 1,
        name: 'Product_2',
        price: 10,
      },
      {
        id: 2,
        name: 'Product_3',
        price: 20,
      }
    ];

  }
  addToCart(product){
    this.cartService.addToCart(product);
  }


}

export default productsController;