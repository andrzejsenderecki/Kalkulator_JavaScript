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
    var disLength = null;

    function displayLength() {
        if (disLength.length > 8 && disLength.length < 14) {
            display.style.fontSize = '40px';
            display.style.bottom = '18px';
        } else if (disLength.length > 13 && disLength.length < 26) {
            display.style.fontSize = '20px';
            display.style.right = '23px';
            display.style.bottom = '29px';
        } else if (disLength.length > 25 && disLength.length < 34) {
            display.style.fontSize = '15px';
            display.style.bottom = '33px';
        } else if (disLength.length > 35){
            display.style.left = '20px';
            display.style.overflow = 'hidden';
        }
    }

    function displayLengthReset() {
        disLength = null;
        display.style.fontSize = '60px';
        display.style.left = 'unset';
        display.style.right = '20px';
        display.style.bottom = '7px';
    }

    function countResultDate() {
        display.innerText = result;
        countArr1 = [result];
        countArr2 = [];
        displayTopArr = [result];
        displayTop.innerText = displayTopArr;
    }

    function parseToFloat() {
        numberOne = parseFloat(countArr1);
        numberTwo = parseFloat(countArr2);
    }

    function displayTopActions() {
        if (displayTopArr[displayTopArr.length - 1] !== '+'
            && displayTopArr[displayTopArr.length - 1] !== '-'
            && displayTopArr[displayTopArr.length - 1] !== '*'
            && displayTopArr[displayTopArr.length - 1] !== '/') {
            displayTopArr.push(action);
        }
        if (action === '+') {
            if (displayTopArr[displayTopArr.length - 1] !== '-'
                || displayTopArr[displayTopArr.length - 1] !== '*'
                || displayTopArr[displayTopArr.length - 1] !== '/') {
                displayTopArr.splice(displayTopArr.length - 1, 1, action);
                displayTop.innerText = displayTopArr.join('');
            }
        } else if (action === '-') {
            if (displayTopArr[displayTopArr.length - 1] !== '+'
                || displayTopArr[displayTopArr.length - 1] !== '*'
                || displayTopArr[displayTopArr.length - 1] !== '/') {
                displayTopArr.splice(displayTopArr.length - 1, 1, action);
                displayTop.innerText = displayTopArr.join('');
            }
        } else if (action === '*') {
            if (displayTopArr[displayTopArr.length - 1] !== '+'
                || displayTopArr[displayTopArr.length - 1] !== '-'
                || displayTopArr[displayTopArr.length - 1] !== '/') {
                displayTopArr.splice(displayTopArr.length - 1, 1, action);
                displayTop.innerText = displayTopArr.join('');
            }
        } else if (action === '/') {
            if (displayTopArr[displayTopArr.length - 1] !== '+'
                || displayTopArr[displayTopArr.length - 1] !== '-'
                || displayTopArr[displayTopArr.length - 1] !== '*') {
                displayTopArr.splice(displayTopArr.length - 1, 1, action);
                displayTop.innerText = displayTopArr.join('');
            }
        }
    }

    function count() {

        switch (action) {
            case '+': {
                parseToFloat();
                if (numberTwo !== undefined) {
                    result = numberOne + numberTwo;
                    display.innerText = result;
                    countResultDate();
                } else {
                    result = numberOne;
                    display.innerText = result;
                }
                break;
            }
            case '-': {
                parseToFloat();
                result = numberOne - numberTwo;
                countResultDate();
                break;
            }
            case '*': {
                parseToFloat();
                result = numberOne * numberTwo;
                countResultDate();
                break;
            }
            case '/': {
                parseToFloat();
                result = numberOne / numberTwo;
                countResultDate();
                break;
            }
            case '+/-': {
                displayNow = display.innerText;
                parseFloat(displayNow);
                if (displayNow > 0) {
                    displayNow = '-' + displayNow;
                    parseFloat(displayNow);
                } else if (displayNow < 0) {
                    displayNow = displayNow * -1;
                    parseFloat(displayNow);
                }
                display.innerText = displayNow;
                if (countArr1 !== undefined && countArr2[0] === undefined) {
                    countArr1 = displayNow;
                } else if (result !== null && countArr1 !== undefined) {
                    countArr2 = displayNow;
                }
                break;
            }
            case 'square': {
                displayNow = display.innerText;
                parseFloat(displayNow);

                result = displayNow * displayNow;

                countResultDate();
                break;
            }
            case 'percent': {
                if (countPlus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '+';
                    parseToFloat();
                    numberOnePercent = numberOne / 100;
                    result = numberOne + numberOnePercent * numberTwo;
                    countResultDate();
                    disLength = result.toString();
                    displayLength();
                } else if (countMinus === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '-';
                    parseToFloat();
                    numberOnePercent = numberOne / 100;
                    result = numberOne - numberOnePercent * numberTwo;
                    countResultDate();
                    disLength = result.toString();
                    displayLength();
                } else if (countMultiply === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '*';
                    parseToFloat();
                    numberOnePercent = numberOne / 100;
                    result = numberOnePercent * numberTwo;
                    countResultDate();
                    disLength = result.toString();
                    displayLength();
                } else if (countDivide === 1 && countArr1[0] !== undefined && countArr2[0] !== undefined) {
                    action = '/';
                    parseToFloat();
                    result = numberOne / numberTwo * numberOne;
                    countResultDate();
                    disLength = result.toString();
                    displayLength();
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
            disLength = countArr1;
            displayLength();
            displayTopArr.push('1');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 1;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('1');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button2.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 2;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('2');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 2;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('2');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button3.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 3;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('3');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 3;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('3');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button4.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 4;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('4');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 4;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('4');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button5.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 5;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('5');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 5;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('5');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button6.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 6;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('6');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 6;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('6');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button7.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 7;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('7');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 7;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('7');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button8.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 8;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('8');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 8;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('8');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button9.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 9;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('9');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 9;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('9');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    button0.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + 0;
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('0');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + 0;
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
            displayTopArr.push('0');
            displayTop.innerText = displayTopArr.join('');
        }
    });

    buttonComma.addEventListener("click", function () {
        if (action === null || countArr1[0] === undefined) {
            countArr1 = countArr1 + '.';
            display.innerText = countArr1;
            disLength = countArr1;
            displayLength();
            displayTopArr.push('.');
            displayTop.innerText = displayTopArr.join('');
        } else {
            if (countArr2[0] === undefined) {
                displayLengthReset();
            }
            countArr2 = countArr2 + '.';
            display.innerText = countArr2;
            disLength = countArr2;
            displayLength();
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
        disLength = result.toString();
        displayLength();
        displayTopActions();
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
            disLength = result.toString();
            displayLength();
            console.log(displayTopArr);
            console.log(displayTopArr[0]);
            displayTopActions();
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
        displayLength();
        action = '*';
        countPlus = 0;
        countMinus = 0;
        countDivide = 0;
        disLength = result.toString();
        displayLength();
        displayTopActions();
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
        disLength = result.toString();
        displayLength();
        displayTopActions();
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
        disLength = result.toString();
        displayLength();
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
        disLength = result.toString();
        displayLength();
        displayTopArr = [];
        displayTop.innerText = 0;
        displayLengthReset();
    });

    buttonMirror.addEventListener("click", function () {
        action = '+/-';
        count();
    });

    buttonSquare.addEventListener("click", function () {
        action = 'square';
        count();
        disLength = result.toString();
        displayLength();
    });

    buttonPercent.addEventListener("click", function () {
        action = 'percent';
        displayTopArr.push('%');
        displayTop.innerText = displayTopArr.join('');
        count();
        disLength = result.toString();
        displayLength();
    });

});