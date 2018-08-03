let day = 'Thursday';
let alarm;
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello() {return 'Hello, my name is ' + this.name},
  sayGoodbye() {return 'Goodbye!'}
};
let friend = {
  name: 'Jeff',
};
friend.sayHello = person.sayHello;
person.hobbies = ['reading', 'fishing'];

if (day === 'Saturday' || day === 'Sunday') {alarm = 'weekendAlarm';}
else {alarm = 'weekAlarm';}

person.hobbies = ['eating'];

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person2 = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if (typeof newAge === 'number') {
        this._age = newAge;
      console.log(`${newAge} is valid input.`);
    } else { return console.log('Invalid input') }
  },
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
             return this._age;}
};
person2.age = 39;
console.log(person2._age);
