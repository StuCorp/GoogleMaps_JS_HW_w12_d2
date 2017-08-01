var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center, 
    zoom: zoom
  });

  this.markers = []; 
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
    this.addInfoWindows();
  }.bind(this)); 
};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
};

MapWrapper.prototype.addInfoWindows = function(){
  var someInfo = "YOU are not welcome here!";
  var infowindow = new google.maps.InfoWindow({
    content: someInfo
  });
  this.markers.forEach(function(marker){
  infowindow.open(this.googleMap, marker);
  });

};
