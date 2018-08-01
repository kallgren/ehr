<template>
  <div class="layout-sidebar">
    <aside class="sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <section class="content">
      <h1 class="content-heading">
        {{ heading }}
      </h1>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "LayoutSidebar",
  props: {
    heading: String
  }
};
</script>

<style scoped lang="stylus">
.layout-sidebar
  display flex
  height 1030px

.sidebar
  width 300px
  background $color-almost-white
  border 3px solid $color-green-dark
  box-sizing border-box

.content
  flex-grow 1

.content-heading
  margin 0
  text-align center
  font-size 18px
  font-weight normal
  line-height 1.8
  text-transform uppercase
</style>
