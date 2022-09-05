<template>
  <div>
    <div class="container">
      <main class="signup-container">
        <h1 class="heading-primary">Log in<span class="span-blue">.</span></h1>
        <p class="text-mute">Enter your credentials to access your account.</p>
        <div class="login-wrapper">
        </div>
        <form class="signup-form">
          <label class="inp">
          <input type="email" class="input-text" >
          <span class="label">Email</span>
          <span class="input-icon"><i class="fa-solid fa-envelope"></i></span>
          </label>
          <label class="inp">
          <input type="password" class="input-text"  id="password">
          <span class="label">Password</span>
          <span class="input-icon input-icon-password" data-password><i class="fa-solid fa-eye"></i></span>
          </label>
          <button class="btn btn-login">Login</button>
        </form>
        <p class="text-mute">
          Or  
          <NuxtLink to="/Register">Sign up</NuxtLink>
        </p>
      </main>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'Login',
    data: () => {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
      },
    },
  };
  </script>
<style scoped>
  
</style>