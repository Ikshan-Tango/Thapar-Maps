
//   map init below
mapboxgl.accessToken = 'pk.eyJ1IjoidmlzaGlzdGIiLCJhIjoiY2wydXFxNXA4MDRrazNrbXBjZGdndDZzdiJ9.iPLdTCf_wJLZ6TdNGo5Idw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            //cos complex 30.354461488469358, 76.36240522728016
            center:{lat:30.354461488469358,lng:76.36240522728016},
            zoom:17,
            
        });

        // cos marker below
        const marker = new mapboxgl.Marker()
        .setLngLat([76.36240522728016, 30.354461488469358])
        .addTo(map);

    

        