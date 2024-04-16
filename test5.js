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
  const line=lines[0].split(' ');
  const A = parseInt(line[0], 10);
  const B = parseInt(line[1], 10);
  
  const result = A ^ B;
  
  console.log (result);
});