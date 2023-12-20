// functions.js
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

function sayHello(name){
    if (name === 'Will') {
        return "No more testing Will!"
    } else {
        return `Hi there ${name}!`;
    }
}

function buildCar(color, type) {
    const carDetails = {};

    if (color){
        carDetails.color = color;
    }

    if (type){
        carDetails.type = type;
    }

    return carDetails;
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}