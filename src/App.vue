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
  },
  created: function() {
    this.$moment.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "seconds",
        ss: "%ss",
        m: "a minute",
        mm: "%dm",
        h: "an hour",
        hh: "%dh",
        d: "a day",
        dd: "%dd",
        M: "a month",
        MM: "%dmo",
        y: "a year",
        yy: "%dy"
      }
    });
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
  font-size $font-size--xsmall

button
  padding 0
  border 0
  cursor pointer

.button
  background $color-green-medium
  padding 4px 30px 5px
  color white
  border-radius 5px

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

  &.icon-chronic
    width 20px
    height 20px
    background-image url("assets/icons/chronic.png")

  &.icon-documents-three
    width 21px
    height 25px
    background-image url("assets/icons/documents-three.png")

  &.icon-documents-four
    width 21px
    height 25px
    background-image url("assets/icons/documents-four.png")

  &.icon-surgeries-one
    width 21px
    height 25px
    background-image url("assets/icons/surgeries-one.png")

  &.icon-surgeries-two
    width 21px
    height 25px
    background-image url("assets/icons/surgeries-two.png")

  &.icon-charts-one
    width 21px
    height 25px
    background-image url("assets/icons/charts-one.png")

  &.icon-charts-two
    width 21px
    height 25px
    background-image url("assets/icons/charts-two.png")

  &.icon-a
    font-family $font-family--black
    font-size 28px
    font-weight bold
    text-transform uppercase

    &:before
      content "A"
</style>
