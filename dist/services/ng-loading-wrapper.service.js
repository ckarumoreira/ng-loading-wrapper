(function () {
  angular.module('ng-loading-wrapper.services').service('ngLoadingWrapper', ['$compile', '$timeout', function ($compile, $timeout) {
    var self = this;

    this.apply = function (element, loadingText) {
      var target = angular.element(element);
      target.addClass('ng-loading-wrapper');

      var pane = angular.element('<div class="loading-pane"></div>');
      var object = angular.element('<div class="loading-object"></div>');

      object.append('<div class="loading-spinner"></div>');
      if (angular.isDefined(loadingText)) {
        object.append('<div class="loading-text">' + loadingText + '</div>');
      }

      pane.append(object);
      target.append(pane);
      console.log("ngLoadingWrapper appended loading element.");

      $timeout(function () {
        pane.addClass('show');
      }, 200);
    };

    this.remove = function (element) {
      var target = angular.element(element);
      var pane = target.find('.loading-pane');
      pane.removeClass('show');

      console.log("ngLoadingWrapper remove loading element.");

      $timeout(function () {
        target.removeClass('ng-loading-wrapper');
        pane.remove();
      }, 200);
    };
  }]);
})();