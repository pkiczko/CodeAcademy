let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit =>
             console.log('I want to eat a ' + fruit)
             );


             let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

             // Create the secretMessage array below
             let secretMessage = animals.map(animals =>
               animals[0]
             );

             console.log(secretMessage.join(''));

             let bigNumbers = [100, 200, 300, 400, 500];

             // Create the smallNumbers array below
             let smallNumbers = bigNumbers.map(function(number) {return number / 100;})

             let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(number => number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word =>
  word.length > 7);

// Refactor the code above using arrow function syntax

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length >5));
