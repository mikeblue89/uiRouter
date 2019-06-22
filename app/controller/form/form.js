(()=>{
    'use strict';

    let moduleForm = angular.module("uiRouterapp");

    moduleForm.controller("formController", function (){
        let vm = this;
        
        let defaultSettings=()=>{
            loadData();
            vm.inicializarCursos();
        }

        let loadData = ()=>{
            vm.encabezados = JSON.parse(localStorage.getItem("encabezados-cursos"));
            vm.cursos = JSON.parse(localStorage.getItem("cursos"))||[];

            if(!vm.encabezados){
                vm.encabezados=['ID','Nombre del curso','Duracion Meses','Fecha inicio', 'Fecha fin','Catedratico'];
                localStorage.setItem('encabezados-cursos', JSON.stringify(vm.encabezados));
            }
        }

        vm.inicializarCursos = ()=>{
            vm.curso = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("cursos", JSON.stringify(vm.cursos));
        }

        vm.saveCurso = ()=>{
            if(vm.curso.name && vm.curso.catedratico){
                if(vm.curso.id){
                    vm.cursos.forEach(curso => { if (curso.id == vm.curso.id) student = vm.curso; });

                }else{
                    vm.curso.id = getRandomId();
                    vm.cursos.push(vm.curso);
                }
                console.log(vm.curso);
                saveData();
                vm.inicializarCursos();
            }
        }

        vm.editCurso = (curso)=>{
            curso.startDate = new Date (curso.startDate);
            curso.endDate = new Date(curso.endDate);
            vm.curso = curso;
        }

        vm.deleteCurso = (index)=>{
            vm.cursos.splice(index,1);
            saveData();
        }

        defaultSettings();
    });

})();