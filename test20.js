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
  const N=parseInt(lines[0],10);
  const A = [];
  for (let i = 1; i <= N; i++) {
        A.push(parseInt(lines[i]));
    }

    const B = parseInt(lines[N + 1]);
    A.push(B);

    A.forEach(element => console.log(element));
});