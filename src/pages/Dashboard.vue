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
                  <input class="form-control" placeholder="Title" v-model="dataForm.title" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
                  v-model="dataForm.description"
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
                v-model="dataForm.dateStart" 
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
                v-model="dataForm.dateFinish" 
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

export default {
  data(){
    return {
      dataForm: {
        title:"",
        description:"",
        dateStart:"",
        dateFinish:""
      },
      idActivity: "",
      idSubject: ""
    }
  },
  methods: {
    //Post information
    onSubmit(){
      axios.status(200).post('/' , this.dataForm)
      .catch(error =>{
        this.errorMessage = error.message;
        console.error("There was an error!",error);
      })
    }

  }
}
</script>
<style>
</style>
