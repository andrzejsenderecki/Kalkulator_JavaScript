document.addEventListener("DOMContentLoaded", function() {

    var numbersBtn = document.querySelectorAll(".main-button-numbers");
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
    var display = document.getElementById("display");
    var displayTop = document.getElementById("displayTop");

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
    var mirrorArray = [];
    var toPercent = null;

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
                    if (mirrorArray.length === 4) {
                        mirrorArray.splice(2, 1);
                        displayTop.innerText = mirrorArray.join('');
                        displayNow = mirrorArray[2];
                    }
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
                    if (mirrorArray.length === 4) {
                        mirrorArray.splice(2, 1);
                        displayTop.innerText = mirrorArray.join('');
                        displayNow = mirrorArray[2];
                }
                break;
            }
            case '*': {
                parseToFloat();
                result = numberOne * numberTwo;
                countResultDate();
                if (mirrorArray.length === 4) {
                    mirrorArray.splice(2, 1);
                    displayTop.innerText = mirrorArray.join('');
                    displayNow = mirrorArray[2];
                }
                break;
            }
            case '/': {
                parseToFloat();
                result = numberOne / numberTwo;
                countResultDate();
                if (mirrorArray.length === 4) {
                    mirrorArray.splice(2, 1);
                    displayTop.innerText = mirrorArray.join('');
                    displayNow = mirrorArray[2];
                }
                break;
            }
            case '+/-': {
                parseToFloat();
                displayNow = display.innerText;
                mirrorArray[0] = numberOne;
                mirrorArray[2] = numberTwo;
                if (countArr1[0] !== undefined && countArr2[0] === undefined) {
                    if (displayNow > 0) {
                        displayTopArr.unshift('-');
                        displayTop.innerText = displayTopArr.join('');
                        displayNow = '-' + displayNow;
                        countArr1 = displayNow;
                        mirrorArray[0] = countArr1;
                        parseFloat(displayNow);
                    } else if (displayNow < 0) {
                        displayTopArr.shift();
                        displayTop.innerText = displayTopArr.join('');
                        displayNow = displayTopArr.join('');
                        countArr1 = displayNow;
                        mirrorArray[0] = countArr1;
                        parseFloat(displayNow);
                    }
                } else if (countArr1[0] !== undefined && countArr2[0] !== undefined){
                    if (mirrorArray.length === 3) {
                        mirrorArray.splice(2, 0, "-");
                        displayTop.innerText = mirrorArray.join('');
                        displayNow = '-' + displayNow;
                        parseFloat(displayNow);
                        countArr2 = [];
                        countArr2[0] = parseFloat(displayNow);
                    } else if (mirrorArray.length === 4) {
                        mirrorArray.splice(2, 1);
                        displayTop.innerText = mirrorArray.join('');
                        displayNow = mirrorArray[2];
                        parseFloat(displayNow);
                        countArr2 = [];
                        countArr2[0] = parseFloat(displayNow);
                    }
                }
                display.innerText = displayNow;
                break;
            }
            case 'square': {
                displayNow = display.innerText;
                parseFloat(displayNow);
                console.log(displayNow);
                result = displayNow * displayNow;
                countResultDate();
                if (mirrorArray.length === 4) {
                    mirrorArray.splice(2, 1);
                    displayTop.innerText = mirrorArray.join('');
                    displayNow = mirrorArray[2];
                }
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
                    numberOnePercent = numberOne / 100;
                    toPercent = numberOnePercent * numberTwo;
                    result = (numberOne / toPercent) * numberOne;
                    console.log(numberOne);
                    console.log(numberTwo);
                    console.log(result);
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

    for (var i=0; i<numbersBtn.length; i++) {
        numbersBtn[i].addEventListener("click", function () {
            if (action === null || countArr1[0] === undefined) {
                countArr1 = countArr1 + this.dataset.number;
                display.innerText = countArr1;
                disLength = countArr1;
                displayLength();
                displayTopArr.push(this.dataset.number);
                displayTop.innerText = displayTopArr.join('');
            } else {
                if (countArr2[0] === undefined) {
                    displayLengthReset();
                }
                countArr2 = countArr2 + this.dataset.number;
                display.innerText = countArr2;
                disLength = countArr2;
                displayLength();
                displayTopArr.push(this.dataset.number);
                displayTop.innerText = displayTopArr.join('');
            }
        });
    }

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
        if (countArr1[0] !== undefined) {
            countPlus = 1;
            action = '+';
            mirrorArray[1] = '+';
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
        }
    });

    buttonMinus.addEventListener("click", function () {
        mirrorArray[1] = '-';
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
        if (countArr1[0] !== undefined) {
            mirrorArray[1] = '*';
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
        }
    });

    buttonDivide.addEventListener("click", function () {
        if (countArr1[0] !== undefined) {
            mirrorArray[1] = '/';
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
        }
    });

    buttonEqual.addEventListener("click", function () {
        if (countArr1[0] !== undefined && countArr2[0] !== undefined) {
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
        }
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
        displayTopArr = [];
        displayTop.innerText = '0';
        mirrorArray = [];
        numberOnePercent = 0;
        displayNow = null;
        toPercent = null;
        displayLength();
        displayLengthReset();
    });

    buttonMirror.addEventListener("click", function () {
        action = '+/-';
        count();
    });

    buttonSquare.addEventListener("click", function () {
        if (countArr1[0] !== undefined) {
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
            action = 'square';
            count();
            disLength = result.toString();
            displayLength();
        }
    });

    buttonPercent.addEventListener("click", function () {
        if (countArr1[0] !== undefined) {
            action = 'percent';
            displayTopArr.push('%');
            displayTop.innerText = displayTopArr.join('');
            count();
            disLength = result.toString();
            displayLength();
        }
    });
});