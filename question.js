// データのみ：q=設問, choices=配列, answer=正解インデックス(0始まり)
const QUESTIONS = [
  {
    q: "The editorial ____ the minister for his mendacious testimony, calling it an affront to parliamentary norms.",
    choices: ["lionized", "indemnified", "mollified", "excoriated"],
    answer: excoriated
  },
  {
    q: "Far from being radical, the committee’s recommendations were thoroughly ____, crafted not to offend any constituency.",
    choices: ["truculent", "anodyne", "oracular", "turgid"],
    answer: anodyne
  },
  {
    q: "Few could ____ the data: productivity had fallen for a fourth consecutive quarter.",
    choices: ["abrogate", "extirpate", "adumbrate", "gainsay"],
    answer: gainsay
  },
  {
    q: "She managed the unfolding crisis with remarkable ____, even as markets convulsed.",
    choices: ["temerity", "ebullience", "credulity", "sangfroid"],
    answer: sangfroid
  },
  {
    q: "Once the backdoor was discovered, the touted safeguards proved ____.",
    choices: ["salubrious", "mordant", "fecund", "nugatory"],
    answer: nugatory
  },
  {
    q: "Her critique was so (      ) that it cut through months of equivocation.",
    choices: ["soporific", "venial", "trenchant", "friable"],
    answer: trenchant
  },
  {
    q: "The CEO’s apology was dismissed as corporate (      ).",
    choices: ["pabulum", "panacea", "palinode", "paroxysm"],
    answer: pabulum
  },
  {
    q: "The treaty contained a (      ) clause allowing temporary suspension during emergencies.",
    choices: ["derogation", "declension", "derision", "deliquescence"],
    answer: derogation
  },
  {
    q: "He gave an (      ) account, avoiding any names or dates.",
    choices: ["elliptical", "mellifluous", "splenetic", "laudatory"],
    answer: elliptical
  },
  {
    q: "Her prose, once baroque, has grown (      ) and clear.",
    choices: ["pellucid", "turbid", "lachrymose", "callow"],
    answer: pellucid
  },
  {
    q: "The minister tried to (      ) responsibility by blaming his aides.",
    choices: ["abate", "abdicate", "abjure", "ablate"],
    answer: abdicate
  },
  {
    q: "The scandal created an international (      ) that took months to unwind.",
    choices: ["imbroglio", "idyll", "panegyric", "interregnum"],
    answer: imbroglio
  },
  {
    q: "Despite the setbacks, her commitment remained (      ).",
    choices: ["indefatigable", "dilatory", "evanescent", "soporific"],
    answer: indefatigable
  },
  {
    q: "The startup’s (      ) growth masked a fragile business model.",
    choices: ["myopic", "meteoric", "moribund", "mnemonic"],
    answer: meteoric
  },
  {
    q: "He spoke with (      ) authority, silencing the room.",
    choices: ["magisterial", "meretricious", "mendicant", "manumitted"],
    answer: magisterial
  },
  {
    q: "The audit found that key risks had been (      ) rather than acknowledged.",
    choices: ["elided", "adduced", "belabored", "emblazoned"],
    answer: elided
  },
  {
    q: "Their (      ) adherence to protocol saved lives.",
    choices: ["punctilious", "promiscuous", "perfidious", "pusillanimous"],
    answer: punctilious
  },
  {
    q: "The plan was dismissed as a political (      )—a quack “cure-all” with no substance.",
    choices: ["nostrum", "panacea", "verisimilitude", "lodestar"],
    answer: nostrum
  },
  {
    q: "Her remarks were (      ) to those who had hoped for candor.",
    choices: ["anathema", "apotheosis", "analeptic", "anacoluthon"],
    answer: anathema
  },
  {
    q: "The board sought to (      ) the hemorrhaging by divesting noncore assets.",
    choices: ["stanch", "stanchion", "stanchless", "standoff"],
    answer: stanch
  }
];

export default QUESTIONS;
