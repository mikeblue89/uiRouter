(()=>{
    'use strict';

    let module = angular.module("uiRouterapp");

    module.service("$pokeApiService", function($http, urls){
        let apiconfig = (options)=>{
            let config = {
                method: "GET",
                url: urls.pokeApi.baseUrl,
            };

            if(options.method){
                config.method = options.method;
            }

            if(options.complementUrl){
                config.url += options.complementUrl;
            }

            return config;
        }

        let getRamdom = ()=>{
            return Math.floor(Math.random() * (+800 - +1)) + +1;
        }

        this.getRamdonPokemon = (actionSuccess, actionError)=>{
            let config = apiconfig({urlComplement: url.pokeApi +=getRamdom});
            $http(config).then(actionSuccess, actionError);
        }
        

    });

})();