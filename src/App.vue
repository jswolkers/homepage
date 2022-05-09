<template>  
  <NavigationBar />
  <HomePage />
  <FooterBar />
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavigationBar,
    FooterBar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

html {
  background-color: #363945;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
