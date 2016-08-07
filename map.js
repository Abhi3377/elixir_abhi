/**
 * Created by abhishek on 6/8/16.
 */
var directionsService;
var directionsDisplay;
var gmap,myMap;
function initMap() {
    directionsService = new google.maps.DirectionsService;
    myMap= document.getElementById('map');
    gmap= new google.maps.Map(myMap,{
        center: {lat:27,lng: 77},
        zoom:10

    })
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(gmap);
    gmap.addListener('center_changed',function () {
        var el=document.getElementById('current');
        el.innerHTML=gmap.getCenter().lat()+' '+gmap.getCenter().lng();

    })
}
function dtu() {
    var marker1 = new google.maps.Marker({
        position: {lat:28.7501, lng:77.1177},
        map: gmap,
        title: 'dtu'
    });
        window.setTimeout(function() {
            gmap.panTo(marker1.getPosition());
        });
}
/*function currentlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat=position.coords.latitude;
        var lng=position.coords.longitude;
        var heremarker=new google.maps.Marker({
            position:{lat:lat,lng:lng},
            map: gmap,
            title:'me'
        })
        gmap.panTo(heremarker.getPosition());
    })
}*/
function calcRoute() {
    var request = {
        origin:{lat:28.69, lng:77.14},
        destination:{lat:28.7501, lng:77.1177},
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            console.log(response.routes[0].legs[0].distance);
            directionsDisplay.setDirections(response);
        }
    });
}
function cb() {
    var marker2 = new google.maps.Marker({
        position: {lat:28.69, lng:77.14},
        map: gmap,
        title: 'codingblocks'
    });
    gmap.panTo(marker2.getPosition());
}
function home() {
    var marker3 = new google.maps.Marker({
        position: {lat:28.6887821, lng:77.2906027},
        map: gmap,
        title: 'home'
    });
    gmap.panTo(marker3.getPosition());
}