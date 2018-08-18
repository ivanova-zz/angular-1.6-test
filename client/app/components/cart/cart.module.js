import angular from 'angular';
import cartDirective from './cart.directive';
import Services from '../../services/services'
import ngRoute from "angular-route";
import routes from './cart.routes';
import ngMessages from "angular-messages";
import ngMaterial from "angular-material";
import cartController from "./cart.controller";


const cartModule = angular.module('cart', [
    ngRoute,
    Services.name,
    ngMessages,
    ngMaterial
  ])
  .config(routes)
  .directive('cart', () => new cartController());
export default cartModule;