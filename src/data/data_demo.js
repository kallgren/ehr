const patients = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    ssn: "750613-9430",
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
        date: "2020-04-30T07:30:00Z",
        type: "visit",
        clinic: "Physiotherapy"
      },
      {
        id: 2,
        date: "2020-05-10T09:00:00Z",
        type: "visit",
        clinic: "Physiotherapy"
      },
      {
        id: 3,
        date: "2020-05-20T12:00:00Z",
        type: "X-Ray",
        clinic: "Radiology"
      },
      {
        id: 4,
        date: "2020-05-20T08:00:00Z",
        type: "visit",
        clinic: "Orthopedics"
      }
    ]
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Wright",
    ssn: "510222-8367",
    date_of_birth: "1951-02-22T11:49:00Z",
    sex: "female",
    height_cm: 156,
    weight_kg: 67,
    allergies: [],
    blood_problems: true,
    other_warnings: false,
    admitted: true,
    important_remarks: []
  }
];

const todaysAppointments = [
  {
    id: 1,
    start: "2018-01-01T08:00:00Z",
    end: "2018-01-01T08:30:00Z",
    patient_id: 1,
    reason: "knee pain"
  },
  {
    id: 2,
    start: "2018-01-01T08:30:00Z",
    end: "2018-01-01T09:00:00Z",
    patient_id: 2,
    reason: "1mo follow up"
  }
];

const myPatientsAppointments = [
  {
    id: 1,
    start: "2018-01-01T14:00:00Z",
    end: "2018-01-01T14:20:00Z",
    patient_id: 2,
    reason: "radius fracture"
  }
];

const wardPatients = [
  {
    id: 1,
    patient_id: 2,
    reason: "ankle fracture repair"
  }
];

const diagnoses = [
  {
    code_icd10: "I49.9",
    description: "Cardiac Arrythmia",
    chronic: false,
    department: "Cardiology"
  },
  {
    code_icd10: "M25.562",
    description: "Left knee pain",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "G80",
    description: "Cerebral Palsy",
    chronic: true,
    department: "Neurology"
  },
  {
    code_icd10: "M41",
    description: "Scoliosis",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "I25.810",
    description: "Heart Bypass",
    chronic: false,
    department: "Cardiology"
  }
];

