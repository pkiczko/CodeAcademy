let v = '';
var x = 0;
var allDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function getSleepHours(day) {
  v = day;
  switch(day) {
    case 'monday' : return 8; break;
    case 'tuesday' : return 8; break;
    case 'wednesday' : return 8; break;
    case 'thursday' : return 8; break;
    case 'friday' : return 8; break;
    case 'saturday' : return 8; break;
    case 'sunday' : return 8; break;
  }
  //console.log(v);
}
function getActualSleepHours() {
  x = 0;
  allDays.forEach(function(element){
    x+= getSleepHours(element);
    //console.log(element + x);
});
  return x;
}
function getIdealSleepHours() {
  let idealHours = 7;
  return idealHours * 7;
}
function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  //console.log(actualSleepHours + '  ' + getIdealSleepHours());
  if (actualSleepHours - getIdealSleepHours() < 0)
      console.log(`You need to get more sleep! You missed on ${Math.abs(actualSleepHours - getIdealSleepHours())} hours of sleep this week!`);
  else if (actualSleepHours - getIdealSleepHours() === 0) console.log('You are having just enough sleep!');
  else console.log(`You are having too much sleep by ${actualSleepHours - getIdealSleepHours()} hours!`);
         }
getSleepHours('monday');
console.log(`You slept ${getSleepHours(v)} hours on ${v}.`);
//getActualSleepHours();
//console.log(getIdealSleepHours());
calculateSleepDebt();
