import Vue from 'vue'
import {Time} from './time'
import _ from 'lodash'

require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min')
require('materialize-css/dist/fonts/roboto/Roboto-Light.woff')

new Vue({
  el: '#app',
  data: {
    titulo: "Minha primeira aplicação Vue.js 2",
    times: [
      new Time('America MG', require('./assets/americamg.png')),
      new Time('Atlético MG', require('./assets/atletico-mineiro.png')),
      new Time('Atlético PR', require('./assets/atletico-pr.png')),
      new Time('Avaí', require('./assets/avai.png')),
      new Time('Bahia', require('./assets/bahia.png')),
      new Time('Botafogo', require('./assets/botafogo.png')),
      new Time('Chapecoense', require('./assets/chapecoense.png')),
      new Time('Corinthians', require('./assets/corinthians.png')),
      new Time('Cruzeiro', require('./assets/cruzeiro.png')),
      new Time('Flamengo', require('./assets/flamengo.png')),
      new Time('Fluminense', require('./assets/fluminense.png')),
      new Time('Grêmio', require('./assets/gremio.png')),
      new Time('Internacional', require('./assets/internacional.png')),
      new Time('Nautico', require('./assets/nautico.png')),
      new Time('Sport', require('./assets/sport.png')),
      new Time('Palmeiras', require('./assets/palmeiras.png')),
      new Time('Santos', require('./assets/santos.png')),
      new Time('Santa Cruz', require('./assets/santa-cruz.png')),
      new Time('São Paulo', require('./assets/sao-paulo.png')),
      new Time('Vitoria', require('./assets/vitoria.png')),
    ],
    novoJogo: {
      casa: {
        time: null,
        gols: 0
      },
      fora: {
        time: null,
        gols: 0
      }
    },
    view: 'tabela'
  },

  created(){

  },

  computed: {
    timesOrdenados(){
      return _.orderBy(this.times, ['pontos','jogos', 'saldo', 'nome'], ['desc', 'asc', 'desc', 'asc']);
    }
  },

  methods: {
    iniciarJogo(){
      this.novoJogo.casa.time = this.sortearTime();
      this.novoJogo.casa.gols = undefined;
      this.novoJogo.fora.time = this.sortearTime();
      this.novoJogo.fora.gols = undefined;
      this.showView('partida')
    },

    sortearTime(){
      return this.times[Math.floor(Math.random() * 20)]
    },

    showView(view){
      this.view = view;
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
      this.showView('tabela')
    },
  }

})
