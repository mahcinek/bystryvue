<template>
   <q-page>
     <div>Tutaj fotki</div>
   </q-page>
</template>

<script>
    export default {

      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = 'O nas';
      }
    }
</script>

<style scoped>

</style>
