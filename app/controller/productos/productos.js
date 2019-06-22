(()=>{
    'use strict';

    let moduleProducto = angular.module("uiRouterapp");

    moduleProducto.controller("productosController", function (){
        let vm = this;

        let defaultProductSettings = ()=>{
            loadProductData();
            vm.inicializarProductos();
        }

        let loadProductData = ()=>{
            vm.encabezadosProductos = JSON.parse(localStorage.getItem("encabezados-productos"));
            vm.productos = JSON.parse(localStorage.getItem("productos"))||[];

            if(!vm.encabezadosProductos){
                vm.encabezadosProductos=['ID','Nombre del producto','Costo','Proveedor', 'Lote', 'Descripcion Producto','Fecha de caducidad'];
                localStorage.setItem('encabezados-productos', JSON.stringify(vm.encabezadosProductos));
            }
        }

        vm.inicializarProductos = ()=>{
            vm.producto = {};
        }

        let randomIdProducto = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveProductos = ()=>{
            localStorage.setItem("productos", JSON.stringify(vm.productos));
        }

        vm.saveProducto = ()=>{
            if(vm.producto.nombreProducto && vm.producto.proveedor && vm.producto.caducidad){
                if(vm.producto.id){
                    vm.productos.forEach(producto => { if (producto.id == vm.producto.id) producto = vm.producto; });
                }else{
                    vm.producto.id = randomIdProducto();
                    vm.productos.push(vm.producto);
                }

                saveProductos();
                vm.inicializarProductos();
            }else{
                alert("Debe ingresar todos los datos");
            }
        }

        vm.editProducto = (producto)=>{
            producto.caducidad = new Date (producto.caducidad);
            vm.producto = producto;
        }

        vm.deleteProducto = (index)=>{
            vm.productos.splice(index,1);
            saveProductos();
            vm.inicializarProductos();
        }


        defaultProductSettings();

    });

})();