(function() {
  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html'
      });
    $stateProvider
      .state('list', {
        url: '/list.html',
        templateUrl: '/templates/list.html',
      });
    $stateProvider
      .state('new-entry', {
        url: '/new-entry.html',
        templateUrl: '/templates/new-entry.html',
      });
    $stateProvider
      .state('single', {
        url: '/single.html',
        templateUrl: '/templates/single.html'
      });

}

  angular.module("cmsa", ['ui.router'])
         .config(config);
})();