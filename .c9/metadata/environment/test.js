{"filter":false,"title":"test.js","tooltip":"/test.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","input: process.stdin,","output: process.stdout","});","reader.on('line', (line) => {","lines.push(line);","});","reader.on('close', () => {","const N = parseInt(lines[0],10);","let results = [];","","for(let i = 1; i <= N; i++) {","","```","const currentLine = lines[i].split(' ');","const K = parseInt(currentLine[0]);","","let sum = 0;","","for(let j = 1; j <= K; j++){","    sum += parseInt(currentLine[j]);","}","","results.push(sum);","","```","","}","console.log(results.join('\\n'));","});"],"id":1}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":3},"action":"remove","lines":["","```"],"id":2}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"remove","lines":["```"],"id":3},{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":28,"column":0},"end":{"row":28,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1712643339643,"hash":"9f083eb0b09a5429b5fc2237ea0a626f6ad87d0d"}