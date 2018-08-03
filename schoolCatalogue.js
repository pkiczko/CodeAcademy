class School {
  constructor(name, numberOfStudents){
    this._name = name;
    this._numberOfStudents = numberOfStudents;
    this._level = '';

  }
  get name(){return this._name}
  //set name(nam){this._name=nam}
  get level(){return this._level}
  //set level(lvl){this._level = lvl}
  get numberOfStudents(){return this._numberOfStudents}
  set numberOfStudents(number){if (typeof number === 'number' && number > 0 && number < 1000) {this._numberOfStudents = number;} else return 'Error! Incorrect input';}
  quickFacts(){console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)}
  static pickSubstituteTeacher(substitute){
    //console.log(typeof substitute);
    //console.log(substitute[0] + substitute[1]);
    //console.log('substitute length ' + substitute.length);
    //substituteTeachers=substitute.split(',');
    var x = Math.floor(Math.random()*(substitute.length-1));
    //console.log('Value of x: ' + x);
    return substitute[x];
  }
}
class Primary extends School {
  constructor(name,numberOfStudents,policy){
    super(name,numberOfStudents);
    //super(numberOfStudents);
    this._level = 'Primary';
    this._pickupPolicy = policy;
  }
  get pickupPolicy(){return this._pickupPolicy}
}
class Middle extends School {
  constructor(name, numberOfStudents){
    super(name,numberOfStudents);
    this._level = 'Middle';
    //super(numberOfStudents);}
}}
class High extends School {
  constructor(name, numberOfStudents, sports){
    super(name,numberOfStudents);
    this._level = 'High';
    //super(numberOfStudents);
  	this._sportsTeams = sports;}
  get sportsTeams(){console.log(this._sportsTeams)}
}
const lorraineHansbury = new Primary('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );
alSmith.sportsTeams;
