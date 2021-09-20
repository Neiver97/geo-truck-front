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
                <label>Date Start</label>
                <input
                  placeholder="DD/MM/YYYY"
                  class="form-control"
                  v-model="dateStart"
                  :class="errors.length > 0 ? 'is-invalid' : ''"
                />
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
                <input
                  placeholder="DD/MM/YYYY"
                  class="form-control"
                  v-model="dateFinish"
                  :class="errors.length > 0 ? 'is-invalid' : ''"
                />
                <div class="invalid-feedback">
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
          </div>
        <div class="col-md">
          <label for="">Cursos</label>
          <div>
            <b-form-select v-model="seleted" :options="cursos"></b-form-select>
          </div>
        </div>
        </div>
        <input class="btn btn-primary mt-2" type="submit" text="Send" />
      </form>

      <div class="col-6">
      </div>
    </ValidationObserver>
  </card>
</template>
<script>
export default {
  data() {
    return {
      idSemestre: "",
      dateStart: "",
      dateFinish: "",
      seleted:0,
      cursos: [
        { value: 0, text: "Proyecto Integrador" },
        { value: 1, text: "Física de Campos" },
        { value: 2, text: "Física de Mecánica" },
        { value: 3, text: "Fundamento" }
      ]
    };
  },
  methods: {
    onSubmit(){
      alert('Click!');
    }
  }
};
</script>
<style></style>
