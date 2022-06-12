var drum=document.querySelectorAll(".drum");

for(let i=0;i<drum.length;i++){
    //detecting button press 
    drum[i].addEventListener("click", function (){
        var text=this.innerHTML;
        makeSound(text); 
        buttonAnimation(text);    
    }); 
    
    //detecting key from keyboard
    drum[i].addEventListener("keypress", function(event){
        var key=event.key;
        makeSound(key); 
        buttonAnimation(key);    
    });  
}


function makeSound(text){
    switch (text) {
        case "w":
         var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        case "a":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
          break;
        case "d":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
          break;
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
          break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
          break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
      }
}
function buttonAnimation(currentKeyPressed){
    var activeButton=document.querySelector("."+currentKeyPressed);
    activeButton.classList.add("pressed");
    myTimeout = setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

}