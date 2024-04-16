process.stdin.resume();
process.stdin.setEncoding('utf8');
// Let's チャレンジ！！

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  const [a, b, c, d] = line.split(' ').map(Number);

  const result = ((a || b) && c) ^ d;

  console.log(result);
});