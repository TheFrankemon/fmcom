app.factory('videos', function($http) {
	var myVideo = {
		getAll: function() {
			return $http.get('/api/videos');
		},
		getFiltered: function(filters) {
			return $http.get('/api/videos/filter', {
				'params': filters
			});
		},
		getAllTags: function() {
			return $http.get('/api/tags');
		},
		getById: function(id) {
			return $http.get('/api/video', {
				'params': {
					'id': id
				}
			});
		},
		updateRating: function(id, rating) {
			return $http.post('/api/video/rating', {
				'id': id,
				'rating': rating
			});
		},
		saveComment: function(id, newComment) {
			return $http.post('/api/video/newComment', {
				'id': id,
				'newComment': newComment
			});
		}
	}

	return myVideo;
});