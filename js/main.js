function initMap(){
    const loc = {lat: 35.681168, lng: 139.767059};
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({position:loc, map:map});

}