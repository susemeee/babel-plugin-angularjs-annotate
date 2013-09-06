"use strict";

// long form
angular.module("MyMod").controller("MyCtrl", ["$scope","$timeout", function($scope, $timeout) {
}]);

// w/ dependencies
angular.module("MyMod", ["OtherMod"]).controller("MyCtrl", ["$scope","$timeout", function($scope, $timeout) {
}]);

// simple
myMod.controller("foo", ["$scope","$timeout", function($scope, $timeout) {
}]);
myMod.service("foo", ["$scope","$timeout", function($scope, $timeout) {
}]);
myMod.factory("foo", ["$scope","$timeout", function($scope, $timeout) {
}]);
myMod.directive("foo", ["$scope","$timeout", function($scope, $timeout) {
}]);
myMod.filter("foo", ["$scope","$timeout", function($scope, $timeout) {
}]);

// no dependencies => no need to wrap the function in an array
myMod.controller("foo", function() {
});
myMod.service("foo", function() {
});
myMod.factory("foo", function() {
});
myMod.directive("foo", function() {
});
myMod.filter("foo", function() {
});

// run, config don't take names
myMod.run(["$scope","$timeout", function($scope, $timeout) {
}]);
angular.module("MyMod").run(["$scope", function($scope) {
}]);
myMod.config(["$scope","$timeout", function($scope, $timeout) {
}]);
angular.module("MyMod").config(function() {
});

// directive return object
myMod.directive("foo", ["$scope", function($scope) {
    return {
        controller: ["$scope","$timeout", function($scope, $timeout) {
            bar;
        }]
    }
}]);
myMod.directive("foo", ["$scope", function($scope) {
    return {
        controller: function() {
            bar;
        }
    }
}]);

// provider $get
myMod.provider("foo", function() {
    this.$get = ["$scope","$timeout", function($scope, $timeout) {
        bar;
    }];
});
myMod.provider("foo", function() {
    this.$get = function() {
        bar;
    };
});
myMod.provider("foo", function() {
    return {
        $get: ["$scope","$timeout", function($scope, $timeout) {
            bar;
        }]};
});
myMod.provider("foo", function() {
    return {
        $get: function() {
            bar;
        }};
});
myMod.provider("foo", {
    $get: ["$scope","$timeout", function($scope, $timeout) {
        bar;
    }]
});
myMod.provider("foo", {
    $get: function() {
        bar;
    }
});
