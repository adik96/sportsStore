angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function($scope, $http, dataUrl) {
        $scope.data = {};
        $http.get(dataUrl)
            .then(function(data) {
                $scope.data.products = data.data;
            });
        $http({
            method: "GET",
            url: dataUrl
        }).then(function(data) {
            $scope.data.products = data.data;
        }, function myError(error) {
            $scope.data.error = error;
        });
    });