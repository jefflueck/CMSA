// Controller for List View
(function (){
  function ListCtrl() {

    this.heading = "Student List";

    this.students = [
      {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "111-111-1111",
        address: "111 Main Street",
        birthday: "01/01/1111",
        email: "youreamil@provider.com",
        schoolName: "Any School USA",
        currentGrade: "4",
        yearsOfLessons: "4",
        otherInstruments: "Drums",
        intrests: "Stuff",
        goals: "Learn Piano"
      },
      {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "111-111-1111",
        address: "111 Main Street",
        birthday: "01/01/1111",
        email: "youreamil@provider.com",
        schoolName: "Any School USA",
        currentGrade: "4",
        yearsOfLessons: "4",
        otherInstruments: "Drums",
        intrests: "Stuff",
        goals: "Learn Piano"
      }
    ];

  }

  angular.module("cmsa")
         .controller("ListCtrl", ListCtrl);
})();
