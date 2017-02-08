var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');
var app = express();

mongoose.connect('mongodb://localhost/cmsa');

// initialize passport before methods
app.use(passport.initialize());

app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //parse application/vnd.api+json as json

var userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf23Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf25Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET");
};

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
      });
    }
  ));

var studentSchema = mongoose.Schema({
    studentsName: String,
    parentsName: String,
    phoneNumber: String,
    address: String,
    birthday: String,
    email: String,
    schoolName: String,
    currentGrade: String,
    yearsInLessons: String,
    otherInstruments: String,
    reasonForLessons: String,
    goals: String
});

var Student = mongoose.model('Student', studentSchema);

// tells the app where our static files are so they can be sent to the frontend when requested
app.use(express.static(__dirname + '/app'));

app.get('/api/students', function(req, res) {

    // List students call using mongoose to database
    // use mongoose to get all students in the database
    Student.find(function(err, students) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(students); // return all students in JSON format
    });
});

// Click to see single student information using mongoose to endpoint at the database
app.get('/api/students/:id', function(req, res) {

  Student.findById(req.params.id, function(err, student) {
    if (err) {
      res.send(err);
    }

    res.json(student);
  });
});

// Add student to database using mongoose
// Form rendered with angular template NewCtrl binding to database
app.post('/api/students/', function(req, res) {

  console.log("Frontend working");

  console.log(req.body);

  // create a student in database
  Student.create(req.body, function(err, student) {

    if (err) {
      res.send(err);
    }

    res.json(student);
  });
});

app.delete('/api/students/:id', function(req,res) {

  console.log("Frontend working!");

  console.log(req.params.id);


  Student.findByIdAndRemove(req.params.id, function(err, students) {
      if (err) {
        res.send(err)
      }
      // Show new list after deletion of student from database list
      Student.find(function(err, students) {
        if(err)
        res.send(err)

        res.json(students);
    });
  });
});

app.put('/api/students/:id', function(req, res) {
  console.log("Frontend working!");

  console.log(req.params.id);

  Student.findByIdAndUpdate(req.params.id, req.body, function(err, students) {
    if(err) {
      res.send(err)
    }

    res.json(students);
  });
});

app.get('*', function(req, res) {
  res.sendfile('./app/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
