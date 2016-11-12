// Controller for New Student
(function (){
  function NewCtrl($scope) {

    $scope.studentsName = "";
    $scope.parentsName = "";
    $scope.address = "";
    $scope.telephoneNumber = "";
    $scope.email = "";
    $scope.birthday = "";
    $scope.school = "";
    $scope.grade = "";
    $scope.years = "";
    $scope.otherInstruments = "";
    $scope.reasonLessons = "";
    $scope.goals = "";


    $scope.addStudent = function() {

      var newStudent = {
        studentsName: $scope.studentsName,
        parentsName: $scope.parentsName,
        address: $scope.address,
        telephoneNumber: $scope.telephoneNumber,
        email: $scope.email,
        birthday: $scope.birthday,
        school: $scope.school,
        grade: $scope.grade,
        years: $scope.years,
        otherInstruments: $scope.otherInstruments,
        reasonLessons: $scope.reasonLessons,
        goals: $scope.goals,
      }

      return newStudent;
      $scope.students.push(newStudent);




    this.heading = "New Student";

    this.new = [
      {
        studentsName: "Students Name",
        parentsName: "Parents Name",
        address: "Home Address",
        phoneNumber: "Phone Number",
        email: "Email",
        birthday: "Birthday",
        school: "School",
        grade: "Grade in School",
        years: "Years in Lessons",
        otherInstruments: "Other Instruments",
        reasonLessons: "Why are you intrested in taking lessons",
        goals: "What are your goals"
      }
    ];

  }
}



  angular.module("cmsa")
         .controller("NewCtrl", ['$scope', NewCtrl]);
})();
