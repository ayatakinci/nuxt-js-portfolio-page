<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Footer}
    
}
</script>