
function html(){
    document.getElementsByClassName("html-img")[0].style.display="block";
    document.getElementById("html-content").style.display="block"; 
    document.getElementById("css-content").style.display="none";
    document.getElementById("js-content").style.display="none";
    document.getElementsByClassName("css-img")[0].style.display="none";
    document.getElementsByClassName("js-img")[0].style.display="none";
    document.getElementsByClassName("html")[0].style.backgroundColor=" #f3c5c5";
    document.getElementsByClassName("css")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
    document.getElementsByClassName("js")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
    
}
function css(){
    document.getElementsByClassName("css-img")[0].style.display="block";
    document.getElementById("css-content").style.display="block";
    document.getElementById("html-content").style.display="none";
    document.getElementById("js-content").style.display="none";
    document.getElementsByClassName("html-img")[0].style.display="none";
    document.getElementsByClassName("js-img")[0].style.display="none";
    document.getElementsByClassName("css")[0].style.backgroundColor=" #f3c5c5";
    document.getElementsByClassName("html")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
    document.getElementsByClassName("js")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
}
function js(){
    document.getElementsByClassName("js-img")[0].style.display="block";
    document.getElementById("js-content").style.display="block";
    document.getElementById("html-content").style.display="none";
    document.getElementById("css-content").style.display="none";
    document.getElementsByClassName("html-img")[0].style.display="none";
    document.getElementsByClassName("css-img")[0].style.display="none";
    document.getElementsByClassName("js")[0].style.backgroundColor=" #f3c5c5";
    document.getElementsByClassName("html")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
    document.getElementsByClassName("css")[0].style.backgroundColor="rgba(139, 209, 255, 1)";
}

