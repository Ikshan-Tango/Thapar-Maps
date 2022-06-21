//   map init below
mapboxgl.accessToken =
    "pk.eyJ1IjoiYWl0Y2hlc3NiZWUiLCJhIjoiY2wydXI4NHI3MDB4ODNkczF6cmdkdW5lYSJ9.0MLozCdZZdpPh0xNtIo8Dw";

    

//Map boundaries
const bounds=[
    [76.35727493214601, 30.349065999507083],
    [76.37347508738856, 30.35882488844401]
];


var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    // style: "mapbox://styles/aitchessbee/cl34xisfc001714p2ozc7g3g4",
    //cos complex 30.354461488469358, 76.36240522728016
    center: { lat: 30.354461488469358, lng: 76.36240522728016 },
    zoom: 17,
    //the thing below points to the bounds const
    // used to set boundaries
    maxBounds: bounds
});

//Geoloaction
// Initialize the GeolocateControl.
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation:true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
geolocate.on('geolocate', () => {
    console.log('A geolocate event has occurred.');
});

// cos marker below
const marker = new mapboxgl.Marker()
    .setLngLat([76.36240522728016, 30.354461488469358])
    .addTo(map);

map.on("load", () => {
    map.addSource("places", {
        // This GeoJSON contains features that include an "icon"
        // property. The value of the "icon" property corresponds
        // to an image in the Mapbox Streets style's sprite.
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                        icon: "theatre-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [76.3637, 30.353828],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
                        icon: "theatre-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [30.353412, 76.364990],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
                        icon: "bar-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.052477, 38.943953],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
                        icon: "art-gallery-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.052477, 38.943952],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
                        icon: "bicycle-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.052477, 38.943951],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
                        icon: "rocket-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.043444, 38.909664],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
                        icon: "music-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.031706, 38.914581],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
                        icon: "music-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.020945, 38.878241],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        description:
                            '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                        icon: "music-15",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-77.007481, 38.876516],
                    },
                },
            ],
        },
    });
    // Add a layer showing the places.
    map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
            "icon-image": "{icon}",
            "icon-allow-overlap": true,
        },
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", "places", (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
    });
});

map.on('load', () => {
    map.addSource('mapbox-rooms', {
    type: 'vector',
    // Use any Mapbox-hosted tileset using its tileset id.
    // Learn more about where to find a tileset id:
    // https://docs.mapbox.com/help/glossary/tileset-id/
    url: 'mapbox://aitchessbee.cl34tdq9u047v27phgcp0fksm-6fyd2'
    });
    // map.addLayer({
    // 'id': 'room-data',
    // 'type': 'line',
    // 'source': 'mapbox-rooms',
    // // 'source-layer': 'contour',
    // 'layout': {
    // 'line-join': 'round',
    // 'line-cap': 'round'
    // },
    // // 'paint': {
    // // 'line-color': '#ff69b4',
    // // 'line-width': 1
    // // }
    // });

    map.addLayer({
        'id': 'rooms',
        'type': 'circle',
        'source': 'mapbox-rooms',
        // 'source-layer': 'sf2010',
        // 'paint': {
        // // Make circles larger as the user zooms from z12 to z22.
        // // 'circle-radius': {
        // // 'base': 1.75,
        // // // 'stops': [
        // // // [12, 2],
        // // // [22, 180]
        // // // ]
        // // },
        // // Color circles by ethnicity, using a `match` expression.
        // // 'circle-color': '#000',
        // }
        }); 
        
    });