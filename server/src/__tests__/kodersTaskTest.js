const {
  cookTwoDishes,
  cookAndDeliver,
  cookMassiveMeal,
} = require('../kodersTask');

describe('Koders Task', () => {
  describe('cookAndDeliver', () => {
    it('should resolve to expected value', async () => {
      const result = cookAndDeliver('🐔');
      await expect(result).resolves.toBe(
        'Delivered 🍗 via 🛵. Enjoy your meal!'
      );
    });
  });

  describe('cookTwoDishes', () => {
    it('should resolve to expected value', async () => {
      const result = cookTwoDishes('🐄', '🥑');
      await expect(result).resolves.toBe('🥩 and 🥗');
    });
  });

  describe('cookMassiveMeal', () => {
    it('should resolve to expected value', async () => {
      const result = cookMassiveMeal('🥑', '🐔', '🐮', '🌾');
      await expect(result).resolves.toBe('🥗, 🍗, 🥩, 🍙');
    });
  });
});
