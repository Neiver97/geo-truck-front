<template>
  <div>
      <h4>Localización de vehículos</h4>
      <div id="mapContainer" class="basemap"></div>
      <b-button class="btn btn-primary mt-2" @click.prevent="informacionRuta()">Información de carros</b-button>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from 'axios';

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: "pk.eyJ1IjoibmVpdmVydGFwaWE5NyIsImEiOiJja3VqN3cyNW0ydmFuMnJvODN3emY0aXMzIn0.ERuILdABE318Sv-y1w2pkQ",
      lat:null, 
      long:null,
     data:{}
    };
  },
   created(){
  },
  methods:{
    async informacionRuta(){
        //let URL = "http://localhost:8080​/v1​/vehiculos​/geoloc​/1";

        await axios.get("http://localhost:8080/v1/vehiculos/geoloc/1")
        .then(response => {
          this.data = response.data;
            console.log(this.data);   
            this.lat=this.data.latitud;
            this.long=this.data["longitud"];
        })
        .catch(e => {
            console.log(e);
        });

        this.pintarMarket();
    },
    pintarMarket(){

    mapboxgl.accessToken = this.accessToken;
    const map =  new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.long,this.lat],
      zoom: 7
    });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    const marker = new mapboxgl.Marker()
    .setLngLat([this.long,this.lat])
    .addTo(map);
    
    const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
    });

    map.addControl(geolocate, "top-right");
    }
  }
};
</script>
<style lang="scss" scoped>
.basemap {
  width: 100%;
  height: 80vh;
}
</style>