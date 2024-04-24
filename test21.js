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
const [A, B] = lines[0].trim().split(' ').map(Number);
const minimumProduct = Math.min(A, B) ** 2;
// 結果を出力
console.log(minimumProduct);
});