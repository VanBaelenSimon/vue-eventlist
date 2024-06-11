<template>
  <div id="app">
    <NavBar/>
    <router-view class="main" />
  </div>
</template>

<script>
import NavBar from './components/NavBarComponent.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
.main{
  padding: 1.5rem;
}
</style>
