<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label for>Gallery Picture</label>
        <img
          v-if="preview"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="preview"
          alt
          >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          src="~/assets/image/placeholder1.png"
          >
        <input class="chooseFile" type="file" name="file" @change="onFileChange"></input>
      </div>
      <div class="col-md-4">
        <form >
          <div class="checkbox" v-for="item in items" :key="item.id">
              <label><input type="checkbox">{{item.category}}</label>
          </div>
          <div>
            <button type="submit" @submit.prevent="submitPage" class="button-primary w-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        items: [
          {
            category: 'Interior Design'
          },
          {
            category: 'Exterior Design'
          },
          {
            category: 'Furniture'
          }
        ],
        preview: ''
      }
    },
    methods: {
      async submitPage() {
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };
      let formData = new FormData();
      for (let data in this.items) {
        formData.append(data, this.items[data]);
      }
      try {
        let response = await this.$axios.$post("/dashboard/", formData, config)
        this.$router.push("/dashboard/");
      } catch (e) {
        console.log(e);
      }
      
    },
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.projects.img = files[0];
        this.createImage(files[0]);
      },
      createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      // Get Request
      // async submitProject() {
        
      // },
      // refresh() {
      //   window.location.reload(true)
      // },
    },
  }
  </script>
<style scoped>
  .category {
  padding: 24px 20px;
  border-style: none;
  border-radius: 80px;
  background-color: var(--darkGreen);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 4em;
  }
  .button-primary {
  padding: 24px 50px;
  border-style: none;
  border-radius: 80px;
  background-color: var(--darkGreen);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 2em !important;
  }
  label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  }
  .chooseFile {
  margin-top: 2em;
  }
  .button-primary {
  margin-top: 8.5em !important;
  }
  .row {
  justify-content: center;
  }
  .col-md-6.mb-4 {
  max-width: 40%;
  }
  form{
  padding: 30px;
  }
  input[type="checkbox"]{
  text-align: left;
  cursor:pointer;
  appearance: none;
  height: 25px;
  width: 25px;
  min-width: 25px;
  background: #ffffff;
  transition: all 250ms linear;
  box-shadow: inset 0 0 0 4px #ffffff;
  border: 1px solid var(--darkGreen);
  border-radius: none;
  margin-right: 1em;
  margin-top: 1em;
  }
  input[type="checkbox"]:checked{
  border-color: var(--darkGreen);
  background-color: var(--darkGreen);
  box-shadow: inset 0 0 0 5px #ffffff;
  }
</style>