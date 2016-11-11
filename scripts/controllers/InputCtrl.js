// Controller for New Student Input Fields
(function (){
  function InputCtrl() {

    this.blank = [
      {
        studentsName: "",
        parentsName: "",
        address: "",
        phoneNumber: "",
        email: "",
        birthday: "",
        school: "",
        grade: "",
        years: "",
        otherInstruments: "",
        reasonLessons: "",
        goals: ""
      }
    ];

  }

  angular.module("cmsa")
         .controller("InputCtrl", InputCtrl);
})();
