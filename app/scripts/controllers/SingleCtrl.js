// Controller for Single Student
(function (){
  function SingleCtrl($stateParams, $scope, $http) {

    this.heading = "Single Student";

    console.log($stateParams.id);

    $scope.student = [];

    $http.get('/api/students/' + $stateParams.id)
      .success(function(data) {
        $scope.student = data;
        console.log(data);
      })
      .error(function(data) {
        console.log(data);
      });
  }

  angular.module("cmsa")
         .controller("SingleCtrl", ['$stateParams', '$scope', '$http', SingleCtrl]);
})();
