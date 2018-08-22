<template>
  <div id="app">
    <TheNavigationBar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavigationBar from "@/components/TheNavigationBar.vue";

export default {
  name: "App",
  components: {
    TheNavigationBar
  }
};
</script>

<style lang="stylus">
@require 'assets/styl/common'

#app
button
input
  font-family $font-family

#app
  font-size $font-size--base

button
input
  font-size $font-size--smaller

button
  padding 0
  border 0
  cursor pointer
</style>
