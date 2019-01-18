$( document ).ready(function () {
    var sizer = '.sizer4',
        container = $('.gallery');
    
    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
            persentPosition: true
        })
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        dots:true,
        dotsEach: true,
    });
});
