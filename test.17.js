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

const OR = (a, b) => a === 1 || b === 1 ? 1 : 0;

const [A, B, C1] = lines[0].split(' ').map(Number);

const XOR = (a, b) => a !== b ? 1 : 0;
const AND = (a, b) => a === 1 && b === 1 ? 1 : 0;

const C2 = OR(AND(A, B), AND(C1, XOR(A, B)));
const S = XOR(XOR(A, B), C1);

console.log(`${C2} ${S}`);
});