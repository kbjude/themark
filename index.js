const Student = require('./models/student');
const Marks = require('./models/marks');

const student = new Student ("Jude", "s3");
const marks = new Marks ("English", student, "56");

console.log(`${student.name} scored ${marks.computeScore()}`);