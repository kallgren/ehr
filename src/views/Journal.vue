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
            <template slot="controls">
              <div class="controls">
                <div
                  v-for="department in departments"
                  :key="department"
                  class="radio-button-wrapper"
                >
                  <input
                    :id="department.toLowerCase()"
                    v-model="selectedDepartment"
                    :value="department.toLowerCase()"
                    type="radio"
                  >
                  <label :for="department.toLowerCase()">{{ department }}</label>
                </div>
              </div>
            </template>
            <template slot="content">
              <div v-if="selectedPatient">
                <div class="counters">
                  <span>Threads:<b>{{ filteredProblems.length }}</b></span>
                  <span>Progress notes:<b>{{ noteCount }}</b></span>
                  <span>Surgeries:<b>{{ surgeryCount }}</b></span>
                  <span>Epicrises:<b>{{ epicrisisCount }}</b></span>
                </div>
                <ul class="problem-list">
                  <ProblemListItem
                    v-for="problem in filteredProblems"
                    :key="problem.id"
                    :problem="problem"
                  />
                </ul>
                <div class="select-all-button-wrapper">
                  <button
                    class="button"
                    @click="selectAllProblems()"
                  >
                    Select all
                  </button>
                </div>
              </div>
            </template>
          </BasePane>
          <BasePane
            :scrollable="true"
            title="Notes"
            class="pane--notes"
          >
            <template slot="controls">
              <div class="controls">
                <div class="note-search-wrapper">
                  <label for="note-search">
                    <i class="icon-search"/>
                  </label>
                  <input
                    id="note-search"
                    type="search"
                    class="input-note-search"
                    placeholder="Search..."
                  >
                </div>
                <button class="button button-note-add">
                  <i class="icon-plus"/>
                  add new note
                </button>
              </div>
            </template>
            <template slot="content">
              <ul class="note-list">
                <NoteListItem
                  v-for="note in filteredNotes"
                  :key="note.id"
                  :note="note"
                />
              </ul>
            </template>
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
import { mapState, mapGetters, mapMutations } from "vuex";
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import BasePane from "@/components/BasePane.vue";
import PatientSelector from "@/components/PatientSelector.vue";
import PatientInfo from "@/components/PatientInfo.vue";
import ProblemListItem from "@/components/ProblemListItem.vue";
import NoteListItem from "@/components/NoteListItem.vue";

export default {
  name: "Journal",
  components: {
    LayoutSidebar,
    BasePane,
    PatientSelector,
    PatientInfo,
    ProblemListItem,
    NoteListItem
  },
  data() {
    return {
      selectedDepartment: "all"
    };
  },
  computed: {
    ...mapState({
      departments: state => ["All", ...state.currentUser.departments],
      selectedPatient: "selectedPatient"
    }),
    ...mapGetters({
      filteredNotes: "getNotesForSelectedProblems"
    }),
    problems() {
      if (!this.selectedPatient) return [];

      return this.$store.getters.getProblemsByPatientId({
        id: this.selectedPatient.id
      });
    },
    filteredProblems() {
      if (this.selectedDepartment === "all") return this.problems;

      return this.problems.filter(
        problem => problem.department.toLowerCase() === this.selectedDepartment
      );
    },
    noteCount() {
      return this.filteredProblems.reduce(
        (acc, problem) => acc + problem.note_count,
        0
      );
    },
    surgeryCount() {
      return this.filteredProblems.reduce(
        (acc, problem) => acc + problem.surgery_count,
        0
      );
    },
    epicrisisCount() {
      return this.filteredProblems.reduce(
        (acc, problem) => acc + problem.epicrisis_count,
        0
      );
    }
  },
  methods: {
    ...mapMutations(["selectProblemsByIds"]),
    selectAllProblems() {
      this.selectProblemsByIds({
        ids: this.filteredProblems.map(problem => problem.id)
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.content-inner
  display flex
  height calc(100% - 32px) // Quick fix to match design, 32px is .content-heading height

.pane--problem-list
  position relative
  width 387px
  min-width 387px

.pane--notes
  flex-grow 1
  margin 0 15px 0 17px

.pane--attachments
  width 345px
  min-width 345px

.controls
  margin-right 5px
  font-size $font-size--xsmall

  .button
    height 23px
    padding 0 8px

.radio-button-wrapper
  display inline-block
  margin-right 5px
  margin-left 23px

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

.select-all-button-wrapper
  position absolute
  bottom 0
  width 100%
  padding-top 7px
  padding-bottom 5px
  text-align center
  background white
  border-top 1px solid $color-grey-dark

  .button
    padding-left 45px
    padding-right 45px

.note-search-wrapper
  display inline-block
  margin-right 10px
  padding-left 4px
  background white
  border-radius 3px

.icon-search
.icon-plus
  vertical-align middle

.icon-search
  margin-right 3px

.input-note-search
  width 133px
  padding 0 3px
  font-size $font-size--small
  line-height 23px
  border 0
  border-radius 0 3px 3px 0

.controls .button-note-add
    padding-left 7px

.icon-plus
  margin-right 5px

.note-list
  margin 0
  padding 13px 26px 3px 10px
  list-style-type none
</style>
