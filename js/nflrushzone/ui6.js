//Prints two dice roll to the page

function printNumber1(number) {
  var placeholder1 = document.getElementById('placeholder1');
  placeholder1.innerHTML = number;
}

function printNumber2(number) {
  var placeholder2 = document.getElementById('placeholder2');
  placeholder2.innerHTML = number;
}

function printNumber3(number) {
  var placeholder3 = document.getElementById('placeholder3');
  placeholder3.innerHTML = number;
}

function printNumber4(number) {
  var placeholder4 = document.getElementById('placeholder4');
  placeholder4.innerHTML = number;
}

function printNumber5(number) {
  var placeholder5 = document.getElementById('placeholder5');
  placeholder5.innerHTML = number;
}

function printNumber6(number) {
  var placeholder6 = document.getElementById('placeholder6');
  placeholder6.innerHTML = number;
}


var button = document.getElementById('button');

button.onclick = function() {
  var result1 = dice.roll();
  printNumber1(result1);
  var result2 = dice.roll();
  printNumber2(result2);
  var result3 = dice.roll();
  printNumber3(result3);
  var result4 = dice.roll();
  printNumber4(result4);
  var result5 = dice.roll();
  printNumber5(result5);
  var result6 = dice.roll();
  printNumber6(result6);


};
