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
})