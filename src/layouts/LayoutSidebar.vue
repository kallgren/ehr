<template>
  <div class="layout-sidebar">
    <aside class="sidebar">
      <slot name="sidebar"/>
    </aside>
    <section class="content">
      <h1 class="content-heading">
        {{ heading }}
      </h1>
      <slot name="content"/>
    </section>
  </div>
</template>

<script>
export default {
  name: "LayoutSidebar",
  props: {
    heading: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="stylus">
.layout-sidebar
  display flex
  height "calc(100vh - %s)" % $navbar-height

.sidebar
  base-border()
  display flex
  flex-direction column
  width 300px
  min-width 300px
  background $color-almost-white
  box-sizing border-box

.content
  flex-grow 1

.content-heading
  margin 0
  text-align center
  font-size 18px
  line-height 1.8
  text-transform uppercase
</style>
