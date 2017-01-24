app.controller('navbarController', function($scope, $location, $http, $rootScope){
	$scope.logo = '../assets/images/zydah_small.png';
	$(window).scroll(function() {
    	if($(this).scrollTop() > 50) { /*height in pixels when the navbar becomes non opaque*/ 
            $('.opaque-navbar').addClass('opaque');
            //$('.navbar-right li a').addClass('light');
    	} else {
        	$('.opaque-navbar').removeClass('opaque');
        	//$('.navbar-right li a').removeClass('light');
    	}
	});
});