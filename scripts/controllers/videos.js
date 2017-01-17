app.controller('videosController', function($scope, $location, $http, videos, filters) {
    $scope.videos = [];
    
	$scope.secondsToMinSec = secondsToMinSec;
	$scope.showVideo = showVideo;

	videos.getAll()
    .then(function(res) {
        $scope.videos = res.data;
    }, function(res) {
    	console.log(res);
    });

    $scope.$on('filterVideos', function(event, args) {
		videos.getFiltered(filters.getFilters())
	    .then(function(res) {
	    	$scope.videos = res.data;
	    }, function(res) {
	    	console.log(res);
	    });
	});

	function secondsToMinSec(x) {
		var minutes = Math.floor(x / 60);
		var seconds = x % 60;
		return minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	}

	function showVideo(video) {
		$location.path('/video/' + video.id);
	}
});