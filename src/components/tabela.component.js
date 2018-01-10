
import store from '../store'

export default {
  template: `
        <div>      
            <table class="responsive-table bordered">
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
              <tr v-for="(time, index) in times" :class="{
                  'teal lighten-5': index < 4,
                  'yellow lighten-5': index > 3 && index < 6,
                  'blue-grey lighten-5': index > 5 && index < 12, 
                  'red lighten-5': index > 15 
                  }">
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
    return {};
  },

  created(){
    store.dispatch('load-times');
  },

  computed: {
    times(){
      return store.state.times;
    }
  },

  methods: {
  },

}
