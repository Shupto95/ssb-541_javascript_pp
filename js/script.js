// text changer

function textChange(){
    document.getElementById('h2').innerHTML="Hello,there!".repeat(3);
}

function date(){
    document.getElementById('dh2').innerHTML=Date();
}

// data repet

function dataRepeat(){
    var massege="i am shupto";

    document.getElementById('dr').innerHTML=massege.repeat(3);
}

function fontChange(){
    document.getElementById('fc').style.color="green"
}

// show hide

function showButton(){
    document.getElementById('hidee').style.display="block";
}

function hideButton(){
    document.getElementById('hidee').style.display="none";
}

function liteOn(){
    document.getElementById('bb').src="images/on.gif";
}
function liteOff(){
    document.getElementById('bb').src="images/off.gif";
}