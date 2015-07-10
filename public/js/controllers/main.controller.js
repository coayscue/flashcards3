app.controller('MainController', function($scope, FlashCardsFactory) {
	FlashCardsFactory.loading = true;
	$scope.flashCardsFactory = FlashCardsFactory;
	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];
});