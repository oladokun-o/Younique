//navigate
function navigate(element) {
    let button = $('.menu-section').find(element), dest = $(element).attr('dest'), action = $(element).attr('action'), type = $(element).attr('type');
    
    //if a nav item
    if ( type == 'nav' ) {
        //set btn to active
        var navBtns  = $('.menu-section li');
        navBtns.removeClass('active');
        button.removeClass('inactive').addClass('active');

        //check if menu is open 
        if ($('.section-1').hasClass('open')) closeMenu($('.section-1'))
        
        //display dest
        if (dest != $('.dest').text()) {
            displayPage(dest, action)
        }
    } else if ( type == 'opt' ) {
        //set btn to active
        var navBtns  = $('.menu-section li');
        navBtns.removeClass('active');
        $('.menu-section').find('#'+dest).addClass('active');

        displayPage(dest, action)
    } else if ( type == 'log' ) {
        var navBtns  = $('.menu-section li');
        navBtns.removeClass('active');
        $('.dest').html('goodbye');
        button.find('i').removeClass('bi bi-box-arrow-right').addClass('fa fa-spin fa-spinner')
        setTimeout(() => {
            window.location = '/admin/login';
        }, 2000);
    }
}

function displayPage (dest, action) {
    //display dest
    if (dest != $('.dest').text()) {
        $('.dest').html(dest);
        $('.pages').html('')

        //set history
        //window.history.pushState('', dest, '/admin/page/:'+dest)
        location.hash = dest

        setTimeout(() => {
            $('.pages').find('.'+dest).removeClass('d-none').fadeIn('fast');
        }, 200);

        //if there is required action 
        if (action) {
            console.log(action)
        }
    }
}

window.onhashchange = function() {
    if (location.hash.length > 0) {
        requestPage(location.hash.replace('#', ''))
    }
}

//user options
$('.user-profile').on('click', function(e) {
    if ($('.user-options').hasClass('d-none')) {
        $('.user-options').removeClass('d-none').fadeIn('fast')
    } else {
        $('.user-options').fadeOut('fast').addClass('d-none')
    }
})

//onclick anywhere close element 
document.body.addEventListener("click", (e) => {
    var userProfile = document.querySelector('.user-profile');
    if (!(e.target === userProfile) && !userProfile.contains(e?.target)) {
        $('.user-options').fadeOut('fast').addClass('d-none')
    }
})

//menu
function openMenu(menu) {
    menu.fadeIn('slow').removeClass('slide-out-right closed').addClass('slide-in-right open').removeClass('d-none')
}

function closeMenu(menu) {
    menu.removeClass('slide-in-right open').addClass('slide-out-right closed')
    setTimeout(() => {
        menu.addClass('d-none')
    }, 200);
}