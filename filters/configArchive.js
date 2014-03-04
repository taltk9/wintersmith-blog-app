module.exports = function(listOfArticles, _) {
	var archives = _.chain(listOfArticles).groupBy(function(item){
		return item.date.getFullYear()
	}).value();
	for (var archive in archives) {
		archives[archive] = _.chain(archives[archive]).groupBy(function(item){
			return item.date.getMonth();
		}).value();
	}
	var month_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var yearsK = _.chain(archives).keys().reverse().value();
	var yearHeights = {};
	for (var year in yearsK) {
		var months = archives[yearsK[year]];
		yearHeights[year] = _.reduce(months, function(memo, month) {
			return memo + month.length;
		}, 0);
	}
	return {
		archives: archives,
		month_names: month_names,
		yearsK: yearsK,
		yearHeights: yearHeights
	};
};