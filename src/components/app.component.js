
import TabelaComponent from "./tabela.component";
import PartidaComponent from "./partida.component";

export default {
  components: {
    'tabela': TabelaComponent,
    'partida': PartidaComponent,
  },
  template: `
  <div class="container">
        
        <div class="row">
          <h3>Campeonato Brasileiro - Série A</h3>

          <a class="waves-effect btn" @click.prevent="iniciarJogo">Novo jogo</a>

          <div v-show="view == 'tabela'">
            <tabela></tabela>
          </div>

          <div v-show="view == 'partida'">
            <partida></partida>
          </div>

        </div>

      </div>
  `,

  data(){
    return {
      view: 'tabela'
    }
  },

  created(){
  },

  computed: {
  },

  methods: {
    iniciarJogo(){
      let _tabela = this.$children[0],
          _partida = this.$children[1];

      _partida.iniciar(_tabela.times);
    },

    showView(view){
      this.view = view;
    }
  },

}
