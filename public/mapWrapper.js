var MapWrapper = function(container, center, zoom, centers){
  this.googleMap = new google.maps.Map(container, {
    center: center, 
    zoom: zoom
  });

  this.centers = centers;

  this.markers = []; 
};

MapWrapper.prototype.geoGetUm = function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    var center = {lat: position.coords.latitude, lng: position.coords.longitude};
    this.googleMap.setCenter(center);
    this.addMarker(center);
    this.googleMap.setZoom(15);
  }.bind(this));
};

MapWrapper.prototype.changeCentre = function(){
  this.googleMap.setCenter(this.centers[_.random(0,4)]);
};


MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
};


MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(this);
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    var coords = {
      lat: event.latLng.lat(), 
      lng: event.latLng.lng()
    }
    this.addMarker(coords);
    // this.addInfoWindows();
  }.bind(this)); 
};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
};

MapWrapper.prototype.addInfoWindows = function(){
  var currentMarker = this.markers[this.markers.length-1];
  
  var someInfo = document.querySelector("#label-text").value;
  var infowindow = new google.maps.InfoWindow({
    content: someInfo
  });

  infowindow.open(this.googleMap, currentMarker)

};
