var square= document.getElementsByClassName("squares");

function generator(num) {
    var arr=[num];
    for(var x=0;x<num;x++){
        arr[x]=randomColor();
    }
    return arr;
}
var colors,correctColorNo;
var easyMode=document.getElementById("easy");
var hardMode=document.getElementById("hard");
var newgame=document.getElementById("newGame");


// Gasildalihsd

newgame.addEventListener("click",function(){
    location.reload();
});
easyMode.addEventListener("click",function () {
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");

    if(correctColorNo<3) {
        for (var i = 3; i < 6; i++)
            square[i].style.display = "none";
    }
    else{
        for(var i=0;i<3;i++){
            square[i].style.display="none";
        }
    }


});
hardMode.addEventListener("click",function () {
    hardMode.classList.add("selected");
    easyMode.classList.remove("selected");

    location.reload();
    if(correctColorNo<3) {
        for (var i = 3; i < 6; i++)
            square[i].style.display = "block";
    }
    else{
        for(var i=0;i<3;i++){
            square[i].style.display="block";
        }
    }
});

colors=generator(6);
correctColorNo=Math.floor(Math.random() * 6);




var correctColor=randomColor();
colors[correctColorNo]=correctColor;
var colorCode=document.getElementById("colorCode");
colorCode.innerHTML="RGB "+correctColor.slice(3);


for(var i=0;i< square.length;i++){
    square[i].style.background=colors[i];

    square[i].addEventListener("click",function () {
        var result=document.getElementById("result");
        var clickedColor= this.style.background;
        if(clickedColor==correctColor){
            changeColor(correctColor);
            result.innerHTML="You Win";
            result.style.color="#333"
            var h1=document.querySelector("h1");
            h1.style.background=correctColor;
        }

        else{
            this.style.background= "#232323" ;
            result.innerHTML="Try Again !";
            result.style.color="#ff0000";
        }
    });
}

function changeColor(color){
    for(var x=0;x<square.length;x++){
        square[x].style.background=color;
    }
}

function randomColor(){
    var color="rgb("+Math.floor(Math.random() * 256)+", "
    +Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")";
    return color;
}
