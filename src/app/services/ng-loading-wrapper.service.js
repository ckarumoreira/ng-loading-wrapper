(function () {
  angular.module('ng-loading-wrapper.services')
    .service('ngLoadingWrapper', [
      '$scope',
      function ($scope) {
        var self = this;

        this.applyLoading = function (element) {
          angular.element(element).addClass('ng-loading-wrapper');
          $scope.apply();
        };

        this.removeLoading = function (element) {
          angular.element(element).removeClass('ng-loading-wrapper');
          $scope.apply();
        };

        this.loadWhile = function (element, promise) {
          self.applyLoading(element);
          Promise.all(promise)
            .finally(function () {
              self.removeLoading(element);
            });
        }
      }
    ])
})();