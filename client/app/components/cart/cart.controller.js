import template from "./cart.directive.html";

class cartController {
  constructor() {
    this.name = 'cart';
    this.restrict = 'E';
    this.template = template;

  }

  controller($scope, CartService) {
    'ngInject';
    this.cartService = CartService;
    $scope.getProducts = () => {
      return this.cartService.getProducts();
    };
    $scope.products = $scope.getProducts();
    $scope.deleteOne = (product) => {
      return this.cartService.deleteOne(product);
    };

    $scope.delete = (product) => {
      return this.cartService.delete(product);
    }
  }

  link (scope, element, attrs){
  }
}

  export default cartController;