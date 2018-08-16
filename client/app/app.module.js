import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import ngRoute from 'angular-route';
import LocalStorageModule from 'angular-local-storage';
import routes from './app.routes'

angular.module('app', [
    ngRoute,
    LocalStorageModule,
    ComponentsModule.name
])
    .config(routes)
    .component('app', appComponent);