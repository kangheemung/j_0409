{"filter":false,"title":"test1.js","tooltip":"/test1.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","input: process.stdin,","output: process.stdout","});","reader.on('line', (line) => {","lines.push(line);","});","reader.on('close', () => {","const N = parseInt(lines[0],10);","for(let i = 1; i <= N; i++) {","let output = '';","for(let j = 1; j <= i; j++) {","output += j + ' ';","}","console.log(output.trim());","}","});"],"id":1}],[{"start":{"row":21,"column":3},"end":{"row":21,"column":11},"action":"insert","lines":["git init"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":3},"end":{"row":21,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1712643366233,"hash":"def1e8b0a1653ade46e84f3c69468155b515a442"}