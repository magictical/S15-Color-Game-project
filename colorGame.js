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

// for 문으로 iterate하며 color 부여
for(var i = 0; i < square.length; i++) {
  //파폭에서는 background가 적동안함 backgroundColor를 사용하자!
  square[i].style.backgroundColor = colors[i];

  //각배열에 eventListener추가
  square[i].addEventListener("click", function() {
      //클릭하면 해당 배열의 RGB값을 리턴
      var pickedColor =this.style.backgroundColor;
      if(pickedColor === targetColor) {
        alert("Correct!");
      } else {
        //답이 틀린경우 해당 square를 없앤다.
        this.style.backgroundColor = "#232323";

        //틀린경우 tray again 출력
      }
  });
}
