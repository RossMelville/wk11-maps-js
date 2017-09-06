var initialize = function(){
  var center = {lat: 51.507351, lng: -0.127758};

  var mapDiv = document.getElementById('main-map');

  var mainMap = new MapWrapper(mapDiv, center, 10);
  var centerContent = "This is the city center";
  var centerMarker = mainMap.addMarker(center, centerContent);
  

  mainMap.addClickEvent();
  // mainMap.addClickMarker(centerMarker, centerContent);

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));


}


window.addEventListener('load', initialize);