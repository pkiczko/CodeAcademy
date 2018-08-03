const reducer = (accumulator, currentValue) => accumulator + currentValue;
class Media {
  constructor(title){
    this._title = title;
    this._rating = [];
    this._isCheckedOut = false;
  }
  get title(){return this._title;}
  set title(titl){this._title = titl;}
  get rating(){return this._rating;}
  set rating(rate){this._rating.push(rate);}
  get isCheckedOut(){return this._isCheckedOut;}
  set isCheckedOut(data){this._isCheckedOut = data;}
  getAverageRating(){if (this.rating===false) {return 'Not rated yet!';} else return this.rating;}
  toggleCheckOutStatus(){if (this.isCheckedOut===true){this.isCheckedOut = false;} else {this.isCheckedOut = true; console.log(this.title + ' checked out!')}}
addRating(rate){if(typeof rate === 'number' && rate <= 10 && rate >0) {this.rating.push(rate);
                 console.log('Rating correct');} else{return 'Wrong rating, to rate correctly use numbers 1 to 10!'}}
  getAverageRating(){if (this.rating===false) {return 'Not rated yet!';} else return +(this.rating.reduce(reducer)/this.rating.length).toFixed(2);}
}
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){return this._author;}
  set author(auth){this._author = auth;}
  get pages(){return this._pages;}
  set pages(page){this._pages = page;}
}
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){return this._director;}
  set director(dir){this._director = dir;}
  get runTime(){return this._runTime;}
  set runTime(x){this._runTime = x;}
}
class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){return this._artist;}
  set artist(art){this._artist = art;}
  get songs(){return this._songs;}
  set songs(song){this._songs = song;}
}
//let arr = [1,2,3,4,5];
//console.log(arr.reduce(reducer));
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
