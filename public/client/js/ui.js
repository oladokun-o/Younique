//header
var headerSearchForm = document.getElementById('headerSearchForm'),
headerSearchInput = document.getElementById('headerSearchInput');

headerSearchForm.addEventListener('click', function() {
    headerSearchInput.focus();
})

//menu (side menu)

var menuButton = document.getElementById('menuButton'),
menu = document.getElementById('Menu'), menuLinks = menu.querySelectorAll('.menu-links li');

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
if ($('.featured-products').hasClass('active')) {
    $('.featured-products-slider .slide').addClass('col-12 col-md-5').html(`
        <a class="product-link" href="#">
            <div class="product-box">
                <div class="col-12 center-item">
                    <img class="image-loader" src="${imageLoaderSrc}" />
                </div>
                <div class="product-details p-4">
                    <p class="name">product name</p>
                    <span class="price"><span class="currency">$</span>0.00</span>
                </div>
            </div>
        </a>
    `)
};

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
    if ($('.featured-products').hasClass('active')) {
        return $.ajax({
            url : featuredProductsImgLocation,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {                
                    if( val.match(/\.(jpe?g|jpg|png)$/) ) {
                        imgs.push(val);
                    }
                });
            }
        });
    }
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

//products 
$('.product-contn .product').on('click', function(e) {
    openModal(e)
})

$('.product-bg img').on('click', function(e) {
    openModal(e, 'img')
})

function openModal(data, type) {
    $('.modal').fadeIn('fast').removeClass('d-none').addClass('d-flex');
    let content;
    if (type == 'img') {
        content = data.target.outerHTML;
        $('.modal-content').html(content)
    } else {
        content = $(data.currentTarget).html();
        $('.modal-content').html(content+`
            <div class="product-btns">
                <button type="button" title="add to cart"> <i class="bi bi-bag"> </i></button>
                <button type="button" title="Save to favorites"><i class="bi bi-bag-heart"> </i></button>
                <button type="button" title="Share"> <i class="bi bi-share"></i></button>
                <button type="button" title="Learn more"> <i class="bi bi-box-arrow-up-right"></i></button>
            </div>
        `)
    }
}

function closeModal(data) {
    $('.modal').fadeOut('fast').removeClass('d-flex').addClass('d-none');
}

//read less 
if ($('.product-view .description')) {
    if ($('.product-view .description').length > 200) {
        $('.product-view .description')
    }
}

$('#readMore').on('click', function(){
    $('.product-view .description article').toggleClass('scroll');
    if($(this).has('i.active')) $(this).find('i').removeClass('bi-chevron-double-down active').addClass('bi-chevron-double-up'); 
    else  $(this).find('i').removeClass('bi-chevron-double-up').addClass('bi-chevron-double-down active'); 
});