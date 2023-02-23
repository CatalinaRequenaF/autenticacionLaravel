<template>
    <div id="align">
        <b-jumbotron id="fondo">
            <h1 class="text-uppercase">NOTAS</h1>
            <p>Tus notas :) </p>
        </b-jumbotron>
    </div>
</template>

<script>
import ToastMixin from "@/mixins/toastMixin.js";

export default {
  name: "Home",
}
</script>

<style>
#fondo{
    background-color: #43c555;
}

#fondo h1{
    color: #FEEDE1;
    font-weight: 700 !important;
    font-size: 11rem !important;
}

#fondo p{
    color: #FEEDE1;
    font-weight: 400 !important;
    font-size: 20px !important;
}


#align{
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    #fondo h1{
    color: #FEEDE1;
    font-weight: 700 !important;
    font-size: 5rem !important;
}
}

</style>

