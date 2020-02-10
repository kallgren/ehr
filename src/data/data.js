const patients = [
  {
    id: 1,
    first_name: "Sven",
    last_name: "Svensson",
    ssn: "750613-9430",
    date_of_birth: "1975-06-13T02:34:00Z",
    sex: "male",
    height_cm: 178,
    weight_kg: 90,
    allergies: [],
    blood_problems: false,
    other_warnings: false,
    admitted: false,
    important_remarks: []
  },
  {
    id: 2,
    first_name: "Anna",
    last_name: "Andersson",
    ssn: "510222-8367",
    date_of_birth: "1951-02-22T11:49:00Z",
    sex: "female",
    height_cm: 156,
    weight_kg: 67,
    allergies: [],
    blood_problems: false,
    other_warnings: false,
    admitted: true,
    important_remarks: ["Mamma dog i bröstcancer"],
    events: [
      {
        id: 1,
        date: "2020-02-10T14:30:00Z",
        type: "Surgery",
        clinic: "Orthopedics"
      }
    ]
  },
  {
    id: 3,
    first_name: "Karl",
    last_name: "Karlsson",
    ssn: "781113-5131",
    date_of_birth: "1978-11-13T22:16:00Z",
    sex: "male",
    height_cm: 188,
    weight_kg: 78,
    allergies: [],
    blood_problems: false,
    other_warnings: false,
    admitted: false,
    important_remarks: []
  },
  {
    id: 4,
    first_name: "Johan",
    last_name: "Johansson",
    ssn: "950404-5197",
    date_of_birth: "1995-04-04T20:31:00Z",
    sex: "male",
    height_cm: 182,
    weight_kg: 79,
    allergies: ["Latex, Pc."],
    blood_problems: false,
    other_warnings: false,
    admitted: false,
    important_remarks: []
  },
  {
    id: 5,
    first_name: "Anders",
    last_name: "Andersson",
    ssn: "670923-3115",
    date_of_birth: "1967-09-23T03:44:00Z",
    sex: "male",
    height_cm: 175,
    weight_kg: 96,
    allergies: [],
    blood_problems: false,
    other_warnings: false,
    admitted: false,
    important_remarks: ["Hjärtinfarkt med PCI 2017", "Typ II-diabetes"]
  },
  {
    id: 6,
    first_name: "Sara",
    last_name: "Lindén",
    ssn: "580220-0187",
    date_of_birth: "1958-02-20T21:38:00Z",
    sex: "female",
    height_cm: 169,
    weight_kg: 71,
    allergies: [],
    blood_problems: false,
    other_warnings: false,
    admitted: false,
    important_remarks: []
  }
];

const todaysAppointments = [
  {
    id: 1,
    start: "2018-01-01T08:00:00Z",
    end: "2018-01-01T08:30:00Z",
    patient_id: 1,
    reason: "Huvudvärk"
  },
  {
    id: 2,
    start: "2018-01-01T08:30:00Z",
    end: "2018-01-01T09:00:00Z",
    patient_id: 2,
    reason: "Operation"
  },
  {
    id: 3,
    start: "2018-01-01T09:30:00Z",
    end: "2018-01-01T09:45:00Z",
    patient_id: 3,
    reason: "Nackspärr"
  },
  {
    id: 4,
    start: "2018-01-01T10:00:00Z",
    end: "2018-01-01T10:30:00Z",
    patient_id: 4,
    reason: "Uppföljning fraktur 8v"
  },
  {
    id: 5,
    start: "2018-01-01T10:30:00Z",
    end: "2018-01-01T11:00:00Z",
    patient_id: 5,
    reason: "Ryggont"
  },
  {
    id: 6,
    start: "2018-01-01T13:00:00Z",
    end: "2018-01-01T13:30:00Z",
    patient_id: 6,
    reason: "Ont i knä"
  }
];

const myPatientsAppointments = [
  {
    id: 1,
    start: "2018-01-01T08:30:00Z",
    end: "2018-01-01T09:00:00Z",
    patient_id: 2,
    reason: "Operation"
  },
  {
    id: 2,
    start: "2018-01-01T10:00:00Z",
    end: "2018-01-01T10:30:00Z",
    patient_id: 4,
    reason: "Uppföljning fraktur 8v"
  },
  {
    id: 3,
    start: "2018-01-01T10:30:00Z",
    end: "2018-01-01T11:00:00Z",
    patient_id: 5,
    reason: "Ryggont"
  },
  {
    id: 4,
    start: "2018-01-01T13:00:00Z",
    end: "2018-01-01T13:30:00Z",
    patient_id: 6,
    reason: "Ont i knä"
  }
];

