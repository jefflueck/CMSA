// Controller for New Student
(function (){
  function NewCtrl($scope, $http, $state) {


    $scope.addStudent = function() {

      var newStudent = {
        studentsName: $scope.studentsName,
        parentsName: $scope.parentsName,
        phoneNumber: $scope.phoneNumber,
        address: $scope.address,
        birthday: $scope.birthday,
        email: $scope.email,
        schoolName: $scope.schoolName,
        currentGrade: $scope.currentGrade,
        yearsInLessons: $scope.yearsInLessons,
        otherInstruments: $scope.otherInstruments,
        reasonForLessons: $scope.reasonForLessons,
        goals: $scope.goals,
      }

      // save the data to the database
      $http.post('/api/students', newStudent)
        .success(function(data) {
          $state.go('list');
          console.log("it worked!");
        })
        .error(function(data) {
          console.log(data);
        });
      }

    }

  angular.module("cmsa")
         .controller("NewCtrl", ['$scope', '$http', '$state', NewCtrl]);
})();
