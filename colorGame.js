var numSquares = 6;
//generate random color
var colors = generateRandomColors(6);

//모든 square 선택
var square = document.querySelectorAll(".square");
// the RGB value will be displayed on h1
var targetColor;
//select span in h1 by id
var displayRGB = document.getElementById("colorDisplay");
//set RGB value in the span
displayRGB.textContent = targetColor;
//set new coolor btn to var
var newColorbtn = document.querySelector("#newGameBtn");

var messageDisplay = document.getElementById("message");
//select var for h1
var h1Display = document.querySelector("h1");
//set EasyBtn to var
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//set modeBtn class to the var
var modeButtons = document.querySelectorAll(".modeBtn");

//effect for giving color on and off on the mode-buttons
for(var i = 0; i < modeButtons.length; i++) {
  mode[i].addEventListener("click", function() {
    //remove color on the buttons
    modeButtons[0].classList.remove(".selectedBtnColor");
    modeButtons[1].classList.remove(".selectedBtnColor");
    //apply color on the button
    modeButtons[i].classList.add(".selectedBtnColor");
  })


}


// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selectedBtnColor");
//   hardBtn.classList.remove("selectedBtnColor");
//   messageDisplay.textContent = "";
//   // init backgroundColor
//   h1Display.style.backgroundColor = "#4682b4";
//   numSquares = 3;
//   //colors 배열내 RGB 3개생성 및 targetColor 생성
//   colors = generateRandomColors(numSquares);
//   // targetColor h1에 디스플레이
//   displayRGB.textContent = targetColor;
//   //display generated colors
//   for(var i = 0; i < 6; i++) {
//     if(i < 3) {
//       square[i].style.backgroundColor = colors[i];
//     } else {
//       square[i].style.display = "none";
//     }
//   }
// });
// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selectedBtnColor");
//   easyBtn.classList.remove("selectedBtnColor");
//   messageDisplay.textContent = "";
//   // init backgroundColor
//   h1Display.style.backgroundColor = "#4682b4";
//   numSquares = 6;
//   //colors 배열내 RGB 3개생성 및 targetColor 생성
//   colors = generateRandomColors(numSquares);
//   // targetColor h1에 디스플레이
//   displayRGB.textContent = targetColor;
//   //display generated colors
//   for(var i = 0; i < 6; i++) {
//     square[i].style.backgroundColor = colors[i];
//     square[i].style.display = "block";
//   }
// });


//set listener to new Colors btn
newColorbtn.addEventListener("click", function() {
  //init message
  this.textContent ="New Color";
  colors = generateRandomColors(numSquares);
  // init backgroundColor
  h1Display.style.backgroundColor = "#4682b4";
  messageDisplay.textContent = "";
  displayRGB.textContent = targetColor;
  // for 문으로 iterate하며 color 부여
  for(var i = 0; i < square.length; i++) {
    //파폭에서는 background가 적동안함 backgroundColor를 사용하자!
    square[i].style.backgroundColor = colors[i];
    //각배열에 eventListener추가
    square[i].addEventListener("click", function() {
        //클릭하면 해당 배열의 RGB값을 리턴
        var pickedColor =this.style.backgroundColor;
        if(pickedColor === targetColor) {
          messageDisplay.textContent = "Correct!";
          newColorbtn.textContent = "Play Again?"
          //나머지 square도 모두 같은색으로 바꾼다.
          changeColor(colors);
          h1Display.style.backgroundColor = pickedColor;

        } else {
          //답이 틀린경우 해당 square를 없앤다.
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
    });
  }
});



// for 문으로 iterate하며 color 부여
for(var i = 0; i < square.length; i++) {
  //파폭에서는 background가 적동안함 backgroundColor를 사용하자!
  square[i].style.backgroundColor = colors[i];

  //각배열에 eventListener추가
  square[i].addEventListener("click", function() {
      //클릭하면 해당 배열의 RGB값을 리턴
      var pickedColor = this.style.backgroundColor;
      if(pickedColor === targetColor) {
        messageDisplay.textContent = "Correct!";
        newColorbtn.textContent = "Play Again?"
        //나머지 square도 모두 같은색으로 바꾼다.
        changeColor(colors);
        h1Display.style.backgroundColor = pickedColor;

      } else {
        //답이 틀린경우 해당 square를 없앤다.
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
  });
}

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
