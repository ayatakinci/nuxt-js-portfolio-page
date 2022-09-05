<template>
  <div style=" text-align: center; padding-top: 4em; padding-bottom: 5em;"
       class="background-color-gallery">
    <meta name="viewport" content="width=device-width">
    <input type="radio" name="filter" id="all" checked><label class="nav" for="all">ALL</label>
    <input type="radio" name="filter" id="exterior"><label class="nav" for="exterior">Exterior</label>
    <input type="radio" name="filter" id="interior"><label class="nav" for="interior">Interior</label>
    <input type="radio" name="filter" id="furniture"><label class="nav" for="furniture">Furniture</label>
    <div class="gallery">

      <!-- EXTERIOR -->
      <a class="card exterior" v-for="photo in exterior"
        :key="photo.id">
        <div class="content">
          <span class="category">{{photo.title}}</span>
        </div>
        <div class="image">
          <img :src="photo.image"/>
        </div>
      </a>

      <!-- INTERIOR -->
      <a class="card interior" v-for="photo in interior"
        :key="photo.id">
        <div class="content">
          <span class="category">{{photo.title}}</span>
        </div>
        <div class="image">
          <img :src="photo.image"/>
        </div>
      </a>

      <!-- FURNITURE -->
      <a class="card furniture" v-for="photo in furniture"
        :key="photo.id">
        <div class="content">
          <span class="category">{{photo.name}}</span>
        </div>
        <div class="image">
          <img :src="photo.image_url"/>
        </div>
      </a>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        exterior: [],
  
        interior: [],
  
        furniture: [],
      }
    },
    async fetch() {
      this.furniture = await fetch(
        'https://api.nuxtjs.dev/beers'
      ).then(res => res.json())

       this.interior = await fetch(
         'https://api.nuxtjs.dev/mountains'
       ).then(res => res.json())

       this.exterior = await fetch(
         'https://api.nuxtjs.dev/rivers'
       ).then(res => res.json())
    },

    
  }
</script>
<style  scoped>
  @import url("https://fonts.googleapis.com/css?family=Poppins:400");
  *{
  box-sizing: border-box;
  }
  html{
  font: 16px/1.6 'Poppins', system-ui, sans-serif;
  }
  body{
  padding: 2em 1rem;
  text-align: center !important;
  }
  [type="radio"]{
  display: none;
  }
  label{
  padding: 0.25rem 0.75rem !important;
  border-radius: 0.25rem !important;
  cursor: pointer !important;
  transition: 0.25s !important;
  display: unset !important;
  }
  [type="radio"]:checked + label {
  border-bottom: 3px solid;
  color: #6B705C;
  opacity: 1;
  }
  [type="radio"]:nth-of-type(2):checked ~ .gallery .card:not(.exterior),
  [type="radio"]:nth-of-type(3):checked ~ .gallery .card:not(.interior),
  [type="radio"]:nth-of-type(4):checked ~ .gallery .card:not(.furniture)
  {
  display: none;
  }
  .gallery{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 1fr;
  /* grid-gap: 1em; */
  padding: 0.5rem;
  margin-top: 1rem;
  padding-top: 2rem;
  }
  .card{
  margin: 0;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0 10px var(--mediumGray);
  transition: box-shadow 0.35s;
  }
  .card:hover{
  box-shadow: 0 0 25px var(--darkGreen);
  }
  .card__image{
  width: 100%;
  object-fit: cover;
  }
  .card__caption{
  font-weight: bold;
  font-variant: small-caps;
  padding: 0.5rem;
  text-align: center;
  color: gold;
  }
  .card {
  /* width was 20% */
  overflow: hidden;
  position: relative;
  }
  .card .content {
  z-index: 2;
  width: 100%;
  position: absolute;
  bottom: -55px;
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  min-height: 50px;
  background: #111;
  }
  .card .image {
  z-index: 1;
  height: 100%;
  }
  .card img {
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  transform: scale(1.2);
  }
  .card:hover .content {
  bottom: 0px;
  color: #fff;
  }
  .card:hover .image img {
  transform: scale(1);
  }
  .card .content span:first-child {
  margin-bottom: 5px;
  font-weight: 700;
  text-align: center;
  color: var(--darkGreen);
  font-size: 16px;
  }
  @media screen and (max-width: 768px) {
  .card {
  width: 100%;
  }
  }
  @media screen and (max-width: 480px) {
  .card {
  width: 100%;
  }
  }
  .card{
  border-radius: 0px!important;
  }
  .nav { 
  margin: 150px auto 0; 
  padding: 0; 
  list-style: none; 
  display: table;
  width: 600px;
  text-align: center;
  display: table-cell; 
  position: relative; 
  padding: 15px 0;
  color: #6B705C;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.10em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  border-radius: unset !important;
  }
  .nav:hover {
  opacity: 0.6;
  }
  .nav:after {    
  /* background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #6B705C;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0; */
  }
  .nav:hover:after { 
  /* width: 100%; 
  left: 0;  */
  }
  .background-color-gallery {
  background: linear-gradient(180deg, #F5F5F3, #A09881);
  }
  @media screen and (max-height: 300px) {
  ul {
  margin-top: 40px;
  }
  }
</style>