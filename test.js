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
const N = parseInt(lines[0],10);
let results = [];

for(let i = 1; i <= N; i++) {

const currentLine = lines[i].split(' ');
const K = parseInt(currentLine[0]);

let sum = 0;

for(let j = 1; j <= K; j++){
    sum += parseInt(currentLine[j]);
}

results.push(sum);


}
console.log(results.join('\n'));
});