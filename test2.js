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
 const N = parseInt(lines[0], 10);
 const nums =lines[1].split(' ').map(Number);
let maxSum = 0;
  for (let i = 0; i < N; i++) {
    const sum = nums[i] + i + 1;
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  console.log(maxSum);
});