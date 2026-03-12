const TREE_DATA = {
  "Rhydian": {
    "pc": "Rhydian",
    "generations": [
      [
        {
          "id": "gp_pat",
          "label": "Efnisien & Cigfa",
          "status": "dead",
          "ghost": true
        },
        {
          "id": "gp_mat",
          "label": "Elidyr & Dwywach",
          "status": "dead",
          "ghost": true
        }
      ],
      [
        {
          "id": "unc_pat1",
          "label": "Erbin",
          "role": "Uncle · Knight",
          "status": "alive",
          "age": "33",
          "parentId": "gp_pat"
        },
        {
          "id": "unc_pat2",
          "label": "Ergyriad",
          "role": "Uncle · Knight",
          "status": "alive",
          "age": "26",
          "parentId": "gp_pat"
        },
        {
          "id": "aunt_pat1",
          "label": "Goleuddydd",
          "role": "Aunt",
          "status": "alive",
          "age": "31",
          "parentId": "gp_pat"
        },
        {
          "id": "aunt_pat2",
          "label": "Gwladus",
          "role": "Aunt (dead)",
          "status": "dead",
          "age": "28",
          "parentId": "gp_pat"
        },
        {
          "id": "rhy_mother",
          "label": "Eithne",
          "status": "dead",
          "ghost": true,
          "parentId": "gp_mat",
          "ismother": true
        },
        {
          "id": "uwain",
          "label": "Iorwerth",
          "role": "Father · Knight",
          "status": "unknown",
          "isfather": true,
          "note": "Whereabouts unknown"
        },
        {
          "id": "hywel_u",
          "label": "Hywel",
          "role": "Maternal Uncle · Knight",
          "status": "alive",
          "age": "37",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_mat1",
          "label": "Eudaf",
          "role": "Uncle · Knight (dead)",
          "status": "dead",
          "parentId": "gp_mat"
        },
        {
          "id": "aunt_mat1",
          "label": "Gwledyr",
          "role": "Aunt (dead)",
          "status": "dead",
          "age": "30",
          "parentId": "gp_mat"
        },
        {
          "id": "dinan",
          "label": "Dinan",
          "role": "Maternal Uncle · Knight",
          "status": "alive",
          "age": "41",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_mat2",
          "label": "Ffernfael",
          "role": "Uncle · Knight",
          "status": "alive",
          "age": "45",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_mat3",
          "label": "Garbonian",
          "role": "Uncle · Knight",
          "status": "dead",
          "age": "45",
          "parentId": "gp_mat"
        }
      ],
      [
        {
          "id": "vaddon",
          "label": "Vaddon",
          "role": "Paternal Cousin · Squire",
          "status": "alive",
          "age": "23",
          "parentId": "unc_pat1"
        },
        {
          "id": "cous_f1",
          "label": "Hefina",
          "status": "alive",
          "age": "11",
          "parentId": "unc_pat1"
        },
        {
          "id": "cous_f2",
          "label": "Muirenn",
          "status": "alive",
          "age": "9",
          "parentId": "unc_pat2"
        },
        {
          "id": "cous_f3",
          "label": "Olwen",
          "status": "alive",
          "age": "8",
          "parentId": "unc_pat2"
        },
        {
          "id": "cous_f5",
          "label": "Rhiannon",
          "status": "alive",
          "age": "2",
          "parentId": "unc_pat2"
        },
        {
          "id": "cous_f4",
          "label": "Ragnell",
          "status": "alive",
          "age": "6",
          "parentId": "aunt_pat1"
        },
        {
          "id": "ryrid",
          "label": "Ryrid",
          "role": "Paternal Cousin",
          "status": "alive",
          "age": "4",
          "parentId": "aunt_pat1"
        },
        {
          "id": "pc",
          "label": "Rhydian",
          "role": "PC Knight",
          "status": "alive",
          "age": "26",
          "pc": true
        },
        {
          "id": "heledd",
          "label": "Heledd",
          "role": "Wife",
          "status": "alive",
          "age": "21",
          "note": "Courageous but reckless",
          "spouseOf": "pc"
        },
        {
          "id": "cous_m1",
          "label": "Rianon",
          "status": "alive",
          "age": "10",
          "parentId": "unc_mat1"
        },
        {
          "id": "cous_m2",
          "label": "Tangwen",
          "status": "alive",
          "age": "11",
          "parentId": "hywel_u"
        },
        {
          "id": "cous_m3",
          "label": "Deilwen",
          "status": "alive",
          "age": "9",
          "parentId": "hywel_u"
        },
        {
          "id": "cous_m4",
          "label": "Meinir",
          "status": "alive",
          "age": "7",
          "parentId": "hywel_u"
        },
        {
          "id": "cous_mf5",
          "label": "Tudful",
          "status": "alive",
          "age": "21",
          "parentId": "dinan"
        },
        {
          "id": "gwenwyn",
          "label": "Gwenwyn",
          "role": "Maternal Cousin",
          "status": "dead",
          "age": "22",
          "parentId": "dinan"
        },
        {
          "id": "gromer",
          "label": "Gromer",
          "role": "Maternal Cousin · Squire",
          "status": "alive",
          "age": "21",
          "parentId": "dinan"
        },
        {
          "id": "ifan",
          "label": "Ifan",
          "role": "Maternal Cousin · Squire",
          "status": "alive",
          "age": "19",
          "parentId": "unc_mat3"
        }
      ],
      [
        {
          "id": "cattegirn",
          "label": "Cattegirn",
          "role": "Son",
          "status": "alive",
          "age": "2",
          "parentId": "pc"
        },
        {
          "id": "dau1",
          "label": "Aeres",
          "status": "alive",
          "age": "0",
          "parentId": "pc"
        },
        {
          "id": "son2c",
          "label": "Glast",
          "status": "alive",
          "age": "0",
          "parentId": "pc"
        }
      ]
    ],
    "entourage": [],
    "manors": []
  },
  "Gwegon": {
    "pc": "Gwegon",
    "generations": [
      [
        {
          "id": "great_unc_pat",
          "label": "Maelgwn",
          "role": "Great-Uncle · Knight",
          "status": "alive",
          "age": "55+",
          "glory": "8420"
        },
        {
          "id": "gp_mat",
          "label": "Maternal\nGrandparents",
          "status": "dead",
          "ghost": true
        }
      ],
      [
        {
          "id": "unc_a",
          "label": "Glewlwyd",
          "role": "Paternal Uncle",
          "status": "alive",
          "age": "45+",
          "note": "Illegit.",
          "parentId": "great_unc_pat"
        },
        {
          "id": "unc_b",
          "label": "Glinneu",
          "role": "Paternal Uncle",
          "status": "alive",
          "age": "45+",
          "note": "Illegit.",
          "parentId": "great_unc_pat"
        },
        {
          "id": "unc_c",
          "label": "Gwallawg",
          "role": "Paternal Uncle",
          "status": "alive",
          "age": "45+",
          "note": "Illegit.",
          "parentId": "great_unc_pat"
        },
        {
          "id": "unc_d",
          "label": "Gwenddoleu",
          "role": "Paternal Uncle",
          "status": "alive",
          "age": "45+",
          "note": "Illegit.",
          "parentId": "great_unc_pat"
        },
        {
          "id": "aunt_e",
          "label": "Arddun",
          "role": "Paternal Aunt",
          "status": "alive",
          "age": "45+",
          "parentId": "great_unc_pat"
        },
        {
          "id": "gwe_father",
          "label": "Gwgawn",
          "role": "Father · Knight",
          "status": "alive",
          "age": "46",
          "isfather": true
        },
        {
          "id": "gwe_mother",
          "label": "Glesni",
          "role": "Mother",
          "status": "alive",
          "age": "43",
          "ismother": true
        },
        {
          "id": "unc_cyngar",
          "label": "Cyngar",
          "role": "Maternal Uncle · Knight",
          "status": "alive",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_f",
          "label": "Gwrfoddw",
          "role": "Maternal Uncle",
          "status": "alive",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_g",
          "label": "Gwriad",
          "role": "Maternal Uncle",
          "status": "alive",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_h",
          "label": "Gwydre",
          "role": "Maternal Uncle",
          "status": "alive",
          "age": "45",
          "parentId": "gp_mat"
        },
        {
          "id": "aunt_i",
          "label": "Ellylw",
          "role": "Maternal Aunt",
          "status": "alive",
          "parentId": "gp_mat"
        },
        {
          "id": "aunt_j",
          "label": "Gwaeddan",
          "role": "Maternal Aunt",
          "status": "alive",
          "age": "42",
          "parentId": "gp_mat"
        }
      ],
      [
        {
          "id": "gogyvwlch",
          "label": "Gogyvwlch",
          "role": "Paternal Cousin",
          "status": "alive",
          "age": "22",
          "parentId": "unc_a"
        },
        {
          "id": "cp_a_f1",
          "label": "Gwenfrewy",
          "status": "alive",
          "parentId": "unc_a"
        },
        {
          "id": "cp_a_f2",
          "label": "Ceinwen",
          "status": "alive",
          "parentId": "unc_a"
        },
        {
          "id": "cp_b1",
          "label": "Caradog",
          "status": "alive",
          "parentId": "unc_b"
        },
        {
          "id": "cp_b2",
          "label": "Cadrawd",
          "status": "alive",
          "parentId": "unc_b"
        },
        {
          "id": "cp_c1",
          "label": "Einion",
          "status": "alive",
          "parentId": "unc_c"
        },
        {
          "id": "cp_d1",
          "label": "Rhufon",
          "status": "alive",
          "parentId": "unc_d"
        },
        {
          "id": "cp_d2",
          "label": "Gwair",
          "status": "alive",
          "parentId": "unc_d"
        },
        {
          "id": "cp_d_f1",
          "label": "Gwenllian",
          "status": "alive",
          "parentId": "unc_d"
        },
        {
          "id": "cp_d_f2",
          "label": "Teleri",
          "status": "alive",
          "parentId": "unc_d"
        },
        {
          "id": "cp_e1",
          "label": "Preiddin",
          "status": "alive",
          "parentId": "aunt_e"
        },
        {
          "id": "cp_e_f1",
          "label": "Morfudd",
          "status": "alive",
          "parentId": "aunt_e"
        },
        {
          "id": "cp_e_f2",
          "label": "Ffraid",
          "status": "alive",
          "parentId": "aunt_e"
        },
        {
          "id": "cp_e_f3",
          "label": "Annwyl",
          "status": "alive",
          "parentId": "aunt_e"
        },
        {
          "id": "cp_e_f4",
          "label": "Bradwen",
          "status": "alive",
          "parentId": "aunt_e"
        },
        {
          "id": "pc",
          "label": "Gwegon",
          "role": "PC Knight",
          "status": "alive",
          "age": "26",
          "pc": true
        },
        {
          "id": "marchlew",
          "label": "Marchlew",
          "role": "Brother · Squire",
          "status": "alive",
          "age": "22",
          "glory": "500"
        },
        {
          "id": "cm_f_son",
          "label": "Caerwyn",
          "status": "alive",
          "parentId": "unc_f"
        },
        {
          "id": "cm_f1",
          "label": "Tanwen",
          "status": "alive",
          "parentId": "unc_f"
        },
        {
          "id": "cm_f2",
          "label": "Morwenna",
          "status": "alive",
          "parentId": "unc_f"
        },
        {
          "id": "cm_f3",
          "label": "Lleucu",
          "status": "alive",
          "parentId": "unc_f"
        },
        {
          "id": "cm_g1",
          "label": "Cynhaval",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_g_f1",
          "label": "Dwynwen",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_g_f2",
          "label": "Elen",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_g_f3",
          "label": "Tesni",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_g_f4",
          "label": "Tegeirian",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_g_f5",
          "label": "Eluned",
          "status": "alive",
          "parentId": "unc_g"
        },
        {
          "id": "cm_h_f1",
          "label": "Mabli",
          "status": "alive",
          "parentId": "unc_h"
        },
        {
          "id": "cm_h_f2",
          "label": "Alarch",
          "status": "alive",
          "parentId": "unc_h"
        },
        {
          "id": "cm_h_f3",
          "label": "Nesta",
          "status": "alive",
          "parentId": "unc_h"
        },
        {
          "id": "cm_i1",
          "label": "Erfai",
          "status": "alive",
          "parentId": "aunt_i"
        },
        {
          "id": "cm_i2",
          "label": "Emyr",
          "status": "alive",
          "parentId": "aunt_i"
        },
        {
          "id": "cm_i_f1",
          "label": "Gwerful",
          "status": "alive",
          "parentId": "aunt_i"
        },
        {
          "id": "cm_j1",
          "label": "Edern",
          "status": "alive",
          "parentId": "aunt_j"
        },
        {
          "id": "cm_j2",
          "label": "Enniaun",
          "status": "alive",
          "parentId": "aunt_j"
        },
        {
          "id": "cm_j_f1",
          "label": "Creirwy",
          "status": "alive",
          "parentId": "aunt_j"
        },
        {
          "id": "cm_j_f2",
          "label": "Essyllt",
          "status": "alive",
          "parentId": "aunt_j"
        },
        {
          "id": "cm_j_f3",
          "label": "Hunydd",
          "status": "alive",
          "parentId": "aunt_j"
        },
        {
          "id": "adwen",
          "label": "Lady Adwen",
          "role": "Wife",
          "status": "alive",
          "spouseOf": "pc",
          "glory": 740
        }
      ]
    ],
    "entourage": [
      {
        "label": "Wmffre",
        "role": "Ermit (friend of the Huns)",
        "status": "alive",
        "age": "55+"
      },
      {
        "label": "Brynn",
        "role": "Fashion Advisor",
        "status": "alive",
        "note": "Hates Orkneys"
      },
      {
        "label": "Aswine",
        "role": "Companion",
        "status": "alive"
      },
      {
        "label": "Syr Ricerch",
        "role": "Knight of Shrewton (Demesne)",
        "status": "alive",
        "note": "Honest but aggressive"
      },
      {
        "label": "Syr Clydno",
        "role": "Knight of Allington (Enfeoffed)",
        "status": "alive",
        "note": "Generous but cowardly"
      }
    ],
    "manors": [
      {
        "label": "Allington",
        "role": "Demesne Manor",
        "note": "Syr Clydno — income: harvest roll − 8£"
      },
      {
        "label": "Shrewton",
        "role": "Enfeoffed Manor",
        "note": "Sir Marchlew — owes military service"
      }
    ]
  },
  "Timotheus": {
    "pc": "Timotheus",
    "generations": [
      [
        {
          "id": "gp_pat",
          "label": "Macsen & Rhoswen",
          "status": "dead",
          "ghost": true
        },
        {
          "id": "gp_mat",
          "label": "Madawg & Siwan",
          "status": "dead",
          "ghost": true
        }
      ],
      [
        {
          "id": "tim_father",
          "label": "Crautreic",
          "role": "Father · Knight (dead)",
          "status": "dead",
          "ghost": true,
          "parentId": "gp_pat",
          "isfather": true
        },
        {
          "id": "unc_aeron",
          "label": "Aeron",
          "role": "Paternal Uncle · Knight",
          "status": "alive",
          "age": "44",
          "glory": "1420",
          "parentId": "gp_pat"
        },
        {
          "id": "tim_mother",
          "label": "Cynfarch",
          "role": "Mother",
          "status": "alive",
          "age": "40",
          "note": "Eligible",
          "parentId": "gp_mat",
          "ismother": true
        },
        {
          "id": "unc_deort",
          "label": "Deort",
          "role": "Maternal Uncle · Knight",
          "status": "alive",
          "age": "34",
          "glory": "1222",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_owain",
          "label": "Owain",
          "role": "Maternal Uncle · Knight",
          "status": "alive",
          "age": "31",
          "glory": "1120",
          "parentId": "gp_mat"
        },
        {
          "id": "aunt_tryamour",
          "label": "Tryamour",
          "role": "Maternal Aunt",
          "status": "alive",
          "age": "29",
          "note": "Widow, flirting",
          "parentId": "gp_mat"
        },
        {
          "id": "aunt_melior",
          "label": "Melior",
          "role": "Maternal Aunt",
          "status": "alive",
          "age": "24",
          "note": "Fear of beasts",
          "parentId": "gp_mat"
        },
        {
          "id": "unc_nwython",
          "label": "Nwython",
          "role": "Mercenary (illegit.)",
          "status": "dead",
          "age": "24",
          "glory": "342",
          "parentId": "gp_mat"
        }
      ],
      [
        {
          "id": "elian",
          "label": "Elian",
          "role": "Paternal Cousin · Squire",
          "status": "alive",
          "age": "23",
          "parentId": "unc_aeron"
        },
        {
          "id": "pc",
          "label": "Timotheus",
          "role": "PC Knight",
          "status": "alive",
          "age": "26",
          "pc": true
        },
        {
          "id": "keepa",
          "label": "Keepa",
          "role": "Sister",
          "status": "alive",
          "age": "20"
        },
        {
          "id": "bro18",
          "label": "Maeon",
          "role": "Brother · Squire",
          "status": "alive",
          "age": "19"
        },
        {
          "id": "bro16",
          "label": "Meilyr",
          "role": "Brother · Squire",
          "status": "alive",
          "age": "17"
        },
        {
          "id": "bro15",
          "label": "Meurig",
          "role": "Brother · Squire",
          "status": "alive",
          "age": "16"
        },
        {
          "id": "bro12",
          "label": "Mynyddog",
          "role": "Brother",
          "status": "alive",
          "age": "13"
        },
        {
          "id": "sis9",
          "label": "Catrin",
          "role": "Sister",
          "status": "alive",
          "age": "10"
        },
        {
          "id": "owain_illeg",
          "label": "Mynyw",
          "role": "Son of Owain",
          "status": "alive",
          "age": "8",
          "parentId": "unc_owain"
        },
        {
          "id": "indeg",
          "label": "Lady Indeg",
          "role": "Wife",
          "status": "alive",
          "spouseOf": "pc",
          "glory": 4140
        }
      ],
      [
        {
          "id": "son4",
          "label": "Nantcol",
          "role": "Illegitimate Son",
          "status": "alive",
          "age": "4",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "son3",
          "label": "Olwydd",
          "role": "Illegitimate Son",
          "status": "alive",
          "age": "3",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "son2c",
          "label": "Peredur",
          "role": "Illegitimate Son",
          "status": "alive",
          "age": "2",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "dau4",
          "label": "Elan",
          "role": "Illegitimate Daughter",
          "status": "alive",
          "age": "4",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "dau3",
          "label": "Gwerfyl",
          "role": "Illegitimate Daughter",
          "status": "alive",
          "age": "3",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "dau2",
          "label": "Madryn",
          "role": "Illegitimate Daughter",
          "status": "alive",
          "age": "2",
          "parentId": "pc",
          "illegitimate": true
        },
        {
          "id": "moried",
          "label": "Moried",
          "role": "Son of Keepa",
          "status": "alive",
          "age": "0",
          "parentId": "keepa"
        }
      ]
    ],
    "entourage": [
      {
        "label": "Nai",
        "role": "Monk · Scriptorium",
        "status": "alive",
        "age": "47"
      }
    ],
    "manors": []
  },
  "Agragan": {
    "pc": "Agragan",
    "generations": [
      [
        {
          "id": "govan",
          "label": "Govan",
          "role": "Great Uncle · Knight",
          "status": "alive",
          "age": "54"
        },
        {
          "id": "g_pat_f",
          "label": "Brochfael",
          "status": "dead",
          "ghost": true
        },
        {
          "id": "g_mat",
          "label": "Custennin & Arianrhod",
          "status": "dead",
          "ghost": true
        }
      ],
      [
        {
          "id": "sulbiu",
          "label": "Sulbiu",
          "role": "Uncle · Knight",
          "status": "dead",
          "age": "36",
          "parentId": "govan"
        },
        {
          "id": "lovel",
          "label": "Sir Lovel",
          "role": "Cousin · Knight",
          "status": "alive",
          "age": "38",
          "parentId": "g_pat_f"
        },
        {
          "id": "dagodoc",
          "label": "Dagodoc",
          "role": "Father · Knight",
          "status": "dead",
          "age": "59",
          "glory": "2241",
          "parentId": "g_pat_f",
          "isfather": true
        },
        {
          "id": "bodara",
          "label": "Bodara",
          "role": "Mother",
          "status": "dead",
          "age": "52",
          "parentId": "g_mat",
          "ismother": true
        },
        {
          "id": "mat_uncle",
          "label": "Dyfnarth",
          "status": "alive",
          "ghost": true,
          "parentId": "g_mat"
        }
      ],
      [
        {
          "id": "gilber",
          "label": "Gilber",
          "role": "Paternal Cousin · Squire",
          "status": "alive",
          "age": "21",
          "parentId": "sulbiu"
        },
        {
          "id": "eudav",
          "label": "Sir Eudav",
          "role": "Maternal Cousin · Knight",
          "status": "alive",
          "age": "30",
          "note": "Cheated in Oratory",
          "parentId": "mat_uncle"
        },
        {
          "id": "pc",
          "label": "Agragan",
          "role": "PC Knight",
          "status": "alive",
          "age": "27",
          "pc": true
        },
        {
          "id": "gwegon_bro",
          "label": "Gwegon",
          "role": "Younger Brother · Squire",
          "status": "alive",
          "age": "23"
        },
        {
          "id": "sister",
          "label": "Branwen",
          "status": "alive",
          "ghost": true
        },
        {
          "id": "cynedyr",
          "label": "Sir Cynedyr",
          "role": "Sister's Husband · Knight",
          "status": "alive",
          "age": "36",
          "spouseOf": "sister",
          "note": "Married to Branwen"
        },
        {
          "id": "gwiona",
          "label": "Lady Gwiona",
          "role": "Wife",
          "status": "alive",
          "spouseOf": "pc",
          "glory": 856
        }
      ],
      [
        {
          "id": "robyn",
          "label": "Robyn",
          "role": "Personal Squire",
          "status": "alive",
          "age": "18",
          "parentId": "pc"
        },
        {
          "id": "dau_wales",
          "label": "Caer",
          "status": "alive",
          "parentId": "pc"
        }
      ]
    ],
    "entourage": [
      {
        "label": "Grainne",
        "role": "Village Midwife · Druid",
        "status": "alive",
        "age": "58",
        "note": "Pagan druid"
      },
      {
        "label": "Richerch",
        "role": "Pagan Priest",
        "status": "alive",
        "age": "52"
      },
      {
        "label": "Llemenig",
        "role": "Chaplain",
        "status": "alive",
        "age": "64"
      },
      {
        "label": "Sulien",
        "role": "Miller",
        "status": "alive"
      },
      {
        "label": "Tegfan",
        "role": "",
        "status": "alive"
      },
      {
        "label": "Gwenno",
        "role": "Squire",
        "status": "alive"
      },
      {
        "label": "Waldema",
        "role": "Saxon Refugee Boy",
        "status": "alive",
        "age": "15",
        "note": "Looking for family near Kent"
      }
    ],
    "manors": [
      {
        "label": "Horton",
        "note": "Sir Rhodri · Knight (just but cruel)"
      },
      {
        "label": "Tisbury",
        "note": "Sir Tarthan · Knight (enfeoffed)"
      },
      {
        "label": "Cholderton",
        "note": "Home manor"
      }
    ]
  }
};