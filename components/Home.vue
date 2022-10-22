<!-- Please remove this file from your project -->
<template>
  <div id="home">
    <nav-bar></nav-bar>
    <p class="headline"><h2>{{homesObj.title}}</h2></p>
    <p class="headline"><h2>{{blogsObj.title}}</h2></p>

    
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
      // return axios.get(config.url + config.bucket_slug + '/object-type/homes',{
      //       params: {
      //           read_key: config.read_key
      //       }
      //   })
      // .then(res => {
      //   return {title : res.data.objects[0].title, body: res.data.objects[0].content, image: res.data.objects[0].metadata.image, about: res.data.objects[0].metadata.about_us, contact: res.data.objects[0].metadata.contact_us}
      // });
  },
}; 
</script>

<style>
</style>
