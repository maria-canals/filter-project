const App = {
    data() {
      return {
        filtroActivo: "",
        filterText: ""
      }
    },
    methods : {
        aplicarFiltro(event) {
            this.filtroActivo = event.target.dataset.filter
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