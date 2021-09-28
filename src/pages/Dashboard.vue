<template>
  <card>
    <ValidationObserver  v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="col-12">
          <div class="col-md">
            <ValidationProvider
              name="Title"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Title</label>
                  <input class="form-control" placeholder="Title" v-model="dataForm.titulo" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md">
            <ValidationProvider
              name="Description"
              rules="required"
              v-slot="{ errors }"
            >
            <div class="form-group">
              <label>Description</label>
                <b-form-textarea
                  id="textarea"
                  v-model="dataForm.descripcion"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                  :class="(errors.length > 0 ? 'is-invalid':'')"
                ></b-form-textarea>
              <div class="invalid-feedback">
               <span>{{ errors[0] }}</span>
              </div>
            </div>
            </ValidationProvider>
          </div>
          <div class="col-md">
            <ValidationProvider
              name="Date Start"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Date Start</label>
                <b-form-datepicker
                id="example-datepicker"
                v-model="dataForm.fechaInicio"
                class="mb-2" :class="errors.length
                > 0 ? 'is-invalid' : ''"
                >
                </b-form-datepicker>
                <div class="invalid-feedback">
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md">
            <ValidationProvider
              name="Date Finish"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Date Finish</label>
                <b-form-datepicker
                id="example-datepicker"
                v-model="dataForm.fechaFin"
                class="mb-2" :class="errors.length
                > 0 ? 'is-invalid' : ''"
                >
                </b-form-datepicker>
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
        titulo:"",
        descripcion:"",
        fechaInicio:"",
        fechaFin:"",
        curso: {
          id: 1,
          codigo: "12",
          nombre: "prueba",
          numeroCreditos: 2,
          totalHoras: 3,
          grupo: {
            id: 1,
            nombres: "prueba"
          }
        }
      },
      idActivity: "",
      idSubject: ""
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
    },
    cleanData(){
      this.dataForm.titulo="",
      this.dataForm.descripcion="",
      this.dataForm.fechaInicio="",
      this.dataForm.fechaFin=""
    }
  }
}
</script>
<style>
</style>
