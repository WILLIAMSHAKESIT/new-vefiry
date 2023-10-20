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
})