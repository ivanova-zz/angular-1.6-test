import angular from 'angular';
    import ProductsModule from './products/products.module';

const ComponentsModule = angular.module('app.components',[
       ProductsModule.name, 
]);

export default ComponentsModule;