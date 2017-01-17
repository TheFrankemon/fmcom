app.factory('users', function($http) {
	var myUser = {
		loginUser: function(user) {
			return $http.get('/api/user', {
				'params': {
					'email': user.email,
					'password': user.password
				}
			});
		},
		createUser: function(user) {
			return $http.post('/api/user', user);
		}
	}

	return myUser;
});