const wardPatients = [
  {
    id: 1,
    patient_id: 2,
    reason: "Benbrott"
  }
];

const diagnoses = [
  {
    code_icd10: "C43.5",
    description: "Malignt melanom",
    chronic: false,
    department: "Unknown"
  },
  {
    code_icd10: "I48.9",
    description: "Förmaksflimmer och förmaksfladder, ospecificerat",
    chronic: false,
    department: "Cardiology"
  },
  {
    code_icd10: "J09.9",
    description: "Influensa",
    chronic: false,
    department: "General"
  },
  {
    code_icd10: "M00.9",
    description: "Purulent artrit, ospecificerad",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "M24.B",
    description: "Recidivluxation/subluxation i axelled",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "M54.5",
    description: "Lumbago",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S42.0",
    description: "Nyckelbensfraktur",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S43.0",
    description: "Luxation i skulderled",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S52.3",
    description: "Fraktur på radiusskaftet",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S52.4",
    description: "Fraktur på skaften av både ulna och radius",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S82.50",
    description: "Fraktur på mediala malleolen, sluten",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S82.60",
    description: "Fraktur på laterala malleolen, sluten",
    chronic: false,
    department: "Orthopedics"
  },
  {
    code_icd10: "S82.80",
    description: "Frakturer på andra specificerade delar av underben, sluten",
    chronic: false,
    department: "Orthopedics"
  }
];

