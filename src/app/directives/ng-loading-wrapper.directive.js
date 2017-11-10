(function () {
    angular.module('ng-loading-wrapper.directives')
    .component('ngLoadingWrapper', {
        bindings: {
          isLoading: '<',
          loadingText: '<'
        },
        controllerAs: ctrl,
        controller: function () {
            var self = this;
            
            this.$onInit = function () {
                
            };
        }
    });
})();