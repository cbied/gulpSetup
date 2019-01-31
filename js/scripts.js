$(document).ready(function() {
    // carousel
    $('#mycarousel').carousel( {interval: 2000} );
    $('#carouselBtn').click(function() {
        if($('#carouselBtn').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselBtn').children('span').removeClass('fa-pause').addClass('fa-play');
        }
        else if($('#carouselBtn').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselBtn').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });


    // open modals
    $('#login').click(function() {
        $('#modalLogin').modal('show')
    })
    $('#reserveTable').click(function() {
        $('#reserveModal').modal('show')
    })
    

    // close modals
    $('.close').click(function() {
        $('#modalLogin').modal('hide');
        $('#reserveModal').modal('hide');
    });
    $('.cancel').click(function() {
        $('#modalLogin').modal('hide');
        $('#reserveModal').modal('hide');
    });
    $('#reserve').click(function() {
        $('#reserveModal').modal('hide');
    });
    $('#signIn').click(function() {
        $('#modalLogin').modal('hide');
    });
});