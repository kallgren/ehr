import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      first_name: "Alma",
      last_name: "Karlsson",
      role: "Orthopedic, surgeon",
      departments: ["Orthopedics"]
    },
    selectedPatient: null,
    selectedProblems: [],
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
        ],
        events: [
          {
            id: 1,
            date: "2018-04-30T07:30:00Z",
            type: "visit",
            clinic: "Physiotherapy"
          },
          {
            id: 2,
            date: "2018-05-10T09:00:00Z",
            type: "visit",
            clinic: "Physiotherapy"
          },
          {
            id: 3,
            date: "2018-05-20T12:00:00Z",
            type: "X-Ray",
            clinic: "Radiology"
          },
          {
            id: 4,
            date: "2018-05-20T08:00:00Z",
            type: "visit",
            clinic: "Orthopedics"
          }
        ],
        medicines: [
          {
            id: 1,
            name: "Medicine One",
            intake: "2 pills every morning"
          },
          {
            id: 2,
            name: "Medicine Two",
            intake: "before meals"
          },
          {
            id: 3,
            name: "Painkiller",
            intake: "When needed"
          },
          {
            id: 4,
            name: "Medicine One",
            intake: "2 pills every morning"
          },
          {
            id: 5,
            name: "Medicine Two",
            intake: "before meals"
          },
          {
            id: 6,
            name: "Painkiller",
            intake: "When needed"
          },
          {
            id: 7,
            name: "Medicine One",
            intake: "2 pills every morning"
          },
          {
            id: 8,
            name: "Medicine Two",
            intake: "before meals"
          },
          {
            id: 9,
            name: "Painkiller",
            intake: "When needed"
          },
          {
            id: 10,
            name: "Medicine One",
            intake: "2 pills every morning"
          }
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
    ],
    problems: [
      {
        id: 1,
        patient_id: 1,
        icd10_code: "M25.562",
        start_date: "2017-02-22T10:00:00Z",
        chronic: false,
        epicrisis_count: 1
      },
      {
        id: 2,
        patient_id: 1,
        icd10_code: "I49.9",
        start_date: "2008-02-03T15:30:00Z",
        chronic: false,
        epicrisis_count: 0
      },
      {
        id: 3,
        patient_id: 1,
        icd10_code: "G80",
        start_date: "1975-06-13T02:34:00Z",
        chronic: true,
        epicrisis_count: 0
      },
      {
        id: 4,
        patient_id: 2,
        icd10_code: "M25.562",
        start_date: "2017-09-29T14:19:00Z",
        chronic: false,
        epicrisis_count: 0
      }
    ],
    diagnoses: [
      {
        code: "I49.9",
        description: "Cardiac Arrythmia",
        department: "Cardiology"
      },
      {
        code: "M25.562",
        description: "Left knee pain",
        department: "Orthopedics"
      },
      {
        code: "G80",
        description: "Cerebral Palsy",
        department: "Neurology"
      }
    ],
    surgeries: [
      {
        id: 1,
        problem_id: 1
      }
    ],
    notes: [
      {
        id: 1,
        id_for_patient: 1,
        problem_id: 2,
        date: "2009-11-22T14:12:00Z",
        is_starred: false
      },
      {
        id: 2,
        id_for_patient: 1,
        problem_id: 4,
        date: "2017-09-29T14:28:00Z",
        is_starred: false
      },
      {
        id: 3,
        id_for_patient: 2,
        problem_id: 1,
        date: "2018-09-14T09:01:00Z",
        is_starred: false,
        chief_complaint: "Persistant pain in left knee",
        history_of_present_illness:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        physical_examination:
          "Nullam condimentum et dolor id ullamcorper. Aliquam leo velit, finibus sit amet eros et, sodales cursus tortor. Nulla sagittis tincidunt pharetra.",
        assessment:
          "M25.562 Donec vitae pellentesque quam. Nullam dapibus, erat ac efficitur consectetur, enim metus elementum nibh, vitae convallis turpis justo vitae massa.",
        plan:
          "Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      },
      {
        id: 4,
        id_for_patient: 3,
        problem_id: 2,
        date: "2018-10-16T14:26:00Z",
        is_starred: false
      },
      {
        id: 5,
        id_for_patient: 4,
        problem_id: 1,
        date: "2019-01-27T08:24:00Z",
        is_starred: false,
        chief_complaint: "",
        history_of_present_illness: "Sed tincidunt velit dignissim ut.",
        physical_examination: "Fusce suscipit eleifend sapien.",
        assessment: "",
        plan: "Quisque non nulla ornare velit mattis tincidunt"
      },
      {
        id: 6,
        id_for_patient: 5,
        problem_id: 1,
        date: "2019-02-02T08:20:00Z",
        is_starred: true,
        chief_complaint: "Patient experiencing palpitations",
        history_of_present_illness:
          "Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
        physical_examination: "Integer ornare est ac magna tempus accumsan.",
        assessment:
          "I49.9 In sapien leo, eleifend at faucibus vel, lobortis ac est. Sed nisl sapien, pharetra quis bibendum nec, ullamcorper sit amet nisl.",
        plan:
          "Fusce sodales, ante at pharetra volutpat, est quam consectetur nulla, at hendrerit sem ante quis arcu."
      },
      {
        id: 7,
        id_for_patient: 6,
        problem_id: 1,
        date: "2019-02-10T11:13:00Z",
        is_starred: false,
        chief_complaint: "Pain and swelling in the left leg",
        history_of_present_illness:
          "Knee has been hurting intermittently for past 3 months, swollen for a past week",
        physical_examination:
          "General: no immediate distress. Skin: There is an area of abrasion on the right lower leg, no erythema over painful area Lymph Nodes: There is no inguinal lymphadenopathy. Musculoskeletal: The right leg is swollen about 1 cm more than the left leg",
        assessment:
          "M25. 562 Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        plan:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
      },
      {
        id: 8,
        id_for_patient: 7,
        problem_id: 1,
        date: "2019-02-18T09:37:00Z",
        is_starred: true,
        chief_complaint: "Persistant pain in left knee",
        history_of_present_illness:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        physical_examination:
          "Nullam condimentum et dolor id ullamcorper. Aliquam leo velit, finibus sit amet eros et, sodales cursus tortor. Nulla sagittis tincidunt pharetra.",
        assessment:
          "M25.562 Donec vitae pellentesque quam. Nullam dapibus, erat ac efficitur consectetur, enim metus elementum nibh, vitae convallis turpis justo vitae massa.",
        plan:
          "Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }
    ],
    attachments: [
      {
        id: 1,
        note_id: 3,
        name: "Referral, incoming",
        date: "2018-09-06"
      },
      {
        id: 2,
        note_id: 6,
        name: "CT",
        date: "2019-02-01"
      },
      {
        id: 3,
        note_id: 6,
        name: "Referral",
        date: "2019-02-02"
      },
      {
        id: 4,
        note_id: 7,
        name: "X-Ray",
        date: "2019-02-12"
      },
      {
        id: 5,
        note_id: 8,
        name: "Sick leave",
        date: "2019-02-17"
      },
      {
        id: 6,
        note_id: 8,
        name: "X-Ray",
        date: "2019-02-18T09:16:00Z"
      }
    ]
  },
  mutations: {
    selectPatientById(state, payload) {
      state.selectedPatient = state.patients.find(
        patient => patient.id === payload.id
      );

      state.selectedProblems = [];
    },
    selectProblemById(state, payload) {
      state.selectedProblems = [payload.id];
    },
    selectProblemsByIds(state, payload) {
      state.selectedProblems = [...payload.ids];
    },
    toggleAddProblemToSelectById(state, payload) {
      if (state.selectedProblems.includes(payload.id)) {
        state.selectedProblems = state.selectedProblems.filter(
          id => id !== payload.id
        );
      } else {
        state.selectedProblems.push(payload.id);
      }
    },
    starNoteById(state, payload) {
      const note = state.notes.find(note => note.id === payload.id);
      note.is_starred = true;
    },
    unStarNoteById(state, payload) {
      const note = state.notes.find(note => note.id === payload.id);
      note.is_starred = false;
    }
  },
  actions: {
    toggleStarNoteById({ commit, state }, payload) {
      const note = state.notes.find(note => note.id === payload.id);

      if (note.is_starred) {
        commit("unStarNoteById", note);
      } else {
        commit("starNoteById", note);
      }
    }
  },
  getters: {
    getProblemsByPatientId(state, getters) {
      return payload =>
        state.problems
          .filter(problem => problem.patient_id === payload.id)
          .map(problem => ({
            ...problem,
            ...getters.getDiagnosisByICD10Code(problem),
            note_count: getters.getNotesByProblemId(problem).length,
            surgery_count: getters.getSurgeriesByProblemId(problem).length,
            last_activity_date: Math.max(
              new Date(problem.start_date),
              ...getters
                .getNotesByProblemId(problem)
                .map(note => new Date(note.date))
            )
          }));
    },
    getSurgeriesByProblemId(state) {
      return payload =>
        state.surgeries.filter(surgery => surgery.problem_id === payload.id);
    },
    getNotesByProblemId(state) {
      return payload =>
        state.notes.filter(note => note.problem_id === payload.id);
    },
    getDiagnosisByICD10Code(state) {
      return payload =>
        state.diagnoses.find(diagnose => diagnose.code === payload.icd10_code);
    },
    getAttachmentsByNoteId(state) {
      return payload =>
        state.attachments
          .filter(attachment => attachment.note_id === payload.id)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    getNotesForSelectedProblems(state, getters) {
      return state.selectedProblems
        .map(id => getters.getNotesByProblemId({ id }))
        .flat()
        .map(note => ({
          ...note,
          attachments: getters.getAttachmentsByNoteId(note),
          diagnosis_description: getters.getDiagnosisByICD10Code(
            state.problems.find(problem => problem.id === note.problem_id)
          ).description
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }
});
