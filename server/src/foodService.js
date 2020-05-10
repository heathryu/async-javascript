const cook = (ingredient) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (ingredient) {
        case '🌾':
          resolve('🍙');
        case '🐔':
        case '🐓':
          resolve('🍗');
        case '🐮':
        case '🐄':
          resolve('🥩');
        case '🥬':
        case '🥑':
        case '🥕':
        case '🥦':
        case '':
          resolve('🥗');
        default:
          reject('💩');
      }
    }, 1000);
  });

const deliver = (dish) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delivered ${dish} via 🛵. Enjoy your meal!`);
    }, 1000);
  });

module.exports = {
  cook,
  deliver,
};
