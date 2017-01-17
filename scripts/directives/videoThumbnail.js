app.directive('videoThumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			video: "="
		},
		templateUrl: 'views/video_thumbnail.html'
	}
});