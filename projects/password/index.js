function random(nb) {
  const randomNumber = Math.floor(Math.random() * nb);

  return randomNumber;
}

const letters = 'abcdefghijklmnopqrstuvwxyz';
function getLetter() {
  const n = random(letters.length);
  return letters[n];
}

function makePassword(options = {}) {
  let { size, withNumber } = options;

  if (!size) {
    size = 10;
  }
  // == toléré car on teste null et undefined
  if (withNumber == null) {
    withNumber = true;
  }

  let password = '';

  for (let i = 1; i <= size; i++) {
    if (withNumber && i % 2 === 0) {
      password += random(10);
    } else {
      password += getLetter();
    }
  }

  if (size < 8) {
    console.log('Trop court');
  }

  return password;
}

console.log('Pwd', makePassword({ size: 8, withNumber: false }));
