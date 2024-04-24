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
    const N = parseInt(lines[0], 10);
    const nums = lines[1].split(' ').map(Number);

    let minSum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        const sum = nums[i] + (i + 1);
        minSum = Math.min(minSum, sum);
    }

    console.log(minSum);
});
