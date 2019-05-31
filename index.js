

  var numberOne = Math.random();
  numberOne = numberOne * 6;
  numberOne = Math.floor(numberOne)+1;
  var image = "dice"+numberOne+".png";
  var imageSource="images/"+image;
  document.querySelector(".img1").setAttribute("src" , imageSource);

  var numberTwo = Math.random();
  numberTwo = numberTwo * 6;
  numberTwo = Math.floor(numberTwo)+1;
  var imageTwo = "dice"+numberTwo+".png";
  var imageSourceTwo ="images/"+imageTwo;
  document.querySelector(".img2").setAttribute("src" , imageSourceTwo);


  if (numberOne > numberTwo){
    document.querySelector("#title").textContent=" 🚩 winner is player one";
  }
  else if (numberOne < numberTwo){
    document.querySelector("#title").textContent="winner is player two 🚩";
  }else{
    document.querySelector("#title").textContent="no winner";
  }
