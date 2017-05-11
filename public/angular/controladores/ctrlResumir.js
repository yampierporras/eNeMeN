enemenApp.controller('resumir', function ($scope) {
    $scope.intercambiar = function () {
		if(window.innerWidth <= 768) {
			$('#resumir-codigo-js').toggle('slide');
			$('#resumir-resultado-js').toggle('slide');
		}
	}
})
