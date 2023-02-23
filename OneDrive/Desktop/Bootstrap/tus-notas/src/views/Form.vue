<template>
    <div class="container mt-2">
      <FormNota/>
    </div>
</template>

<script>
import FormNota from "../components/FormNota.vue"

export default {
  name: "Form",

  components: {
    FormNota,
  }
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
</style>