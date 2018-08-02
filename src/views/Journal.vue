<template>
  <div class="journal">
    <LayoutSidebar heading="Journal">
      <template slot="sidebar"></template>
      <template slot="content">
        <div class="content-inner">
          <BasePane title="Problem list" class="pane--problem-list">
            <template slot="controls"></template>
            <template slot="content"></template>
          </BasePane>
          <BasePane title="Notes" class="pane--notes">
            <template slot="controls"></template>
            <template slot="content"></template>
          </BasePane>
          <BasePane title="Attachments" class="pane--attachments">
            <template slot="controls"></template>
            <template slot="content"></template>
          </BasePane>
        </div>
      </template>
    </LayoutSidebar>
  </div>
</template>

<script>
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import BasePane from "@/components/BasePane.vue";

export default {
  name: "Journal",
  components: {
    LayoutSidebar,
    BasePane
  }
};
</script>

<style scoped lang="stylus">
.content-inner
  display flex
  height calc(100% - 32px) // Quick fix to match design, 32px is .content-heading height

.pane--problem-list
  width 390px

.pane--notes
  flex-grow 1
  margin 0 15px

.pane--attachments
  width 345px
</style>
