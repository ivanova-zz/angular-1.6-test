import template from './cart.component.html';
import controller from './cart.controller.js';
import './cart.component.scss';

let cartComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'cartController'
};
export default cartComponent;