// import Vue from 'vue';
// import axios from 'axios';

// import Home from '../components/Home';

// new Vue({ // eslint-disable-line no-new
//   el: '#IndexPage',    
//   components: { Home }, // sets all this to the main element, App
//   template: '<Home/>',
// });



<template>
<div id="app">
  <Home></Home>
</div>
</template>

<style>
.float-left {
  float: left
}
.float-right {
  margin-left: 300px
}
</style>
<script>
import Home from '../components/Home';

export default {
  components: {
    'Home': Home,
  },
};
        
</script>
