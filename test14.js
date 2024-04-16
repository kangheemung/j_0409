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
const n = parseInt(lines[0]);
  const a = [];

  for (let i = 1; i <= n; i++) {
    a.push(parseInt(lines[i]));
  }

  a.reverse();

  a.forEach((i) => {
    console.log(i);
  });
});