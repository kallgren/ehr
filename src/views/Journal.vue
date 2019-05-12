<template>
  <div class="journal">
    <LayoutSidebar heading="Journal">
      <template slot="sidebar">
        <PatientSelector/>
        <PatientInfo :patient="selectedPatient"/>
      </template>
      <template slot="content">
        <div class="content-inner">
          <BasePane
            title="Problem list"
            class="pane--problem-list"
          >
            <template slot="controls"/>
            <template slot="content">
              <div v-if="selectedPatient">
                <div class="counters">
                  <span>Threads:<b>{{ problems.length }}</b></span>
                  <span>Progress notes:<b>{{ noteCount }}</b></span>
                  <span>Surgeries:<b>{{ surgeryCount }}</b></span>
                  <span>Epicrises:<b>{{ epicrisisCount }}</b></span>
                </div>
                <ul class="problem-list">
                  <ProblemListItem
                    v-for="problem in problems"
                    :key="problem.id"
                    :problem="problem"
                  />
                </ul>
              </div>
            </template>
          </BasePane>
          <BasePane
            title="Notes"
            class="pane--notes"
          >
            <template slot="controls"/>
            <template slot="content"/>
          </BasePane>
          <BasePane
            title="Attachments"
            class="pane--attachments"
          >
            <template slot="controls"/>
            <template slot="content"/>
          </BasePane>
        </div>
      </template>
    </LayoutSidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import BasePane from "@/components/BasePane.vue";
import PatientSelector from "@/components/PatientSelector.vue";
import PatientInfo from "@/components/PatientInfo.vue";
import ProblemListItem from "@/components/ProblemListItem.vue";

export default {
  name: "Journal",
  components: {
    LayoutSidebar,
    BasePane,
    PatientSelector,
    PatientInfo,
    ProblemListItem
  },
  computed: {
    ...mapState(["selectedPatient"]),
    problems() {
      if (!this.selectedPatient) return [];

      return this.$store.getters.getProblemsByPatientId({
        id: this.selectedPatient.id
      });
    },
    noteCount() {
      return this.problems.reduce(
        (acc, problem) => acc + problem.note_count,
        0
      );
    },
    surgeryCount() {
      return this.problems.reduce(
        (acc, problem) => acc + problem.surgery_count,
        0
      );
    },
    epicrisisCount() {
      return this.problems.reduce(
        (acc, problem) => acc + problem.epicrisis_count,
        0
      );
    }
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

.counters
  display flex
  justify-content space-between
  padding 7px
  font-size $font-size--xxsmall
  background white
  border 1px solid $color-grey-darker

.problem-list
  margin 0
  padding 0
  list-style-type none
</style>
