import angular from 'angular';
import productsComponent from './products.component';
import ngRoute from 'angular-route';
import routes from './products.routes';
import Services from '../../services/services';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

const productsModule = angular.module('products', [
    ngRoute,
    Services.name,
    ngMessages,
    ngMaterial
  ])
        .config(routes)
        .component('products', productsComponent)
    ;

export default productsModule;