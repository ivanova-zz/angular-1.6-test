import angular from 'angular';
    import ProductsModule from './products/products.module';    import CartModule from './cart/cart.module';

const ComponentsModule = angular.module('app.components',[
       ProductsModule.name,      CartModule.name 
]);

export default ComponentsModule;