<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label for>Project Picture</label>
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
        <input type="file" name="file" class="chooseFile" @change="onFileChange"></input>
      </div>
      <div class="col-md-4" style="margin-top: 2.3em;" v-for="project in projects" :key="project.id">
        <form @submit.prevent="submitPage">
          <div class="form-group">
            <input type="text" v-model="projects.name" class="form-control" placeholder="Project Name (e.g. Ağaoğlu Maslak 1453)">
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.role" class="form-control" placeholder="Role (e.g. Project Manager)">
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.year" class="form-control" placeholder="Year (e.g. 10.2014 - 10.2018)">
          </div>
          <div class="form-group">
            <textarea type="text" rows="7" v-model="projects.description" class="form-control" placeholder="Description"></textarea>
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.reference" class="form-control">
          </div>
          <div class="button-padding">
            <button type="submit" class="button-primary w-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        projects: [ 
          {
            name: '',
            role:'',
            year: '',
            description: '',
            img: '',
            reference: 'Reference: '
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
      for (let data in this.projects) {
        formData.append(data, this.projects[data]);
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
  .row {
  justify-content: center;
  }
  .chooseFile {
  margin-top: 2em;
  }
  .col-md-6.mb-4 {
  max-width: 40%;
  }
  .button-padding {
  padding-top: 2.1em;
  padding-bottom: 0px;
  }

  ::placeholder {
    opacity: 0.6;
  }

  input[title~=reference] {

  }
</style>