const catDialogues = [
  '"I really need some alone time. Can you go back to commuting like you used to?"',
  '"Stop this "bath" thing you do on me every now and then, please?"',
];

let currentDialogueIndex = 0;

document.getElementById('cat-dialogue').innerHTML =
  catDialogues[currentDialogueIndex];

document.getElementById('while-loop').addEventListener('click', (event) => {
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
});

document.getElementById('alert').addEventListener('click', (event) => {
  alert('Hello, London Koders');
});

document.getElementById('set-timeout').addEventListener('click', (event) => {

  document.getElementById('cat-dialogue').innerHTML = 'The cat is pondering..';
  setTimeout(() => {
    currentDialogueIndex = currentDialogueIndex === 0 ? 1 : 0;
    document.getElementById('cat-dialogue').innerHTML =
      catDialogues[currentDialogueIndex];
  }, 2000);
});
