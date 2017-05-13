enemenApp.controller('navegacion', function ($scope, $location) {
    //ASIGNAR LA CLASE ACTUAL AL MENU ACTIVO
    $scope.esActivo = function (rutaActual) {
        return rutaActual === $location.path();
    };
});
