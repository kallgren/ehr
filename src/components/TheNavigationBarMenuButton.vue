<template>
  <div class="menu-button">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="stylus">
.menu-button
  display inline-block
  vertical-align middle

  .line
    width 30px
    height 5px
    margin-bottom 5px
    background white
    border-radius 2px
    &:last-child
      margin 0
</style>
