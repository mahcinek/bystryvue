<template>
  <q-page >
    <CardItemDetails :obj="obj[0]"/>
  </q-page>
</template>

<script>
  import CardItemDetails from '../components/CardItemDetails';

  export default {
    computed: {
      obj: function () {
        return this.$store.state.example.currentObject;
      }
    },
    components: {
        CardItemDetails
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = this.pageTitle;
      var vm = this;
      var id = this.$route.params.id;
      this.$store.dispatch('example/getObjectById', {vm: vm, id_param: id})
    }
  }
</script>

<style scoped>

</style>
