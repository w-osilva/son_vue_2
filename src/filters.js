import Vue from 'vue';

Vue.filter('ucwords', string => string.chartAt(0).toUpperCase() + string.slice(1));
