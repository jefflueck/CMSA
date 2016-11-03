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
      })
      .state('list', {
        url: '/list',
        templateUrl: '/templates/list.html',
        controller: "ListCtrl as list"
      })
      .state('new-entry', {
        url: '/new-entry',
        templateUrl: '/templates/new-entry.html',
        controller: "NewCtrl as list"
      })
      .state('single', {
        url: '/single',
        templateUrl: '/templates/single.html',
        controller: "SingleCtrl as list"
      });

}

  angular.module("cmsa", ['ui.router'])
         .config(config);
})();
