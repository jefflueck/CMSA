// Controller for New Student
(function (){
  function NewCtrl($scope, $http) {


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
          $scope.studentsName = "";
          $scope.parentsName = "";
          $scope.address = "";
          $scope.phoneNumber = "";
          $scope.email = "";
          $scope.birthday = "";
          $scope.schoolName = "";
          $scope.currentGrade = "";
          $scope.yearsInLessons = "";
          $scope.otherInstruments = "";
          $scope.reasonForLessons = "";
          $scope.goals = "";
          console.log("it worked!");
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
      }

    }

  angular.module("cmsa")
         .controller("NewCtrl", ['$scope', '$http', NewCtrl]);
})();
