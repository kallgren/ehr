import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      first_name: "Alma",
      last_name: "Karlsson",
      role: "Orthopedic, surgeon"
    },
    selectedPatient: null,
    patients: [
      {
        id: 1,
        first_name: "Sven",
        last_name: "Svensson",
        ssn: "750613-2937",
        date_of_birth: "1975-06-13T02:34:00Z",
        sex: "male",
        height_cm: 178,
        weight_kg: 90,
        allergies: ["peanuts"],
        blood_problems: false,
        other_warnings: false,
        admitted: false,
        important_remarks: [
          "Heart bypass in 2012",
          "Family history of prostate cancer"
        ]
      },
      {
        id: 2,
        first_name: "Anna",
        last_name: "Annasson",
        ssn: "810222-3861",
        allergies: [],
        date_of_birth: "1981-02-22T11:49:00Z",
        sex: "female",
        height_cm: 156,
        weight_kg: 67,
        blood_problems: true,
        other_warnings: false,
        admitted: true,
        important_remarks: []
      },
      {
        id: 3,
        first_name: "Karl",
        last_name: "Karlsson",
        allergies: []
      },
      {
        id: 4,
        first_name: "Johan",
        last_name: "Johansson",
        allergies: []
      },
      {
        id: 5,
        first_name: "Anders",
        last_name: "Andersson",
        allergies: []
      }
    ],
    todaysAppointments: [
      {
        id: 1,
        start: "2018-01-01T08:00:00Z",
        end: "2018-01-01T08:30:00Z",
        patient: {
          id: 1,
          first_name: "Sven",
          last_name: "Svensson"
        },
        reason: "knee pain"
      },
      {
        id: 2,
        start: "2018-01-01T08:30:00Z",
        end: "2018-01-01T09:00:00Z",
        patient: {
          id: 2,
          first_name: "Anna",
          last_name: "Annasson"
        },
        reason: "1mo follow up"
      },
      {
        id: 3,
        start: "2018-01-01T09:30:00Z",
        end: "2018-01-01T09:45:00Z",
        patient: {
          id: 3,
          first_name: "Karl",
          last_name: "Karlsson"
        },
        reason: "elbow fracture"
      },
      {
        id: 4,
        start: "2018-01-01T10:00:00Z",
        end: "2018-01-01T10:30:00Z",
        patient: {
          id: 4,
          first_name: "Johan",
          last_name: "Johansson"
        },
        reason: "scoliosis"
      },
      {
        id: 5,
        start: "2018-01-01T10:30:00Z",
        end: "2018-01-01T11:00:00Z",
        patient: {
          id: 5,
          first_name: "Anders",
          last_name: "Andersson"
        },
        reason: "6mo follow up"
      }
    ],
    myPatientsAppointments: [
      {
        id: 6,
        start: "2018-01-01T14:00:00Z",
        end: "2018-01-01T14:20:00Z",
        patient: {
          id: 2,
          first_name: "Anna",
          last_name: "Annasson"
        },
        reason: "radius fracture"
      },
      {
        id: 7,
        start: "2018-01-01T14:30:00Z",
        end: "2018-01-01T14:50:00Z",
        patient: {
          id: 5,
          first_name: "Anders",
          last_name: "Andersson"
        },
        reason: "ankle fracture"
      },
      {
        id: 8,
        start: "2018-01-01T15:00:00Z",
        end: "2018-01-01T15:20:00Z",
        patient: {
          id: 4,
          first_name: "Johan",
          last_name: "Johansson"
        },
        reason: "hip replacement"
      }
    ],
    wardPatients: [
      {
        id: 1,
        patient: {
          id: 3,
          first_name: "Karl",
          last_name: "Karlsson"
        },
        reason: "bone tumor"
      },
      {
        id: 2,
        patient: {
          id: 1,
          first_name: "Sven",
          last_name: "Svensson"
        },
        reason: "ankle fracture repair"
      }
    ],
    lastActivePatients: [
      {
        id: 1,
        patient: {
          id: 5,
          first_name: "Anders",
          last_name: "Andersson"
        },
        reason: "hip replacement followup"
      },
      {
        id: 2,
        patient: {
          id: 4,
          first_name: "Johan",
          last_name: "Johansson"
        },
        reason: "ankle fracture repair"
      }
    ]
  },
  mutations: {
    selectPatientById(state, payload) {
      state.selectedPatient = state.patients.find(
        patient => patient.id === payload.id
      );
    }
  },
  actions: {}
});
