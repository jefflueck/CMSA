// Controller for Editing One Student
(function (){
  function EditCtrl($scope, $http, $stateParams, $state) {

    $scope.student;

    $http.get('/api/students/' + $stateParams.id)
      .success(function(data) {
        $scope.student = data;
        console.log(data);
      })
      .error(function(data) {
        console.log(data);
      });

    $scope.editStudent = function() {

      console.log("var works!");

      $http.put('/api/students/' + $stateParams.id, $scope.student)
        .success(function(data) {
          $state.go('list');
          console.log("it worked!");
        })
        .error(function(data){
          console.log(data);
        })
    }

  }


  angular.module("cmsa")
         .controller("EditCtrl", ['$scope', '$http', '$stateParams', '$state', EditCtrl]);
})();
