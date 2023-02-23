<template>
    <div class="container mt-2" v-if="notas.length != 0">
      <div v-for="nota in notas" :key="nota.id"> 
        <b-card :title="nota.titulo" class="mb-2" id="card1">
          
          <h6 class="card-subtitle mb-2 text-muted">{{nota.id}}</h6>
          <b-card-text  >{{ nota.descripcion }}</b-card-text>

          <b-button variant="outline-secondary" class="mr-2" @click="edit(nota)"> Editar </b-button>
          <b-button variant="outline-danger" class="mr-2" @click="remove(nota)"> Eliminar </b-button>
        </b-card>
      </div>
    </div>
    <div class="container mt-2 alinear" v-else>
      <b-card class="mb-2" id="card1">
        <b-card-text>Aún no tienes ninguna nota :(</b-card-text>
        <b-card-text>¿Quieres crear una?</b-card-text>
        <b-button variant="outline-danger" class="mr-2" to="/form">Crear nota</b-button>
      </b-card>
    </div>
</template>
    
    <script>
    export default {
      name: "List",
    
      data() {
        return {
          notas: []
        }
      },
    //Renderizar notas creadas
      created() {
        fetch("http://localhost:3000/notas")
        .then((response) => response.json())
        .then((notas) => (this.notas = notas));
      },
    
      methods: {
        edit(nota) {
          this.$router.push({ name: "editar", params: { nota} });
        },
    
        remove(nota) { 
        
          fetch(`http://localhost:3000/notas/${nota.id}`, { method: "DELETE" }).then(
          () => console.log('Eliminada correctamente'),
          );
          
          this.$router.push({ name: "list" })
        },
      }
    }
    </script>
    
    <style>
      #card1{
      background-color: #363434;
      border-radius: 20px;
      color: rgb(255, 255, 255);
      box-shadow: -1px 1px 11px 1px rgba(0,0,0,0.36);
      -webkit-box-shadow: -1px 1px 11px 1px rgba(0,0,0,0.36);
      }
      .alinear{
        height: calc(100vh - 64px) !important;
        width: 100vh !important;
        display: flex !important;
        justify-content: flex-start !important;
        align-items: center !important;
      }
    </style>