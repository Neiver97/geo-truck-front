<template>
  <card>
    <ValidationObserver  v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <div class="col-md-5">
            <ValidationProvider
              name="Placa"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Placa</label>
                  <input class="form-control" placeholder="Placa" v-model="dataForm.placa" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-3">
            <ValidationProvider
              name="Tipo"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Tipo</label>
                  <input class="form-control" placeholder="Tipo" v-model="dataForm.tipo" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Marca"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Marca</label>
                  <input class="form-control" placeholder="Marca" v-model="dataForm.marca" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <ValidationProvider
              name="Modelo"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Modelo</label>
                  <input class="form-control" placeholder="Modelo" v-model="dataForm.modelo" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-3">
            <ValidationProvider
              name="Capacidad"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Capacidad</label>
                  <input class="form-control" placeholder="Capacidad" v-model="dataForm.capacidad" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Color"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Color</label>
                  <input class="form-control" placeholder="Color" v-model="dataForm.color" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <ValidationProvider
              name="Ultima Ubicación"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Ultima Ubicación</label>
                  <input class="form-control" placeholder="Ultima Ubicación" v-model="dataForm.ultimaUbicacion" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-3">
            <ValidationProvider
              name="Ruta"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Ruta</label>
                  <input class="form-control" placeholder="Ruta" v-model="dataForm.ruta" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Carga"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Carga</label>
                  <input class="form-control" placeholder="Carga" v-model="dataForm.carga" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
  </card>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  data(){
    return {
      dataForm: {
        placa:"",
        tipo:"",
        marca:"",
        modelo:"",
        capacidad: "",
        color: "",
        ultimaUbicacion: "",
        ruta: "",
        carga: "",
      }
    }
  },
  methods: {
    //Post information
     async onSubmit(){
      await axios.post('http://localhost:8089/actividades/', this.dataForm).then(async (res) => {
        console.log(res);
          await Swal.fire({
            icon: "success",
            title: "Dato insertado",
            text: "Dato insertado con éxito",
            timer: 1000,
          });
          this.cleanData();
      }).catch(err => {
        console.log(err.response);
      });
    }
  }
}
</script>
<style>
</style>
