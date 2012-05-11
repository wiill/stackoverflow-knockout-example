var App = window.App = {};

// ViewModels namespace definition
App.ViewModels = {};


$(document).bind('mobileinit', function(){
    // while app is running use App.Service.mockStatistic({ToursCompleted: 45}); to fake backend data from the console

	//create application scope service
	var service = App.Service = new App.MockedStatisticService();

	//when page in created in JQM...
	$('#home').live('pagecreate', function(event, ui){

		//... create HomeScreenViewModel using created service...
	    var viewModel = new App.ViewModels.HomeScreenViewModel(service);

		//... databind...
	    ko.applyBindings(viewModel, this);

		//... and start VM operations
		viewModel.startServicePolling();
	});
});