<template>
  <card>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="col-6">
          <div class="col-md">
            <ValidationProvider
              name="Date Start"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label for="example-datepicker">Date Start</label>
                <b-form-datepicker 
                id="example-datepicker"
                v-model="dataSemestre.fechaInicio" 
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
                v-model="dataSemestre.fechaFin" 
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
          <label for="">Cursos</label>
          <div>
            <b-form-select v-model="dataSemestre.seleted" :options="cursos"></b-form-select>
          </div>
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
  data() {
    return {
      dataSemestre: {
        fechaInicio: "",
        fechaFin: "",
      },
      seleted:0,
      cursos: [
        { value: 0, text: "Proyecto Integrador" },
        { value: 1, text: "Física de Campos" },
        { value: 2, text: "Física de Mecánica" },
        { value: 3, text: "Fundamentos de sistemas" }
      ],
      idSemestre: "",

    };
  },
  methods: {
    async onSubmit(){
      await axios.post('http://localhost:8089/semestre/', this.dataSemestre).then(async(res) => {
        console.log(res);
          await Swal.fire({
            icon: "success",
            title: "Semestre creado",
            text: "Semestre creado con éxito",
            timer: 1500,
          });
        this.cleanData();
      }).catch(err => {
        console.log(err.response);
      });   
    },
    cleanData(){
      this.dataSemestre.fechaInicio="",
      this.dataSemestre.fechaFin="",
      this.seleted=""
    }
  }
};
</script>
<style></style>
