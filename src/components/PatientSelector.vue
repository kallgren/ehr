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
            :key="item.id"
            :class="['table-row', {selected: selectedPatient && selectedPatient.id === item.patient.id}]"
            @click="selectPatientById({id: item.patient.id})"
          >
            <td>{{ item.patient.first_name }} {{ item.patient.last_name }}</td>
            <td v-if="item.start">{{ item.start | moment("HH:mm") }}</td>
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
  computed: mapState({
    tabs: state => [
      {
        id: 0,
        name: "Today's list",
        items: state.todaysAppointments
      },
      {
        id: 1,
        name: "Yours",
        items: state.myPatientsAppointments
      },
      {
        id: 2,
        name: "Ward",
        items: state.wardPatients
      },
      {
        id: 3,
        name: "Last active",
        items: state.lastActivePatients
      }
    ],
    selectedPatient: "selectedPatient"
  }),
  methods: mapMutations(["selectPatientById"])
};
</script>

<style scoped lang="stylus">
.patient-selector
  border-bottom 1px solid $color-grey-dark

.tab
  display inline-block
  width 25%
  font-size $font-size--smaller
  text-align center
  line-height 30px
  border-bottom 1px solid $color-green-dark
  border-right 1px solid $color-green-dark
  box-sizing border-box

  &.active
    color white
    background $color-green-medium

.tab-content
  padding 10px 6px

.table-container
  height 81px
  margin-bottom 10px
  background white
  border 1px solid $color-grey-darker
  box-sizing border-box
  overflow-y auto

.table
  width 100%
  font-size $font-size--smaller
  line-height 1.4
  border-collapse collapse

.table-row
  cursor pointer

  &.selected
    color white
    background $color-blue

.patient-search
  font-size $font-size--smaller
  font-style italic
  margin-bottom 4px
</style>
