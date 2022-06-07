//header
var headerSearchForm = document.getElementById('headerSearchForm'),
headerSearchInput = document.getElementById('headerSearchInput');

headerSearchForm.addEventListener('click', function() {
    headerSearchInput.focus();
})

//menu (side menu)

var menuButton = document.getElementById('menuButton'),
menu = document.getElementById('Menu'), menuLinks = menu.querySelectorAll('.nav-link');

menuButton.addEventListener('click', function() {
    if (menu.classList.contains('hide-menu')) {
        openMenu();
    }
})

function openMenu() {
    menu.classList.remove('hide-menu')
    menu.classList.add('slide-in-right')
    if (menu.classList.contains('slide-out-right')) menu.classList.remove('slide-out-right')
}

function closeMenu() {
    menu.classList.add('hide-menu', 'slide-out-right')
    if (menu.classList.contains('slide-in-right')) menu.classList.remove('slide-in-right')
}

menuLinks.forEach((link) => { link.addEventListener('click', closeMenu) })

//slides
var imageLoaderSrc = 'img/icon/shopping-basket.gif';
$('.featured-products-slider .slide').addClass('col-12 col-md-5').html(`
    <a class="product-link" href="#">
        <div class="product-box">
            <div class="col-12 center-item">
                <img class="image-loader" src="${imageLoaderSrc}" />
            </div>
            <div class="product-details">
                <p class="name">product name</p>
                <span class="price"><span class="currency">$</span>0.00</span>
            </div>
        </div>
    </a>
`)

//slider
const featuredProductsImgLocation = 'db/featured-images/';
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
            console.log(data.status)
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
            $(slide).html(`
            <div class="col-12">
                <img class="slide-image" id="${index}" src="${imgs[index]}" />
                <div class="product-details">
                    <h3 class="name">product name</h3>
                    <h4 class="price"><span class="currency"></span>0.00</h4>
                </div>
            </div>
            `);
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