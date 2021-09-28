<template>
    <card>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="col-6">
            <div class="col-md">
                <ValidationProvider
                name="Email"
                rules="required"
                v-slot="{ errors }"
                >
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" placeholder="Email" v-model="email" :class="(errors.length > 0 ? 'is-invalid':'')" />
                    <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                    </div>              
                </div>
                </ValidationProvider>
            </div>
            <div class="col-md">
                <ValidationProvider
                name="Password"
                rules="required"
                v-slot="{ errors }"
                >
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" v-model="password" :class="(errors.length > 0 ? 'is-invalid':'')" />
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
        return{
            email:'',
            password:''
        }
    },
    methods:{
        onSubmit(){
            alert('Click!');
        }
    }
}
</script>
