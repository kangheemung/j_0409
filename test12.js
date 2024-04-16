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
 const [N, K] = lines[0].split(' ').map(Number);
  for (let i = 1; i <= N; i++) {
          const Ai = parseInt(lines[i]);
    console.log(Ai + K);
  }
});