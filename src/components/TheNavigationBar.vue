<template>
  <nav id="nav">
    <ul>
      <li><a href="#"><TheNavigationBarMenuButton/></a></li>
    </ul>
    <div class="divider"/>
    <ul>
      <li><a href="#">Your inbox</a></li>
      <li><a href="#">Notes to sign</a></li>
      <li><a href="#">Your schedule</a></li>
      <li><a href="#">Referrals to you</a></li>
    </ul>
    <div class="divider"/>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/journal">Journal</router-link></li>
      <li><a href="#">Medicine</a></li>
      <li><a href="#">Test ordering</a></li>
      <li><a href="#">Test results</a></li>
      <li><a href="#">Referrals</a></li>
      <li><a href="#">Sick leaves</a></li>
    </ul>
    <ul class="user-section">
      <li>
        <div class="user-info">
          <span class="user-name">
            {{ currentUser.first_name }} {{ currentUser.last_name }}
          </span>
          <br >
          {{ currentUser.role }}
        </div>
        <a href="#">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import TheNavigationBarMenuButton from "@/components/TheNavigationBarMenuButton.vue";

export default {
  name: "TheNavigationBar",
  components: {
    TheNavigationBarMenuButton
  },
  computed: mapState(["currentUser"])
};
</script>

<style scoped lang="stylus">
#nav
  display flex
  font-size $font-size--small
  color white
  background $color-green-dark

ul
  margin 0
  padding 0
  list-style-type none

.user-section
  margin-left auto

li
  display table
  float left

  a
  .user-info
    display table-cell
    height $navbar-height
    vertical-align middle

  a
    max-width 65px
    padding 0 15px
    color white
    text-align center
    text-decoration none

    &.router-link-exact-active
      font-weight bold
      background $color-green-medium

  .user-info
    position relative
    padding 0 40px 0 60px

    &:before
      content ""
      position absolute
      left 10px
      width 40px
      height 40px
      background url("../assets/icons/user.png") no-repeat center/contain

  .user-name
    font-size $font-size--medium
    font-weight bold

.divider
  height 38px
  margin "calc((%s - 38px) / 2) 5px" % $navbar-height
  border-right 1px solid rgba(255, 255, 255, 0.8)
</style>
