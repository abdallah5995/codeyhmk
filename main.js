var btn = document.querySelector("#btn");
var links = document.querySelector(".links");

btn.onclick = function() {
    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
};

let button = document.getElementById('button');

window.onscroll = function(){
    if(scrollY >+ 100)
    {
        button.style.display = 'block';

    }else
    {
        button.style.display = 'none';

    }
}
button.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}

