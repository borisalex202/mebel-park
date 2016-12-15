function initMap() {

      if ($(document).width() >= 992) {
        var LatLng = {lat: 55.6346915, lng: 37.4308143},
            marker = {lat: 55.6346915, lng: 37.4368143};
      } else {
        var LatLng = {lat: 55.6416915, lng: 37.4368143},
            marker = {lat: 55.6346915, lng: 37.4368143};
      }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: LatLng,
        scrollwheel: false,
        mapTypeControl: false
    });

    var marker = new google.maps.Marker({
        position: marker,
        map: map,
        title: 'Мебель Park'
    });
}
$(window).on("load resize",function(){
    initMap();
});
