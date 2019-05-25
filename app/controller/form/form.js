(()=>{
    'use strict';

    let moduleForm = angular.module("uiRouterapp");

    moduleForm.controller("formController", function (){
        let vm = this;
        vm.message = "hola";
    });
})();