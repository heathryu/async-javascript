const { cook, deliver } = require('./foodService');

const cookAndDeliver = (ingredient) => {
  return cook(ingredient).then(deliver);
};

// const cookAndDeliver = async (ingredient) => {
//   const food = await cook(ingredient);

//   return await deliver(food)
// };

const cookTwoDishes = (firstIngredient, secondIngredient) => {
  return Promise.all([cook(firstIngredient), cook(secondIngredient)]).then(
    ([firstDish, secondDish]) => `${firstDish} and ${secondDish}`
  );
};

// const cookTwoDishes = async (firstIngredient, secondIngredient) => {
//   const result = await Promise.all([
//     cook(firstIngredient),
//     cook(secondIngredient),
//   ]);

//   return `${result[0]} and ${result[1]}`;
// };

const cookMassiveMeal = (...ingredients) => {
  const promises = ingredients.map(cook);

  return Promise.all(promises).then((resolvedValues) =>
    resolvedValues.join(', ')
  );
};

// const cookMassiveMeal = async (...ingredients) => {
//   const promises = ingredients.map(cook);

//   return (await Promise.all(promises)).join(', ');
// };

module.exports = {
  cookTwoDishes,
  cookAndDeliver,
  cookMassiveMeal,
};
