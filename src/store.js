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
    lastActiveAppointments: [],
    selectedPatient: null,
    selectedProblems: [],
    highlightedNote: null,
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
        ssn: "510222-3861",
        date_of_birth: "1951-02-22T11:49:00Z",
        sex: "female",
        height_cm: 156,
        weight_kg: 67,
        allergies: [],
        blood_problems: true,
        other_warnings: false,
        admitted: true,
        important_remarks: []
      },
      {
        id: 3,
        first_name: "Karl",
        last_name: "Karlsson",
        ssn: "781113-2308",
        date_of_birth: "1978-11-13T22:16:00Z",
        sex: "male",
        height_cm: 188,
        weight_kg: 78,
        allergies: ["dogs"],
        blood_problems: false,
        other_warnings: false,
        admitted: false,
        important_remarks: []
      },
      {
        id: 4,
        first_name: "Johan",
        last_name: "Johansson",
        ssn: "950404-0127",
        date_of_birth: "1995-04-04T20:31:00Z",
        sex: "male",
        height_cm: 182,
        weight_kg: 79,
        allergies: [],
        blood_problems: false,
        other_warnings: true,
        admitted: false,
        important_remarks: []
      },
      {
        id: 5,
        first_name: "Anders",
        last_name: "Andersson",
        ssn: "670923-2183",
        date_of_birth: "1967-09-23T03:44:00Z",
        sex: "male",
        height_cm: 177,
        weight_kg: 83,
        allergies: [],
        blood_problems: false,
        other_warnings: false,
        admitted: true,
        important_remarks: ["Family history of heart disease"]
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
    problems: [
      {
        id: 1,
        patient_id: 1,
        icd10_code: "M25.562",
        start_date: "2017-02-22T10:00:00Z",
        chronic: false
      },
      {
        id: 2,
        patient_id: 1,
        icd10_code: "I49.9",
        start_date: "2008-02-03T15:30:00Z",
        chronic: false
      },
      {
        id: 3,
        patient_id: 1,
        icd10_code: "G80",
        start_date: "1975-06-13T02:34:00Z",
        chronic: true
      },
      {
        id: 4,
        patient_id: 2,
        icd10_code: "M41",
        start_date: "2007-09-29T14:19:00Z",
        chronic: false
      },
      {
        id: 5,
        patient_id: 2,
        icd10_code: "I25.810",
        start_date: "2011-09-29T14:19:00Z",
        chronic: false
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
      },
      {
        code: "M41",
        description: "Scoliosis",
        department: "Orthopedics"
      },
      {
        code: "I25.810",
        description: "Heart Bypass",
        department: "Cardiology"
      }
    ],
    notes: [
      {
        id: 1,
        id_for_patient: 1,
        problem_id: 3,
        date: "1976-08-18T10:47:00Z",
        type: "progress",
        is_starred: false,
        chief_complaint: "Yearly check up",
        history_of_present_illness:
          "Aliquam sit amet massa a justo placerat tempor nec id augue. Duis vel arcu euismod, tempus velit a, fermentum nibh. Suspendisse dignissim dolor a finibus tempus.",
        physical_examination:
          "Lungs: Clear, even with forced expiration. Heart: Regular rate and rhythm without murmur. Extremities: No edema.",
        assessment:
          "Praesent sit amet turpis ultricies, sollicitudin massa ac, dignissim tortor. Praesent vel dolor pretium, bibendum mauris eu, rhoncus neque. Proin id pharetra nibh. Suspendisse quis magna at tortor vehicula sagittis nec pulvinar ligula.",
        plan: "Donec dictum porttitor nunc at vulputate"
      },
      {
        id: 2,
        id_for_patient: 1,
        problem_id: 4,
        date: "2007-09-29T14:28:00Z",
        type: "progress",
        is_starred: false,
        chief_complaint: "Patient experiencing back pain",
        history_of_present_illness:
          "Maecenas at dignissim nisi, vel volutpat nulla. Cras porttitor, sem ac dapibus pulvinar, mi ex gravida orci, id consequat tellus erat sed dui. Curabitur vel lacus pharetra, sodales leo in, mollis turpis. Etiam laoreet nulla velit, id accumsan felis pretium ut. Cras nisi tortor, tristique et tortor id, facilisis accumsan neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        physical_examination:
          "Quisque eleifend nisi ante, sit amet accumsan sapien dignissim sed. Duis a imperdiet lacus. Cras molestie quam id elit scelerisque pharetra. Mauris suscipit dolor vel magna ultrices, id fringilla turpis rhoncus.",
        assessment:
          "Duis sodales placerat lorem, nec fringilla mi consectetur vitae. In auctor neque quis magna ornare, vitae maximus risus porttitor. Fusce ac urna felis. Maecenas tincidunt dolor quis nulla commodo maximus. Maecenas ut risus malesuada, iaculis ante a, hendrerit libero. Maecenas eu viverra leo, a convallis lorem. Donec imperdiet facilisis vulputate. Proin hendrerit eros quis turpis mattis, vel efficitur lorem mollis. Proin ac mauris mi. Nam porta viverra tellus non posuere.",
        plan:
          "Quisque non pellentesque augue. Pellentesque sit amet dignissim nulla. Morbi eleifend mauris quis lectus tempor, eget efficitur magna sagittis. Pellentesque ac faucibus mauris, id efficitur nisi."
      },
      {
        id: 3,
        id_for_patient: 2,
        problem_id: 2,
        date: "2009-11-22T14:12:00Z",
        type: "progress",
        is_starred: true,
        chief_complaint: "Problem of essential hypertension",
        history_of_present_illness:
          "Integer a dapibus lectus, at placerat nunc.",
        physical_examination:
          "Praesent nulla tellus, posuere eu gravida pulvinar, pellentesque nec ex.",
        assessment:
          "I49.9 Nunc hendrerit urna et ipsum euismod ornare. Vestibulum luctus erat ullamcorper imperdiet dapibus.",
        plan:
          "Fusce vestibulum dui elit, a congue tellus porta sed. Pellentesque mattis ex nec dui varius, ornare tincidunt lacus gravida. Mauris porta risus ac sapien fermentum dignissim."
      },
      {
        id: 4,
        id_for_patient: 2,
        problem_id: 5,
        date: "2011-10-05T11:27:00Z",
        type: "surgery",
        is_starred: false,
        chief_complaint: "6 months surgery follow-up",
        history_of_present_illness:
          "Maecenas quis leo eu orci aliquet finibus a at quam. Suspendisse potenti.",
        physical_examination:
          "Nulla id mi ultrices, dictum elit non, venenatis magna. Pellentesque posuere metus sem. Phasellus ornare placerat lectus eget consectetur. Curabitur nulla nibh, iaculis semper elementum eu, ultricies non felis.",
        assessment:
          "Praesent et volutpat odio. Etiam auctor porttitor facilisis. In consectetur suscipit convallis. Proin ultricies nisl rutrum, sodales lectus eu, suscipit tortor.",
        plan:
          "1. Morbi sit amet libero ultrices, lacinia ex id, faucibus mi. 2. Nullam dapibus euismod leo, eget tristique enim tempor et. 3. Donec mi lorem, suscipit a elit a, aliquam dignissim libero. 4. Nunc varius pharetra quam, non convallis quam volutpat ut."
      },
      {
        id: 5,
        id_for_patient: 3,
        problem_id: 1,
        date: "2018-09-14T09:01:00Z",
        type: "progress",
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
        id: 6,
        id_for_patient: 4,
        problem_id: 2,
        date: "2018-10-16T14:26:00Z",
        type: "progress",
        is_starred: false,
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
        id_for_patient: 3,
        problem_id: 4,
        date: "2019-01-03T08:11:00Z",
        type: "progress",
        is_starred: true,
        chief_complaint: "Post surgery check up",
        history_of_present_illness:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel consectetur nunc. Proin sit amet gravida nunc, ac ornare dolor. Curabitur tincidunt urna quis ex lobortis molestie id ut nunc. Morbi ut dolor egestas, molestie elit vestibulum, pulvinar diam.",
        physical_examination:
          "Sed sollicitudin pellentesque enim sit amet condimentum. Ut venenatis consequat risus nec pulvinar. Ut mollis mollis mattis. Nam gravida neque at nulla congue faucibus. Cras velit erat, tristique ut tincidunt fringilla, pellentesque vitae mi.",
        assessment:
          "Cras nisi ante, feugiat a dolor at, lacinia gravida ex. Suspendisse potenti.",
        plan:
          "1. Nunc id dolor quis neque suscipit consequat at quis quam. 2. Vivamus elementum, mauris quis porta scelerisque, libero sem euismod odio, nec viverra enim orci efficitur dui. 3. Nam vel gravida odio, vitae sagittis neque. 4. Pellentesque consectetur tellus et dui iaculis iaculis. 5. Donec semper, sapien id iaculis feugiat, metus ante convallis magna, vitae maximus purus nisi sed ligula."
      },
      {
        id: 8,
        id_for_patient: 5,
        problem_id: 1,
        date: "2019-01-27T08:24:00Z",
        type: "surgery",
        is_starred: false,
        chief_complaint: "",
        history_of_present_illness: "Sed tincidunt velit dignissim ut.",
        physical_examination: "Fusce suscipit eleifend sapien.",
        assessment: "",
        plan: "Quisque non nulla ornare velit mattis tincidunt"
      },
      {
        id: 9,
        id_for_patient: 6,
        problem_id: 1,
        date: "2019-02-02T08:20:00Z",
        type: "progress",
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
        id: 10,
        id_for_patient: 7,
        problem_id: 1,
        date: "2019-02-10T11:13:00Z",
        type: "epicrisis",
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
        id: 11,
        id_for_patient: 8,
        problem_id: 1,
        date: "2019-02-18T09:37:00Z",
        type: "progress",
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
        note_id: 2,
        type: "X-Ray",
        date: "2007-09-29",
        comment: "Back"
      },
      {
        id: 2,
        note_id: 2,
        type: "Referral, incoming",
        date: "2007-09-29",
        comment: "GP"
      },
      {
        id: 3,
        note_id: 3,
        type: "ECG",
        date: "2009-11-22"
      },
      {
        id: 4,
        note_id: 5,
        type: "Referral, incoming",
        date: "2018-09-06",
        comment: "GP"
      },
      {
        id: 5,
        note_id: 6,
        type: "ECG",
        date: "2018-10-16"
      },
      {
        id: 6,
        note_id: 9,
        type: "CT",
        date: "2019-02-01"
      },
      {
        id: 7,
        note_id: 9,
        type: "Referral",
        date: "2019-02-02",
        comment: "Physiotherapy"
      },
      {
        id: 8,
        note_id: 10,
        type: "X-Ray",
        date: "2019-02-12",
        comment: "Left knee"
      },
      {
        id: 9,
        note_id: 11,
        type: "Sick leave",
        date: "2019-02-17"
      },
      {
        id: 10,
        note_id: 11,
        type: "X-Ray",
        date: "2019-02-18T09:16:00Z",
        comment: "Left knee"
      }
    ]
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
    selectProblemById(state, { id }) {
      state.selectedProblems = [id];
    },
    selectProblemsByIds(state, { ids }) {
      state.selectedProblems = [...ids];
    },
    toggleAddProblemToSelectById(state, { id }) {
      if (state.selectedProblems.includes(id)) {
        state.selectedProblems = state.selectedProblems.filter(
          sid => sid !== id
        );
      } else {
        state.selectedProblems.push(id);
      }
    },
    starNoteById(state, { id }) {
      const note = state.notes.find(note => note.id === id);
      note.is_starred = true;
    },
    unStarNoteById(state, { id }) {
      const note = state.notes.find(note => note.id === id);
      note.is_starred = false;
    },
    highlightNoteById(state, { id }) {
      state.highlightedNote = state.notes.find(note => note.id === id);
    },
    resetNoteHighlight(state) {
      state.highlightedNote = null;
    }
  },
  actions: {
    toggleStarNoteById({ commit, state }, { id }) {
      const note = state.notes.find(note => note.id === id);

      if (note.is_starred) {
        commit("unStarNoteById", note);
      } else {
        commit("starNoteById", note);
      }
    }
  },
  getters: {
    getProblemsByPatientId(state, getters) {
      return ({ id }) =>
        state.problems
          .filter(problem => problem.patient_id === id)
          .map(problem => ({
            ...problem,
            ...getters.getDiagnosisByICD10Code(problem),
            progress_note_count: getters.getProgressNoteCountByProblemId(
              problem
            ),
            surgery_count: getters.getSurgeryCountByProblemId(problem),
            epicrisis_count: getters.getEpicrisisCountByProblemId(problem),
            last_activity_date: Math.max(
              new Date(problem.start_date),
              ...getters
                .getNotesByProblemId(problem)
                .map(note => new Date(note.date))
            )
          }));
    },
    getProgressNoteCountByProblemId(state) {
      return ({ id }) =>
        state.notes.filter(
          note => note.problem_id === id && note.type === "progress"
        ).length;
    },
    getSurgeryCountByProblemId(state) {
      return ({ id }) =>
        state.notes.filter(
          note => note.problem_id === id && note.type === "surgery"
        ).length;
    },
    getEpicrisisCountByProblemId(state) {
      return ({ id }) =>
        state.notes.filter(
          note => note.problem_id === id && note.type === "epicrisis"
        ).length;
    },
    getNotesByProblemId(state) {
      return ({ id }) => state.notes.filter(note => note.problem_id === id);
    },
    getDiagnosisByICD10Code(state) {
      return ({ icd10_code }) =>
        state.diagnoses.find(diagnose => diagnose.code === icd10_code);
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
