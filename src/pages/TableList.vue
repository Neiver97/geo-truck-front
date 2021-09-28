<template>
    <div class="row">
      <div class="col-12">
        <card >
          <div slot="raw-content" class="table-responsive">
            <b-table :items="this.tableData"  caption-top>

            </b-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import axios from 'axios';

export default {
  components: {
    PaperTable
  },
  created(){
    this.getElements();
  },
  data() {
    return {
      tableData:[],
      data:[]
    };
  },
  methods: {
     getElements(){
       axios.get('http://localhost:8089/actividades/')
      .then(response => {
        this.data=response.data;
        this.data.forEach(data => {
          datos:
          this.tableData.push({
            id: data.id,
            Title: data.titulo,
            descripcion: data.descripcion,
            fechaInicio:data.fechaInicio,
            fechaFin: data.fechaFin
          })
          })
        console.log(this.tableData);
      })
      .catch(e => {
          console.log(e);
      })
    }
  }
};
</script>
<style>
</style>
