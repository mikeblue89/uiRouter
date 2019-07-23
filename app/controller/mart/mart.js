let moduleMart = angular.module("ui.router");

moduleMart.controller('martController', function(){
    let vm = this;
    let defaults = ()=>{
        vm.getData();
        vm.flag();
    }

    vm.getData = ()=>{
        vm.data = JSON.parse(localStorage.getItem("productos"))||[]; 
        vm.encabezadosCompras = JSON.parse(localStorage.getItem('encabezados-compras'));
        if(!vm.encabezadosCompras){
            vm.encabezadosCompras = ['ID','Nombre del producto','Costo','Proveedor', 'Lote', 'Descripcion Producto','Fecha de caducidad','Cantidad'];
            localStorage.setItem('encabezados-compras', JSON.stringify(vm.encabezadosCompras));
        }
        console.log(vm.encabezadosCompras);
    }

    vm.selectedProduct = (item)=>{
        vm.itemEnable = item;
        vm.default = vm.itemEnable.url1;
        vm.url1 = vm.itemEnable.url1;
        vm.url2 = vm.itemEnable.url2;
        vm.url3 = vm.itemEnable.url3;
    } 

    vm.flag = ()=>{
        img="./img/default.jpg";
        vm.url1 = img; 
        vm.url2 = img;
        vm.url3 = img;
        vm.default = img;
    }
    vm.comprasFlag = false;

    vm.changeImg = (img)=>{
            vm.default = img; 
    }
    vm.compras = JSON.parse(localStorage.getItem("compras"))||[];

    vm.comprobarProducto = (item)=>{
        vm.compras.forEach(element => {
            if(element.id == item.id)vm.comprasFlag = true;
        });
    }

    vm.buy = (item)=>{
        console.log(vm.compras);
        if(vm.compras.length == 0){
            item.counter = 1;
            vm.compras.push(item);
        }else{
            vm.comprobarProducto(item)
            if(vm.comprasFlag){
                vm.compras.forEach(element => {
                    if(element.id == item.id)element.counter++;
                });
                vm.comprasFlag = false;
            }else{
                item.counter = 1;
                vm.compras.push(item);
            }
        }
    }

    defaults();

});