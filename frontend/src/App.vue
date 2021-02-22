<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: {Navbar}
}
</script>

<style scoped>

</style>
