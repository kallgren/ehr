<template>
  <div class="base-pane">
    <div class="pane-header">
      <span class="pane-title">
        {{ title }}
      </span>
      <div class="pane-controls">
        <slot name="controls"/>
      </div>
    </div>
    <div :class="['pane-content', {'scrollable': scrollable}]">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePane",
  props: {
    title: {
      type: String,
      default: ""
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="stylus">
.base-pane
  base-border()
  display flex
  flex-direction column
  background $color-almost-white
  box-sizing border-box

.pane-header
  display flex
  align-items center
  padding-bottom $component-border-width
  color white
  background $color-green-dark

.pane-title
  margin-left 5px
  font-size 18px
  font-weight bold
  line-height 1.5

.pane-controls
  margin-left auto

.pane-content
  display flex
  flex-direction column
  flex-grow 1

.scrollable
  overflow-y auto
</style>
