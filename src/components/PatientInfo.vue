<template>
  <div class="patient-info">
    <div
      v-if="!patient"
      class="patient-info-placeholder"
    >
      Please select a patient
    </div>
    <div v-if="patient">
      <div class="patient-basics">
        <h2 class="name">{{ patient.last_name }}, {{ patient.first_name }}</h2>
        <i :class="['sex', {'icon-male': patient.sex === 'male', 'icon-female': patient.sex === 'female'}]"/>
        <div>
          <span class="ssn">{{ patient.ssn }}</span>
          <span class="age">{{ age }} years old</span>
        </div>
      </div>
      <div class="patient-symbols">
        <i
          :class="['patient-symbol', 'icon-a', {'active': patient.allergies.length}]"
          :title="patient.allergies ? 'Allergic to ' + patient.allergies.join(', ') : 'No allergies'"
        />
        <i
          :class="['patient-symbol', 'icon-drop', {'active': patient.blood_problems}]"
          :title="patient.blood_problems ? 'Known blood problems' : 'No known blood problems'"
        />
        <i
          :class="['patient-symbol', 'icon-warning', {'active': patient.other_warnings}]"
          :title="patient.other_warnings ? 'Other warnings' : 'No other warnings'"
        />
        <i
          :class="['patient-symbol', 'icon-hospital-bed', {'active': patient.admitted}]"
          :title="patient.admitted ? 'Admitted to the hospital' : 'Not admitted to the hospital'"
        />
      </div>
      <div>
        <h3 class="section-heading">Important information:</h3>
        <ul class="info-list">
          <li>Height: <strong>{{ patient.height_cm }} cm</strong></li>
          <li>Weight: <strong>{{ patient.weight_kg }} kg</strong></li>
          <li v-if="patient.allergies.length">
            Allergies: <strong>{{ patient.allergies.join(', ') }}</strong>
          </li>
          <li
            v-for="(remark, index) in patient.important_remarks"
            :key="index"
          >{{ remark }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientInfo",
  props: {
    patient: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  computed: {
    age() {
      return this.$moment().diff(this.patient.date_of_birth, "years");
    }
  }
};
</script>

<style lang="stylus">
.patient-info
  padding 7px
  font-size $font-size--small

.patient-info-placeholder
  color $color-grey-dark
  font-style italic

.patient-basics
  margin-bottom 10px

.name
  display inline-block
  font-size $font-size--medium
  font-weight normal
  font-style italic
  margin 0 0 3px

.icon-male
.icon-female
  margin-left 13px
  vertical-align text-bottom

.age
  margin-left 13px

.patient-symbols
  margin-bottom 15px

.patient-symbol
  margin-right 6px
  opacity 0.3

  &.active
    color $color-red-medium
    opacity 1

.section-heading
  margin 0
  font-size $font-size--base
  font-weight normal

.info-list
  margin 0
  padding-left 28px
</style>
