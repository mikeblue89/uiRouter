(()=>{
    'user strict';

    let module = angular.module("uiRouterapp");

    module.values('urlApis',{
        pokeApi:{
            baseUrl:"https://pokeapi.co/api/v2",
            name: "/pokemon/",
            number:"/pokemon/",
            type: "/type/",
            ability: "/ability/",
        }
    });
})();