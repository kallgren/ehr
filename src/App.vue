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
  color $color-almost-black

#app
  font-size $font-size--base

button
input
  font-size $font-size--smaller

button
  padding 0
  border 0
  cursor pointer

/* Icons */
i
  display inline-block
  font-style normal
  background-position center
  background-repeat no-repeat
  background-size contain

  &.icon-male
    width 20px
    height 20px
    background-image url("assets/icons/male.png")

  &.icon-female
    &:before
      content "♀"

  &.icon-drop
    width 22px
    height 22px
    background-image url("assets/icons/drop.png")

  &.icon-warning
    width 22px
    height 22px
    background-image url("assets/icons/warning.png")

  &.icon-hospital-bed
    width 35px
    height 22px
    background-image url("assets/icons/hospital-bed.png")

  &.icon-a
    font-family $font-family--black
    font-size 28px
    font-weight bold
    text-transform uppercase

    &:before
      content "A"
</style>
