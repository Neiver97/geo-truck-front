<template>
  <div>
      <h4>Localización de vehículos</h4>
      <div id="mapContainer" class="basemap"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: "pk.eyJ1IjoibmVpdmVydGFwaWE5NyIsImEiOiJja3VqN3cyNW0ydmFuMnJvODN3emY0aXMzIn0.ERuILdABE318Sv-y1w2pkQ",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-75.24515309101841,6.231861554704307],
      zoom: 7
    });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    const marker = new mapboxgl.Marker()
    .setLngLat([-75.24515309101841,6.231861554704307])
    .addTo(map);
    
    const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
    });

    map.addControl(geolocate, "top-right");

  },
  methods:{

  }
};
</script>
<style lang="scss" scoped>
.basemap {
  width: 100%;
  height: 80vh;
}
</style>