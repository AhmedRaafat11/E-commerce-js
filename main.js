// for Show Side Bar 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');




if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
        // console.log(navbar);
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
        // console.log(navbar);
    })
}

// for choice a product

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function() {
        MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function() {
        MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function() {
        MainImg.src = smallimg[3].src;
    }















