// adding click eventlistener to each button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
   });
}

// detecting whether and which key is pressed
document.addEventListener("keydown", function (event) {
   makeSound(event.key);
});

// function to play sound 
function makeSound(buttonInnerHTML) {

   switch (buttonInnerHTML) {
      case "q":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
      case "w":
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      case "e":
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
      case "u":
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
      case "i":
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "o":
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
      case "p":
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;

      default: console.log(buttonInnerHTML);
   }
   buttonAnimation(buttonInnerHTML);
}
// adding animations to our website using callback functions
// document.addEventListener("keydown", respondToKey(event));
// function respondToKey(event) {
//    console.log("key is pressed")
// }
function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");     // used to add pressed css class in activeButton element's class

   setTimeout(function () {                   // this function executes after a delay of 100 milliseconds
      activeButton.classList.remove("pressed");   // used to remove pressed css class in activeButton element's class 
   }, 100);
}