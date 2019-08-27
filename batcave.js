// messages before questions
alert('INTRUDER ALERT INTRUDER ALERT');
alert('IDENTIFY');
alert('IDENTIFY');
alert('OVERRIDE INITIATED...');

// start of questions for access
var name = prompt('LOGIN NAME');
alert('HELLO ' + name.toUpperCase() + ' VERIFICATION PROCESS WILL COMMENCE');

// while loop
var questionOne;

while (questionOne !== '1939') {
    questionOne = prompt('WHAT YEAR DID BATMAN FIRST APPEAR?');
    if (questionOne.toUpperCase() === '1939') {
        break;
    }
} 

var questionTwo;

while (questionTwo !== 'BRUCE WAYNE') {
    questionTwo = prompt('WHO IS BATMAN?');
    if (questionTwo.toUpperCase() === 'BRUCE WAYNE') {
        break;
    }
}

alert('ACCESS GRANTED')