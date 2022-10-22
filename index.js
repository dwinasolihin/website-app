// import Vue from 'vue';
// import axios from 'axios';

// import Home from '../components/Home';

// new Vue({ // eslint-disable-line no-new
//   el: '#IndexPage',    
//   components: { Home }, // sets all this to the main element, App
//   template: '<Home/>',
// });

import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
