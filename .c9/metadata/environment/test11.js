{"changed":true,"filter":false,"title":"test11.js","tooltip":"/test11.js","value":"process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n// 自分の得意な言語で\n// Let's チャレンジ！！\nvar lines = [];\nvar reader = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nreader.on('line', (line) => {\n  lines.push(line);\n});\nreader.on('close', () => {\nconst addStrings = (S, T) => {\n    const num1 = parseInt(S);\n    const num2 = parseInt(T);\n    const sum = num1 + num2;\n    return sum.toString();\n}\n// lines 配列から入力値を取得\nconst C = lines[0];\nconst T = lines[1];\n\n// 結果を出力\nconsole.log(addStrings(C, T));\n  \n  \n});","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","const addStrings = (S, T) => {","    const num1 = parseInt(S);","    const num2 = parseInt(T);","    const sum = num1 + num2;","    return sum.toString();","}","// lines 配列から入力値を取得","const C = lines[0];","const T = lines[1];","","// 結果を出力","console.log(addStrings(C, T));","  ","  ","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":3},"end":{"row":27,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1713191887469}