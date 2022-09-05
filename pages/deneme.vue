<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="sendData">
                        <strong>Email:</strong>
                        <input type="text" class="form-control" v-model="email">
                        <strong>Password:</strong>
                        <input type="text" class="form-control" v-model="password">
                        <button  class="btn btn-success">Submit</button>
                        </form>
                  </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

  export default {
    
    data() {
       return {
         email: '',
         password: ''
       };
    },

    methods: {
       //Would like to use the button to do this:
      async sendData () {
        this.$axios.$post('https://jsonplaceholder.typicode.com/posts', {
          email: this.email,
          password: this.password
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
      }
     }
  }
</script>
