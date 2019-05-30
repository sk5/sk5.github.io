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
        list[j].setAttribute("onclick", "show" + j);
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
    var currentSlide = slides.getAttribute('data-fruit');
}