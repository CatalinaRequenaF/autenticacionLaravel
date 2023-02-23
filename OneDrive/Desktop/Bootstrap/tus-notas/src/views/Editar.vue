<template>
    <div class="container mt-2">
      <UpdateNota/>
    </div>
</template>

<script>
import UpdateNota from "../components/UpdateNota.vue"

export default {
  name: "Form",

  components: {
    UpdateNota,
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