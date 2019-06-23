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
              <div
                v-if="selectedPatient"
                class="problem-list-wrapper"
              >
                <div class="counters">
                  <span>Threads:<b>{{ filteredProblems.length }}</b></span>
                  <span>Progress notes:<b>{{ progressNoteCount }}</b></span>
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
                    :disabled="!filteredProblems.length"
                    class="button"
                    @click="toggleSelectAllProblems()"
                  >
                    {{ allProblemsSelected ? "Deselect" : "Select" }} all
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
                    v-model="noteSearchQuery"
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
            <template slot="content">
              <AttachmentList :attachments="filteredAttachments"/>
            </template>
          </BasePane>
        </div>
      </template>
    </LayoutSidebar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import BasePane from "@/components/BasePane.vue";
import PatientSelector from "@/components/PatientSelector.vue";
import PatientInfo from "@/components/PatientInfo.vue";
import ProblemListItem from "@/components/ProblemListItem.vue";
import NoteListItem from "@/components/NoteListItem.vue";
import AttachmentList from "@/components/AttachmentList.vue";

export default {
  name: "Journal",
  components: {
    LayoutSidebar,
    BasePane,
    PatientSelector,
    PatientInfo,
    ProblemListItem,
    NoteListItem,
    AttachmentList
  },
  data() {
    return {
      selectedDepartment: "all",
      noteSearchQuery: ""
    };
  },
  computed: {
    ...mapState({
      departments: state => ["All", ...state.currentUser.departments],
      selectedPatient: "selectedPatient"
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
    progressNoteCount() {
      return this.filteredProblems.reduce(
        (acc, problem) => acc + problem.progress_note_count,
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
    },
    allProblemsSelected() {
      return (
        this.filteredProblems.length &&
        this.filteredProblems.every(problem =>
          this.$store.state.selectedProblems.includes(problem.id)
        )
      );
    },
    filteredNotes() {
      const filteredNotes = this.$store.getters.getNotesForSelectedProblems;
      const searchQuery = this.noteSearchQuery.trim().toLowerCase();

      if (searchQuery === "") return filteredNotes;

      return filteredNotes.filter(note => {
        const searchableFields = [
          "#" + note.id_for_patient,
          note.date,
          note.chief_complaint,
          note.history_of_present_illness,
          note.physical_examination,
          note.assessment,
          note.plan,
          note.diagnosis_description,
          ...note.attachments.map(attachment => attachment.type)
        ];

        return searchableFields.some(
          field => field && field.toLowerCase().includes(searchQuery)
        );
      });
    },
    filteredAttachments() {
      return this.filteredNotes.map(note => note.attachments).flat();
    }
  },
  methods: {
    ...mapMutations(["selectProblemsByIds"]),
    toggleSelectAllProblems() {
      const ids = this.allProblemsSelected
        ? []
        : this.filteredProblems.map(problem => problem.id);

      this.selectProblemsByIds({ ids });
    }
  }
};
</script>

<style scoped lang="stylus">
.content-inner
  display flex
  height calc(100% - 32px) // Quick fix to match design, 32px is .content-heading height

.pane--problem-list
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

.problem-list-wrapper
  display flex
  flex-direction column
  height 100%

.counters
  display flex
  justify-content space-between
  padding 7px
  font-size $font-size--xxsmall
  background white
  border 1px solid $color-grey-darker

.problem-list
  flex-grow 1
  margin 0
  padding 0
  list-style-type none
  overflow hidden auto

.select-all-button-wrapper
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
