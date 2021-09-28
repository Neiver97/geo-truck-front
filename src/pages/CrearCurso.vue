<template>
  <card>
    <div>
      <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <div class="col-md-6">
            <ValidationProvider
              name="Code"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Code</label>
                  <input class="form-control" 
                  placeholder="Code"
                  v-model="dataCurso.code"
                  :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Name</label>
                  <input class="form-control" placeholder="Name" v-model="dataCurso.nombre" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <ValidationProvider
              name="Credit Number"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Credit Number</label>
                  <input class="form-control" type="number" placeholder="Credit Number" v-model="dataCurso.numeroCredito" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              name="Total Hours"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Total Hours / weeks</label>
                  <input class="form-control" placeholder="Total Hours" v-model="dataCurso.totalHoras" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>
        <input class="btn btn-primary mt-2" type="submit" text="Send" />
      </form>
    </ValidationObserver>
    </div>
  </card>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  data(){
    return {
      dataCurso: {
        codigo:"",
        nombre:"",
        numeroCredito: "",
        totalHoras:"",
        grupo: {
          id:1,
          nombres:"Grupo 1"
        },
        estado: true
      }
    }
  },
  methods: {
    async onSubmit(){
      await axios.post('http://localhost:8089/curso/', this.dataCurso).then(async(res) => {
        console.log(res);
          await Swal.fire({
            icon: "success",
            title: "Crear curso",
            text: "Curso creado con éxito",
            timer: 1500,
          });
        this.cleanData();
      }).catch(err => {
        console.log(err.response);
      }); 
    },
    cleanData(){
      this.dataCurso.nombre="",
      this.dataCurso.numeroCredito="",
      this.dataCurso.totalHoras=""
    }
  }
};
</script>
<style>
</style>
