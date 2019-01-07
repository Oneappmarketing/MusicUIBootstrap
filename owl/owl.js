$(document).ready(function(){
    $('#top-songs').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $('#top-albums').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.owl-prev').html('<i class="fa fa-chevron-left></i>"')
    $('.owl-next').html('<i class="fa fa-chevron-right></i>"')
  });