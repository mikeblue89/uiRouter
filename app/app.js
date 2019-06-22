(()=>{
    'use strict';

    let mainModule = angular.module("uiRouterapp",["ui.router"]);

    let mainModuleConfig = ($stateProvider, $locationProvider, $urlRouterProvider)=>{
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('app/form');

        let states = [
            {
                name: 'app',
                options: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/app.html',
                    controller: 'appController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.form',
                options: {
                    tittle: 'Cursos',
                    url: '/form',
                    templateUrl: 'app/controller/form/form.html',
                    controller: 'formController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.productos',
                options: {
                    tittle: 'Productos',
                    url:'/productos',
                    templateUrl: 'app/controller/productos/productos.html',
                    controller: 'productosController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.directivas',
                options: {
                    tittle: 'Directivas',
                    url: '/directivas',
                    templateUrl: 'app/controller/directivas/directivas.html',
                    controller: 'directivasController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.mart',
                options: {
                    tittle: 'Market',
                    url: '/market',
                    templateUrl: 'app/controller/mart/mart.html',
                    controller: 'martController',
                    controllerAs: 'vm'
                }
            }
        ];

        states.forEach(state => $stateProvider.state(state.name, state.options));
    };

    mainModule.config(mainModuleConfig);
    mainModuleConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    mainModule.controller("appController", function($state){
        let vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarItems = $state.get();
    });

})();