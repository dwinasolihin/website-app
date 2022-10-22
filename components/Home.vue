<!-- Please remove this file from your project -->
<template>
  <div id="IndexPage">
    <nav-bar></nav-bar>
    <p class="headline">{{homesObj}}</p>
    <p class="headline">{{blogsObj}}</p>
  </div>
</template>

<script>
import axios from "axios";
import config from '../config/config';
import Navbar from './Navbar';
export default {
  name: 'Home',
  data() {
    return {
      homesObj: null,
      blogsObj: null
    };
  },
  created() {
    this.getSupportingMeta();
  },
  components: {
    'nav-bar': Navbar,
  },
  methods: {
    getHomes() {
      return axios.get(config.url + config.bucket_slug + '/object-type/homes', {
        params: { 
          read_key: config.read_key 
        } 
      });
    },
    getBlogs() {
      return axios.get(config.url + config.bucket_slug + '/object-type/blogs', {
        params: { 
          read_key: config.read_key 
        } 
      });
    },
    async getSupportingMeta() {
      try {
        const homesResponse = await this.getHomes();
        this.homesObj = homesResponse.data.objects[0];
        console.log(this.homesObj);
        const blogsResponse = await this.getBlogs();
        this.blogsObj = blogsResponse.data.objects[0];
        console.log(this.blogsObj);
      } catch (error) {
        console.log(error); // eslint-disable-line
      }
    },
  },
}; 
</script>

<style>
</style>
