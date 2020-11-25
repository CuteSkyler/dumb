function cat(lyx){
    if(parseFloat(document.getElementById('am').innerHTML)===12){
        document.getElementById('am').innerHTML = 0;
    }
    var newElement = document.createElement("img");
    var add = parseFloat(document.getElementById('am').innerHTML);
    var colours = [
        "rgb(255,0,0)",
        "rgb(255,128,0)",
        "rgb(128,128,0)",
        "rgb(0,128,0)",
        "rgb(0,255,0)",
        "rgb(0,255,128)",
        "rgb(0,128,128)",
        "rgb(0,0,128)",
        "rgb(0,0,255)",
        "rgb(128,0,255)",
        "rgb(128,0,128)",
        "rgb(128,0,0)"
    ]
    newElement.src = "kitty/cat02.png"
    newElement.className = "ama"
    document.getElementById('am').innerHTML = add+1
    document.body.style.backgroundColor = colours[add];
    document.getElementById("new").appendChild(newElement);

    if(lyx===1){
        document.getElementById('ama').style.transform = "rotateY(360deg)"
    }
}