{"changed":true,"filter":false,"title":"test9.js","tooltip":"/test9.js","value":"process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n// 自分の得意な言語で\n// Let's チャレンジ！！\nvar lines = [];\nvar reader = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nreader.on('line', (line) => {\n  lines.push(line);\n});\nreader.on('close', () => {\n  const [a, b] = lines[0].split(' ').map(Number);\n  console.log(Number(!(a ^ b)));\n});","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","  const [a, b] = lines[0].split(' ').map(Number);","  console.log(Number(!(a ^ b)));","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":1},"end":{"row":14,"column":32},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1713162227903}