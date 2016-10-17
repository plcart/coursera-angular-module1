(function () {
    'use strict';

    angular.module("LunchCheck", [])
        .controller('LunchCheckController', ['$scope', function ($scope) {

            $scope.items = "";
            $scope.message = "Please enter data first";

            $scope.checkIfTooMuch = function () {
                var lunches = $scope.items.split(',').filter(function (d) {
                    return d;
                });
                $scope.message = lunches.length == 0 ? "Please enter data first" :
                    lunches.length > 3 ? "Too much!" : "Enjoy!";
            };
           
        }]);
})();