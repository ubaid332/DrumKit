
// Detecting mouse buttons press

let elements = document.querySelectorAll(".drum");

for(var i=0; i<elements.length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)

    });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key)
}); 


function makeSound(key){
    
    switch(key){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:
    }
}


function buttonAnimation(currentKey){
    
        document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}






/*

High order functions and passing function as a argument

function add(num1, num2){
    return num1+num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

*/



