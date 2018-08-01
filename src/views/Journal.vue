<template>
  <div class="journal">
    <LayoutSidebar heading="Journal">
      <template slot="sidebar"></template>
      <template slot="content"></template>
    </LayoutSidebar>
  </div>
</template>

<script>
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";

export default {
  name: "Journal",
  components: {
    LayoutSidebar
  }
};
</script>
