var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "s";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "d";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "k";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "l";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        }









        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });

}

