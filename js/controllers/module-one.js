var moduleStorage = angular.module('moduleStorage',['ngStorage']);
moduleStorage.controller('moduleStorageController',moduleStorageController);

function moduleStorageController($scope,$localStorage){

$scope.storage = $localStorage.$default({
	username : "RizkiAdrian",
	age : 21
});
}