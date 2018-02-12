var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];
//모든 square 선택
var square = document.querySelectorAll(".square");
// the RGB value will be displayed on h1
var targetColor = colors[3];
//select span in h1 by id
var displayRGB = document.getElementById("colorDisplay");
//set RGB value in the span
displayRGB.textContent = targetColor;

var messageDisplay = document.getElementById("message");

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
        //나머지 square도 모두 같은색으로 바꾼다.
        changeColor(pickedColor);

      } else {
        //답이 틀린경우 해당 square를 없앤다.
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
  });
}

//정답일때 모든 square 색을 정답색으로 변경
function changeColor(pickedColor) {
  for(var i = 0; i < color.length; i++) {
    square[i].style.backgroundColor = pickedColor;
  }
}
