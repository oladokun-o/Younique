//slides
var imageLoaderSrc = '../img/shopping-basket.gif';
$('.featured-products-slider .slide').addClass('col-12 col-md-5').html(`<img class="image-loader" src="${imageLoaderSrc}" />`)

//slider
const featuredProductsImgLocation = '../db/featured_images/';
var slideBox =  $('.featured-products-slider .slides'),
    slides = document.querySelectorAll('.featured-products-slider .slide');  

let imgs = new Array, imgIdno = 0;
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    dots: false,
});

function getSlideImages() {
    return $.ajax({
        url : featuredProductsImgLocation,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {                
                if( val.match(/\.(jpe?g|jpg|png)$/) ) {         
                    imgs.push(val);
                } 
            });                        
        },
        error: function(data) {
            //console.log(data)
        }
    });
}

$.when(getSlideImages()).done(function(data) {
    let imgsLength = imgs.length, slidesLength = slides.length;    
    
    if (imgsLength == slidesLength) {
        $.each(slides, function (index, slide) {     
            $(slide).fadeIn('fast').html("<img class='slide-image' src='"+ imgs[index] +"'>");   
            $('.owl-carousel').owlCarousel('add', $(slide)).owlCarousel('update');
        });                  
        removeDemoSlides();     
    } else if (imgsLength < slidesLength || slidesLength < imgsLength) {
        let newSlides = array_filled(imgsLength, 'div');                                 
        $.each(newSlides, function(index, slide) {
            $(slide).addClass('new-slide');
            $(slide).html(`<img class="slide-image" id="${index}" src="${imgs[index]}" />`);
            $('.owl-carousel').owlCarousel('add', $(slide)).owlCarousel('update');
        })
        removeDemoSlides();        
    }
})

function removeDemoSlides() {
    //slideBox.find('.slide').fadeOut('slow');
    $('.owl-stage .owl-item:has(.slide)').remove();
}

function array_filled(n, val) {
    var filled = Array.from({length:n}).map(function(_,i){
        var el = document.createElement(val);
        return el;
    });
    return filled
}

$('.slides-control .prev').on('click', function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slides-control .next').on('click', function() {
    owl.trigger('next.owl.carousel');
})