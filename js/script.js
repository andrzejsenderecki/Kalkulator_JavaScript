document.addEventListener("DOMContentLoaded", function() {

    var display = document.getElementById("display");
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    var button4 = document.getElementById("4");
    var button5 = document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 = document.getElementById("7");
    var button8 = document.getElementById("8");
    var button9 = document.getElementById("9");
    var button0 = document.getElementById("0");
    var buttonPlus = document.getElementById("plus");
    var buttonMinus = document.getElementById("minus");
    var buttonMultiply = document.getElementById("multiply");
    var buttonDivide = document.getElementById("divide");
    var buttonEqual = document.getElementById("equal");
    var buttonReset = document.getElementById("reset");
    var buttonPercent = document.getElementById("percent");
    var buttonSquare = document.getElementById("square");
    var buttonMirror = document.getElementById("mirror");
    var buttonComma = document.getElementById("comma");

    var countArr1 = [];
    var countArr2 = [];
    var numberOne = 0;
    var numberTwo = 0;
    var result = 0;
    var action = null;
    var countPlus = 0;
    var countMinus = 0;
    var countMultiply = 0;
    var countDivide = 0;
    var countEqual = 0;

    function count() {

        switch (action) {
            case '+': {
                numberOne = parseFloat(countArr1);
                console.log(numberOne);
                numberTwo = parseFloat(countArr2);
                console.log(numberOne + numberTwo);
                result = numberOne + numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                break;
            }
            case '-': {
                numberOne = parseFloat(countArr1);
                console.log(numberOne);
                numberTwo = parseFloat(countArr2);
                console.log(numberOne - numberTwo);
                result = numberOne - numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                break;
            }
            case '*': {
                numberOne = parseFloat(countArr1);
                console.log(numberOne);
                numberTwo = parseFloat(countArr2);
                console.log(numberOne * numberTwo);
                result = numberOne * numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                break;
            }
            case '/': {
                numberOne = parseFloat(countArr1);
                console.log(numberOne);
                numberTwo = parseFloat(countArr2);
                console.log(numberOne / numberTwo);
                result = numberOne / numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                break;
            }
        }
    }

    button1.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 1;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 1;
            display.innerText = countArr2;
        }
    });

    button2.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 2;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 2;
            display.innerText = countArr2;
        }
    });

    button3.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 3;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 3;
            display.innerText = countArr2;
        }
    });

    button4.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 4;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 4;
            display.innerText = countArr2;
        }
    });

    button5.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 5;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 5;
            display.innerText = countArr2;
        }
    });

    button6.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 6;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 6;
            display.innerText = countArr2;
        }
    });

    button7.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 7;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 7;
            display.innerText = countArr2;
        }
    });

    button8.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 8;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 8;
            display.innerText = countArr2;
        }
    });

    button9.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 9;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 9;
            display.innerText = countArr2;
        }
    });

    button0.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 0;
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + 0;
            display.innerText = countArr2;
        }
    });

    buttonComma.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + '.';
            display.innerText = countArr1;
        } else {
            countArr2 = countArr2 + '.';
            display.innerText = countArr2;
        }
    });

    buttonPlus.addEventListener("click", function () {
        countPlus = 1;
        action = '+';

        if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '-';
            count();
        } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '*';
            count();
        } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '/';
            count();
        } else if (action === '+' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        }
        action = '+';
        countMinus = 0;
        countMultiply = 0;
        countDivide = 0;
    });

    buttonMinus.addEventListener("click", function () {
        countMinus = 1;
        action = '-';
        if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '+';
            count();
        } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '*';
            count();
        } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '/';
            count();
        } else if (action === '-' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        }
        action = '-';
        countPlus = 0;
        countMultiply = 0;
        countDivide = 0;
    });

    buttonMultiply.addEventListener("click", function () {
        countMultiply = 1;
        action = '*';
        if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '+';
            count();
        } else if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '-';
            count();
        } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '/';
            count();
        } else if (action === '*' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        }
        action = '*';
        countPlus = 0;
        countMinus = 0;
        countDivide = 0;
    });

    buttonDivide.addEventListener("click", function () {
        countDivide = 1;
        action = '/';
        if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '+';
            count();
        } else if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '-';
            count();
        } else if (action === '*' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '*';
            count();
        } else if (action === '/' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        }
        action = '/';
        countPlus = 0;
        countMinus = 0;
        countMultiply = 0;
    });

    buttonEqual.addEventListener("click", function () {
        if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '+';
            count();
        } else if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '-';
            count();
        } else if (action === '*' && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            count();
        } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '*';
            count();
        } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
            action = '/';
            count();
        }
        countPlus = 0;
        countMinus = 0;
        countMultiply = 0;
        countDivide = 0;
    });

    buttonReset.addEventListener("click", function () {
        countArr1 = [];
        countArr2 = [];
        numberOne = 0;
        numberTwo = 0;
        action = null;
        result = 0;
        countPlus = 0;
        countMinus = 0;
        countMultiply = 0;
        countDivide = 0;
        display.innerText = result;
    });

});