import TabelaComponent from "./tabela.component";
import PartidaComponent from "./partida.component";
import event from "../event";

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

  mounted(){
    event.$on('show-tabela', ()=> {
      this.view = 'tabela';
    });
    event.$on('show-partida', ()=> {
      this.view = 'partida';
    });
  },

  computed: {
  },

  methods: {
    iniciarJogo(){
      let _tabela = this.$children[0];

      event.$emit('iniciar-partida', _tabela.times);
    },
  },

}
