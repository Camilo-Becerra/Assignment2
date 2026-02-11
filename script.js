function initMap() {
    const bogota = { lat: 4.6097, lng: -74.0817 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: bogota
    });
}