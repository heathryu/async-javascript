const { cook, deliver } = require('./foodService');

console.log('Start of the main flow of the Application 🚀');

const start = process.hrtime.bigint();
const logElapsedTime = () =>
  console.log(
    `\n⏱  Elapsed time: ${(process.hrtime.bigint() - start) / BigInt(1e6)} ms\n`
  );

// Write your code here and call logElapsedTime() to check
// how much time was elapsed to complete running your code

console.log('End of the main flow of the Application 👋\n');
logElapsedTime();
