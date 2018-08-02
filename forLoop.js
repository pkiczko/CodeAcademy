let vacationSpots = ['Maroco', 'Hawaii', 'Singapore'];
//console.log(vacationSpots[0]);
/*
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
*/
for (let vacationSpotIndex=vacationSpots.length - 1; vacationSpotIndex>=0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


let myPlaces = ['Maroco', 'Hawaii', 'Singapore'];
let friendPlaces = ['France', 'Russia', 'Hawaii'];
for (let myPlacesIndex=0; myPlacesIndex<myPlaces.length; myPlacesIndex++) {
  //console.log(myPlaces[myPlacesIndex]);
  for (let friendPlacesIndex=0; friendPlacesIndex<friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex]===friendPlaces[friendPlacesIndex]) {console.log(`Place we have in common is ${friendPlaces[friendPlacesIndex]}`);};
  //console.log(friendPlaces[friendPlacesIndex]);

};
};
