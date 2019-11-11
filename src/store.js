import Vue from "vue";
import Vuex from "vuex";
import {
  patients,
  todaysAppointments,
  myPatientsAppointments,
  wardPatients,
  diagnoses,
  notes,
  attachments
} from "./data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      first_name: "Alma",
      last_name: "Karlsson",
      role: "Orthopedic, surgeon",
      departments: ["Orthopedics"]
    },
    lastActiveAppointments: [],
    selectedPatient: null,
    selectedProblems: [],
    highlightedNote: null,
    patients,
    todaysAppointments,
    myPatientsAppointments,
    wardPatients,
    diagnoses,
    notes,
    attachments
  },
  mutations: {
    selectAppointment(state, { appointment }) {
      let newLastActive = state.lastActiveAppointments.filter(
        e => e.patient.id !== appointment.patient.id
      );
      newLastActive.unshift(0);
      newLastActive[0] = appointment;

      state.lastActiveAppointments = newLastActive;

      state.selectedPatient = state.patients.find(
        patient => patient.id === appointment.patient.id
      );

      state.selectedProblems = [];
    },
    selectProblem(state, { id }) {
      state.selectedProblems = [id];
    },
    selectProblems(state, { ids }) {
      state.selectedProblems = [...ids];
    },
    toggleAddProblemToSelect(state, { id }) {
      if (state.selectedProblems.includes(id)) {
        state.selectedProblems = state.selectedProblems.filter(
          sid => sid !== id
        );
      } else {
        state.selectedProblems.push(id);
      }
    },
    starNote(state, { id }) {
      const note = state.notes.find(note => note.id === id);
      note.is_starred = true;
    },
    unStarNote(state, { id }) {
      const note = state.notes.find(note => note.id === id);
      note.is_starred = false;
    },
    highlightNote(state, { id }) {
      state.highlightedNote = state.notes.find(note => note.id === id);
    },
    resetNoteHighlight(state) {
      state.highlightedNote = null;
    }
  },
  actions: {
    toggleStarNote({ commit, state }, { id }) {
      const note = state.notes.find(note => note.id === id);

      if (note.is_starred) {
        commit("unStarNote", note);
      } else {
        commit("starNote", note);
      }
    }
  },
  getters: {
    getTodaysAppointments(state) {
      return state.todaysAppointments.map(appointment => ({
        ...appointment,
        patient: state.patients.find(
          patient => patient.id == appointment.patient_id
        )
      }));
    },
    getMyPatientsAppointments(state) {
      return state.myPatientsAppointments.map(appointment => ({
        ...appointment,
        patient: state.patients.find(
          patient => patient.id == appointment.patient_id
        )
      }));
    },
    getWardPatients(state) {
      return state.wardPatients.map(appointment => ({
        ...appointment,
        patient: state.patients.find(
          patient => patient.id == appointment.patient_id
        )
      }));
    },
    getProblemsByPatientId(state, getters) {
      return ({ id }) =>
        state.notes
          .filter(note => note.patient_id === id)
          .reduce(groupNoteByDiagnosis, [])
          .map(({ diagnosis_code, notes }) =>
            constructProblem(id, diagnosis_code, notes, getters)
          )
          .sort(
            (a, b) =>
              new Date(b.last_activity_date) - new Date(a.last_activity_date)
          );
    },
    getNotesByProblemId(state) {
      return ({ id }) =>
        state.notes.filter(
          note =>
            note.patient_id === parseInt(id.split("_")[0]) &&
            note.diagnosis_codes.includes(id.split("_")[1])
        );
    },
    getDiagnosisByCode(state) {
      return ({ code }) => state.diagnoses.find(d => d.code_icd10 === code);
    },
    getAttachmentsByNoteId(state) {
      return ({ id }) =>
        state.attachments
          .filter(attachment => attachment.note_id === id)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    getNotesForSelectedProblems(state, getters) {
      return state.selectedProblems
        .map(id => getters.getNotesByProblemId({ id }))
        .flat()
        .filter((v, i, s) => s.indexOf(v) === i) // Remove duplicates
        .map(note => ({
          ...note,
          attachments: getters.getAttachmentsByNoteId(note),
          diagnoses: note.diagnosis_codes.map(code =>
            getters.getDiagnosisByCode({ code })
          )
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }
});

function groupNoteByDiagnosis(groups, note) {
  note.diagnosis_codes.forEach(code => {
    const group = groups.find(p => p.diagnosis_code === code);

    if (group) {
      group.notes.push(note);
    } else {
      groups.push({ diagnosis_code: code, notes: [note] });
    }
  });

  return groups;
}

function constructProblem(patient_id, diagnosis_code, notes, getters) {
  return {
    id: `${patient_id}_${diagnosis_code}`,
    diagnosis_code,
    progress_note_count: notes.filter(n => n.type === "progress").length,
    surgery_count: notes.filter(n => n.type === "surgery").length,
    epicrisis_count: notes.filter(n => n.type === "epicrisis").length,
    start_date: Math.min(...notes.map(n => new Date(n.start_date || n.date))),
    last_activity_date: Math.max(...notes.map(n => new Date(n.date))),
    ...getters.getDiagnosisByCode({ code: diagnosis_code })
  };
}
