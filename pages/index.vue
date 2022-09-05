<template>
  <div class="page main-page">
    <Hero />
    <MyAwards />
    <Projects />
    <Aboutme />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import MyAwards from './MyAwards.vue'
import Projects from './Projects.vue'
import Aboutme from './Aboutme.vue'
export default {
  name: 'IndexPage',
  components: { Hero, MyAwards, Projects, Aboutme },
}
</script>
