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
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1mo",
        MM: "%dmo",
        y: "1y",
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

  &:disabled
    cursor default
    opacity 0.5

.button
  background $color-green-medium
  padding 4px 30px 5px
  color white
  border-radius 5px

/* Icons */
counter-icon(name count)
  width 21px
  height 25px
  background-image 'url("assets/icons/%s-%s.png")' % (name count)

counter-icon-white(name count)
  width 21px
  height 25px
  background-image 'url("assets/icons/%s-%s-white.png")' % (name count)

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
    width 13px
    height 20px
    background-image url("assets/icons/female.png")

  &.icon-drop
  &.icon-drop-red
    width 22px
    height 22px
    background-image url("assets/icons/drop.png")

  &.icon-drop-red
    background-image url("assets/icons/drop-red.png")

  &.icon-warning
  &.icon-warning-red
    width 22px
    height 22px
    background-image url("assets/icons/warning.png")

  &.icon-warning-red
    background-image url("assets/icons/warning-red.png")

  &.icon-hospital-bed
  &.icon-hospital-bed-green
    width 35px
    height 22px
    background-image url("assets/icons/hospital-bed.png")

  &.icon-hospital-bed-green
    background-image url("assets/icons/hospital-bed-green.png")

  &.icon-chronic
    width 20px
    height 20px
    background-image url("assets/icons/chronic.png")

  &.icon-documents
    &-one
      counter-icon(documents, one)
    &-two
      counter-icon(documents, two)
    &-three
      counter-icon(documents, three)
    &-four
      counter-icon(documents, four)

  &.icon-surgeries
    &-one
      counter-icon(surgeries, one)
    &-two
      counter-icon(surgeries, two)
    &-three
      counter-icon(surgeries, three)
    &-four
      counter-icon(surgeries, four)
    &-one-white
      counter-icon-white(surgeries, one)

  &.icon-charts
    &-one
      counter-icon(charts, one)
    &-two
      counter-icon(charts, two)
    &-three
      counter-icon(charts, three)
    &-four
      counter-icon(charts, four)
    &-one-white
      counter-icon-white(charts, one)

  &.icon-paperclip
    width 30px
    height 30px
    background-image url("assets/icons/paperclip.png")

  &.icon-paper-plane
    width 21px
    height 21px
    background-image url("assets/icons/paper-plane.png")

  &.icon-star-empty
    width 21px
    height 21px
    background-image url("assets/icons/star-empty.png")

  &.icon-star-filled
    width 21px
    height 21px
    background-image url("assets/icons/star-filled.png")

  &.icon-search
    width 20px
    height 20px
    background-image url("assets/icons/search.png")

  &.icon-plus
    width 14px
    height 14px
    background-image url("assets/icons/plus.png")

  &.icon-sort
    width 11px
    height 15px
    background-image url("assets/icons/sort.png")

  &.icon-sort-up
    width 11px
    height 15px
    background-image url("assets/icons/sort-up.png")

  &.icon-sort-down
    width 11px
    height 15px
    background-image url("assets/icons/sort-down.png")

  &.icon-a
  &.icon-a-red
    font-family $font-family--black
    font-size 28px
    font-weight bold
    text-transform uppercase

    &:before
      content "A"

  &.icon-a-red
    color $color-red-medium
</style>
