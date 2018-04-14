(function () {
    angular.module('ng-loading-wrapper.directives')
    .directive('ngLoadingWrapper', [ '$compile', function ($compile) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log("ngLoadingWrapper appended loading element.");

                var target = angular.element(element);

                var pane = angular.element('<div class="loading-pane"></div>');
                var object = angular.element('<div class="loading-object"></div>');
                var spinner = angular.element('<div class="loading-spinner"></div>');
                var text = angular.element('<div class="loading-text">' + attrs.loadingText + '</div>');

                object
                    .append(spinner)
                    .append(text);
                pane.append(object);
                
                target.append(target);

                $compile(target)(scope);

                scope.$on('$destroy', function () {
                    pane.remove();
                    console.log("ngLoadingWrapper remove loading element.");
                });
            }
        };
    }]);
})();