var Customer = require('..//models/customer');
exports.addCustomer = function(){
		//var id = $routeParams.id;
	.post('/api/customers/', exports.customer).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};

var Card = require('..//models/card');
	exports.addCustomer = function(){
			//var id = $routeParams.id;
		.post('/api/cards/', exports.card).then(function(response){
				//$scope.employee = response.data;
				window.location.href = '/';
			});
		};

module.exports = exports;
