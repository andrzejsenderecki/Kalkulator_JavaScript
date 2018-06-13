document.addEventListener("DOMContentLoaded", function() {

    var display = document.getElementById("display");
    var displayTop = document.getElementById("displayTop");
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
    var result = '';
    var action = null;
    var countPlus = 0;
    var countMinus = 0;
    var countMultiply = 0;
    var countDivide = 0;
    var numberOnePercent = 0;
    var displayNow = null;
    var displayTopArr = [];

    function count() {

        switch (action) {
            case '+': {
                numberOne = parseFloat(countArr1);
                numberTwo = parseFloat(countArr2);
                result = numberOne + numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                displayTopArr = [result];
                displayTop.innerText = displayTopArr;
                break;
            }
            case '-': {
                numberOne = parseFloat(countArr1);
                numberTwo = parseFloat(countArr2);
                result = numberOne - numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                displayTopArr = [result];
                displayTop.innerText = displayTopArr;
                break;
            }
            case '*': {
                numberOne = parseFloat(countArr1);
                numberTwo = parseFloat(countArr2);
                result = numberOne * numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                displayTopArr = [result];
                displayTop.innerText = displayTopArr;
                break;
            }
            case '/': {
                numberOne = parseFloat(countArr1);
                numberTwo = parseFloat(countArr2);
                result = numberOne / numberTwo;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                displayTopArr = [result];
                displayTop.innerText = displayTopArr;
                break;
            }
            case '+/-': {
                displayNow = display.innerText;
                parseFloat(displayNow);
                if (displayNow > 0) {
                    displayNow = '-' + displayNow;
                } else if (displayNow < 0) {
                    displayNow = displayNow * -1;
                }
                display.innerText = displayNow;
                if (result === null && countArr2[0] === undefined) {
                    countArr1 = displayNow;
                } else if (countArr1 !== undefined) {
                    countArr2 = displayNow;
                }
                break;
            }
            case 'square': {
                displayNow = display.innerText;
                parseFloat(displayNow);
                result = displayNow * displayNow;
                display.innerText = result;
                countArr1 = [result];
                countArr2 = [];
                displayTopArr = [result];
                displayTop.innerText = displayTopArr;
                break;
            }
            case 'percent': {
                if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '+';
                    numberOne = parseFloat(countArr1);
                    numberTwo = parseFloat(countArr2);
                    numberOnePercent = numberOne / 100;
                    result = numberOne + numberOnePercent * numberTwo;
                    display.innerText = result;
                    countArr1 = [result];
                    countArr2 = [];
                    displayTopArr = [result];
                    displayTop.innerText = displayTopArr;
                } else if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '-';
                    numberOne = parseFloat(countArr1);
                    numberTwo = parseFloat(countArr2);
                    numberOnePercent = numberOne / 100;
                    result = numberOne - numberOnePercent * numberTwo;
                    display.innerText = result;
                    countArr1 = [result];
                    countArr2 = [];
                } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '*';
                    numberOne = parseFloat(countArr1);
                    numberTwo = parseFloat(countArr2);
                    numberOnePercent = numberOne / 100;
                    result = numberOnePercent * numberTwo;
                    display.innerText = result;
                    countArr1 = [result];
                    countArr2 = [];
                    displayTopArr = [result];
                    displayTop.innerText = displayTopArr;
                } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '/';
                    numberOne = parseFloat(countArr1);
                    numberTwo = parseFloat(countArr2);
                    result = numberOne / numberTwo * numberOne;
                    display.innerText = result;
                    countArr1 = [result];
                    countArr2 = [];
                    displayTopArr = [result];
                    displayTop.innerText = displayTopArr;
                }
                countPlus = 0;
                countMinus = 0;
                countMultiply = 0;
                countDivide = 0;
                break;
            }
        }
    }

    button1.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 1;
            display.innerText = countArr1;
            displayTopArr.push('1');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 1;
            display.innerText = countArr2;
            displayTopArr.push('1');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button2.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 2;
            display.innerText = countArr1;
            displayTopArr.push('2');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 2;
            display.innerText = countArr2;
            displayTopArr.push('2');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button3.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 3;
            display.innerText = countArr1;
            displayTopArr.push('3');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 3;
            display.innerText = countArr2;
            displayTopArr.push('3');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button4.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 4;
            display.innerText = countArr1;
            displayTopArr.push('4');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 4;
            display.innerText = countArr2;
            displayTopArr.push('4');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button5.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 5;
            display.innerText = countArr1;
            displayTopArr.push('5');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 5;
            display.innerText = countArr2;
            displayTopArr.push('5');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button6.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 6;
            display.innerText = countArr1;
            displayTopArr.push('6');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 6;
            display.innerText = countArr2;
            displayTopArr.push('6');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button7.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 7;
            display.innerText = countArr1;
            displayTopArr.push('7');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 7;
            display.innerText = countArr2;
            displayTopArr.push('7');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button8.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 8;
            display.innerText = countArr1;
            displayTopArr.push('8');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 8;
            display.innerText = countArr2;
            displayTopArr.push('8');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button9.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 9;
            display.innerText = countArr1;
            displayTopArr.push('9');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 9;
            display.innerText = countArr2;
            displayTopArr.push('9');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button0.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 0;
            display.innerText = countArr1;
            displayTopArr.push('0');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + 0;
            display.innerText = countArr2;
            displayTopArr.push('0');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    buttonComma.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + '.';
            display.innerText = countArr1;
            displayTopArr.push('.');
            displayTop.innerText = displayTopArr.join('');
        } else {
            countArr2 = countArr2 + '.';
            display.innerText = countArr2;
            displayTopArr.push('.');
            displayTop.innerText = displayTopArr.join('');
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
        displayTopArr.push('+');
        displayTop.innerText = displayTopArr.join('');
    });

    buttonMinus.addEventListener("click", function () {
        if (countArr1[0] === undefined) {
            displayTopArr.push('-');
            displayTop.innerText = displayTopArr.join('');
        }

        minus();

        function minus() {
            countMinus = 1;
            if (action === null && countArr1[0] === undefined) {
                countArr1 = '-';
                display.innerText = countArr1;
                return;
            }
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
            displayTopArr.push('-');
            displayTop.innerText = displayTopArr.join('');
        }
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
        displayTopArr.push('x');
        displayTop.innerText = displayTopArr.join('');
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
        displayTopArr.push('/');
        displayTop.innerText = displayTopArr.join('');
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
        displayTopArr = [result];
        displayTop.innerText = displayTopArr;
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
        displayTopArr = [];
        displayTop.innerText = 0;
    });

    buttonMirror.addEventListener("click", function () {
        action = '+/-';
        count();
    });

    buttonSquare.addEventListener("click", function () {
        action = 'square';
        count();
    });

    buttonPercent.addEventListener("click", function () {
        action = 'percent';
        displayTopArr.push('%');
        displayTop.innerText = displayTopArr.join('');
        count();

    });

});