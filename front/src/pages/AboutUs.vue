<template>
   <q-page>
     <div class="padding_border">
     <p class="center">Aplikacja powstała w ramach zajęć zespołowego przedsięwzięcia inżynierskiego studentów Politechniki&nbspWrocławskiej we&nbspwspółpracy&nbspz
     </p>
       <ul>
        <li class="white">Akademią Sztuk Pięknych we Wrocławiu</li>
       <li class="white">Dolnośląskim Zespołem Parków Krajobrazowych</li>
       </ul>
       <q-list no-border>
         <q-list-header class="white_center">SUPER DEVELOPER TEAM:</q-list-header>
         <q-item>
           <q-item-side icon="person" color="white" />
           <q-item-main class="white">Jarzębski Filip</q-item-main>
         </q-item>
         <q-item>
           <q-item-side icon="person" color="white" />
           <q-item-main class="white" >Kanclerz Kamil</q-item-main>
         </q-item>
         <q-item>
           <q-item-side icon="person" color="white" />
           <q-item-main class="white"  >Karczewski Dawid</q-item-main>
         </q-item>
         <q-item class="he">
           <q-item-side icon="person" color="white" />
           <q-item-main class="white"  >Piwek Marcin</q-item-main>
         </q-item>
       </q-list>
     </div>
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
  .padding_border{
    padding: 10px;
  }
  p.center {
    text-align: center;
  }
  p {
    color: white;
    overflow: auto;
    height: 25%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .white_center{
    color: white;
    text-align: center;
  }
  .white{
    color: white;
  }
  .he{
    height: 1px;
  }

</style>
