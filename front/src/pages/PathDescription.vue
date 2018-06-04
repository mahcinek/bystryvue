<template>
  <q-page>
  <PathDescCard :description="description"
                  :upperImagePath="upperImagePath"
  ></PathDescCard>
   <q-btn
          @click="goToArrival"
          label="Zaprowadź mnie tam"
          text-color="white"
          color="secondary"
          style="width: 100%; max-width: 800px; position:fixed; bottom: 0px;">
        </q-btn>
  </q-page>
</template>

<script>
  import PathDescCard from '../components/PathDescCard';

  export default {
    name: "path-description",
    data() {
      return {
        upperImagePath: '../assets/cicha-dolina.jpg',
        lowerImagePath: '../assets/mapka.jpg',
        description: "Ścieżka została wykonana w roku 2012 we współpracy z Urzędem Miasta i Gminy " +
                           "Kąty Wrocławskie. Trasa ścieżki prowadzi poprzez różnorodne ekosystemy związane" +
                            " z doliną rzeki Bystrzycy.",
        pageTitle: 'Cicha Dolina',
        navigationArray:[],
        lat: 0.0,
        lng: 0.0
      };
    },
    components: {
      PathDescCard,
    },
    created(){
      var vm = this;
      var id = this.$route.params.id;
      console.log(id);
      this.getData(id)
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = this.pageTitle;
    },
    methods: {
      getData(id){
        var pathtObject = this.$store.state.example.touristPaths[id-1]
        this.pageTitle= pathtObject.nazwa
        this.description= pathtObject.opis
        this.upperImagePath= pathtObject.link
        var arr = this.$store.state.example.touristPathsElements['path'+id]
        console.log(arr)
        this.navigationArray=arr
      },
       goToArrival(){
          this.$store.state.example.navigationType = 'path'
          this.$store.state.example.navigationArray = this.navigationArray
          this.$router.replace('/navigate');
        }
    }
  }
</script>

<style scoped>

</style>
