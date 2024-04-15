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
 const Q = parseInt(lines[1],10);
 let positions = {};
 let remainingChar;
  for (let i = 2; i < 2 + Q; i++) {
    const [position, char] = lines[i].split(' ');
    positions[position] = char;
 }
remainingChar = lines[2 + Q];

 let password = '';
 for (let i = 1; i <= N; i++) {
    if (positions[i.toString()]) {
      password += positions[i.toString()];
    } else {
      password += remainingChar;
    }
 }
 console.log(password);
 
 
});