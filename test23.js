const lines = [];
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', () => {
    const line = lines[0].split(' ').map(Number);
    
    const N = line[0];
    const A = lines.slice(1, N + 1).map(Number);
    const n = parseInt(lines[lines.length - 1]);
    
    A.splice(n - 1, 1);
    
    A.forEach(element => console.log(element));
});
