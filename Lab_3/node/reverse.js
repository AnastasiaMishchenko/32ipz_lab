
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('введіть текст ', (answer) => {
    let reply = answer.split("").reverse().join("");
    console.log('дзеркальна копія:  ${answer}');
    rl.close();
});