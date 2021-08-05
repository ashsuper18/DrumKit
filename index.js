// Button press 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        // break;
    });
}


// Key pressed

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "s":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;
        case "d":
            var snare = new Audio('sounds/tom-2.mp3');
            snare.play();
            break;
        case "j":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case "k":
            var snare = new Audio('sounds/kick-bass.mp3');
            snare.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log("Refresh");
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}