<template>
  <li
    :class="[ageClass]"
    class="problem-item">
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
          <div v-if="problem.note_count">
            <i :class="[notesIconClass]"/>
            <span>{{ problem.note_count }}</span>
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
  </li>
</template>

<script>
export default {
  name: "ProblemListItem",
  props: {
    problem: {
      type: Object,
      required: true
    }
  },
  computed: {
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
    notesIconClass() {
      if (this.problem.note_count < 1) return "";
      if (this.problem.note_count > 1) return "icon-documents-four";

      return "icon-documents-three";
    },
    surgeriesIconClass() {
      if (this.problem.surgery_count < 1) return "";
      if (this.problem.surgery_count > 1) return "icon-surgeries-two";

      return "icon-surgeries-one";
    },
    epicrisesIconClass() {
      if (this.problem.epicrisis_count < 1) return "";
      if (this.problem.epicrisis_count > 1) return "icon-charts-two";

      return "icon-charts-one";
    }
  }
};
</script>

<style scoped lang="stylus">
.problem-item
  height 56px
  padding 3px 15px
  font-size $font-size--small
  background white
  border-bottom 1px solid $color-grey-darker
  box-sizing border-box

.age--old
  background $color-grey-light

.age--older
  background $color-grey

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
