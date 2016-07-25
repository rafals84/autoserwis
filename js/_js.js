$(function () {

    var menuItems = $('.hrefTarget');
    menuItems.scrollPagePlugin();
    
    
        
        var lat=51.842276;
        var lng=18.061754;
        var zoom=12;
 function initMap() {
        var mapDiv = document.getElementById('mapa');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: lat, lng: lng},
            zoom: zoom
        });
      }
});

$.fn.scrollPagePlugin = function () {

    $(this).on('click', function () {
        var menuItemPosTop = $($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: menuItemPosTop
        }, 800);
    });
    return this;
};

