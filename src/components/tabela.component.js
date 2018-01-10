import {Time} from "../time";
import _ from 'lodash'

export default {
  template: `
        <div>      
            <table class="responsive-table striped">
              <thead>
              <tr>
                <th>Time</th>
                <th>Pontos</th>
                <th>Jogos</th>
                <th>GM</th>
                <th>GS</th>
                <th>Saldo</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="(time, index) in timesOrdenados">
                <td class="valign-wrapper">
                  <img :src="time.escudo" :alt="time.nome" height="25" width="25" style="margin: 0 10px 0 10px"> <span>{{ time.nome }}</span>
                </td>
                <td>{{ time.pontos }}</td>
                <td>{{ time.jogos }}</td>
                <td>{{ time.gm }}</td>
                <td>{{ time.gs }}</td>
                <td>{{ time.saldo }}</td>
              </tr>
              </tbody>
            </table>
        </div>
  `,

  data(){
    return {
      times: [
        new Time('America MG', require('../assets/americamg.png')),
        new Time('Atlético MG', require('../assets/atletico-mineiro.png')),
        new Time('Atlético PR', require('../assets/atletico-pr.png')),
        new Time('Avaí', require('../assets/avai.png')),
        new Time('Bahia', require('../assets/bahia.png')),
        new Time('Botafogo', require('../assets/botafogo.png')),
        new Time('Chapecoense', require('../assets/chapecoense.png')),
        new Time('Corinthians', require('../assets/corinthians.png')),
        new Time('Cruzeiro', require('../assets/cruzeiro.png')),
        new Time('Flamengo', require('../assets/flamengo.png')),
        new Time('Fluminense', require('../assets/fluminense.png')),
        new Time('Grêmio', require('../assets/gremio.png')),
        new Time('Internacional', require('../assets/internacional.png')),
        new Time('Nautico', require('../assets/nautico.png')),
        new Time('Sport', require('../assets/sport.png')),
        new Time('Palmeiras', require('../assets/palmeiras.png')),
        new Time('Santos', require('../assets/santos.png')),
        new Time('Santa Cruz', require('../assets/santa-cruz.png')),
        new Time('São Paulo', require('../assets/sao-paulo.png')),
        new Time('Vitoria', require('../assets/vitoria.png')),
      ],
    }
  },

  created(){
  },

  computed: {
    timesOrdenados(){
      return _.orderBy(this.times, ['pontos','jogos', 'saldo', 'nome'], ['desc', 'asc', 'desc', 'asc']);
    }
  },

  methods: {
  },

}
