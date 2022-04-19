//on login
$('.signin-form').on('submit', function (e) { 
    e.preventDefault();
    if($(this).find('input').val() != '') {
        $(this).find('button').html('<i class="fa fa-spin fa-spinner"></i>');
    
        setTimeout(() => {
            window.location = '/admin/home';
            $(this).find('button').html('sign in')
        }, 3000);
    }
});

function requestPage(dest) {
    let page = $('.pages');
    page.addClass('skeleton-box');
    $.ajax({
        type: "POST",
        url: "/admin/page/:"+dest,
        data: {
            dest: dest,
            url: location.hash
        },
        success: function (data) {
            //console.log(data)
            navigate(document.querySelector('.'+dest));
            page.removeClass('skeleton-box');  
            if (page.hasClass('alert')) page.removeClass('alert alert-danger') 
            page.html(data);
        },
        error: function (data) {
            console.log(data)
            //navigate(document.querySelector('.'+dest))  
            page.removeClass('skeleton-box');             
            page.addClass('alert alert-danger').html(data.responseText)
        }
    });
}
    
if (location.hash.length > 0) {
    requestPage(location.hash.replace(/#/g, ''))
    //console.log(location.hash)
} else {
    requestPage('dashboard')
}