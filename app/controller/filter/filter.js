(()=>{
    'use strict';

    let modulePersona = angular.module("uiRouterapp");

    modulePersona.controller('filterController', function (){
        let vm = this;

        let defaultSettings = ()=>{
            loadData();
            vm.runInitialData();
        }

        let loadData = ()=>{
            vm.dataBase = JSON.parse(localStorage.getItem('Personas'))||[];
        }

        vm.runInitialData = ()=>{
            vm.data = {};
        }

        let randomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        vm.save = (item)=>{
            localStorage.setItem('Personas',JSON.stringify(vm.dataBase));
        }

        vm.add = ()=>{
            if(vm.data.nombre && vm.data.edad && vm.data.genero){
                if(vm.data.id){
                    vm.dataBase.forEach(persona => { if (persona.id == vm.data.id) persona = vm.data; });
                }else{
                    vm.data.id = randomId();
                    vm.dataBase.push(vm.data);
                }
                vm.save();
                vm.runInitialData();
            }else{
                alert('Debe ingresar todos los datos');
            }
        }

        vm.edit = (item)=>{
            vm.data = item;
        }

        vm.delete = (index)=>{
           vm.dataBase.splice(index,1);
           vm.save();
           vm.runInitialData();
        }

        defaultSettings();
    });

})();