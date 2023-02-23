<template>
  <div id="app">
    <NavBar/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
  
  export default {
    name: "root",
  
    components: {
      NavBar,
      Footer
    }
  }
  </script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Poppins:wght@400;500;600;700&display=swap');

  #app{
    font-family: 'Poppins', sans-serif;
    background-color: #43c555;
  }
  body {
    height: 100%;
    background-color: #43c555 !important;
  }

  .btn{
    background-color: black;
  }
</style>
