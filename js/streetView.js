streetViewModulo = (function () {
  var panorama 

  function inicializar () {
        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            position: posicionCentral,
            pov: {
              heading: 90,
              pitch: 0
            }
          });
      mapa.setStreetView(panorama);  
  }

  function fijarStreetView (ubicacion) {
    panorama.setPosition(ubicacion);
    mapa.setStreetView(panorama);  
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
