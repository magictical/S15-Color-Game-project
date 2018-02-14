var numSquares = 6;
//generate random color
var colors = [];
// the RGB value will be displayed on h1
var targetColor;
//모든 square 선택
var square = document.querySelectorAll(".square");
//select span in h1 by id
var displayRGB = document.getElementById("colorDisplay");
//set RGB value in the span
displayRGB.textContent = targetColor;
//set new coolor btn to var
var newColorbtn = document.querySelector("#newGameBtn");
var messageDisplay = document.getElementById("message");
//select var for h1
var h1Display = document.querySelector("h1");
//set modeBtn class to the var
var modeButtons = document.querySelectorAll(".modeBtn");

init();

function init() {
  reset();

  setupButtons();

  // for 문으로 각 square interation
  for(var i = 0; i < square.length; i++) {
    //각배열에 eventListener추가
    square[i].addEventListener("click", function() {
        //클릭하면 해당 Square의 RGB값을 리턴
        var pickedColor = this.style.backgroundColor;
        if(pickedColor === targetColor) {
          messageDisplay.textContent = "Correct!";
          newColorbtn.textContent = "Play Again?"
          //정답일떄 나머지 square도 모두 같은색으로 바꾼다.
          changeColor(colors);
          h1Display.style.backgroundColor = pickedColor;
        } else {
          //답이 틀린경우 해당 square를 없앤다.
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
    });
  }
}

//setup for buttons
function setupButtons() {
  //effect for giving color on and off on the mode-buttons
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      //remove color on the buttons
      modeButtons[0].classList.remove("selectedBtnColor");
      modeButtons[1].classList.remove("selectedBtnColor");
      //apply color on the button
      this.classList.add("selectedBtnColor");
      //use ternary operator
      // condition ? expr1(if true) : expr2(else)
      this.textContent === "Easy" ? numSquares =3: numSquares = 6;
      reset();
    });
  }
}



//add reset function
function reset() {
  // reset settings
  colors = generateRandomColors(numSquares);
  h1Display.style.backgroundColor = "steelblue";
  newColorbtn.textContent ="New Color";
  messageDisplay.textContent = "";
  displayRGB.textContent = targetColor;
  // for 문으로 iterate하며 color 부여
  for(var i = 0; i < square.length; i++) {
    //파폭에서는 background가 적동안함 backgroundColor를 사용하자!
    //easy일경우 3개의 RGB hard일경우 6개이므로 colors 3개일때(easymod)와
    //square는 항상 6개이므로 이를 비교해서 display 유무를 결정할 수 있다.
    if(colors[i]) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    }else {
      square[i].style.display = "none";
    }
  }
}

//set listener to new Colors btn
newColorbtn.addEventListener("click", function() {
  //reset game
  reset();
});

//정답일때 모든 square 색을 정답색으로 변경
function changeColor(pickedColor) {
  for(var i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = targetColor;
  }
}

//create random colors, put them into the array and get targetColor
function generateRandomColors(numColor) {
  //array 생성 numColor 크기만큼
  var arr = [];
  //color object 생성?
  for(var i = 0; i < numColor; i++) {
    //get randomColor and push into array
    arr.push(randomColor());
  }
  //select random element in the array
  targetColor = arr[Math.floor(Math.random() * numColor)];
  //return array
  return arr;
}
//create random color based on RGB
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+ red + ", " + green + ", " + blue + ")";
}
