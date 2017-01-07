// Controller for Editing One Student
(function (){
  function EditCtrl($scope, $http, $stateParams) {


      //edit a student from the database
      $scope.students = [];

      $http.get('/api/students/' + stateParams.id)
        .success(function(data) {
          $scope.students = data;
          console.log("Frontend working!")
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });

      $scope.editStudent = function(id) {

      var editStudent = {
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

      $http.post('/api/students/' + stateParams.id, editStudent)
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
          console.log("Frontend working!");
          console.log(data);
        })
        .error(function(data){
          console.log(data);
        })

      $http.get('/api/students')
        .success(function(data) {
          $scope.students = data;
          console.log("Frontend working!")
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });

      }

    }


  angular.module("cmsa")
         .controller("EditCtrl", ['$stateParams','$scope', '$http', EditCtrl]);
})();
