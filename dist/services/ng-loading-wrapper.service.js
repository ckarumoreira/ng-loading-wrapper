(function () {
  angular.module('ng-loading-wrapper.services').service('ngLoadingWrapper', [function () {
    var self = this;

    this.applyLoading = function (element) {
      angular.element(element).addClass('ng-loading-wrapper');
    };

    this.removeLoading = function (element) {
      angular.element(element).removeClass('ng-loading-wrapper');
    };

    this.loadWhile = function (element, promise) {
      self.applyLoading(element);
      Promise.all(promise).finally(function () {
        self.removeLoading(element);
      });
    };
  }]);
})();