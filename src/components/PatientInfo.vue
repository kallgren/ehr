<template>
  <div class="patient-info">
    <div
      v-if="!patient"
      class="placeholder-text"
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
      <div>
        <h3 class="section-heading">Upcoming events:</h3>
        <div
          v-if="patient.events"
          class="info-table">
          <table class="info-table-header">
            <tr>
              <th style="width: 20%">Date</th>
              <th style="width: 40%">Type</th>
              <th style="width: 40%">Clinic</th>
            </tr>
          </table>
          <div class="info-table-content-container">
            <table class="info-table-content">
              <tr
                v-for="event in patient.events"
                :key="event.id">
                <td style="width: 20%">{{ event.date | moment("DD.M.YY") }}</td>
                <td style="width: 40%">{{ event.type }}</td>
                <td style="width: 40%">{{ event.clinic }}</td>
              </tr>
            </table>
          </div>
        </div>
        <p
          v-if="!patient.medicines"
          class="placeholder-text">
          No upcoming events.
        </p>
      </div>
      <div class="section-medicine">
        <h3 class="section-heading">Medicine:</h3>
        <div
          v-if="patient.medicines"
          class="info-table">
          <table class="info-table-header">
            <tr>
              <th style="width: 50%">Name</th>
              <th style="width: 50%">Intake</th>
            </tr>
          </table>
          <div class="info-table-content-container">
            <table class="info-table-content">
              <tr
                v-for="medicine in patient.medicines"
                :key="medicine.id">
                <td style="width: 50%">{{ medicine.name }}</td>
                <td style="width: 50%">{{ medicine.intake }}</td>
              </tr>
            </table>
          </div>
        </div>
        <button
          v-if="patient.medicines"
          class="button">
          All medication
        </button>
        <p
          v-if="!patient.medicines"
          class="placeholder-text">
          No medicines.
        </p>
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

<style scoped lang="stylus">
.patient-info
  padding 7px
  font-size $font-size--small

.placeholder-text
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
  font-weight bold

.info-list
  margin 0
  margin-bottom 30px
  padding-left 28px

.info-table
  margin-top 8px

.info-table-header
.info-table-content
  width 100%
  font-size $font-size--xsmall
  text-align center
  background white
  border-collapse collapse

  th
    width 100%
    font-weight normal
    color white
    background $color-green-dark
    border 1px solid $color-green-dark

  td
    border 1px solid $color-green-dark
    border-top 2px solid $color-green-dark

  tr:last-child td
      border-bottom 0

.info-table-content-container
  max-height 93px
  border-bottom 1px solid $color-green-dark
  overflow-y auto

.section-medicine
  margin-top 70px

.button
  display block
  margin 10px auto
</style>
