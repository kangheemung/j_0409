{"filter":false,"title":"test21.js","tooltip":"/test21.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","input: process.stdin,","output: process.stdout","});","reader.on('line', (line) => {","lines.push(line);","});","reader.on('close', () => {","const [A, B] = lines[0].trim().split(' ').map(Number);","const minimumProduct = Math.min(A, B) ** 2;","// 結果を出力","console.log(minimumProduct);","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":3},"end":{"row":17,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1713956813980,"hash":"db986510c96a0aba9316e1aca59cfa43226eb094"}