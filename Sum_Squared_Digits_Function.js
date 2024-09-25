// Read input from stdin
const readline = require('readline');

// Create an interface to read from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

function ssd(data,p ){
    for(let i=0 ;i < p; i++){
        let sum = 0
        let d = data[i].split(" ").map(Number)
        let b = d[1]
        let n = d[2]
        while(n !== 0){
            let reminder = n % b
            sum += reminder ** 2
            n = Math.floor(n / b);
        }
        console.log(`${i+1} ${sum}`)
    }
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {

    const [p] = input[0].split(' ').map(Number);
    const data = input.slice(1);
    ssd(data,p)
});