const notes = [
  {
    id: 1,
    patient_id: 1,
    id_for_patient: 1,
    diagnosis_codes: ["J09.9"],
    date: "2010-08-30T10:47:00Z",
    type: "progress",
    is_starred: false,
    unit: "Vårdcentral",
    reason: null,
    current: "Söker för feber och ont i kroppen. Negerar andningsbesvär.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Feber 38.5"
      },
      {
        name: "Cor",
        value: "RR, Inga bi- eller blåsljud. HF 85, BT 120/80"
      },
      {
        name: "Pulm",
        value: "Ausk ua bilat."
      },
      {
        name: "Buk",
        value: "Mjuk och oöm"
      }
    ],
    assessment: "Influensa. Alvedon 1 g x 4 i 5 dagar",
    anesthesia: null,
    operation: null,
    medicines: ["Alvedon 1 g x 4 i 5 dagar"]
  },
  {
    id: 2,
    patient_id: 6,
    id_for_patient: 1,
    diagnosis_codes: ["I48.9"],
    date: "2016-01-02T07:49:00Z",
    type: "progress",
    is_starred: false,
    unit: "Medicinakuten",
    reason: "Tryck över bröstet",
    current:
      "Oregelbunden hjärtrytm och tryck över bröstet sedan inatt. Vaknade pga detta. Ej ätit frukost.",
    social: "Förskolelärare. Bor i egen villa. Gift, 2 vuxna barn",
    previous_history: "Väs frisk",
    status: [
      {
        name: "AT",
        value: "Orolig, Afebril"
      },
      {
        name: "Hjärta",
        value: "ORR, frekv ca 125. Ausk ORR, 0 hörbara biljud"
      },
      {
        name: "Lungor",
        value: "Ves andningsljud bilat"
      },
      {
        name: "EKG",
        value: "visar snabbt ffm"
      }
    ],
    assessment:
      "Nydebuterat förmaksflimmer. Fastande. Under sedering elkonverteras patienten framgångsrikt 1 gång 320 J. Sinusrytm därefter.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 3,
    patient_id: 1,
    id_for_patient: 2,
    diagnosis_codes: ["S42.0", "S43.0", "S52.3"],
    date: "2019-11-21T15:51:00Z",
    type: "progress",
    is_starred: false,
    unit: "Akuten",
    reason: "Smärta höger axel",
    current:
      "Tidigare frisk man. Ramlade av mountainbike vid cykling downhill i sunnersta slalombacke. Slog i axel, knä och händer. Slog inte i huvud eller rygg/buk.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Gott"
      },
      {
        name: "Cor",
        value: "RR, Inga bi- eller blåsljud. HF 120, BT 140/75"
      },
      {
        name: "Pulm",
        value: "Ausk ua bilat."
      },
      {
        name: "Buk",
        value: "Mjuk och oöm"
      },
      {
        name: "Skelett",
        value:
          "Blåmärke över höger nyckelben. Dislocerad höger axelled och bruten höger underarm."
      },
      {
        name: "Neurologi",
        value: "ua"
      }
    ],
    assessment:
      "Radiusfraktur. Reponeras och gipsas. Erhåller smärtlindrande (morfin iv 3 mg) och axelluxationen reponeras ua. Åter till ortopedmottagningen för kontroll om 2 dagar.",
    anesthesia: null,
    operation: null,
    medicines: ["Morfin iv 3 mg"]
  },
  {
    id: 4,
    patient_id: 1,
    id_for_patient: 3,
    diagnosis_codes: ["S42.0", "S43.0", "S52.3"],
    date: "2019-11-24T09:35:00Z",
    type: "progress",
    is_starred: false,
    unit: "Mottagningsbesök",
    reason: "Återbesök",
    current:
      "Tidigare frisk man som för 3 dagar sedan ramlade med cykel då han körde MBT downhill. Axellux och fraktur på clavicel och radius dx. Luxationen reponerades och radiusfrakturen reponerades och gipsades.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Gott"
      },
      {
        name: "Lokalt",
        value: "dx. Fin färg i fingrar. Känsel ua."
      }
    ],
    assessment:
      "Clavicelfraktur behandlas konservativt. Fortsatt gips hö arm 6 veckor.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 5,
    patient_id: 5,
    id_for_patient: 1,
    diagnosis_codes: ["M54.5"],
    date: "2018-04-13T16:26:00Z",
    type: "progress",
    is_starred: false,
    unit: "Akuten",
    reason: "Ryggvärk",
    current:
      "Arbetar som lastbilschafför. Idag lyft tung låda med verktyg varpå det högg till i ryggen och han har därefter inte kunna räta på ryggen pga smärtor. Förnekar utstrålande smärtor i benet. Har kunnat kissa.",
    social: null,
    previous_history: "Hjärtinfarkt med PCI 2017. Typ II-diabetes.",
    status: [
      {
        name: "AT",
        value: "Kraftigt överviktig. Går stapplande, framåtböjd med stöd."
      },
      {
        name: "Lokalt",
        value: "Palperas ömmande sakrolumbalt. Lasegue negativt."
      }
    ],
    assessment:
      "Lumbago. Rekommenderas smärtlindring med paracetamol och NSAID och mobilisering efter förmåga. Får träffa sjukgymnast för träningsprogram.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 6,
    patient_id: 6,
    id_for_patient: 2,
    diagnosis_codes: ["M00.9"],
    date: "2019-04-12T11:11:00Z",
    type: "progress",
    is_starred: true,
    unit: "Ortopedmottagningen",
    reason: "Svullet knä",
    current:
      "Sedan några dagar allt mer svullet höger knä. Sedan igår även tilltagande värmeökning. Feber.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "AT",
        value: "Feber 38,6 C"
      },
      {
        name: "Lokalt",
        value: "Svullet höger knä. Rodnat. Inskränkt rörlighet pga smärta."
      }
    ],
    assessment:
      "Efter lokalbedövning med 5 ml Xylocain 10 mg/ml punkteras knät. Aspirat ger misstanke om septisk artrit. Ledvätska till analys och odling. Inläggning med Kloxacillin 2g x 3 iv.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 7,
    patient_id: 2,
    id_for_patient: 1,
    diagnosis_codes: ["C43.5"],
    date: "2019-03-16T11:05:00Z",
    type: "progress",
    is_starred: false,
    unit: "Hudmottagning",
    reason: "Hudförändring bål",
    current:
      "Noterat oregelbunden mörkpigmenterad fläck på bålen som senaste månaderna växt och blöder. Solar mycket.",
    social: null,
    previous_history: "Tidigare frisk",
    status: [
      {
        name: "AT",
        value: "Gott och opåverkad"
      },
      {
        name: "Hjärta",
        value: "RR, Inga bi eller blåsljud"
      },
      {
        name: "Lungor",
        value: "Normala andningsljud bilateralt"
      },
      {
        name: "Buk",
        value: "Mjuk och oöm"
      },
      {
        name: "Hud",
        value:
          "På bålen noteras nevus oreglundet till form och färg. 8 mm diamater. Liten krusta dorsalt."
      }
    ],
    assessment:
      "Misstänkt malignt melanom hos tidigare frisk kvinna. Excision i lokalbedövning (10 ml Lidokain) med god marginal (>5 mm). Preparat till patolog.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 8,
    patient_id: 2,
    id_for_patient: 2,
    diagnosis_codes: ["C43.5"],
    date: "2019-03-25T08:39:00Z",
    type: "progress",
    is_starred: true,
    unit: "Hudmottagning",
    reason: "Återbesök",
    current: "Orolig. Inga besvär i övrigt.",
    social: null,
    previous_history: null,
    status: [
      {
        name: "Hud",
        value: "Fint och oretat i såret."
      }
    ],
    assessment: "Malignt melanom. Remiss till onkolog.",
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 9,
    patient_id: 2,
    id_for_patient: 3,
    diagnosis_codes: ["S82.50", "S82.60", "S82.80"],
    date: "2020-02-09T12:12:00Z",
    type: "progress",
    is_starred: false,
    unit: "Ortopedakuten",
    reason: "Ridolycka",
    current:
      "Trillat av hästen under hopptävling. Fastnade med foten i stigbygeln. Slagit i huvudet men inte varit avsvimmad. Hade hjälm och ryggskydd. Inkommer med ambulans och vänster ben i vakumstöd.",
    social: null,
    previous_history: "Malignt melanom",
    status: [
      {
        name: "AT",
        value: "Orolig, smärtpåverkad"
      },
      {
        name: "Hjärta",
        value: "Takykard, HF 140. RR."
      },
      {
        name: "Lungor",
        value: "Normala andningsljud bilat"
      },
      {
        name: "Buk",
        value: "Mjuk och oöm"
      },
      {
        name: "Lokalt",
        value:
          "Kraftig felställning med utåtrotation i vänster fotled. Smärtar."
      }
    ],
    assessment:
      "Erhåller smärtlindring. Grovreponeras. Stabiliseras. Inläggning i väntan på op fotledsfraktur",
    anesthesia: null,
    operation: null,
    medicines: ["morfin 1mg/ml 3 ml"]
  },
  {
    id: 10,
    patient_id: 2,
    id_for_patient: 4,
    diagnosis_codes: ["S82.50", "S82.60", "S82.80"],
    date: "2020-02-10T08:21:00Z",
    type: "progress",
    is_starred: false,
    unit: "Ortopedavdelningen",
    reason: null,
    current:
      "Fotledsfraktur vänster. Fastar i väntan på operation senare under dagen. Fortsatt smärtlindring med morfin.",
    social: null,
    previous_history: null,
    status: null,
    assessment: null,
    anesthesia: null,
    operation: null,
    medicines: null
  },
  {
    id: 11,
    patient_id: 4,
    id_for_patient: 1,
    diagnosis_codes: ["S52.4"],
    date: "2019-07-09T10:45:00Z",
    type: "progress",
    is_starred: false,
    unit: "Akutmottagning",
    reason: "Underarmsfraktur",
    current:
      "Kört motorcross på Rörken. Kört omkull och fått motorcykeln över armen. Har nu en öppen underarmsfraktur höger arm. Inkommer till akuten i kompisens bil och armen inlindad i en handduk.",
    social: null,
    previous_history: "Tidigare frisk",
    status: [
      {
        name: "AT",
        value: "Under omständigeheterna gott. Smärtpåverkad."
      },
      {
        name: "Hjärta",
        value: "HF 90. RR. Inga blåsljud"
      },
      {
        name: "Lungor",
        value: "ua"
      },
      {
        name: "Buk",
        value: "ua"
      },
      {
        name: "Lokalt",
        value:
          "Öppen fraktur höger underarm. Distala pulsar ua. Distalt nervstatus ua."
      }
    ],
    assessment:
      "A3-fraktur. Smärtlindras. Fasta. Inläggning i väntan på operation",
    anesthesia: null,
    operation: null,
    medicines: ["Morfin 1 mg/ml 5 ml"]
  },
  {
    id: 12,
    patient_id: 4,
    id_for_patient: 2,
    diagnosis_codes: ["S52.4"],
    date: "2019-07-09T14:04:00Z",
    type: "surgery",
    is_starred: true,
    unit: null,
    reason: null,
    current: null,
    social: null,
    previous_history: null,
    status: null,
    assessment: null,
    anesthesia: "Plexusblockad, se narkosanteckning",
    operation:
      "Förbereds enligt gällande rutin. Öppen reposition med fixation med platta och skruvar. Röntgen postop visar acceptabelt läge. Stabilt efter fixation. Kontrollröntgen om 8 veckor.",
    medicines: null
  },
  {
    id: 13,
    patient_id: 3,
    id_for_patient: 1,
    diagnosis_codes: ["M24.B"],
    date: "2019-08-25T11:18:00Z",
    type: "progress",
    is_starred: false,
    unit: "Ortopedmottagningen",
    reason: "Axelbesvär vänster",
    current:
      "Har återkommande axelluxationer även vänster. Axeln hoppar ur led vid fysisk aktivitet men han kan reponera den själv. Önskar nu operation.",
    social: null,
    previous_history:
      "Tidigare opererad i Sundsvall för recidiverande axelluxationer höger.",
    status: [
      {
        name: "Lokalt",
        value:
          "Apprehension sign positivt. Relocation test postivt. Inskränkt utåtrotation."
      }
    ],
    assessment:
      "Axelinstabilitet. Beställer journal från Sundsvall och sätter upp patient till operation.",
    anesthesia: null,
    operation: null,
    medicines: null
  }
];

