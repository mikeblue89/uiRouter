(() => {
    'use strict';

    let module = angular.module("uiRouterapp");

    module.filter('mayor', () => {
        return (array, opcion) => {
            let dataFiltrada = [];
            switch(opcion){

                case "mayor": {
                    array.forEach(element => {
                        if(element.edad >=18) dataFiltrada.push(element);
                    });
                    break;
                }
                case "menor":{
                    array.forEach(element => {
                        if(element.edad <18) dataFiltrada.push(element);
                    });
                    break;
                }
                case "hombre":{
                    array.forEach(element => {
                        if(element.genero == "Hombre") dataFiltrada.push(element);
                    });
                    break;
                }
                case "mujer":{
                    array.forEach(element => {
                        if(element.genero == "Mujer") dataFiltrada.push(element);
                    });
                    break;
                }
                default: {
                    dataFiltrada = array; 
                    break;
                }
            }
            console.log(dataFiltrada);
            return dataFiltrada;
        }
    });

})();