const notes = [
  {
    id: 1,
    patient_id: 1,
    id_for_patient: 1,
    diagnosis_codes: ["G80"],
    date: "1976-08-18T10:47:00Z",
    type: "progress",
    is_starred: false,
    start_date: "1975-06-13T02:34:00Z",
    unit: "Vårdcentral",
    reason: "Yearly check up",
    current:
      "Aliquam sit amet massa a justo placerat tempor nec id augue. Duis vel arcu euismod, tempus velit a, fermentum nibh. Suspendisse dignissim dolor a finibus tempus.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "Lungs",
        value: "Clear, even with forced expiration."
      },
      {
        name: "Heart",
        value: "Regular rate and rhythm without murmur."
      },
      {
        name: "Extremities",
        value: "No edema."
      }
    ],
    assessment:
      "Praesent sit amet turpis ultricies, sollicitudin massa ac, dignissim tortor. Praesent vel dolor pretium, bibendum mauris eu, rhoncus neque. Proin id pharetra nibh. Suspendisse quis magna at tortor vehicula sagittis nec pulvinar ligula.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 2,
    patient_id: 2,
    id_for_patient: 1,
    diagnosis_codes: ["M41"],
    date: "2007-09-29T14:28:00Z",
    type: "progress",
    is_starred: false,
    unit: "Akuten",
    reason: "Patient experiencing back pain",
    current:
      "Maecenas at dignissim nisi, vel volutpat nulla. Cras porttitor, sem ac dapibus pulvinar, mi ex gravida orci, id consequat tellus erat sed dui. Curabitur vel lacus pharetra, sodales leo in, mollis turpis. Etiam laoreet nulla velit, id accumsan felis pretium ut. Cras nisi tortor, tristique et tortor id, facilisis accumsan neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Quisque eleifend nisi"
      }
    ],
    assessment:
      "Duis sodales placerat lorem, nec fringilla mi consectetur vitae. In auctor neque quis magna ornare, vitae maximus risus porttitor. Fusce ac urna felis. Maecenas tincidunt dolor quis nulla commodo maximus. Maecenas ut risus malesuada, iaculis ante a, hendrerit libero. Maecenas eu viverra leo, a convallis lorem. Donec imperdiet facilisis vulputate. Proin hendrerit eros quis turpis mattis, vel efficitur lorem mollis. Proin ac mauris mi. Nam porta viverra tellus non posuere.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 3,
    patient_id: 1,
    id_for_patient: 2,
    diagnosis_codes: ["I49.9"],
    date: "2009-11-22T14:12:00Z",
    type: "progress",
    is_starred: true,
    start_date: "2008-02-03T15:30:00Z",
    unit: null,
    reason: "Problem of essential hypertension",
    current: "Integer a dapibus lectus, at placerat nunc.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Praesent nulla tellus"
      }
    ],
    assessment:
      "I49.9 Nunc hendrerit urna et ipsum euismod ornare. Vestibulum luctus erat ullamcorper imperdiet dapibus.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 4,
    patient_id: 2,
    id_for_patient: 2,
    diagnosis_codes: ["I25.810"],
    date: "2011-10-05T11:27:00Z",
    type: "surgery",
    is_starred: false,
    start_date: "2011-09-22T10:43:00Z",
    unit: null,
    reason: "6 months surgery follow-up",
    current:
      "Maecenas quis leo eu orci aliquet finibus a at quam. Suspendisse potenti.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Nulla id mi ultrices"
      }
    ],
    assessment:
      "Praesent et volutpat odio. Etiam auctor porttitor facilisis. In consectetur suscipit convallis. Proin ultricies nisl rutrum, sodales lectus eu, suscipit tortor.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 5,
    patient_id: 1,
    id_for_patient: 3,
    diagnosis_codes: ["M25.562"],
    date: "2018-09-14T09:01:00Z",
    type: "progress",
    is_starred: false,
    start_date: "2017-02-22T10:00:00Z",
    unit: null,
    reason: "Persistant pain in left knee",
    current:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    social: null,
    previous_history: null,
    status: null,
    assessment:
      "M25.562 Donec vitae pellentesque quam. Nullam dapibus, erat ac efficitur consectetur, enim metus elementum nibh, vitae convallis turpis justo vitae massa.",
    anesthesia: null,
    operation: null,
    medicines: ["Alvedon 1 g x 4 i 5 dagar"]
  },
  {
    id: 6,
    patient_id: 1,
    id_for_patient: 4,
    diagnosis_codes: ["M25.562"],
    date: "2019-01-27T08:24:00Z",
    type: "surgery",
    is_starred: false,
    unit: null,
    reason: null,
    current: "Sed tincidunt velit dignissim ut.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Fusce suscipit eleifend"
      }
    ],
    assessment: "",
    anesthesia: null,
    operation: "Fusce suscipit eleifend",
    medicines: null
  },
  {
    id: 7,
    patient_id: 1,
    id_for_patient: 5,
    diagnosis_codes: ["M25.562"],
    date: "2019-02-10T11:13:00Z",
    type: "epicrisis",
    is_starred: false,
    unit: "Akuten",
    reason: "Pain and swelling in the left leg",
    current:
      "Knee has been hurting intermittently for past 3 months, swollen for a past week",
    social: null,
    previous_history: null,
    status: [
      {
        name: "General",
        value: "no immediate distress."
      },
      {
        name: "Skin",
        value:
          "There is an area of abrasion on the right lower leg, no erythema over painful area."
      },
      {
        name: "Lymph Nodes",
        value: "There is no inguinal lymphadenopathy."
      },
      {
        name: "Musculoskeletal",
        value: "The right leg is swollen about 1 cm more than the left leg"
      }
    ],
    assessment:
      "M25. 562 Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    plan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
  },
  {
    id: 8,
    patient_id: 2,
    id_for_patient: 3,
    diagnosis_codes: ["M41"],
    date: "2019-04-03T08:11:00Z",
    type: "progress",
    is_starred: true,
    unit: "Vårdcentral",
    reason: "Post surgery check up",
    current:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel consectetur nunc. Proin sit amet gravida nunc, ac ornare dolor. Curabitur tincidunt urna quis ex lobortis molestie id ut nunc. Morbi ut dolor egestas, molestie elit vestibulum, pulvinar diam.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Sed sollicitudin pellentesque"
      },
      {
        name: "Cor",
        value: "Ut venenatis consequat"
      },
      {
        name: "Pulm",
        value: "Ut mollis mollis mattis"
      }
    ],
    assessment:
      "Cras nisi ante, feugiat a dolor at, lacinia gravida ex. Suspendisse potenti.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 9,
    patient_id: 1,
    id_for_patient: 6,
    diagnosis_codes: ["I49.9"],
    date: "2019-06-16T14:26:00Z",
    type: "progress",
    is_starred: false,
    unit: null,
    reason: "Patient experiencing palpitations",
    current:
      "Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    social: null,
    previous_history: null,
    status: null,
    assessment:
      "I49.9 In sapien leo, eleifend at faucibus vel, lobortis ac est. Sed nisl sapien, pharetra quis bibendum nec, ullamcorper sit amet nisl.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 10,
    patient_id: 1,
    id_for_patient: 7,
    diagnosis_codes: ["M25.562"],
    date: "2019-12-23T09:37:00Z",
    type: "progress",
    is_starred: true,
    unit: null,
    reason: "Persistant pain in left knee",
    social: null,
    previous_history: null,
    current:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    status: [
      {
        name: "AT",
        value: "Nullam condimentum et"
      }
    ],
    assessment:
      "M25.562 Donec vitae pellentesque quam. Nullam dapibus, erat ac efficitur consectetur, enim metus elementum nibh, vitae convallis turpis justo vitae massa.",
    anesthesia: null,
    operation: null,
    medicines: null
  }
];

