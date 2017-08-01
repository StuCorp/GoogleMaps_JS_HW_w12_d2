var init = function(){
  var centers = [
  {lat:16.736897, lng: -92.637657},
  {lat:49.249539, lng: -123.089879},
  {lat:40.808415, lng: -73.950995},
  {lat:39.386665, lng: -0.331593},
  {lat:-16.484130, lng: -68.121878},
  ]

  var center = { lat: 55.857103, lng: -4.243951};
  var zoom = 12; 
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom, centers);
  mainMap.addMarker(center); 
  mainMap.addClickEvent();

  var bounceButton = document.querySelector("#bounce-button");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var markerLabelButton = document.querySelector("#lable-button"); 
  markerLabelButton.addEventListener("click", mainMap.addInfoWindows.bind(mainMap));

  var takeMeButton = document.querySelector("#vaction-button");
  var newCentre = centers[_.random(0,4)];
  takeMeButton.addEventListener("click", mainMap.changeCentre.bind(mainMap));

  var whereButton = document.querySelector("#where-button");
  whereButton.addEventListener("click", mainMap.geoGetUm.bind(mainMap));

 

  // debugger;
};


window.addEventListener("load", init);