<template>
    <div id="nav">
      <div class="left">
        <a href="#"><TheNavigationBarMenuButton/></a>
        <div class="divider"></div>
        <a href="#">Your inbox</a>
        <a href="#">Notes to sign</a>
        <a href="#">Your schedule</a>
        <a href="#">Referrals to you</a>
        <div class="divider"></div>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/journal">Journal</router-link>
        <a href="#">Medicine</a>
        <a href="#">Test ordering</a>
        <a href="#">Test results</a>
        <a href="#">Referrals</a>
        <a href="#">Sick leaves</a>
      </div>
      <div class="right">
        <div class="user">
          <span class="user-name">
            {{ currentUser.first_name }} {{ currentUser.last_name }}
          </span>
          <br />
          {{ currentUser.role }}
        </div>
        <a href="#">Log out</a>
      </div>
    </div>
</template>

<script>
import TheNavigationBarMenuButton from "@/components/TheNavigationBarMenuButton.vue";

const currentUser = {
  first_name: "Alma",
  last_name: "Karlsson",
  role: "Orthopedic, surgeon"
};

export default {
  name: "TheNavigationBar",
  components: {
    TheNavigationBarMenuButton
  },
  computed: {
    currentUser: () => currentUser
  }
};
</script>

<style scoped lang="stylus">
#nav
  font-size $font-size--small
  color white
  background $green-dark

  .left
  .right
    display inline-block

  .right
    float right
    .user
      display inline-block
      .user-name
        font-size $font-size--medium

  a
    display inline-block
    padding 0 15px
    color white
    line-height 50px
    text-decoration none
    &.router-link-exact-active
      background $green-light

  .divider
    display inline-block
    height 38px
    margin 0 5px
    vertical-align middle
    border-right 1px solid $green-light
</style>
