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
            :scrollable="true"
            title="Problem list"
            class="pane--problem-list"
          >
            <template slot="controls">
              <div class="controls">
                <input
                  id="only-show-specific-department"
                  v-model="onlyShowSpecificDepartment"
                  type="checkbox"
                >
                <label for="only-show-specific-department">Only {{ departments[0] }}</label>
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
            :scrollable="true"
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
      onlyShowSpecificDepartment: false,
      noteSearchQuery: ""
    };
  },
  computed: {
    ...mapState({
      departments: state => state.currentUser.departments,
      selectedPatient: "selectedPatient"
    }),
    problems() {
      if (!this.selectedPatient) return [];

      return this.$store.getters.getProblemsByPatientId({
        id: this.selectedPatient.id
      });
    },
    filteredProblems() {
      if (!this.onlyShowSpecificDepartment) return this.problems;

      return this.problems.filter(
        problem =>
          problem.department.toLowerCase() === this.departments[0].toLowerCase()
      );
    },
    notesForFilteredProblems() {
      return this.filteredProblems
        .map(p => this.$store.getters.getNotesByProblemId({ id: p.id }))
        .flat()
        .filter((v, i, s) => s.indexOf(v) === i);
    },
    progressNoteCount() {
      return this.notesForFilteredProblems.filter(n => n.type === "progress")
        .length;
    },
    surgeryCount() {
      return this.notesForFilteredProblems.filter(n => n.type === "surgery")
        .length;
    },
    epicrisisCount() {
      return this.notesForFilteredProblems.filter(n => n.type === "epicrisis")
        .length;
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
          note.unit,
          note.reason,
          note.current,
          note.social,
          note.previous_history,
          ...(note.status || []).map(s => s.name),
          ...(note.status || []).map(s => s.value),
          note.assessment,
          note.anesthesia,
          note.operation,
          ...(note.medicines || []),
          ...note.diagnoses.map(d => d.code_icd10),
          ...note.diagnoses.map(d => d.description),
          ...note.attachments.map(a => a.type)
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
    ...mapMutations(["selectProblems"]),
    toggleSelectAllProblems() {
      const ids = this.allProblemsSelected
        ? []
        : this.filteredProblems.map(problem => problem.id);

      this.selectProblems({ ids });
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

  &::placeholder
    font-style italic

.controls .button-note-add
    padding-left 7px

.icon-plus
  margin-right 5px

.note-list
  margin 0
  padding 13px 26px 3px 10px
  list-style-type none
</style>
