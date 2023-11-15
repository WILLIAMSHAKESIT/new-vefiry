class Layout {
    constructor(){
        this.userType = $('input[name="userType"]').val()
    }
    copyToClipboard(text) {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard:', text);
        })
        .catch(err => {
            console.error('Error copying text to clipboard:', err);
        });
    }
    userTypeSet(_this){
        if(_this.checked){
            this.userType = $(_this).val()
            this.userTypeOnLoad()
        }
    }
    userTypeOnLoad(){
        let input = $('input[name="phoneNumber"]')
        if(this.userType == 'simple'){
            input.prop('disabled',true)
        }else{
            input.prop('disabled',false)
        }
    }
    toast(message,color,to){
        Toastify({
            text: `${message}`,
            duration: 1500,
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true,
            style: {
                background: color=='danger'?"#d9534f":color == "success"?"#5cb85c":"#0275d8",
            },
            callback: (instance)=> {
                if(to != undefined){
                    location.href = to;
                }
            },
        }).showToast();
    }
    vidSearchSuggestions(_this){
        let val = $(_this).text()
        $('.search-video-wrapper input').val(val)
    }
    videoSearchShow(){
        $('.suggestion-items').addClass('d-flex')
    }
    videoSearchHide(){
        let delay = setTimeout(()=>{
            $('.suggestion-items').removeClass('d-flex')
            clearInterval(delay)
        },200)
    }
    changeIframeUrl(_this){
        let vidSrc = $(_this).data('vid')
        $('.video-container iframe').attr('src',vidSrc)
    }
    hideMore(){
        $('.more-vert ul').hide()
    }
    toggleMore(_this){
        $(_this).siblings('ul').toggle()
    }
    modalShow(_this){
        let el = $(_this).data('targ')
        let elImg = $(_this).data('postImg')
        $(`#${elImg}`).addClass('active')
        $(`#${el}`).toggle()  
    }
    closeModal(){
        $('.carousel-item').removeClass('active')
        $('.custom-modal').hide()
    }
    toggleFullScreen(_this){
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
        $(_this).find('.material-symbols-outlined').text(`${iconState}`)
    }
    stickyRightBar(){
        var stickyElement = $('.sticky');
        var headerHeight = $('header').outerHeight();

        if ($(window).scrollTop() >= headerHeight) {
          stickyElement.addClass('active');
        } else {
            $('.sticky').css('left',`${stickyElement.offset().left}px`)
            stickyElement.removeClass('active');
        }
    }
    toggleProfile(_this){
        $(_this).find('.profile-drop').toggle()
    }
    hideProfile(){
        $('.user-profile .profile-drop').hide()
    }
    toggleSubMenu(__this){
        let _this = $(__this)
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
    }
    hideMenu(){
        $('.navbar-nav').removeClass('show')
    }
    showMenu(){
        $('.navbar-nav').addClass('show')
    }
}
$(document).ready(function(){
    let layout = new Layout()
    layout.userTypeOnLoad()
    layout.toast('dsfdsfsfsdfdf',"succss")
    $('.suggestion-items span').click(function(){
        layout.vidSearchSuggestions(this)
    })
    $('.search-video-wrapper input').focus(function() {
        layout.videoSearchShow()
    });
    $('.search-video-wrapper input').blur(function(){
        layout.videoSearchHide()
    })
    $('.video-thum').click(function(){
        layout.changeIframeUrl(this)
    })
    $(window).click(function(){
        layout.hideMore()
    })
    $('.more-vert .trigger').click(function(e){
        e.stopPropagation()
        layout.toggleMore(this)
    })
    $('.modal-trigger').click(function(){
        layout.modalShow(this)
    })
    $('.close-modal').click(function(){
        layout.closeModal()
    })
    $('.toggle-full').click(function(){
        layout.toggleFullScreen()
    })
    $(window).scroll(function() {
        layout.stickyRightBar()
    });
    $('.user-profile').click(function(e){
        e.stopPropagation()
        layout.toggleProfile(this)
    })
    $(window).click(function(){
        layout.hideProfile()
    })
    $('.nav-item .toggle-sub-btn').click(function(){
        layout.toggleSubMenu(this)
    })
    $('.nav-item .close').click(function(){
        layout.hideMenu()
    })
    $('.mobile-toggle .menu').click(function(){
        layout.showMenu()
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
    })
    $(".main-search-text input").keyup(function () {
        var filter = $(this).val();
        let el = $('.main-sarch-suggestions')
        if(filter != ''){
            el.show()
        }else{
            el.hide()
        }
        $(".main-sarch-suggestions a").each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show()
            }
        });
    });
    $('.share-icon.link').click(function(){
        let text = window.location.href
        layout.copyToClipboard(text)
        layout.toast('Url copied to clipboard','')
    })
    $('input[name="userType"]').change(function(){
        layout.userTypeSet(this)
    });
})