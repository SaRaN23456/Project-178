var latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken ='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4,
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
        enableHighAccuracy: true
        },
        trackUserLocation: true,
    })
)

map.addControl(
    new MapboxDirections(
        {
            accessToken:mapboxgl.accessToken,
            mapboxgl:mapboxgl
        }
    ),
    
)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)

var img1 = document.querySelector("tajmahal")

var marker1 = new mapboxgl.Marker({
    element:img1
}).setLngLat([27.175259310786902, 78.04233531449906])
.addTo(map)

var img2 = document.querySelector("hampi")

var marker2 = new mapboxgl.Marker({
    element:img2
}).setLngLat([15.335362636390323, 76.46206867815138])
.addTo(map)

var img3 = document.querySelector("cholatemple")

var marker3 = new mapboxgl.Marker({
    element:img3
}).setLngLat([10.78286931128389, 79.13141548615067])
.addTo(map)

var img4 = document.querySelector("nellaitemple")

var marker4 = new mapboxgl.Marker({
    element:img4
}).setLngLat([8.728437623412045, 77.6880430527208])
.addTo(map)
