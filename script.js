function initialize() {
    var mapOptions = {
        center: {
            lat: 40.770589,
            lng: -111.891489
        },
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);