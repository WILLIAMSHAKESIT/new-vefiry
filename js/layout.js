$(document).ready(function(){
    $('.suggestion-items span').click(function(){
        let val = $(this).text()
        console.log(val)
        $('.search-video-wrapper input').val(val)
    })
    $('.search-video-wrapper input').focus(function() {
        $('.suggestion-items').addClass('d-flex')
    });
    $('.search-video-wrapper input').blur(function(){
        let delay = setTimeout(function(){
            $('.suggestion-items').removeClass('d-flex')
            clearInterval(delay)
        },200)
    })
    $('.video-thum').click(function(){
        let vidSrc = $(this).data('vid')
        $('.video-container iframe').attr('src',vidSrc)
    })
    $(window).click(function(){
        $('.more-vert ul').hide()
    })
    $('.more-vert .trigger').click(function(e){
        e.stopPropagation()
        $(this).siblings('ul').toggle()
    })
    $('.modal-trigger').click(function(){
        let el = $(this).data('targ')
        $(`#${el}`).toggle()
    })
    $('.close-modal').click(function(){
        $('.custom-modal').hide()
    })
    $('.toggle-full').click(function(){
        let iconState = ''
        if (!document.fullscreenElement) {
            iconState = 'close_fullscreen'
            document.documentElement.requestFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
              iconState = 'open_in_full'
            }
        }
        $(this).find('.material-symbols-outlined').text(`${iconState}`)
    })
    $(window).scroll(function() {
        var stickyElement = $('.sticky');
        var headerHeight = $('header').outerHeight();

        if ($(window).scrollTop() >= headerHeight) {
          stickyElement.addClass('active');
        } else {
            $('.sticky').css('left',`${stickyElement.offset().left}px`)
            stickyElement.removeClass('active');
        }
    });
    $('.user-profile').click(function(e){
        e.stopPropagation()
        $(this).find('.profile-drop').toggle()
    })
    $(window).click(function(){
        $('.user-profile .profile-drop').hide()
    })
    $('.nav-item .toggle-sub-btn').click(function(){
        let _this = $(this)
        let el = _this.parent().siblings()
        let elI = '<i class="fa-solid fa-plus mr-1"></i>' 

        _this.parent().parent().find('dropdown-menu').hide()
        // $('.toggle-sub-btn').html(`${elI}`)
        el.toggle()

        if(el.is(":visible")){
            elI = '<i class="fa-solid fa-minus mr-1"></i>'
        }else{
            elI = '<i class="fa-solid fa-plus mr-1"></i>'
        }

        _this.html(`${elI}`)
    })
    $('.nav-item .close').click(function(){
        $('.navbar-nav').removeClass('show')
    })
    $('.mobile-toggle .menu').click(function(){
        $('.navbar-nav').addClass('show')
    })
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    var showcase = $("#slider")
    
    showcase.Cloud9Carousel( {
    yOrigin: 42,
    yRadius: 20,
    xRadius: 550,
    itemClass: "card-2",
    buttonLeft: $(".nav.left"),
    buttonRight: $(".nav.right"),
    bringToFront: true,
    autoPlayDelay:3000,
    autoPlay:1,
    onLoaded: function() {
        showcase.css( 'visibility', 'visible' )
        showcase.css( 'display', 'none' )
        showcase.fadeIn( 1500 )
    }
    } )

    $('.nav').click( function( e ) {
        var b = $(e.target).addClass( 'down' )
        setTimeout( function() { b.removeClass( 'down' ) }, 80 )
    } )
})