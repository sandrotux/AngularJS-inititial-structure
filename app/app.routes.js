myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'app/components/usuarios/usuarios.html',
        controller  : 'UsuariosController'
    });
});
