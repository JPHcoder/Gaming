//Prints two dice roll to the page

function printNumber1(number) {
  var placeholder1 = document.getElementById('placeholder1');
  placeholder1.innerHTML = number;
}

function printNumber2(number) {
  var placeholder2 = document.getElementById('placeholder2');
  placeholder2.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result1 = dice.roll();
  printNumber1(result1);
  var result2 = dice.roll();
  printNumber2(result2);

};
