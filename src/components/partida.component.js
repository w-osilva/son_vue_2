export default {
  template: `
    <div>
      <form class="col s12">
        <div class="row">

          <div class="input-field inline col s2" v-if="novoJogo.fora.time">
            <label>
              <img :src="novoJogo.casa.time.escudo" :alt="novoJogo.casa.time.nome" height="20" style="margin: 0 10px 0 0">
              {{ novoJogo.casa.time.nome }}
            </label>
            <input type="text" class="validate" v-model="novoJogo.casa.gols">
          </div>

          <div class="input-field inline col s1">
            <label><i class="small material-icons">close</i></label>
          </div>

          <div class="input-field inline col s2" v-if="novoJogo.fora.time">
            <label>
              {{ novoJogo.fora.time.nome }}
              <img :src="novoJogo.fora.time.escudo" :alt="novoJogo.fora.time.nome" height="20" style="margin: 0 0 0 10px">
            </label>
            <input type="text" class="validate" v-model="novoJogo.fora.gols">
          </div>

          <div class="input-field inline col s2">
            <a class="waves-effect btn-floating blue" title="Atualizar Placar" @click.prevent="fimJogo"><i class="material-icons left">send</i></a>
          </div>

        </div>
      </form>
    </div>
  `,

  data(){
    return {
      novoJogo: {
        casa: {
          time: null,
          gols: 0
        },
        fora: {
          time: null,
          gols: 0
        }
      }
    }
  },

  created(){
  },

  computed: {
  },

  methods: {
    iniciar(times){
      this.novoJogo.casa.time = this.sortearTime(times);
      this.novoJogo.casa.gols = undefined;
      this.novoJogo.fora.time = this.sortearTime(times);
      this.novoJogo.fora.gols = undefined;

      let _app = this.$parent;
      _app.showView('partida')
    },

    sortearTime(times){
      return times[Math.floor(Math.random() * 20)]
    },

    fimJogo(){
      let casa = this.novoJogo.casa,
          fora = this.novoJogo.fora;

      if (casa.gols == fora.gols){
        casa.time.atualizar(casa.gols, fora.gols, 1)
        fora.time.atualizar(fora.gols, casa.gols, 1)
      }
      else if(casa.gols > fora.gols){
        casa.time.atualizar(casa.gols, fora.gols, 3)
        fora.time.atualizar(fora.gols, casa.gols, 0)
      } else{
        casa.time.atualizar(casa.gols, fora.gols, 0)
        fora.time.atualizar(fora.gols, casa.gols, 1)
      }

      let _app = this.$parent;
      _app.showView('tabela')
    },
  },

}
