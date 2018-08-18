import angular from 'angular';
import ngRoute from 'angular-route';
import routes from './products.routes';
import Services from '../../services/services';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ProductsController from "./products.controller";

const productsModule = angular.module('products', [
    ngRoute,
    Services.name,
    ngMessages,
    ngMaterial
  ])
        .config(routes)
        .directive('products', () => new ProductsController())
    ;

export default productsModule;