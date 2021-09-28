<template>
  <card class="card" title="Edit Profile">
    <div>
      <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(updateProfile)">
        <div class="row">
          <div class="col-md-5">
            <ValidationProvider
              name="Identification"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Identification</label>
                  <input class="form-control" placeholder="Identificaction" v-model="user.identification" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-3">
            <ValidationProvider
              name="First Name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>First Name</label>
                  <input class="form-control" placeholder="First Name" v-model="user.firstName" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Last Name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Last Name</label>
                  <input class="form-control" placeholder="Last Name" v-model="user.lastName" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
              name="Email"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Email</label>
                  <input class="form-control" placeholder="Email" v-model="user.email" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              name="Phone"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Phone</label>
                  <input class="form-control" placeholder="Phone" type="number" v-model="user.phone" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <ValidationProvider
              name="Password"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Password</label>
                  <input class="form-control" :disabled="true" type="password" v-model="user.password" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Speciality"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Speciality</label>
                  <input class="form-control" placeholder="Speciality" type="text" v-model="user.speciality" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-4">
            <ValidationProvider
              name="Asigned Area"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Asigned Area</label>
                  <input class="form-control" placeholder="Asigned Area" type="text" v-model="user.asignedArea" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>

        <div class="text-center">
          <input class="btn btn-primary mt-2" type="submit" text="Send" />
        </div>
        <div class="clearfix"></div>
      </form>
      </ValidationObserver>
    </div>
  </card>
</template>
<script>
import Swal from 'sweetalert2';
import axios from "axios";


export default {
  data() {
    return {
      user: {
        identification: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        password: "",
        speciality: "",
        asignedArea: ""
      }
    }
  },
  methods: {
    async onSubmit(){
      await axios.post('http://localhost:8089/semestre/', this.user).then(async(res) => {
        console.log(res);
          await Swal.fire({
            icon: "success",
            title: "Dato insertado",
            text: "Dato insertado con éxito",
            timer: 1500,
          });
        this.cleanData();
      }).catch(err => {
        console.log(err.response);
      });   
    },
    cleanData(){
        this.user.identification= "",
        this.user.email= "",
        this.user.firstName= "",
        this.user.lastName= "",
        this.user.gender= "",
        this.user.phone= "",
        this.user.password= "",
        this.user.speciality= "",
        this.user.asignedArea= ""
    }
  }
};
</script>
<style>
</style>
