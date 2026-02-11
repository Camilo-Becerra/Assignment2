function initMap() {
    const bogota = { lat: 4.6097, lng: -74.0817 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: bogota
    });
    const library1 = { lat: 4.6392, lng: -74.1003 };
    const marker1 = new google.maps.Marker({
        position: library1,
        map: map,
        title: "Biblioteca Virgilio Barco"
    });
    const infoWindow1 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Virgilio Barco</h5><p>Av. Carrera 60 #57-60</p>"
    });
    
    marker1.addListener("click", function() {
        infoWindow1.open(map, marker1);
    });
    const library2 = { lat: 4.5981, lng: -74.0758 };
    const marker2 = new google.maps.Marker({
        position: library2,
        map: map,
        title: "Biblioteca El Tintal"
    });
    const infoWindow2 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca El Tintal</h5><p>Av. Ciudad de Cali #6C-09</p>"
    });
    marker2.addListener("click", function() {
        infoWindow2.open(map, marker2);
    });
    
    const library3 = { lat: 4.6533, lng: -74.0571 };
    const marker3 = new google.maps.Marker({
        position: library3,
        map: map,
        title: "Biblioteca Gabriel García Márquez"
    });
    const infoWindow3 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Gabriel García Márquez</h5><p>Calle 57 #21-66</p>"
    });
    marker3.addListener("click", function() {
        infoWindow3.open(map, marker3);
    });
}