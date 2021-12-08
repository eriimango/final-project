var myIndex = 0;
var myVar;
slideshow();

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
function slideshow() {
    var i;
    var x = document.getElementsByClassName("my-slides");
    for(i = 0; i < x.length; i++) {
        x[i].style.display="none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(slideshow, 5000);
}