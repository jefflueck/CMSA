// Controller for New Student
(function (){
  function NewCtrl() {

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
      },
      this.blank = [
        {
          studentsName: "jeff",
          parentsName: "jeff",
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
  ];

  }

  angular.module("cmsa")
         .controller("NewCtrl", NewCtrl);
})();
