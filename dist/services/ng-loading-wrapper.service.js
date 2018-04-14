(function () {
  angular.module('ng-loading-wrapper.services').service('ngLoadingWrapper', ['$compile', function ($compile) {
    var self = this;

    this.applyLoading = function (element) {
      var target = angular.element(element);
      target.addClass('ng-loading-wrapper');
      $compile(target)(target.scope());
    };

    this.removeLoading = function (element) {
      var target = angular.element(element);
      target.removeClass('ng-loading-wrapper');
      $compile(target)(target.scope());
    };

    this.loadWhile = function (element, promise) {
      self.applyLoading(element);
      Promise.all(promise).finally(function () {
        self.removeLoading(element);
      });
    };
  }]);
})();