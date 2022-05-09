<template>

  <div class="page">
    <div class="image">
      <img alt="me" class="me" src="../assets/me.png">
    </div>
    <h1 class="name">J. Wolkersdorfer</h1>
    <a href="https://www.linkedin.com/in/josef-wolkersdorfer"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="3x"/></a>
    <a href=""><font-awesome-icon class="icon" :icon="['fab', 'github']" size="3x"/></a>
    <a href="mailto:contact@wolkersdorfer.org"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" size="3x"/></a>
    <!-- <font-awesome-icon class="icon" :icon="['fas', 'mug-hot']" size="3x"/>  -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  background-color: #363945;
  color: #fff;
  height: 83vh;
}
.image {
  padding-top: 30px
}

.name{
  padding-top: 30px;
  font-weight:bold;
  color: #E0B589;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
a:hover {
  color: #7a7a7a;
}
.me{
  border-radius:250px;
}
.icon{
  margin:25px;
}
</style>
