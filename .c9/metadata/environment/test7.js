{"changed":true,"filter":false,"title":"test7.js","tooltip":"/test7.js","value":"process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n// 自分の得意な言語で\n// Let's チャレンジ！！\nvar lines = [];\nvar reader = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nreader.on('line', (line) => {\n  lines.push(line);\n});\nreader.on('close', () => {\nconst A=parseInt(lines[0],10);\nconst B=parseInt(lines[1],10);\nconst result = !(A | B);\nconsole.log(result ? 1 : 0);\n});","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","const A=parseInt(lines[0],10);","const B=parseInt(lines[1],10);","const result = !(A | B);","console.log(result ? 1 : 0);","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":3},"end":{"row":17,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1713154965040}