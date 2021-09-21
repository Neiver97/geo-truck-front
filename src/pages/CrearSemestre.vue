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
                v-model="dataSemestre.dateStart" 
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
                v-model="dataSemestre.dateFinish" 
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

export default {
  data() {
    return {
      dataSemestre: {
        dateStart: "",
        dateFinish: "",
        seleted:0
      },
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
    onSubmit(){
      axios.status(200).post('/' , this.dataSemestre)
      .catch(error =>{
        this.errorMessage = error.message;
        console.error("There was an error!",error);
      })    
    }
  }
};
</script>
<style></style>
