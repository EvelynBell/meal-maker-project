var menu = {
    //Our menu will have three courses to choose from
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    //Method creates and object with inherited name and price and passes into specified course array
    addDishToCourse: function (courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };

        menu.courses[courseName].push(dish);
    },

    //Method returns a random dish object from specified course array
    getRandomDishFromCourse: function (courseName) {
        randIndex = Math.floor(Math.random() * menu.courses[courseName].length);
        return menu.courses[courseName][randIndex];
    },

    //Uses randomDish method to generate a meal receipt and return it as a string
    generateRandomMeal: function () {
        var appetizer = menu.getRandomDishFromCourse('appetizers');
        var main = menu.getRandomDishFromCourse('mains');
        var dessert = menu.getRandomDishFromCourse('desserts');

        var totalPrice = appetizer.price + main.price + dessert.price;

        return(`Your randomly generated meal is complete! \n
        Appetizer: ${appetizer.name} \n
        Main Course: ${main.name} \n
        Dessert: ${dessert.name} \n
        The total price for your meal is $${totalPrice}.`);
    }
};

//Load an assortment of items into our menu object
menu.addDishToCourse('appetizers', 'french fries', 5);
menu.addDishToCourse('appetizers', 'mozzarella sticks', 8);
menu.addDishToCourse('appetizers', 'onion rings', 8);

menu.addDishToCourse('mains', 'spaghetti', 11);
menu.addDishToCourse('mains', 'burger', 15);
menu.addDishToCourse('mains', 'grilled cheese', 12);

menu.addDishToCourse('desserts', 'ice cream', 6);
menu.addDishToCourse('desserts', 'cheesecake', 10);
menu.addDishToCourse('desserts', 'cherry pie', 9);

//Log to console the string return from the generateRandomMeal method
console.log(menu.generateRandomMeal());
