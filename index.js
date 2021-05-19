// Code your solutions in this file


function writeCards(names, event) {
    const congrats = []
    for (let i = 0; i < names.length; i++) {
        congrats.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return congrats;
}

writeCards(["Ada", "Brendan", "Ali"], "surprise" );

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);

function countUp(num){
    while (num <= 10){
        console.log(num);
        num++;
    }
}