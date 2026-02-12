let markers = [];
// Initialize and add the map

function initMap() {
    const bogota = { lat: 4.6097, lng: -74.0817 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: bogota
    });
    // Sample library data
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
    // Add markers for libraries
    libraries.forEach(function (lib) {
        const marker = new google.maps.Marker({
            position: { lat: lib.lat, lng: lib.lng },
            map: map,
            title: lib.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: "<h5>" + lib.name + "</h5><p>" + lib.address + "</p>"
        });

        marker.addListener("click", function () {
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

    // Add event listeners for filter buttons
    buttons.forEach(function (btn) {
        document.getElementById(btn.id).addEventListener("click", function () {
            filterMarkers(btn.category);
        });
    });


    // Geolocation functionality
    let userMarker = null;
    const geoBtn = document.getElementById("geoBtn");
    geoBtn.addEventListener("click", function () {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                function (position) {

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
                            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                        }
                    });

                    // Center map on user
                    map.setCenter(userLocation);
                    map.setZoom(14);

                },
                function (error) {
                    alert("Unable to retrieve your location.");
                }
            );

        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    // Directions functionality
    const originSelect = document.getElementById("originSelect");
    const destinationSelect = document.getElementById("destinationSelect");

    // Populate dropdowns with library options
    libraries.forEach(function (lib) {
        const originOption = document.createElement("option");
        originOption.value = lib.lat + "," + lib.lng;
        originOption.text = lib.name;
        originSelect.appendChild(originOption);

        const destOption = document.createElement("option");
        destOption.value = lib.lat + "," + lib.lng;
        destOption.text = lib.name;
        destinationSelect.appendChild(destOption);
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Add event listener for directions button
    document.getElementById("directionsBtn").addEventListener("click", function () {
        const origin = originSelect.value;
        const destination = destinationSelect.value;
        if (!origin || !destination) {
            alert("Please select both origin and destination");
            return;
        }

        const originCoords = origin.split(",");
        const originLocation = { lat: parseFloat(originCoords[0]), lng: parseFloat(originCoords[1]) };

        const destCoords = destination.split(",");
        const destLocation = { lat: parseFloat(destCoords[0]), lng: parseFloat(destCoords[1]) };

        const request = {
            origin: originLocation,
            destination: destLocation,
            travelMode: "DRIVING"
        };
        // Request directions
        directionsService.route(request, function (result, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(result);
            } else {
                alert("Directions request failed");
            }
        });
    });

    // Add library functionality
    document.getElementById("addLibraryBtn").addEventListener("click", function () {
        const name = document.getElementById("libraryName").value;
        const address = document.getElementById("libraryAddress").value;
        const category = document.getElementById("libraryCategory").value;

        if (!name || !address) {
            alert("Please fill in all fields");
            return;
        }
        // Geocode the address to get coordinates
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, function (results, status) {
            if (status === "OK") {
                const location = results[0].geometry.location;

                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: name
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + name + "</h5><p>" + address + "</p>"
                });

                marker.addListener("click", function () {
                    infoWindow.open(map, marker);
                });

                marker.category = category;
                markers.push(marker);

                map.setCenter(location);

                document.getElementById("libraryName").value = "";
                document.getElementById("libraryAddress").value = "";
            } else {
                alert("Address not found");
            }
        });
    });

}
//filter markers based on category

function filterMarkers(category) {
    markers.forEach(function (marker) {
        if (category === "all") {
            marker.setVisible(true);
        } else if (marker.category === category) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });
}




