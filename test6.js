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
const inputs=lines[0].split(' ');

const A=parseInt(inputs[0],10);
const B=parseInt(inputs[1],10);

const result = !(A & B);
console.log(result ? 1 : 0);



});