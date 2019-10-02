var mapa; 

var posicionCentral = {lat: -34.882272, lng: -58.062551};
function inicializarMapa () {

  mapa = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: posicionCentral
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
