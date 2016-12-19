var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/cmsa');

var studentSchema = mongoose.Schema({
    studentsName: String,
    parentsName: String,
    phoneNumber: Number,
    address: String,
    birthday: Number,
    email: String,
    schoolName: String,
    currentGrade: Number,
    yearsInLessons: Number,
    otherInstruments: String,
    intrests: String,
    goals: String
});

var Student = mongoose.model('Student', studentSchema);

// tells the app where our static files are so they can be sent to the frontend when requested
app.use(express.static(__dirname + '/app'));

app.get('/api/students', function(req, res) {

    // use mongoose to get all students in the database
    Student.find(function(err, students) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }
        res.json(students); // return all students in JSON format
    });
});

app.get('/api/students/:id', function(req, res) {

  Student.findById(req.params.id, function(err, student) {
    if (err) {
      res.send(err);
    }

    res.json(student);
  });
});

app.get('*', function(req, res) {
  res.sendfile('./app/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
