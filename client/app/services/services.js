import angular from 'angular';
import CartService from './cart.service/cart.service';
import LocalStorageModule from 'angular-local-storage';

const ServicesModule = angular.module('app.services', [LocalStorageModule])
  .service('CartService', CartService);

export default ServicesModule;