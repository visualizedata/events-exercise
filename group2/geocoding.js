$("#btn").click(function(){
            var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'iceland'}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
          } else {
            console.log("Something got wrong " + status);
          }
        });
    console.log(geocoder())
});