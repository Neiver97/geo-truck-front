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
                  v-model="code"
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
                  <input class="form-control" placeholder="Name" v-model="name" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
                  <input class="form-control" placeholder="Credit Number" v-model="creditNumber" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
                <label>Total Hours</label>
                  <input class="form-control" placeholder="Total Hours" v-model="totalHour" :class="(errors.length > 0 ? 'is-invalid':'')" />
                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>              
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ValidationProvider
              name="Group Id"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <label>Group Id</label>
                  <input class="form-control" placeholder="Group Id" v-model="idGroup" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
export default {
  components: {  },
  data(){
    return{
    code:"",
    name:"",
    creditNumber: "",
    totalHour:"",
    idGroup:""
    }
  },
  methods: {
    onSubmit(){
      alert('Click!');
    }
  }
};
</script>
<style>
</style>
