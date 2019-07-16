<template>
  <li>
    <a
      :class="['problem-item', ageClass, {'selected': isSelected}]"
      href="javascript:void"
      @click.prevent="onProblemClick"
    >
      <b class="code">
        {{ problem.icd10_code }}
        <i
          v-if="problem.chronic"
          class="icon-chronic"/>
      </b>
      {{ problem.description }}
      <div class="problem-info">
        <div class="time-container">
          <div class="time-col">
            <span class="time-label">Start:</span>
            {{ problem.start_date | moment("from", "now", true) }}
          </div>
          <div class="time-col">
            <span class="time-label">Last:</span>
            {{ problem.last_activity_date | moment("from", "now", true) }}
          </div>
        </div>
        <div class="counter-container">
          <div class="counter">
            <div v-if="problem.progress_note_count">
              <i :class="[progressNotesIconClass]"/>
              <span>{{ problem.progress_note_count }}</span>
            </div>
          </div>
          <div class="counter">
            <div v-if="problem.surgery_count">
              <i :class="[surgeriesIconClass]"/>
              <span>{{ problem.surgery_count }}</span>
            </div>
          </div>
          <div class="counter">
            <div v-if="problem.epicrisis_count">
              <i :class="[epicrisesIconClass]"/>
              <span>{{ problem.epicrisis_count }}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ProblemListItem",
  props: {
    problem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["selectedProblems"]),
    lastActivityAgeMonths() {
      return Math.ceil(
        this.$moment().diff(this.problem.last_activity_date, "months", true)
      );
    },
    ageClass() {
      if (this.lastActivityAgeMonths >= 12) return "age--older";
      if (this.lastActivityAgeMonths >= 6) return "age--old";

      return "";
    },
    progressNotesIconClass() {
      switch (this.problem.progress_note_count) {
        case 0:
          return "";
        case 1:
          return "icon-documents-one";
        case 2:
          return "icon-documents-two";
        case 3:
          return "icon-documents-three";
        default:
          return "icon-documents-four";
      }
    },
    surgeriesIconClass() {
      switch (this.problem.surgery_count) {
        case 0:
          return "";
        case 1:
          return "icon-surgeries-one";
        case 2:
          return "icon-surgeries-two";
        case 3:
          return "icon-surgeries-three";
        default:
          return "icon-surgeries-four";
      }
    },
    epicrisesIconClass() {
      switch (this.problem.epicrisis_count) {
        case 0:
          return "";
        case 1:
          return "icon-charts-one";
        case 2:
          return "icon-charts-two";
        case 3:
          return "icon-charts-three";
        default:
          return "icon-charts-four";
      }
    },
    isSelected() {
      return this.selectedProblems.includes(this.problem.id);
    }
  },
  methods: {
    ...mapMutations(["selectProblem", "toggleAddProblemToSelect"]),
    onProblemClick(e) {
      if (e.shiftKey) {
        this.toggleAddProblemToSelect(this.problem);
      } else {
        this.selectProblem(this.problem);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.problem-item
  display block
  position relative
  height 56px
  padding 3px 15px
  font-size $font-size--small
  color inherit
  text-decoration none
  background white
  border-bottom 1px solid $color-grey-dark
  box-sizing border-box

  &:focus
    z-index 1

.age--old
  background $color-grey-light

.age--older
  background $color-grey

.selected::after
  selection-border()
  content ""
  position absolute
  top -1px
  right 0
  bottom -1px
  left 0

.code
  display inline-block
  width 60px

.icon-chronic
  position absolute
  margin-left 7px
  margin-top -1px

.problem-info
  display flex

.time-container
.counter-container
  display flex
  align-items center
  justify-content space-between

.time-container
  padding-top 2px
  width 55%

.counter-container
  width 43%
  padding-left 2%

.time-col
  display inline-block
  width 50%

  .time-label
    display block
    font-size $font-size--xxxsmall

.counter
  i
  span
    vertical-align middle

  i
    margin-top -3px
    margin-right 4px
</style>
