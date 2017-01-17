app.directive('videoComment', function() {
	return {
		restrict: 'E',
		scope: {
			commentData: "="
		},
		templateUrl: 'views/video_comment.html'
	}
});