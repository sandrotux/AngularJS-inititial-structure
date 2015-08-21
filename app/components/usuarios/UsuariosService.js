myApp.service('UsuariosService', function () {
    
    this.getUsuarios = function () {
        /* TODO: Get users from DB */
        var usuarios = [{
		    "id": "134",
		    "name": "Steve Jobs",
		    "email": "steve.jobs@apple.com",
		    "date": "2013-10-01T08:05:59Z"
	    },{
		    "id": "414",
		    "name": "Ellie Goulding",
		    "email": "ellie.goulding@gmail.com",
		    "date": "2013-09-21T19:45:00Z"
	    },{
		    "id": "657",
		    "name": "Michael Stipe",
		    "email": "michael.stripe@gmail.com",
		    "date": "2013-09-12T11:38:30Z"
	    },{
		    "id": "12",
		    "name": "Sandro Alejandro",
		    "email": "s.alejandro.l@gmail.com",
		    "date": "2013-09-03T13:15:11Z"
	    }];
	    
	    return usuarios;
    }
    
});
