let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttoninnerHTML = this.innerHTML;

        Makesound(buttoninnerHTML);

        buttonanimation(buttoninnerHTML);

    });
}

    document.addEventListener("keypress", function(event) {

        Makesound(event.key);
      
        buttonanimation(event.key);
      
    });

    function Makesound(key) {
        switch (key) {
            case "w":
                var w1 = new Audio("sounds/w.mp3");
                w1.play() ; 
                break;
            case "a":
                var a1 = new Audio("sounds/a.mp3");
                a1.play() ;
                break;
            case "s":
                var s1 = new Audio("sounds/s.mp3");
                s1.play() ;
                break;
            case "d":
                var d1 = new Audio("sounds/d.mp3");
                d1.play() ;
                break;
            case "j":
                var j1 = new Audio("sounds/j.mp3");
                j1.play() ;
                break;
            case "k":
                var k1 = new Audio('sounds/k.mp3');
                k1.play() ;
                break;
            case "l":
                var l1 = new Audio('sounds/l.mp3');
                l1.play() ;
                break;
        }

    }
        
    function buttonanimation() {
        var activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }