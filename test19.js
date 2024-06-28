const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const C = lines[0];

  if (C === C.toUpperCase()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
