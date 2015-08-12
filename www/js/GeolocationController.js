angular.module('starter').controller('GeolocationController', function() {
  var self = this;

  self.startNav = function() {
    navigator.geolocation.watchPosition(function(data) {console.log(data)},function() {console.log('fail')});
    // var bgGeo = navigator.plugins.backgroundGeoLocation;

    // bgGeo.start();

  //   var callbackFn = function(location){
  //     console.log(location);
  //   };

  //   var failureFn = function(error){
  //       alert('Geolocation Error');
  //   };

  //   bgGeo.configure(callbackFn, failureFn, {
  //     desiredAccuracy: 10,
  //     stationaryRadius: 10,
  //     distanceFilter: 30,
  //     debug: true
  //   });

  //   function onBackgroundSuccess(location) {
  //     var R = 6371; // Radius of the earth in km
  //     var dLat = (location.latitude-this.lastLatitude) * (Math.PI/180);  // deg2rad below
  //     var dLon = (location.longitude-this.lastLongitude) * (Math.PI/180);
  //     var a =
  //     Math.sin(dLat/2) * Math.sin(dLat/2) +
  //     Math.cos(this.lastLatitude * (Math.PI/180)) * Math.cos(location.latitude * (Math.PI/180)) *
  //     Math.sin(dLon/2) * Math.sin(dLon/2);
  //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  //     var distance = R * c; // Distance in km
  //     this.lastLatitude = location.latitude;
  //     this.lastLongitude = location.longitude;

  //     //Set timer HTML to total distance
  //     var tracker = Ext.ComponentQuery.query("timer #gps")[0];
  //     var value = Math.round(runtap.globals.totalDistance * 100) / 100;
  //     tracker.setHtml(value + "<span style = 'font-size: 18px;'>km</span>");
  //   };



  };
});
