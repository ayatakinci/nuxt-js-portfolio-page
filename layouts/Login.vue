<template>
  <div>
    <div class="container">
      <main class="signup-container">
        <h1 class="heading-primary">Log in<span style="color: #6B705C;">.</span></h1>
        <p class="text-mute">Enter your credentials to access your account.</p>
        <div class="login-wrapper">
        </div>
        <form class="signup-form" @submit.prevent="login">
          <label class="inp">
          <input type="email" class="input-text" v-model="email">
          <span class="label">Email</span>
          <span class="input-icon"><i class="fa-solid fa-envelope"></i></span>
          </label>
          <label class="inp">
          <input type="password" class="input-text" id="password" v-model="password">
          <span class="label">Password</span>
          <span class="input-icon input-icon-password" data-password><i class="fa-solid fa-eye"></i></span>
          </label>
          <button class="btn btn-login">Login</button>
        </form>
        <p class="text-mute">
          or  
          <NuxtLink class="nuxtlink" to="/Register">Sign up</NuxtLink>
        </p>
      </main>
    </div>
  </div>
</template>
<script>

export default {
  
  data: () => {
     return {
       email: '',
       password: ''
     };
  },

  methods: {
    ...mapMutations(["setUser", "setToken"]),
   async login(e) {
    e.preventDefault();
     await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      const { user, token } = await response.json();
      this.setUser(user);
      this.setToken(token);
      await this.$router.push('/dashboard');
    },
  },
}
</script>
<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html {
  font-size: 62.5%;
  }
  body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  font-size: 1.6rem;
  overflow-x: hidden;
  }
  .container {
  margin-left: auto;
  margin-right: auto;
  }
  .heading-secondary {
  font-size: 3rem;
  }
  .heading-primary {
  font-size: 5rem;
  }
  .span-green {
  color: #6B705C;
  }
  .signup-container,
  .signup-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  }
  .signup-container {
  width: 100%;
  padding: 4rem 10rem;
  align-items: center;
  justify-content: center;
  grid-column: 1 / 2;
  grid-row: 1;
  }
  .signup-form {
  max-width: 45rem;
  width: 50%;
  }
  .text-mute {
  color: #aaa;
  margin-bottom: -34px;
  }
  .input-text {
  font-family: inherit;
  font-size: 1.2rem;
  padding: 3rem 5rem 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background: #eee;
  width: 100%;
  }
  .input-text:focus {
  outline-color: #6B705C;
  }
  .btn {
  padding: 1.5rem 3rem;
  border: none;
  background: #6B705C;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: inherit;
  }
  .btn-login {
  align-self: flex-end;
  width: 100%;
  margin-top: 2rem;
  box-shadow: 0 0.5em 1.5em #24211C;
  transition: all 300ms ease;
  }
  .btn-login:active {
  box-shadow: none;
  }
  .btn-login:hover {
  opacity: 0.8;
  box-shadow: 0 1em 2em #24211C;
  }
  .inp {
  position: relative;
  }
  .label {
  pointer-events: none;
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #00000070;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.2s;
  transform-origin: left;
  }
  .input-text:not(:placeholder-shown) + .label,
  .input-text:focus + .label {
  top: 0.7rem;
  transform: scale(0.75);
  }
  .input-text:focus + .label {
  color: #6B705C;
  }
  .input-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: #00000070;
  }
  .input-icon-password {
  cursor: pointer;
  }
  .btn-google {
  color: #222;
  background: #fff;
  border: solid 1px #eee;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px #00000020;
  }
  .btn-google img {
  width: 3rem;
  margin-right: 1rem;
  }
  .login-wrapper {
  max-width: 45rem;
  width: 100%;
  }
  .line-breaker .line {
  width: 50%;
  height: 1px;
  background: #eee;
  }
  .line-breaker {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin: 3rem 0;
  }
  .line-breaker span:nth-child(2) {
  margin: 0 2rem;
  }
  .welcome-container {
  background: #eeeeee75;
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem;
  margin-top: -1em;
  }
  .lg {
  font-size: 6rem;
  }
  .welcome-container img {
  width: 100%;
  }
  .nuxtlink {
  color: #6B705C;
  transition: opacity 300ms ease;
  }
  .nuxtlink:hover {
  opacity: 0.6;
  }
  @media only screen and (max-width: 70rem) {
  html {
  font-size: 54.5%;
  }
  }
  @media only screen and (max-width: 60rem) {
  .signup-container {
  padding: 2rem;
  }
  }
  @media only screen and (max-width: 40rem) {
  html {
  font-size: 48.5%;
  }
  .input-text:not(:placeholder-shown) + .label,
  .input-text:focus + .label {
  top: 0.6rem;
  transform: scale(0.75);
  }
  .label {
  font-size: 1.8rem;
  }
  .input-wrapper {
  flex-direction: column;
  }
  }
  @media only screen and (max-width: 1200px) {
  .signup-container {
  grid-column: 1 / 3;
  }
  .welcome-container {
  display: none;
  }
  }
  @media screen and (min-width: 375px) {
  .login-form {
  width: 100%;
  }
  .container {
  width: 100%;
  }
  }
  @media screen and (max-width: 767px) {
  .signup-form {
  width: 100%;
  }
  .heading-primary {
  font-size: 3.5rem;
  }
  }
  @media screen and (min-width: 768px) {
  .login-form {
  width: 70%;
  }
  .container {
  width: 100%;
  }
  }
  @media screen and (min-width: 1024px) {
  .login-form {
  width: 55%;
  }
  .container {
  width: 100%;
  }
  }
</style>