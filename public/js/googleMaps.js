function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};
  var ucsd_cicc = {lat:32.8850016, lng:-117.2412938};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    //center: ucsd_ltlng,
    center: ucsd_cicc,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      //position: ucsd_ltlng,
      position: ucsd_cicc,
      map: map,
      title: 'UCSD'
  });
}