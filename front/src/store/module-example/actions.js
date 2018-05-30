
export const fetchObjects = (state, vm) => {
    var url = 'http://bystrzyca.herokuapp.com/api/v1/obiekts';
    vm.axios.get(url)
      .then( response => {
        vm.$store.state.example.objects = response.data;
      }).then(() =>{
        vm.$store.state.example.objects.forEach(function (obj) {
          vm.$set(obj, 'destination', 'details/' + obj.id);
          obj.dlugosc_geograficzna = obj.dlugosc_geograficzna/1000;
          obj.szerokosc_geograficzna = obj.szerokosc_geograficzna/1000;
        });
    }).then(() =>{
    url = 'http://bystrzyca.herokuapp.com/api/v1/zdjecies';
    vm.axios.get(url)
      .then( response => {
        var r;
        for(r = 0; r < response.data.length; r++){
          var i;
          for(i = 0; i < vm.$store.state.example.objects.length; i++){
            if(vm.$store.state.example.objects[i].id == response.data[r].obiekt_id){
              vm.$store.state.example.objects[i].link = response.data[r].zdjecie_link;
            }
          }
        }
      })
    }).then(()=>{
      vm.$store.dispatch('example/setMarkers',vm);
    });

};

export const setMarkers = (state, vm) => {
    vm.$store.state.example.monumentsMarkers = vm.$store.state.example.objects.filter(obj =>{
      return obj.typ === 1 || obj.typ === 4
    });
    vm.$store.state.example.natureMarkers = vm.$store.state.example.objects.filter(obj =>{
      return obj.typ === 2
    });
    vm.$store.state.example.touristMarkers = vm.$store.state.example.objects.filter(obj =>{
      return obj.typ === 3
    });
};

export const getObjectById = (state, vm, ida) => {
  vm.$store.state.example.currentObject = vm.$store.state.example.objects.filter(obj => {
    return obj.id === ida;
  })
  console.log(ida);
};




