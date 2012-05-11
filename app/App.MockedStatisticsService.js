(function(App){

	/**
	 * MockedStatisticService definition
	 */
    App.MockedStatisticService = function(){
        var self = {};
        var defaultStatistic = {
            ToursTotal: 505,
            ToursRunning: 110,
            ToursCompleted: 115 
        };
		var currentStatistic = $.extend({}, defaultStatistic);

        self.mockStatistic = function(statistics){
            currentStatistic = $.extend({}, defaultStatistic, statistics);
        };

        self.getStatistics = function(){        
			var asyncSubject = new Rx.AsyncSubject();
			asyncSubject.OnNext(currentStatistic);
			asyncSubject.OnCompleted();
			return asyncSubject.AsObservable();
        };

        return self;
    };
})(App)