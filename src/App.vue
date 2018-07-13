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
  font-family Arial, sans-serif
  font-size $font-size--base
</style>
