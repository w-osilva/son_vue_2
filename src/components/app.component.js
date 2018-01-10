import TabelaComponent from "./tabela.component";
import PartidaComponent from "./partida.component";
import ZonasComponent from "./zonas.component";
import event from "../event";
import store from '../store';

export default {
  components: {
    'tabela': TabelaComponent,
    'partida': PartidaComponent,
    'zonas': ZonasComponent,
  },
  template: `
  <div class="container">
        
        <div class="row">
          <h3>Campeonato Brasileiro - Série A</h3>

          <a class="waves-effect btn" @click.prevent="tabelaClassificacao">Tabela</a>
          <a class="waves-effect btn blue" @click.prevent="iniciarJogo">Partida</a>
          <a class="waves-effect btn amber" @click.prevent="zonasClassificacao">Zonas</a>
          

          <div v-show="view == 'tabela'">
            <tabela></tabela>
          </div>

          <div v-show="view == 'partida'">
            <partida></partida>
          </div>
          
          <div v-show="view == 'zonas'">
            <zonas></zonas>
          </div>

        </div>

      </div>
  `,

  data(){
    return {}
  },

  created(){
    store.commit('set-view', 'tabela');
  },

  mounted(){
  },

  computed: {
    view(){
      return store.state.view;
    }
  },

  methods: {
    tabelaClassificacao(){
      store.commit('set-view', 'tabela')
    },

    iniciarJogo(){
      event.$emit('iniciar-partida');
    },

    zonasClassificacao(){
      event.$emit('iniciar-zonas');
    },
  },

}
