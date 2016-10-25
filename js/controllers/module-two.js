var app = angular.module('otherModule',['ngStorage']);
app.controller ('otherController',otherController);

function otherController($scope,$localStorage){
	$scope.storage = $localStorage;
}