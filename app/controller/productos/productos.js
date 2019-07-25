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
            vm.encabezadosTabla = JSON.parse(localStorage.getItem("encabezados-tabla"));
            vm.productos = JSON.parse(localStorage.getItem("productos"))||[];

            if(!vm.encabezadosProductos&&!vm.encabezadosTabla){
                vm.encabezadosProductos=['ID','Nombre del producto','Costo','Proveedor', 'Lote', 'Descripcion Producto','Fecha de caducidad', 'URL1','URL2','URL3'];
                vm.encabezadosTabla=['ID','Nombre del producto','Costo','Proveedor', 'Lote', 'Descripcion Producto','Fecha de caducidad'];
                localStorage.setItem('encabezados-productos', JSON.stringify(vm.encabezadosProductos));
                localStorage.setItem('encabezados-tabla', JSON.stringify(vm.encabezadosTabla));
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
            vm.producto.caducidad = vm.producto.caducidad ? new Date(vm.producto.caducidad): new Date();
            if(vm.producto.nombreProducto && vm.producto.proveedor && vm.producto.caducidad){
                if(vm.producto.id){
                    vm.productos.forEach(producto => { if (producto.id == vm.producto.id) producto = vm.producto; });
                }else{
                    vm.producto.id = randomIdProducto();
                    vm.producto.counter = 0;
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