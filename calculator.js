var ops = window.prompt("Enter your desired arithmetic operator \n (+,_,*/): ");

var fnum = parseInt(window.prompt("Enter first number(0-9)"));

var snum = parseInt(window.prompt(`Enter second number(0-9): \n ${fnum} ${ops}`));

function calculate() {
  if (ops == "+") {
    return fnum + snum;
  } else if (ops == "-") {
    return fnum - snum;
  } else if (ops == "*") {
    return fnum * snum;
  } else if (ops == "/") {
    return fnum / snum;
  } else {
    return "You entered the wrong operator";
  }
}

var solution = calculate();
 alert(`Result \n${fnum} ${ops} ${snum} \n= ${solution}`);



