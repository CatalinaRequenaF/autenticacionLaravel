<template>
    <b-form>
      <b-form-group
        label="Titulo"
        label-for="titulo"
        class="texto"
      >
        <b-form-input
          id="titulo"
          v-model="UpdateNota.titulo"
          type="text"
          placeholder="Ex: lavar carro"
          required
          autocomplete="off"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Descripcion"
        label-for="descripcion"
        class="texto"
      >
        <b-form-textarea
          id="descripcion"
          v-model="UpdateNota.descripcion"
          type="text"
          placeholder="Ex: preciso levar o carro para lavar"
          required
          autocomplete="off"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="outline-secondary" @click="actualizar"> Actualizar </b-button>
    </b-form>
</template>

<script>
const baseURL="http://localhost:3000/notas";
import ToastMixin from "@/mixins/toastMixin.js";

export default {
name: "UpdateNota",

mixins: [ToastMixin],

data() {
  return {
    UpdateNota: {
      titulo: "",
      descripcion: ""
    }
  }
},

mounted(){
  const nota = this.$route.params.nota;
  this.UpdateNota.titulo=nota.titulo;
  this.UpdateNota.descripcion=nota.descripcion;

},


methods: {
 actualizar() {
    let tituloN = document.getElementById("titulo").value;
    let notaN = document.getElementById("descripcion").value;

    var dataN = {
        titulo: tituloN,
        descripcion: notaN
    }
    let options = {
        method: "PUT",
        body:JSON.stringify(dataN),
        mode:'cors',
        credentials: 'same-origin',
        headers: {'Content-Type':'application/json'},
    }

    fetch(`${baseURL}/${this.$route.params.nota.id}`, options);
      this.showToast("success", "HECHO!", "Nota creada satisfactoriamente");
      this.$router.push({ name: "list" });
    },
  },
}
</script>

<style>
.container{
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 30px;
}
.texto{
  color: rgb(255, 255, 255);
  font-weight: 600;
}
#descripcion, #titulo{
  background-color: #ffffff;
  border-radius: 7px;
  color: rgb(0, 0, 0);
  box-shadow: -1px 1px 11px 1px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: -1px 1px 11px 1px rgba(0, 0, 0, 0.36);
  border: none;
}
</style>