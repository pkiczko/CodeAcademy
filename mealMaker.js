let menu = {
  _courses:
  {
    appetizer: [],
    get appetizers(){return this.appetizer},
    set appetizers(z){this.appetizer.push(z)},

    main: [],
    set mains(y){this.main.push(y)},
    get mains(){return this.main},

    dessert: [],
		set desserts(z){this.dessert.push(z)},
    get desserts(){return this.dessert}
  },
  get courses()
  {
  return {
      appetizers:
      this._courses.appetizers,
      mains:
      this._course.mains,
      desserts:
      this._course.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) 		{
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //console outputs for some troubleshooting
    //console.log(`addDishToCourse checker: ${dish}`);
    //console.log('Variables - courseName: ' + courseName + '\n dishName: ' + dishName + '\n dishPrice: ' + dishPrice);
    //console.log(`this._courses['appetizers'] checker: ${this._courses['appetizers']}`);
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName)
  	{
  	let dishes = this._courses[courseName];
  	let i = Math.floor(Math.random() * dishes.length);
    //console.log(`dishes.length is: ${dishes.length}`);
    //console.log(dishes);
  	return dishes[i];
		},
  generateRandomMeal() {
      const appetizers =
   		this.getRandomDishFromCourse('appetizers');
      const mains =
      this.getRandomDishFromCourse('mains');
      const desserts =
      this.getRandomDishFromCourse('desserts');
      console.log(appetizers);
    	console.log(mains);
    	console.log(desserts);
    	const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Prepared meal: ${appetizers.name}, ${mains.name}, ${desserts.name}. Total price is ${totalPrice}.`;
  }
  };
menu.addDishToCourse('appetizers', 'ravioli', 5);
menu.addDishToCourse('appetizers', 'shrimps', 6);
menu.addDishToCourse('appetizers', 'tomatoe soup', 4);
menu.addDishToCourse('mains', 'Beef steak', 15);
menu.addDishToCourse('mains', 'Grilled fish', 12);
menu.addDishToCourse('mains', 'Roasted chicken', 10);
menu.addDishToCourse('desserts', 'icecream', 5);
menu.addDishToCourse('desserts', 'fruity loops', 8);
menu.addDishToCourse('desserts', 'chocolate cake', 10);
let meal = menu.generateRandomMeal();
console.log(meal);
