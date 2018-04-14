(function () {
  angular.module('ng-loading-wrapper.services')
    .service('ngLoadingWrapper', [ '$compile', 
      function ($compile) {
        var self = this;

        this.applyLoading = function (element, loadingText) {
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
        };

        this.removeLoading = function (element) {
          var target = angular.element(element);
          target.removeClass('ng-loading-wrapper');
          target.find('.loading-pane').remove();
          console.log("ngLoadingWrapper remove loading element.");
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