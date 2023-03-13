let names = [" James", " Oscar", " Raffols"];

document.getElementById("names").innerHTML = names;

let addName = () => {
  let newName = prompt("Add another name: ", "");
  names.push(" " + newName); // Add a space before the new name

  document.getElementById("names").innerHTML = names;
};

let spliceNameRemove = () => {
  names.splice(1, 2);

  document.getElementById("names").innerHTML = names;
};

let spliceNameAdd = () => {
  names.splice(1, 0, "Harold", "Butch");

  document.getElementById("names").innerHTML = names;
};

let popName = () => {
  names.pop();

  document.getElementById("names").innerHTML = names;
};

let sortName = () => {
  names.sort();

  document.getElementById("names").innerHTML = names;
};

let getNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; //get a random number inside the array
  document.getElementById("number").innerHTML = randomNumber;

  switch (true) {
    case randomNumber == 1:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 2:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 3:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 4:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 5:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 6:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 7:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 8:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    case randomNumber == 9:
      document.getElementById("equal").innerHTML = "Yes it's equal to 9";
      break;
    case randomNumber == 10:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;
    default:
      "";
  }

  // The switch (true) syntax is used here to evaluate the case statements as boolean expressions. This is done to check if the expression in each case statement is true or false, based on the comparison between the value of the randomNumber variable and the number specified in the case statement.
};

let numLoops = () => {
  for (let i = 0; i < 10; i++) {
    document.getElementById("getLoops").innerHTML += i; // += to show all the numbers on loop
    if (i == 8) {
      document.getElementById("stopLoops").innerHTML =
        "Loop stop since it reached 8";
      document.getElementById("loopButton").disabled = true;
      document.getElementById("loopButtonP").innerHTML = "Button disabled";

      break;
    }
  }
};

let zero = () => {
  document.getElementById("clickedNum").innerHTML = 0;

  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let one = () => {
  document.getElementById("clickedNum").innerHTML = 1;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let two = () => {
  document.getElementById("clickedNum").innerHTML = 2;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let three = () => {
  document.getElementById("clickedNum").innerHTML = 3;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let four = () => {
  document.getElementById("clickedNum").innerHTML = 4;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let five = () => {
  document.getElementById("clickedNum").innerHTML = 5;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let six = () => {
  document.getElementById("clickedNum").innerHTML = 6;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let seven = () => {
  document.getElementById("clickedNum").innerHTML = 7;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let eight = () => {
  document.getElementById("clickedNum").innerHTML = 8;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let nine = () => {
  document.getElementById("clickedNum").innerHTML = 9;
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};
