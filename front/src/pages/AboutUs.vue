<template>
   <q-page style="background-color: #00897B">
     <div class="padding_border">
       <p>
       Właścicielem aplikacji jest Dolnośląski Zespół Parków Krajobrazowych.
       </p>
       <p>
       Pomysłodawcą przedsięwzięcia jest dr hab. Stanisław Sasak, profesor Akademii Sztuk Pięknych im. Eugeniusza Gepperta we Wrocławiu.
       </p>
       <p>
       Aplikacja została wykonana jako Zespołowe Przedsięwzięcie Inżynierskie na Wydziale Informatyki i Zarządzania Politechniki Wrocławskiej.
       </p>
       <q-list no-border>
         <q-list-header class="white">Wykonawcy:</q-list-header>
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
       <br>
       <p>
         Prowadzący: dr inż. Ziemowit Nowak
       </p>
       <p>
         Autorem fotografii obiektów architektonicznych jest dr hab. Stanisław Sasak.<br>
         Autorem pozostałych fitografii jest mgr inż. Piotr Śnigucki, dyrektor DZPK.<br>
         Fotografie historyczne pobierane są z serwisu dolny-slask.org.pl
       </p>
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
