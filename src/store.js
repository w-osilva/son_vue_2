import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Time} from "./time";
import _ from 'lodash';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  view: '',
  times: []
};

const actions = {
  'load-times'(context){
    Vue.http.get('http://localhost:8080/dist/times.json').then((response) =>{
      let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
      context.commit('set-times', times);
    })
  }
};

const mutations = {
  'set-view'(state, view){
    state.view = view;
  },
  'set-times'(state, times){
    state.times = times;
  },
  'ordenar-times'(state){
    state.times = _.orderBy(state.times, ['pontos','jogos', 'saldo', 'nome'], ['desc', 'asc', 'desc', 'asc']);
  }
};

export default new Vuex.Store({
  state,
  getters: {
    timesLibertadores: state => state.times.slice(0,4),
    timesPreLibertadores: state => state.times.slice(4,6),
    timesSulamericana: state => state.times.slice(6,12),
    timesRebaixados: state => state.times.slice(16,20),
  },
  mutations,
  actions
});
