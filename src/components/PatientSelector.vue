<template>
  <div class="patient-selector">
    <div class="tab-container">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab', {active: currentTab === tab.id}]"
        @click="currentTab = tab.id"
      >{{ tab.name }}</button>
    </div>
    <div class="tab-content">
      <div
        v-for="tab in tabs"
        v-show="tab.id === currentTab"
        :key="tab.id"
        class="table-container"
      >
        <table class="table">
          <tr
            v-for="item in tab.items"
            :key="item.patient.id"
            :class="['table-row', {selected: selectedPatient && selectedPatient.id === item.patient.id}]"
            @click="selectAppointment({appointment: item})"
          >
            <td>
              <b>{{ item.patient.first_name }} {{ item.patient.last_name }}</b>
              <br>
              <span class="ssn">{{ item.patient.ssn }}</span>
            </td>
            <td v-if="tab.showTime">{{ item.start | moment("HH:mm") }}</td>
            <td>{{ item.reason }}</td>
          </tr>
        </table>
      </div>
      <input
        type="text"
        class="patient-search"
        placeholder="Select other...">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PatientSelector",
  data() {
    return {
      currentTab: 0
    };
  },
  computed: {
    ...mapState(["selectedPatient"]),
    tabs() {
      return [
        {
          id: 0,
          name: "Today's list",
          items: this.$store.getters.getTodaysAppointments,
          showTime: true
        },
        {
          id: 1,
          name: "Yours",
          items: this.$store.getters.getMyPatientsAppointments,
          showTime: true
        },
        {
          id: 2,
          name: "Ward",
          items: this.$store.getters.getWardPatients,
          showTime: false
        },
        {
          id: 3,
          name: "Last active",
          items: this.$store.state.lastActiveAppointments,
          showTime: false
        }
      ];
    }
  },
  methods: mapMutations(["selectAppointment"])
};
</script>

<style scoped lang="stylus">
.patient-selector
  border-bottom 1px solid $color-grey-dark

.tab
  display inline-block
  width 25%
  font-size $font-size--xsmall
  text-align center
  line-height 30px
  background white
  border-bottom 1px solid $color-green-dark
  border-right 1px solid $color-green-dark
  box-sizing border-box

  &.active
    color white
    background $color-green-medium

.tab-content
  padding 10px 6px

.table-container
  min-height 100px // ~2.6 rows visible
  max-height 210px // ~5.3 rows visible
  margin-bottom 10px
  background white
  border 1px solid $color-grey-darker
  box-sizing border-box
  overflow-y auto

.table
  width 100%
  font-size $font-size--xsmall
  line-height 1.4
  border-collapse collapse

.table-row
  cursor pointer
  border-bottom 1px solid $color-grey

  &:last-child
    border-bottom 0

  &.selected
    color white
    background $color-blue

    .ssn
      color inherit

td
  vertical-align top

.ssn
  color $color-grey-dark

.patient-search
  font-size $font-size--xsmall
  margin-bottom 4px

  &::placeholder
    font-style italic
</style>
