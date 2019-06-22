(()=>{
    'user Strict';

    let moduleDirectivas = angular.module("uiRouterapp");

    moduleDirectivas.controller("directivasController", function (){
        let vm = this;

        let setDefault = ()=>{
            vm.canasto = [['Manzana roja', 'Manzana verde'],['Manzana gala','Manzana fuji']];
            vm.typosHeader = ['$index', '$first	', '$middle', '$last', '$even', '$odd'];
            vm.tiposPokemon = [
                {name: 'Hierba', color: 'leaf'},
                {name: 'Fuego', color: 'fire'},
                {name: 'Agua', color: 'water'},
                {name: 'Hada', color: 'fairy'},
                {name: 'Fantasma', color: 'ghost'},
                {name: 'Normal', color: 'normal'},
                {name: 'Electrico', color: 'electric'}
            ];

            vm.allTypesSelected = false;

            vm.examples = [
                {name: "example1.html", url: "app/controller/directivas/example1.html"},
                {name: "example2.html", url: "app/controller/directivas/example2.html"}
            ];

            vm.example = vm.examples[0];

            vm.showHide = true;

            vm.evaluateshowHide = ()=>{
                return vm.showHide;
            }
        }

        vm.unselectTypes = ()=>{
            if(vm.allTypesSelected){
                vm.tiposPokemon.forEach(tipo => tipo.selected = false);
            }else{
                vm.tiposPokemon.forEach(tipo => tipo.selected = true);
            }

            vm.allTypesSelected = !vm.allTypesSelected;
        }

        setDefault();
    });

})();