enemenApp.controller('resumir', ['$scope', '$http', function ($scope, $http) {
    $scope.resumen = {
        textRes: null,
    };
    $scope.procesar = function () {
        if ($scope.resumen.textRes != null) {
            var model = {
                // idRes: $scope.resumen.idRes,
                // idRes: 'Res0000002',
                // titleRes: $scope.resumen.titleRes,
                // titleRes: 'Mi segundo resumen',
                textRes: $scope.resumen.textRes,
            };
            $http.post('http://localhost:8001/server/sinBaseDatos/procesar.php', model)
            .then(function (datos) {
                var componentes = datos.data;
                document.getElementById('resultado-area-js').innerHTML = '';
                for (var i = 0; i < componentes.length; i++) {
                    document.getElementById('resultado-area-js').innerHTML += componentes[i].toHtml;
                }
            });

            if (window.innerWidth <= 768) {
                $scope.intercambiar();
            }
        }
    };

    $scope.intercambiar = function () {
        if (window.innerWidth <= 768) {
            $('#resumir-codigo-js').toggle('slide');
            $('#resumir-resultado-js').toggle('slide');
        }
    };

    $scope.imprimir = function () {
        // var contImprimir = document.getElementById('resultado-area-js').innerHTML;
        // var contBody = document.body.innerHTML;
        // document.body.innerHTML = contImprimir;

        window.print();

        // document.body.innerHTML = contBody;
    };
},
]);
