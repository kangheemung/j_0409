process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
   const [A, B] = lines[0].split(' ').map(Number);
   const sum = A + B;
   const C = (sum & 2) >> 1; 
   const S = sum & 1;

  console.log(`${C} ${S}`);
});