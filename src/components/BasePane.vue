<template>
  <div class="base-pane">
    <div class="pane-header">
      <span class="pane-title">
        {{ title }}
      </span>
      <div class="pane-controls">
        <slot name="controls"></slot>
      </div>
    </div>
    <div class="pane-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePane",
  props: {
    title: String
  }
};
</script>

<style scoped lang="stylus">
.base-pane
  base-border()
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
  line-height 1.5

.pane-controls
  margin-left auto
</style>
