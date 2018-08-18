import template from './cart.directive.html';
import controller from './cart.controller.js';
import './cart.directive.scss';

let cartDirective = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'cartController'
};
export default cartDirective;