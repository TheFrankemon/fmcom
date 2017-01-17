app.factory('currentUser', function() {
	var loggedUser = {};
	var userIsLogged = false;
	var myUser = {
		logout: function() {
			loggedUser = {};
			userIsLogged = false;
		},
		login: function(user) {
			loggedUser = user;
			userIsLogged = true;
		},
		getLoggedUser: function() {
			return loggedUser;
		},
		isUserLogged: function() {
			return userIsLogged;
		},
		getName: function() {
			return loggedUser.firstName + ' ' + loggedUser.lastName;
		}
	};

	return myUser;
});