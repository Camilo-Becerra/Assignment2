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
}