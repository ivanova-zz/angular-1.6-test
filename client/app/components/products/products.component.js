import template from './products.component.html';
import controller from './products.controller.js';
import './products.component.scss';
import  'angular-material/angular-material.scss';

let productsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'productsController'
};
export default productsComponent;