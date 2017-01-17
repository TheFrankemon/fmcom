app.controller("bottomBarController", function($scope, currentUser, $http, users) {
	$scope.newUser = {};
	$scope.login = {};
	$scope.registerIsShowing = false;
	$scope.userIsLogged = currentUser.isUserLogged();
	$scope.user = currentUser.getLoggedUser();

	$scope.showRegister = showRegister;
	$scope.hideRegister = hideRegister;
	$scope.modalOut = modalOut;
	$scope.logout = logout;
	$scope.loginUser = loginUser;
	$scope.registerUser = registerUser;

	var clicksOut = 0;

	function showRegister() {
		$scope.registerIsShowing = true;
	}

	function hideRegister() {
		$scope.registerIsShowing = false;
		clicksOut = 0;
	}

	function modalOut() {
		if ($scope.registerIsShowing) {
			clicksOut++;
			if (clicksOut > 1) {
				$scope.hideRegister();
			}
		}
	}

	function logout() {
		currentUser.logout();
		updateUserData();
	}

	function loginUser() {
		users.loginUser($scope.login)
		.then(function(res) {
    		currentUser.login(res.data);
    		updateUserData();
    		$scope.login = {};
    	}, function(res) {
    		alert('Invalid email or password!');
    		console.log(res);
    	});
	}

	function registerUser() {    
	    if ($scope.newUser.password === $scope.newUser.password_rep) {
	    	if ($scope.newUser.photo.trim() === "") {
	    		$scope.newUser.photo = "assets/images/user_circle.png";
	    	}

	    	users.createUser($scope.newUser)
	    	.then(function(res) {
	    		currentUser.login($scope.newUser);
	    		updateUserData();
	    		$scope.newUser = {};
				$scope.hideRegister();
	    	}, function(res) {
	    		alert('That email is already registered!');
    			console.log(res);
	    	});
	    } else {
	    	alert("Mismatched passwords!");
	    }
	}

	function updateUserData() {
		$scope.userIsLogged = currentUser.isUserLogged();
		$scope.user = currentUser.getLoggedUser();
	}
});