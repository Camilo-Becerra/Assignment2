let markers = [];

function initMap() {
    const bogota = { lat: 4.6097, lng: -74.0817 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: bogota
    });
    
    const libraries = [
        { lat: 4.6392, lng: -74.1003, name: "Biblioteca Virgilio Barco", address: "Av. Carrera 60 #57-60", category: "public" },
        { lat: 4.5981, lng: -74.0758, name: "Biblioteca El Tintal", address: "Av. Ciudad de Cali #6C-09", category: "public" },
        { lat: 4.6533, lng: -74.0571, name: "Biblioteca Gabriel García Márquez", address: "Calle 57 #21-66", category: "public" },
        { lat: 4.7110, lng: -74.0721, name: "Biblioteca Julio Mario Santo Domingo", address: "Calle 170 #67-51", category: "public" },
        { lat: 4.6486, lng: -74.1105, name: "Biblioteca El Tunal", address: "Calle 48B Sur #21-13", category: "children" },
        { lat: 4.6243, lng: -74.0642, name: "Biblioteca Luis Ángel Arango", address: "Calle 11 #4-14", category: "university" },
        { lat: 4.6097, lng: -74.1284, name: "Biblioteca Perdomo", address: "Carrera 1H #62-33 Sur", category: "children" },
        { lat: 4.6708, lng: -74.0543, name: "Biblioteca Parque El Salitre", address: "Calle 63 #59A-06", category: "children" },
        { lat: 4.6389, lng: -74.0837, name: "Biblioteca Restrepo", address: "Carrera 20 #11-25 Sur", category: "public" },
        { lat: 4.6800, lng: -74.0472, name: "Biblioteca Lago Timiza", address: "Transversal 78K #41A-04 Sur", category: "university" }
    ];
    
    libraries.forEach(function(lib) {
        const marker = new google.maps.Marker({
            position: { lat: lib.lat, lng: lib.lng },
            map: map,
            title: lib.name
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: "<h5>" + lib.name + "</h5><p>" + lib.address + "</p>"
        });
        
        marker.addListener("click", function() {
            infoWindow.open(map, marker);
        });
        
        marker.category = lib.category;
        markers.push(marker);
    });
    const buttons = [
        { id: "publicBtn", category: "public" },
        { id: "universityBtn", category: "university" },
        { id: "childrenBtn", category: "children" },
        { id: "allBtn", category: "all" }
    ];
    
    buttons.forEach(function(btn) {
        document.getElementById(btn.id).addEventListener("click", function() {
            filterMarkers(btn.category);
        });
    });
}

function filterMarkers(category) {
    markers.forEach(function(marker) {
        if (category === "all") {
            marker.setVisible(true);
        } else if (marker.category === category) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });
}

const geoBtn = document.getElementById("geoBtn");

let userMarker = null; 

geoBtn.addEventListener("click", function () {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      function(position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const userLocation = { lat: lat, lng: lng };

        // Remove previous user marker if it exists
        if (userMarker) {
          userMarker.setMap(null);
        }

        // Create new marker
        userMarker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your Location",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });

        // Center map on user
        map.setCenter(userLocation);
        map.setZoom(14);

      },
      function(error) {
        alert("Unable to retrieve your location.");
      }
    );

  } else {
    alert("Geolocation is not supported by this browser.");
  }

});
