var MapWrapper = function(container, coords, zoom){
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, contentString){
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
  });
  this.markers.push(marker);
  
  marker.event.addListener('click', function(event){
    infoWindow.open(this.googleMap, marker);
}),

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    this.addMarker(position);
  }.bind(this));
},

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
}

// MapWrapper.prototype.addClickMarker = function(marker, contentString){
//   google.maps.event.addListener(marker, 'click', function(event){
//     var infoWindow = new google.maps.InfoWindow({
//       content: contentString
//     });
//     infoWindow.open(this.googleMap, marker);
//   })
// }