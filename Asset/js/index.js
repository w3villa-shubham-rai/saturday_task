window.onload = function () {
    var loader = document.getElementById("loader");
    var container = document.getElementById("container1");

    if (loader && container) {
        
        loader.style.display = "block";
        container.style.display = "none";

        setTimeout(function () {
            loader.style.display = "none"; 
            container.style.display = "flex"; 
        }, 3000);
    }
};

$('#slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    autoplay: true,
    autoplayTimeout: 2000,
    dots:true,

})


