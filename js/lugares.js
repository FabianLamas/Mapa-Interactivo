lugaresModulo = (function () {
  var servicioLugares 

  function autocompletar () {
        var radio = 20000;

        var autocompleteAddress = new google.maps.places.Autocomplete(
          document.getElementById('direccion'), {types: ['geocode']});

        var autocompleteFrom = new google.maps.places.Autocomplete(
          document.getElementById('desde'), {types: ['geocode']});

        var autocompleteTo = new google.maps.places.Autocomplete(
          document.getElementById('hasta'), {types: ['geocode']});

        var autocompleteAdd = new google.maps.places.Autocomplete(
          document.getElementById('agregar'), {types: ['geocode']});
    
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition( function (position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
              {center: geolocation, radius: radio});
              autocompleteAddress.setBounds(circle.getBounds());
              autocompleteFrom.setBounds(circle.getBounds());
              autocompleteTo.setBounds(circle.getBounds());
              autocompleteAdd.setBounds(circle.getBounds());
          });
        }
  }

  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }


  function buscarCerca (posicion) {

    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = parseInt(document.getElementById('radioS').value);
    
    var request = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };

    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }

  return {
    inicializar,
    buscarCerca
  }
})()
