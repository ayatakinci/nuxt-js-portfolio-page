<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="justify-content-between">
          <h3></h3>
          <NuxtLink to="/AddProjectPage"><a class="button-primary w-button">Add Project</a></NuxtLink>
        </div>
      </div>
      <div v-if="!mountains.length">Nothing is loading, try again.</div>
      <div style="
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: center;">
        <div v-for="mountain of mountains"
          class="card recipe-card box-shadow width28">
          <img :src="mountain.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ mountain.title }}</h5>
            <h5 class="card-text">{{ mountain.description }}</h5>
           
            <div class="action-buttons">
              <div class="action-buttons">
                <a href="/EditPage" class="btn btn-sm button-color-view">Edit</a>
                <button class="btn btn-sm button-color-delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashboardGallery />
    </div>
    
  </div>
</template>
<script>
  import dashboardGallery from '../components/dashboardGallery.vue'
  import { mapGetters } from "vuex";
  export default {
    components: {
      dashboardGallery
    },
  
    data() {
      return {
        mountains: [],
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    },
    // async mounted() {
    //   const response = await fetch('https://api.nuxtjs.dev/posts', {
    //     headers: {"Content-Type": "application/json"},
    //     credentials: 'include',
    //   })
    //   const content = await response.json()
    // },
    computed: {
    ...mapGetters(["isLoggedIn"])
  }
  }
</script>
<style scoped>
  .card .content span:first-child {
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center;
  color: var(--darkGreen);
  font-size: 16px;
  }
  .card:hover .image img {
  transform: scale(1) !important;
  cursor: default;
  }
  .card img {
  transform: scale(1) !important;
  }
  .card-text {
    font-size: 0.8em;
    font-weight: 500;
  }
  .card-text2 {
    font-size: 0.85em;
    font-weight: 500;
  }
 .row {
  justify-content: center;
  margin-top: 2em;
 }
 .width28{ 
  width: 28%;
 }
  @media screen and (max-width: 768px) {
  .card {
  width: 100%;
  }
  .card .content {
  bottom: 0;
  }
  }
  @media screen and (max-width: 480px) {
  .card {
  width: 85%;
  }
  }
</style>