const attachments = [
  {
    id: 1,
    note_id: 2,
    type: "X-Ray",
    date: "2007-09-29",
    comment: "Back",
    image_name: "xray-demo.jpg"
  },
  {
    id: 2,
    note_id: 2,
    type: "Referral, incoming",
    date: "2007-09-29",
    comment: "GP",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nec diam non vestibulum. Proin consectetur elit sapien, sed mattis orci vulputate ut. Nam scelerisque, lacus vel sollicitudin aliquet, lacus velit convallis sapien, non ultrices augue felis facilisis ligula. Nam massa nibh, iaculis id lectus ac, aliquam ullamcorper felis. Ut feugiat turpis et turpis dapibus pellentesque. Donec convallis in metus eu dictum. Aliquam augue sem, blandit tempus purus in, tristique sodales lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis sem ut tortor fermentum efficitur in vestibulum turpis. Integer pulvinar enim ac lacus ultrices cursus. Nulla convallis finibus dui, eget iaculis ex varius a.",
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui.",
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus."
    ]
  },
  {
    id: 3,
    note_id: 3,
    type: "ECG",
    date: "2009-11-22",
    text: [
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui.",
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus."
    ]
  },
  {
    id: 4,
    note_id: 5,
    type: "Referral, incoming",
    date: "2018-09-06",
    comment: "GP",
    text: [
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus."
    ]
  },
  {
    id: 5,
    note_id: 7,
    type: "X-Ray",
    date: "2019-02-12",
    comment: "Left knee",
    image_name: "xray-demo.jpg"
  },
  {
    id: 6,
    note_id: 9,
    type: "ECG",
    date: "2019-06-16",
    text: [
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui."
    ]
  },
  {
    id: 7,
    note_id: 10,
    type: "Sick leave",
    date: "2019-12-20",
    text: [
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus.",
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui."
    ]
  },
  {
    id: 8,
    note_id: 10,
    type: "X-Ray",
    date: "2019-12-23T09:16:00Z",
    comment: "Left knee",
    image_name: "xray-demo.jpg"
  }
];

export {
  patients,
  todaysAppointments,
  myPatientsAppointments,
  wardPatients,
  diagnoses,
  notes,
  attachments
};
