import template from "./products.directive.html";
import './products.directive.scss';
import 'angular-material/angular-material.scss';

class ProductsController {

  constructor() {
    this.name = 'products';

    this.restrict = 'E';
    this.template = template;
  }

  controller($scope, CartService) {
    'ngInject';
    this.cartService = CartService;

    $scope.storage = 0;
    $scope.products = [
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

    $scope.addToCart = (product) => {
      this.cartService.addToCart(product);
    }
  }

  link (scope, element, attrs){
  }

}

export default ProductsController;