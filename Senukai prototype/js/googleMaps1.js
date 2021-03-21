function startMap(){
    /* Don't forget to include <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCwpxYTus2bKMmZo23BWytlbNHd-e0m8A&callback=startMap"></script> */
    navigator.geolocation.getCurrentPosition(showPosition);  
}

function showPosition(){
    var mapProp= {
        center: new google.maps.LatLng(54.652362036447435, 24.933642227366576),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}

function showMyPosition(position) {
    var mapProp= {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}