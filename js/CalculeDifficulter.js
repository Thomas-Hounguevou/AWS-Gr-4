function calculeScore(motsecret) {
  let score = 0;
  const points = {
    'A': 1, 'E': 1, 'I': 1, 'L': 1, 'N': 1, 'O': 1, 'R': 1, 'S': 1, 'T': 1, 'U': 1,
    'D': 2, 'G': 2, 'M': 2,
    'B': 3, 'C': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4,
    'J': 8, 'Q': 8,
    'K': 10, 'W': 10, 'X': 10, 'Y': 10, 'Z': 10
  };
  for (let i = 0; i < mot.length; i++) {
    const lettre = mot[i].toUpperCase();
    if (points[lettre]) {
      score += points[lettre];
    }
  }
  return score;
}

// Exemple d'utilisation :
const motsecret = "JavaScript";
const score = calculeScore(motsecret);
console.log(`Le mot "${motsecret}" vaut ${score} points`);
