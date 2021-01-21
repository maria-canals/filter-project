const App = {
    data() {
      return {
        filtroActivo: "",
        filterText: ""
      }
    },
    methods : {
        aplicarFiltro(tipoDulce) {
            this.filtroActivo = tipoDulce
        },
        mustShowItem(tipoDulce) {
            if(this.filterText){
                return tipoDulce.toLowerCase().includes(this.filterText.toLowerCase())
            } else {
                return !this.filtroActivo || tipoDulce == this.filtroActivo
            }
            
        }
    }
  }
  
  Vue.createApp(App).mount('#store')