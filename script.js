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


function getAddress() {
  var address = '372+N.+400+W.+#3+Provo,+UT+84601';

  console.log(address);

  // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY
  // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA',

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    data: {
      "address": address,
    },
    cache: false,
    success: function(response) {
      console.log('success', response);
    },
    error: function(xhr) {
      console.log('error ', xhr);
    }
  });
}




function getDistance() {
  // var p1 = new google.maps.LatLng(45.463688, 9.18814);
  // var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);
  // var p1 = '45.463688, 9.18814';
  // var p2 = '46.0438317, 9.75936230000002';

  $.ajax({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    // url: 'https://maps.googleapis.com/maps/api/directions/json?',
    url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Chicago,IL&destination=Los+Angeles,CA&waypoints=Joplin,MO|Oklahoma+City,OK',
    // data: {
    //   'origin': 'Chicago,IL',
    //   'destination': 'Los+Angeles,CA',
    // },
    dataType: 'jsonp',
    cache: false,
    success: function(response) {
      console.log('success', response);
    },
    error: function(xhr) {
      console.log('error ', xhr);
    }
  });
}





//calculates distance between two points in km's
function calcDistance() {
  var p1 = new google.maps.LatLng(45.463688, 9.18814);
  var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);

  console.log((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2));
}




function calculateDistance() {
  try {
    var p1 = new google.maps.LatLng(45.463688, 9.18814);
    var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);


    // var glatlng1 = new GLatLng(location1.lat, location1.lon);
    // var glatlng2 = new GLatLng(location2.lat, location2.lon);
    var miledistance = p1.distanceFrom(p2, 3959).toFixed(1);
    var kmdistance = (miledistance * 1.609344).toFixed(1);

    console.log('miles', miledistance);

    // document.getElementById('results').innerHTML = '<strong>Address 1: </strong>' + location1.address + '<br /><strong>Address 2: </strong>' + location2.address + '<br /><strong>Distance: </strong>' + miledistance + ' miles (or ' + kmdistance + ' kilometers)';
  } catch (error) {
    console.log('error', error);
  }
}