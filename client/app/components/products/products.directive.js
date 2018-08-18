import template from './products.directive.html';
import controller from './products.controller.js';
import './products.directive.scss';
import 'angular-material/angular-material.scss';

let productsDirective = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'productsController'
};
export default products;