const attachments = [
  {
    id: 1,
    note_id: 1,
    type: "Lab",
    date: "2010-08-30",
    comment: "Influensa A positivt",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nec diam non vestibulum. Proin consectetur elit sapien, sed mattis orci vulputate ut. Nam scelerisque, lacus vel sollicitudin aliquet, lacus velit convallis sapien, non ultrices augue felis facilisis ligula. Nam massa nibh, iaculis id lectus ac, aliquam ullamcorper felis. Ut feugiat turpis et turpis dapibus pellentesque. Donec convallis in metus eu dictum. Aliquam augue sem, blandit tempus purus in, tristique sodales lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis sem ut tortor fermentum efficitur in vestibulum turpis. Integer pulvinar enim ac lacus ultrices cursus. Nulla convallis finibus dui, eget iaculis ex varius a.",
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui.",
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus."
    ]
  },
  {
    id: 2,
    note_id: 2,
    type: "Lab",
    date: "2016-01-02",
    comment: "Troponin ua",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nec diam non vestibulum. Proin consectetur elit sapien, sed mattis orci vulputate ut. Nam scelerisque, lacus vel sollicitudin aliquet, lacus velit convallis sapien, non ultrices augue felis facilisis ligula. Nam massa nibh, iaculis id lectus ac, aliquam ullamcorper felis. Ut feugiat turpis et turpis dapibus pellentesque. Donec convallis in metus eu dictum. Aliquam augue sem, blandit tempus purus in, tristique sodales lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis sem ut tortor fermentum efficitur in vestibulum turpis. Integer pulvinar enim ac lacus ultrices cursus. Nulla convallis finibus dui, eget iaculis ex varius a.",
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum."
    ]
  },
  {
    id: 3,
    note_id: 3,
    type: "Röntgen",
    date: "2019-11-21T15:43:00Z",
    comment: "Slätröntgen arm: Radiusfraktur lätt dislocerad höger.",
    image_name: "xray-wrist-right-radius-fracture.jpg"
  },
  {
    id: 4,
    note_id: 3,
    type: "Röntgen",
    date: "2019-11-21T15:46:00Z",
    comment: "Slätröntgen axel: Axelluxation höger. Clavicelfraktur höger",
    image_name: "xray-shoulder-right-clavicle-fracture.jpg" // https://en.wikipedia.org/wiki/File:Clavicle_fracture_right.jpg
  },
  {
    id: 5,
    note_id: 4,
    type: "Röntgen",
    date: "2019-11-24T09:23:00Z",
    comment: "Slätröntgen höger handled. Fraktur radius i gott läge.",
    image_name: "xray-wrist-right-healthy.png" // https://www.researchgate.net/figure/Plain-X-ray-of-right-wrist-anterior-posterior-view-and-lateral-view-No-evident_fig2_317076617
  },
  {
    id: 6,
    note_id: 5,
    type: "Lab",
    date: "2018-04-13",
    comment: "normalt",
    text: [
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui.",
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus."
    ]
  },
  {
    id: 7,
    note_id: 9,
    type: "Röntgen",
    date: "2020-02-09T12:18:00Z",
    comment: "Trimalleolär fotledsfraktur sin.",
    image_name: "xray-ankle-left-trimalleolar-fracture.jpeg"
  },
  {
    id: 8,
    note_id: 8,
    type: "Lab",
    date: "2019-03-25",
    comment: "Patologi visar malignt melanom",
    text: [
      "Proin vulputate pretium purus in volutpat. Vestibulum rutrum enim efficitur, laoreet justo in, euismod est. Phasellus suscipit velit posuere vulputate cursus. Cras sodales odio dui, et posuere nisi feugiat dignissim. Nullam egestas turpis ac augue malesuada, a sagittis erat mollis. Etiam dui libero, finibus sed turpis id, viverra porta nunc. Integer efficitur augue sed ullamcorper sagittis. Vestibulum ut est mi. Praesent pharetra urna dolor, sit amet gravida erat imperdiet ac. Sed eget leo ac leo fringilla elementum nec congue erat. Sed eu auctor diam. Maecenas mattis id eros vel ullamcorper. Vestibulum vulputate ultrices hendrerit. Quisque tincidunt quam in lectus varius, tincidunt pulvinar turpis porta. Cras fringilla eget diam in vulputate. Phasellus porta velit vel justo aliquet, non aliquam sem dictum.",
      "Duis dignissim condimentum elementum. Donec ornare mauris non arcu scelerisque, vitae condimentum urna faucibus. Ut lectus elit, euismod id viverra non, aliquet vitae dolor. Morbi in ex tortor. Mauris vestibulum risus ac diam porta vehicula. Sed iaculis nunc sed odio venenatis tristique. Quisque sed egestas urna. Phasellus ultricies diam nec enim porta ornare. Nunc metus metus, scelerisque eget nunc sed, aliquet interdum dui."
    ]
  },
  {
    id: 9,
    note_id: 11,
    type: "Röntgen",
    date: "2019-07-09T10:57:00Z",
    comment: "Fraktur av både radius och ulna, typ A3.",
    image_name: "xray-arm-right-radius-and-ulnar-fractures.jpg"
  },
  {
    id: 10,
    note_id: 11,
    type: "Lab",
    date: "2019-07-09",
    comment: "Blodstatus ua",
    text: [
      "Pellentesque sed diam neque. Maecenas sagittis feugiat felis, at pulvinar nisl ultrices et. Integer lobortis vel turpis id pellentesque. Mauris porttitor tortor nec ligula lobortis egestas. Etiam in neque mattis, posuere massa sed, efficitur sem. Sed at mattis metus. Duis augue nulla, euismod dignissim nulla vitae, egestas pretium lectus. Curabitur in velit augue. Vivamus varius feugiat sollicitudin. Sed ultricies tristique mi quis cursus. Quisque pellentesque dapibus purus, eu finibus libero pulvinar fringilla. Praesent magna urna, maximus et augue et, malesuada tristique magna. Sed sollicitudin, magna et fermentum dapibus, nulla elit cursus augue, imperdiet aliquet ex turpis nec nisi. Quisque sed turpis erat. Etiam quis molestie orci. Integer libero libero, eleifend nec ultricies et, consequat et lacus.",
      "Aliquam blandit arcu vitae egestas porta. Donec lacinia nibh quis lectus volutpat, ac sollicitudin tortor dapibus. Pellentesque eu fringilla nisi. Vestibulum blandit ex vitae nibh sagittis, eget rutrum diam mollis. Nunc ac ultrices justo. Fusce sit amet tellus id sem consectetur aliquet. Nullam vitae laoreet enim. Nullam in tempor enim. Duis tristique tristique lorem, quis varius leo volutpat id. Duis rutrum, ante eu dapibus viverra, sapien urna molestie orci, fermentum varius tortor quam id sem.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nec diam non vestibulum. Proin consectetur elit sapien, sed mattis orci vulputate ut. Nam scelerisque, lacus vel sollicitudin aliquet, lacus velit convallis sapien, non ultrices augue felis facilisis ligula. Nam massa nibh, iaculis id lectus ac, aliquam ullamcorper felis. Ut feugiat turpis et turpis dapibus pellentesque. Donec convallis in metus eu dictum. Aliquam augue sem, blandit tempus purus in, tristique sodales lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis sem ut tortor fermentum efficitur in vestibulum turpis. Integer pulvinar enim ac lacus ultrices cursus. Nulla convallis finibus dui, eget iaculis ex varius a."
    ]
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
