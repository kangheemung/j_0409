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
const addStrings = (S, T) => {
    const num1 = parseInt(S);
    const num2 = parseInt(T);
    const sum = num1 + num2;
    return sum.toString();
}
// lines 配列から入力値を取得
const C = lines[0];
const T = lines[1];

// 結果を出力
console.log(addStrings(C, T));
  
  
});