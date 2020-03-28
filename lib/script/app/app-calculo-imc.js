(() => {
    'use strict';

    angular
        .module('calculoImc', [])
        .controller('calculoImcController', ($scope) => {
            $scope.titulo = "Cálculo IMC";

            $scope.calcularImc = (pessoa) => {
                $scope.resultado = pessoa.peso / (pessoa.altura * 2);
            };
        });
})();