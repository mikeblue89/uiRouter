let moduleMart = angular.module("ui.router");

moduleMart.controller("martController", function(){
    let vm = this;

    let defaults = ()=>{
        vm.productos = JSON.parse(localStorage.getItem('productos'));
    }

    vm.selectedProduct = (id)=>{
        vm.productos.forEach(element => {if(element.id == id) vm.selectedItem = element});
    }


    defaults();
});