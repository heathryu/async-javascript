const { cook, deliver } = require('./foodService');

const cookAndDeliver = (ingredient) => {
  // You should return a promise that resolves to a string in the format of
  // 'Delivered ${dish} via 🛵. Enjoy your meal!'
  // using the imported cook and deliver functions
};

const cookTwoDishes = (firstIngredient, secondIngredient) => {
  // You should return a promise that resolves to a string in the format of
  // 'firstDish and secondDish'
  // using the imported cook function
};

// Bonus points for this question!
const cookMassiveMeal = (...ingredients) => {
  // You should return a promise that resolves to a string in the format of
  // 'firstDish, secondDish, thirdDish, ..., n-thDish'
  // using the imported cook function
};

module.exports = {
  cookTwoDishes,
  cookAndDeliver,
  cookMassiveMeal,
};
