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
    const library4 = { lat: 4.7110, lng: -74.0721 };
    const marker4 = new google.maps.Marker({
        position: library4,
        map: map,
        title: "Biblioteca Julio Mario Santo Domingo"
    });
    const infoWindow4 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Julio Mario Santo Domingo</h5><p>Calle 170 #67-51</p>"
    });
    marker4.addListener("click", function() {
        infoWindow4.open(map, marker4);
    });
    
    const library5 = { lat: 4.6486, lng: -74.1105 };
    const marker5 = new google.maps.Marker({
        position: library5,
        map: map,
        title: "Biblioteca El Tunal"
    });
    const infoWindow5 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca El Tunal</h5><p>Calle 48B Sur #21-13</p>"
    });
    marker5.addListener("click", function() {
        infoWindow5.open(map, marker5);
    });
    
    const library6 = { lat: 4.6243, lng: -74.0642 };
    const marker6 = new google.maps.Marker({
        position: library6,
        map: map,
        title: "Biblioteca Luis Ángel Arango"
    });
    const infoWindow6 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Luis Ángel Arango</h5><p>Calle 11 #4-14</p>"
    });
    marker6.addListener("click", function() {
        infoWindow6.open(map, marker6);
    });
    
    const library7 = { lat: 4.6097, lng: -74.1284 };
    const marker7 = new google.maps.Marker({
        position: library7,
        map: map,
        title: "Biblioteca Perdomo"
    });
    const infoWindow7 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Perdomo</h5><p>Carrera 1H #62-33 Sur</p>"
    });
    marker7.addListener("click", function() {
        infoWindow7.open(map, marker7);
    });
    
    const library8 = { lat: 4.6708, lng: -74.0543 };
    const marker8 = new google.maps.Marker({
        position: library8,
        map: map,
        title: "Biblioteca Parque El Salitre"
    });
    const infoWindow8 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Parque El Salitre</h5><p>Calle 63 #59A-06</p>"
    });
    marker8.addListener("click", function() {
        infoWindow8.open(map, marker8);
    });
    
    const library9 = { lat: 4.6389, lng: -74.0837 };
    const marker9 = new google.maps.Marker({
        position: library9,
        map: map,
        title: "Biblioteca Restrepo"
    });
    const infoWindow9 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Restrepo</h5><p>Carrera 20 #11-25 Sur</p>"
    });
    marker9.addListener("click", function() {
        infoWindow9.open(map, marker9);
    });
    
    const library10 = { lat: 4.6800, lng: -74.0472 };
    const marker10 = new google.maps.Marker({
        position: library10,
        map: map,
        title: "Biblioteca Lago Timiza"
    });
    const infoWindow10 = new google.maps.InfoWindow({
        content: "<h5>Biblioteca Lago Timiza</h5><p>Transversal 78K #41A-04 Sur</p>"
    });
    marker10.addListener("click", function() {
        infoWindow10.open(map, marker10);
    });
}