// Tenemos que crear la aplicacion
Vue.createApp({
  // Tenemos que definir la data
  data() {
    return {
      goals: [],
      enteredValue: '', // Conectarlo con HTML
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    } // El metodo para agregar goals
  }
}).mount('#app');


