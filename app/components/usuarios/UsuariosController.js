
myApp.controller('UsuariosController', ['$scope', '$modal', '$log', 'UsuariosService',
                function ($scope, $modal, $log, UsuariosService) {

	$scope.usuarios = UsuariosService.getUsuarios();
	
	$scope.deleteEmail = function (index) {
		$scope.usuarios.splice(index, 1)
	};

	$scope.open = function (size) {	
		var modalInstance = $modal.open({
		  animation: true,
		  templateUrl: 'myModalContent.html',
		  controller: 'ModalInstanceCtrl',
		  size: size,
		  resolve: {
			usuarios: function() {
				
			}
		  }
		});

		modalInstance.result.then(function (usuarioInsert) {
			console.log(usuarioInsert);
			$scope.usuarios = $scope.usuarios.concat(usuarioInsert);
			console.log($scope.usuarios);
		}, function () {
		  $log.info('Modal dismissed at: ' + new Date());
		});
	};
	
}]);

myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

	$scope.usuario = {id: "0", name: "", email: "", date: ""};	

	$scope.ok = function () {
		$modalInstance.close($scope.usuario);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
