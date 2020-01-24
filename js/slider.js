var slideIndex = 0;
showSlides_auto(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides_auto(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    if (slideIndex > slides.length) {slideIndex = 1;}

    if (n < 1) {slideIndex = slides.length;}

    slides[slideIndex-1].style.display = "block";

}
function showSlides_auto(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}

    slides[slideIndex-1].style.display = "block";

   setTimeout(showSlides_auto, 3000); 
}
