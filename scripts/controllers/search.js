app.controller('searchController', function($scope, $location, $http, filters, $rootScope, videos){
	$scope.zydahSmall = '../assets/images/zydah_small.png';
	$scope.filtersAreShowing = false;
	$scope.searchQuery = '';
	$scope.searchFilters = [];

	$scope.toggleFilters = toggleFilters;
	$scope.search = search;

	videos.getAllTags()
	.then(function(res) {
		for (i = 0; i < res.data.length; i++) {
			$scope.searchFilters.push({
				'name': res.data[i],
				'value': false
			});
		}
	});

	function toggleFilters() {
		$scope.filtersAreShowing = !$scope.filtersAreShowing;
	}

	function search() {
		filters.setFilters($scope.searchQuery, $scope.searchFilters);
		$rootScope.$broadcast('filterVideos');
		$location.path('/');
	}
});