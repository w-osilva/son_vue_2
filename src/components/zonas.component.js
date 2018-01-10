import store from '../store'
import event from '../event'

export default {
  template: `
        <div>
            <h4>Libertadores</h4>      
            <table class="responsive-table bordered">
              <tbody>
              <tr v-for="(time, index) in libertadores" class="teal lighten-5">
                <td class="valign-wrapper">
                  <img :src="time.escudo" :alt="time.nome" height="25" width="25" style="margin: 0 10px 0 10px"> <span>{{ time.nome }}</span>
                </td>
              </tr>
              </tbody>
            </table>
            
            <h4>Pré Libertadores</h4>      
            <table class="responsive-table bordered">
              <tbody>
              <tr v-for="(time, index) in preLibertadores" class="yellow lighten-5">
                <td class="valign-wrapper">
                  <img :src="time.escudo" :alt="time.nome" height="25" width="25" style="margin: 0 10px 0 10px"> <span>{{ time.nome }}</span>
                </td>
              </tr>
              </tbody>
            </table>
            
            <h4>Sulamericana</h4>      
            <table class="responsive-table bordered">
              <tbody>
              <tr v-for="(time, index) in sulamericana" class="blue-grey lighten-5">
                <td class="valign-wrapper">
                  <img :src="time.escudo" :alt="time.nome" height="25" width="25" style="margin: 0 10px 0 10px"> <span>{{ time.nome }}</span>
                </td>
              </tr>
              </tbody>
            </table>
            
            <h4>Rebaixamento</h4>      
            <table class="responsive-table bordered">
              <tbody>
              <tr v-for="(time, index) in rebaixamento" class="red lighten-5">
                <td class="valign-wrapper">
                  <img :src="time.escudo" :alt="time.nome" height="25" width="25" style="margin: 0 10px 0 10px"> <span>{{ time.nome }}</span>
                </td>
              </tr>
              </tbody>
            </table>
            
        </div>
  `,

  data(){
    return {};
  },

  created(){
  },

  mounted() {
    event.$on('iniciar-zonas', () => this.iniciar());
  },

  computed: {

    libertadores(){
      return store.getters.timesLibertadores;
    },
    preLibertadores(){
      return store.getters.timesPreLibertadores;
    },
    sulamericana(){
      return store.getters.timesSulamericana;
    },
    rebaixamento(){
      return store.getters.timesRebaixados;
    },
  },

  methods: {
    iniciar(){
      store.commit('set-view', 'zonas')
    }
  },

}
