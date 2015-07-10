app.factory('FlashCardsFactory', function($http) {
    return {
        getFlashCards: function(category) {
            var params = {};
            if (category) {
                params.category = category;
            }
            return $http.get('/cards', {
                    params: params
                })
                .then(function(res) {
                    return res.data;
                });
        },
        loading: false,
        current: null
    };
});