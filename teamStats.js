let n=0;
let team = {
  _players: [],
  _games: [],
  /*set player(playerData)
  {
    if (playerData.length === 3)
      { n++;
        console.log(`Player no. ${n} added to the 					database!`);
        this._players.push(playerData)},
		//else {console.log(`Missing some player data, 							record not added!`)}
  */
  get player(){return this._players},
  get game(){return this._games},
  addPlayer(firstN, lastN, a){
    let player = {
      firstName: firstN,
      lastName: lastN,
      age: a};
    this._players.push(player);
  },
  addGame(opponentN, teamP, opponentP){
    let game = {
      opponent: opponentN,
      teamPoints: teamP,
      opponentPoints: opponentP};
    this._games.push(game);
  }
};
// nasty way below to add data, but too late :<
team._players.push({firstName: 'Pablo',
lastName:'Sanchez',
age: 11});
team._players.push({firstName: 'Hulio',
lastName:'Gonzalez',
age: 12});
team._players.push({firstName: 'Hesus',
lastName:'Rodriguez',
age: 13});
team._players.push({firstName: 'Ronaldo',
lastName:'Gomez',
age: 10});
team._players.push({firstName: 'Enrique',
lastName:'Huston',
age: 11});
team._players.push({firstName: 'Alvaro',
lastName:'Domingo',
age: 14});
team._players.push({firstName: 'Peoples',
lastName:'Hernandez',
age: 13});
team._games.push({opponent: 'Broncos', teamPoints: 42, opponentPoints: 27});
team._games.push({opponent: 'Fajitas', teamPoints: 32, opponentPoints: 17});
team._games.push({opponent: 'Nachos', teamPoints: 22, opponentPoints: 29});

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Cranberries', 23, 21);
team.addGame('Strawberries', 13, 8);
team.addGame('Invincibles', 34, 1);
console.log(team.player);
console.log(team.game);
