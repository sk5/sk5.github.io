window.onload = function () {
    // Auto increment main images
    var list = document.getElementsByClassName("product__slide");
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute("data-slide", "image-" + i);
    }
    //
    // Auto increment thumbnails
    var thumbnailList = document.getElementsByClassName("product__thumbnail--link");
    for (var j = 0; j < thumbnailList.length; j++) {
        thumbnailList[j].setAttribute("data-thumb", + j);
    }
};

var buttons = document.getElementsByClassName("product__thumbnail--link"); // target all buttons into a element array/collection
var buttonsCount = buttons.length; // cache the length
for (var h = 0; h < buttonsCount; h++) { // reset the counter; check if its smaller than the array length; add itself
    //console.log("before button");
    buttons[h].onclick = function (e) { // assign a function to the onclick event
        //console.log("here");
        var imageName = this.getAttribute("data-thumb"); // alert the id attribute of the element clicked 
        var element = document.querySelector("[data-slide='image-" + imageName + "']");
        //console.log(element);
        //
        //
        var slides = document.getElementsByClassName("product__slide");
        for (var i = 0; i < slides.length; i++) {
            var slide = slides[i];
            slide.classList.remove("active");
        }
        //
        element.classList.add("active");
    };
}
//
//
//
/*
window.onload = function () {
    // Auto increment main images
    var list = document.getElementsByClassName("product__slide");
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute("data-slide", "image" + i);
    }
    //
    // Auto increment thumbnails
    var thumbnailList = document.getElementsByClassName("product__thumbnail--link");
    for (var j = 0; j < thumbnailList.length; j++) {
        thumbnailList[j].setAttribute("onclick", "show" + j);
    }
};

function show(nr) {
    //document.getElementById("table1").style.display = "none";
    //document.getElementById("table2").style.display = "none";
    //document.getElementById("table3").style.display = "none";
    //document.getElementById("table4").style.display = "none";
    //document.getElementById("table" + nr).style.display = "block";
    //
    var slides = document.getElementsByClassName("product__slide");
    slides.className += "hidden";
    document.querySelectorAll("[data-slide='image'" + nr).className.remove("hidden");
    //
    var thumbnails = document.getElementsByClassName("product__thumbnail--link");
    thumbnails.className.remove("active");
    //var currentSlide = slides.getAttribute('data-fruit');
    this.className += "active";
}
*/