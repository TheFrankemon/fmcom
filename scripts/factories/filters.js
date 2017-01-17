app.factory('filters', function($http) {
	var filters = {
		'title': '.*',
		'tags': []
	}
	var myFilter = {
		getFilters: function() {
			return filters;
		},
		setFilters: function(title, tags) {
			filters.title = title;
			filters.tags = [];
			for (i = 0; i < tags.length; i++) {
				if (tags[i].value) {
					filters.tags.push(tags[i].name);
				}
			}
		}
	}

	return myFilter;
});