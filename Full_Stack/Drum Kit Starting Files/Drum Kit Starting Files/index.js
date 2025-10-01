
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { alert("I got clicked!"); });

    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    var buttonInnerHTML = this.InnerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sound/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sound/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sound/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sound/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sound/crash.mp3");
            tom1.play();
            break;
        case "kl":
            var tom1 = new Audio("sound/kick.mp3");
            tom1.play();
            break;

        default: console.log(buttonInnerHTML);

    }


}



// function handleClick() {
//     alert("I got clicked!");
// }