/*
After yet another dispute on their game, the Bingo Association decides to change course and automate the game.
Can you help the association by writing a method to create a random Bingo card?

A Bingo card contains 24 unique and random numbers according to this scheme:
  5 numbers from the B column in the range 1 to 15
  5 numbers from the I column in the range 16 to 30
  4 numbers from the N column in the range 31 to 45
  5 numbers from the G column in the range 46 to 60
  5 numbers from the O column in the range 61 to 75

Task:
  Write the function get_card()/getCard(). 
  The card must be returned as an array of Bingo style numbers:
    [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]

The numbers must be in the order of their column: B, I, N, G, O. 
Within the columns, the order of the numbers is random. 
*/


// Solution

function genRange(arr, letter, start, end, count) {
  let taken = [];
  for (let i = 0; i < count;) {
    r = Math.floor(Math.random() * (end - start + 1) + start);
    if (taken.indexOf(r) == -1) {
      taken.push(r);
      arr.push(letter + r);
      i++;
    }
  }
}
function getCard() {
  let arr = [];
  genRange(arr, 'B', 1, 15, 5);
  genRange(arr, 'I', 16, 30, 5);
  genRange(arr, 'N', 31, 45, 4);
  genRange(arr, 'G', 46, 60, 5);
  genRange(arr, 'O', 61, 75, 5);
  return arr;
}

// or

function getCard() {
  let range = {
    'B': [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
    'I': [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    'N': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    'G': [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    'O': [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
  };
  return [
    'B', 'B', 'B', 'B', 'B',
    'I', 'I', 'I', 'I', 'I',
    'N', 'N',      'N', 'N',
    'G', 'G', 'G', 'G', 'G',
    'O', 'O', 'O', 'O', 'O'
  ]
  .map(c => c + range[c].splice(Math.random() * range[c].length | 0, 1));
}

// or

function getCard() {
	return [...'BINGO'].reduce((a, b, i) => {
    let s = new Set;
    while (s.size < 5) s.add(~~(Math.random() * 15 + 1 + i * 15))
    let nums = [...s]
  	return a.concat([...Array(b == 'N' ? 4 : 5)].map(_ => b + nums.pop()))
  }, [])
}