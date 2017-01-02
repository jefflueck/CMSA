// Controller for List View
(function (){
  function ListCtrl($scope, $http) {


    // Start with an empty array before fetching data
    $scope.students = [];

    // Make a request to the backend for the data at this endpoint
    $http.get('/api/students')
      .success(function(data) {
        $scope.students = data;
        console.log(data);
      })
      .error(function(data) {
        console.log(data);
      });

      //delete a student from the database
    $scope.deleteStudent = function(id) {
      $http.delete('/api/students/' + id)
      .success(function(data){
        $scope.student = data;
        console.log("Frontend works")
        console.log(data);
      })
      .error(function(data){
        console.log(data);
      });
    };
  }

  angular.module("cmsa")
         .controller("ListCtrl", ['$scope', '$http', ListCtrl]);
})();
