let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for \$${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
};

const meals = ['Spaghetti Bolognese', 'Grilled Chicken', 'Vegetable Stir Fry'];
const prices = [12.99, 9.99, 8.99];

menu.meal = meals[Math.floor(Math.random() * meals.length)];
menu.price = prices[Math.floor(Math.random() * prices.length)];

console.log(menu.todaysSpecial);