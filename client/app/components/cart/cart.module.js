import angular from 'angular';
import cartComponent from './cart.component';
import Services from '../../services/services'
import ngRoute from "angular-route";
import routes from './cart.routes';
import ngMessages from "angular-messages";
import ngMaterial from "angular-material";


const cartModule = angular.module('cart', [
    ngRoute,
    Services.name,
    ngMessages,
    ngMaterial
  ])
  .config(routes)
  .component('cart', cartComponent);
export default cartModule;