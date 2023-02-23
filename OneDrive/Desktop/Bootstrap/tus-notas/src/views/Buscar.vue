<template>
<div class="container">
    <b-form>
        <b-form-group
          label="Id"
          label-for="id"
          class="texto"
        >
          <b-form-input
            id="notaId"
            type="number"
            required
            v-model="nota.id"
            autocomplete="off"
          ></b-form-input>
        </b-form-group>
        </b-form>
        <b-button variant="outline-secondary" href="#" @click="enviar"> Buscar </b-button>
        <Carrousel/>
    </div>
</template>

<script>
import Carrousel from "./Carrousel.vue";
export default {
  name: "Lista",
  data() {
        return {
          nota:[]
        }
      },

//Renderizar notas creadas
    methods: {
        enviar(){
        const notaId = this.nota.id;
        const nota = fetch(`${baseURL}/${notaId}`)
        this.$router.push({ name: "editar", params: { nota} });
        },
  }
}
</script>


  