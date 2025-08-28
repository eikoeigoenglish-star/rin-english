const QUESTIONS = [
  {
    q: "The editorial ____ the minister for his mendacious testimony, calling it an affront to parliamentary norms.",
    choices: ["lionized", "indemnified", "mollified", "excoriated"],
    answer: 3
  },
  {
    q: "Far from being radical, the committee’s recommendations were thoroughly ____, crafted not to offend any constituency.",
    choices: ["truculent", "anodyne", "oracular", "turgid"],
    answer: 1
  },
  {
    q: "Few could ____ the data: productivity had fallen for a fourth consecutive quarter.",
    choices: ["abrogate", "extirpate", "adumbrate", "gainsay"],
    answer: 3
  },
  {
    q: "She managed the unfolding crisis with remarkable ____, even as markets convulsed.",
    choices: ["temerity", "ebullience", "credulity", "sangfroid"],
    answer: 3
  },
  {
    q: "Once the backdoor was discovered, the touted safeguards proved ____.",
    choices: ["salubrious", "mordant", "fecund", "nugatory"],
    answer: 3
  },
  {
    q: "Her critique was so (      ) that it cut through months of equivocation.",
    choices: ["soporific", "venial", "trenchant", "friable"],
    answer: 2
  },
  {
    q: "The CEO’s apology was dismissed as corporate (      ).",
    choices: ["pabulum", "panacea", "palinode", "paroxysm"],
    answer: 0
  },
  {
    q: "The treaty contained a (      ) clause allowing temporary suspension during emergencies.",
    choices: ["derogation", "declension", "derision", "deliquescence"],
    answer: 0
  },
  {
    q: "He gave an (      ) account, avoiding any names or dates.",
    choices: ["elliptical", "mellifluous", "splenetic", "laudatory"],
    answer: 0
  },
  {
    q: "Her prose, once baroque, has grown (      ) and clear.",
    choices: ["pellucid", "turbid", "lachrymose", "callow"],
    answer: 0
  },
  {
    q: "The minister tried to (      ) responsibility by blaming his aides.",
    choices: ["abate", "abdicate", "abjure", "ablate"],
    answer: 1
  },
  {
    q: "The scandal created an international (      ) that took months to unwind.",
    choices: ["imbroglio", "idyll", "panegyric", "interregnum"],
    answer: 0
  },
  {
    q: "Despite the setbacks, her commitment remained (      ).",
    choices: ["indefatigable", "dilatory", "evanescent", "soporific"],
    answer: 0
  },
  {
    q: "The startup’s (      ) growth masked a fragile business model.",
    choices: ["myopic", "meteoric", "moribund", "mnemonic"],
    answer: 1
  },
  {
    q: "He spoke with (      ) authority, silencing the room.",
    choices: ["magisterial", "meretricious", "mendicant", "manumitted"],
    answer: 0
  },
  {
    q: "The audit found that key risks had been (      ) rather than acknowledged.",
    choices: ["elided", "adduced", "belabored", "emblazoned"],
    answer: 0
  },
  {
    q: "Their (      ) adherence to protocol saved lives.",
    choices: ["punctilious", "promiscuous", "perfidious", "pusillanimous"],
    answer: 0
  },
  {
    q: "The plan was dismissed as a political (      )—a quack “cure-all” with no substance.",
    choices: ["nostrum", "panacea", "verisimilitude", "lodestar"],
    answer: 0
  },
  {
    q: "Her remarks were (      ) to those who had hoped for candor.",
    choices: ["anathema", "apotheosis", "analeptic", "anacoluthon"],
    answer: 0
  },
  {
    q: "The board sought to (      ) the hemorrhaging by divesting noncore assets.",
    choices: ["stanch", "stanchion", "stanchless", "standoff"],
    answer: 0
  },
  {
    q: "The committee issued a (　　　) rebuke, naming dates and figures.",
    choices: ["amphibious", "sapid", "crepuscular", "categorical"],
    answer: 3
  },
  {
    q: "Investors reacted with (　　　) when the CEO resigned unexpectedly.",
    choices: ["consternation", "salubrity", "prolixity", "temerity"],
    answer: 0
  },
  {
    q: "The report was dismissed as (　　　)—glossy charts with no substance.",
    choices: ["meretricious", "punctilious", "salubrious", "litigious"],
    answer: 0
  },
  {
    q: "His explanation was so (　　　) that no one could follow it.",
    choices: ["tortuous", "winsome", "bucolic", "stygian"],
    answer: 0
  },
  {
    q: "They reached a (　　　) after marathon talks, averting a strike.",
    choices: ["miasma", "mise-en-scène", "diatribe", "détente"],
    answer: 3
  },
  {
    q: "Her remarks were (　　　) to the committee’s mandate.",
    choices: ["jejune", "germane", "fulsome", "venal"],
    answer: 1
  },
  {
    q: "Her tone was outwardly polite but unmistakably (　　　).",
    choices: ["minatory", "emollient", "soporific", "lupine"],
    answer: 0
  },
  {
    q: "The historian (　　　) the myth, tracing its invention to the 1920s.",
    choices: ["desiccated", "demythologized", "deliquesced", "demobilized"],
    answer: 1
  },
  {
    q: "The guidelines were intentionally (　　　), granting wide discretion to local authorities.",
    choices: ["indeterminate", "ineluctable", "indelible", "inchoate"],
    answer: 0
  },
  {
    q: "By any (　　　) calculus, the program has failed.",
    choices: ["sober", "febrile", "risible", "jejune"],
    answer: 0
  },
  {
    q: "Her voice had a (　　　) calm that steadied the room.",
    choices: ["fungible", "doctrinaire", "faddish", "preternatural"],
    answer: 3
  },
  {
    q: "The court refused to (　　　) the precedent, calling it settled law.",
    choices: ["recuse", "remunerate", "repatriate", "repudiate"],
    answer: 3
  },
  {
    q: "His memoir is a (　　　)—names altered, truths massaged.",
    choices: ["roman à clef", "coup de grâce", "fait accompli", "bête noire"],
    answer: 0
  },
  {
    q: "The proposal found a (　　　) reception among career diplomats.",
    choices: ["glacial", "torrid", "venous", "vespertine"],
    answer: 0
  },
  {
    q: "The data were (　　　) to the narrative the company preferred.",
    choices: ["inimical", "inchoate", "invidious", "inerrant"],
    answer: 0
  },
  {
    q: "Her analysis (　　　) the usual binaries, proposing a third path.",
    choices: ["transgressed", "translated", "transposed", "transcended"],
    answer: 3
  },
  {
    q: "The film’s (　　　) aesthetic—spare sets and long silences—may alienate some viewers.",
    choices: ["austere", "gustatory", "febrile", "fulsome"],
    answer: 0
  },
  {
    q: "The charity’s finances were (　　　) behind layers of shell companies.",
    choices: ["obfuscated", "ossified", "obviated", "obliterated"],
    answer: 0
  },
  {
    q: "He offered an (　　　) apology, taking full responsibility.",
    choices: ["unbidden", "unalloyed", "unmoored", "unqualified"],
    answer: 3
  },
  {
    q: "A (　　　) of lawsuits followed the defective release.",
    choices: ["spate", "sprite", "spume", "sprawl"],
    answer: 0
  },
  {
    q: "The editor cut the (　　　) chapter that added only ornament.",
    choices: ["otiose", "onerous", "osmotic", "Olympian"],
    answer: 0
  },
  {
    q: "She remained (　　　) in the face of provocation.",
    choices: ["impervious", "impermeable", "impecunious", "imperturbable"],
    answer: 3
  },
  {
    q: "The candidate’s (　　　) about “renewal” soon curdled into patronage.",
    choices: ["confluence", "deliquescence", "concupiscence", "grandiloquence"],
    answer: 3
  },
  {
    q: "The village still observes (　　　) customs outlawed elsewhere.",
    choices: ["analeptic", "anemic", "anionic", "anachronistic"],
    answer: 3
  },
  {
    q: "He answered with (　　　) brevity: No.",
    choices: ["lapidate", "lepidopteran", "lateritic", "lapidary"],
    answer: 3
  },
  {
    q: "Jurors were warned not to (　　　) about the case online.",
    choices: ["opiate", "opaline", "ophiolite", "opine"],
    answer: 3
  },
  {
    q: "The novel’s (　　　) narrator keeps confessing, then retracting.",
    choices: ["mercenary", "mercantile", "meridian", "mercurial"],
    answer: 3
  },
  {
    q: "The software’s (　　　) defaults collect more data than users realize.",
    choices: ["insidious", "insipid", "insolvent", "insular"],
    answer: 0
  },
  {
    q: "He offered a (　　　) defense: precise, limited, lawyerly.",
    choices: ["legalese", "legible", "leguminous", "legalistic"],
    answer: 3
  },
  {
    q: "The findings remain (　　　) until replicated independently.",
    choices: ["providential", "probiotic", "probative", "provisional"],
    answer: 3
  },
  {
    q: "After an hour of (　　　), the negotiators still hadn’t addressed the core issue.",
    choices: ["palaver", "panoply", "palimpsest", "panegyric"],
    answer: 0
  },
  {
    q: "The predatory app (　　　) users with hidden fees.",
    choices: ["moot", "mulch", "molt", "mulct"],
    answer: 3
  },
  {
    q: "His remark was pure (　　　)—a baseless smear.",
    choices: ["calumny", "euphony", "alimony", "parsimony"],
    answer: 0
  },
  {
    q: "The doctrine has fallen into (　　　) and is rarely taught.",
    choices: ["desuetude", "destitution", "despotism", "derring-do"],
    answer: 0
  },
  {
    q: "He tried to (　　　) the witness into changing his story.",
    choices: ["adorn", "abjure", "ascribe", "suborn"],
    answer: 3
  },
  {
    q: "The spokesperson (　　　) that no funds had been misused.",
    choices: ["asseverated", "insinuated", "vacillated", "prevaricated"],
    answer: 0
  },
  {
    q: "An (　　　) rule would force every case into one template.",
    choices: ["procrustean", "protean", "proustian", "proletarian"],
    answer: 0
  },
  {
    q: "Her account was so (　　　) that even experts struggled to follow.",
    choices: ["recondite", "redolent", "recrudescent", "refulgent"],
    answer: 0
  },
  {
    q: "We must (　　　) the invasive species before it spreads.",
    choices: ["extirpate", "extol", "extrapolate", "expatiate"],
    answer: 0
  },
  {
    q: "The memo’s (　　　) tone—barking orders—alienated allies.",
    choices: ["hectoring", "halting", "heraldic", "helical"],
    answer: 0
  },
  {
    q: "He led an (　　　) life, shunning excess.",
    choices: ["abstemious", "absonant", "abstruse", "abstractive"],
    answer: 0
  },
  {
    q: "The document contained a serious (　　　)—the primary data were missing.",
    choices: ["lacuna", "lacustrine", "laconicism", "lacrimal"],
    answer: 0
  },
  {
    q: "The disease proved (　　　) to treatment.",
    choices: ["refractory", "reparative", "referential", "rebarbative"],
    answer: 0
  },
  {
    q: "The letter was larded with (　　　) flattery.",
    choices: ["oleaginous", "obdurate", "obsequies", "oblate"],
    answer: 0
  },
  {
    q: "His statement was a (　　　) of half-truths.",
    choices: ["farrago", "farthing", "ferrule", "farinaceous"],
    answer: 0
  },
  {
    q: "The board moved to (　　　) the two units into a single division.",
    choices: ["amalgamate", "ameliorate", "amortize", "ambuscade"],
    answer: 0
  },
  {
    q: "Her (　　　) philanthropy drew praise even from critics.",
    choices: ["munificent", "mendicant", "malodorous", "multifarious"],
    answer: 0
  },
  {
    q: "Their testimony was riddled with (　　　), not mere mistakes.",
    choices: ["mendacity", "mendicancy", "mendelism", "mendicity"],
    answer: 0
  },
  {
    q: "The byzantine rules seem designed to (　　　) would-be claimants with procedural traps.",
    choices: ["enshrine", "enjoin", "enthrall", "ensnare"],
    answer: 3
  },
  {
    q: "He treated the archive as a mere (　　　), mining it for slogans.",
    choices: ["quarry", "quorum", "querulous", "quorate"],
    answer: 0
  },
  {
    q: "As the CFO, forensic audits fell squarely within her (　　　).",
    choices: ["bailiff", "bailiwick", "bailout", "bailey"],
    answer: 1
  },
  {
    q: "The startup was run as a (　　　)—two co-CEOs shared power.",
    choices: ["oligarchy", "hegemony", "duumvirate", "monopsony"],
    answer: 2
  },
  {
    q: "Everything is (　　　)—permits cleared and funds secured.",
    choices: ["copacetic", "taciturn", "meretricious", "inchoate"],
    answer: 0
  },
  {
    q: "By dawn, the forum was (　　　) with rumors.",
    choices: ["atwitter", "askance", "awry", "aground"],
    answer: 0
  },
  {
    q: "The analysis was admirably (　　　)—nothing extraneous got in the way.",
    choices: ["pelagic", "pellagra", "pellucid", "pellicle"],
    answer: 2
  },
  {
    q: "His anger soon gave way to (　　　) joy.",
    choices: ["alloy", "ungulate", "unalloyed", "unrelated"],
    answer: 2
  },
  {
    q: "She offered a (　　　) summary: six bullet points, no fluff.",
    choices: ["lappet", "laparotomy", "lapidary", "lapidation"],
    answer: 2
  },
  {
    q: "The watchdog (　　　) the agency for its dereliction.",
    choices: ["extirpated", "excoriated", "exonerated", "exfoliated"],
    answer: 1
  },
  {
    q: "The rumor proved (　　　)—no source, no evidence.",
    choices: ["apocryphal", "apostolic", "apical", "apoplectic"],
    answer: 0
  },
  {
    q: "Their (　　　) adherence to protocol likely prevented a mishap.",
    choices: ["pugnacious", "punctilious", "palliative", "penurious"],
    answer: 1
  },
  {
    q: "The canvas revels in (　　　)—faces emerging from darkness.",
    choices: ["chiaroscuro", "guacamole", "catenary", "coloratura"],
    answer: 0
  },
  {
    q: "Auditors uncovered a (　　　) of shell companies.",
    choices: ["congener", "congeniality", "congeries", "consommé"],
    answer: 2
  },
  {
    q: "His career reached its (　　　) with the Nobel.",
    choices: ["apoplexy", "apologia", "apogee", "aperture"],
    answer: 2
  },
  {
    q: "The board issued a (　　　): comply by Friday or resign.",
    choices: ["dictum", "dike", "dioxin", "diktat"],
    answer: 3
  },
  {
    q: "Her tone turned (　　　) when challenged—bristling and combative.",
    choices: ["truculent", "torpid", "tactile", "tumid"],
    answer: 0
  },
  {
    q: "Her remarks were (　　　) to the motion at hand.",
    choices: ["Germanic", "germane", "Germaine", "germinate"],
    answer: 1
  },
  {
    q: "The report is a (　　　) of half-truths and evasions.",
    choices: ["farrago", "farina", "ferrule", "furlough"],
    answer: 0
  },
  {
    q: "The charity’s books were (　　　) behind layers of trusts.",
    choices: ["objectified", "obfuscated", "obviated", "obligated"],
    answer: 1
  },
  {
    q: "The measures were largely (　　　)—symbolic gestures without effect.",
    choices: ["nugatory", "nuggety", "nugacity", "nugget"],
    answer: 0
  },
  {
    q: "He delivered a (　　　) refusal: “No, and that’s final.”",
    choices: ["peremptory", "perfunctory", "perfidious", "perfervid"],
    answer: 0
  },
  {
    q: "After the exposé, he faced public (　　　).",
    choices: ["obloquy", "obsequy", "obduracy", "obfuscation"],
    answer: 0
  },
  {
    q: "She projected a (　　　) calm that unnerved opponents.",
    choices: ["preternatural", "prelapsarian", "preprandial", "precarious"],
    answer: 0
  },
  {
    q: "The coalition soon descended into (　　　), splitting along regional lines.",
    choices: ["balkanization", "beatification", "bacteriology", "balkanize"],
    answer: 0
  },
  {
    q: "Legally, the unsigned agreement was a mere (　　　).",
    choices: ["nullity", "nulliparity", "null set", "null vector"],
    answer: 0
  },
  {
    q: "His views are an (　　　) from the 19th century.",
    choices: ["atavism", "activism", "autism", "atrium"],
    answer: 0
  },
  {
    q: "The intern’s (　　　) questions impressed the panel.",
    choices: ["perspicacious", "perspicuity", "perspective", "perspiring"],
    answer: 0
  },
  {
    q: "The lecture was so (　　　) that half the class nodded off.",
    choices: ["soporific", "sonorous", "salutary", "salacious"],
    answer: 0
  },
  {
    q: "The policy invited (　　　) comparisons between regions.",
    choices: ["insidious", "invidious", "invidiae", "invidiousness"],
    answer: 1
  },
  {
    q: "His prose was (　　　) of old London—coal smoke and rain.",
    choices: ["redolent", "reticent", "refulgent", "risible"],
    answer: 0
  },
  {
    q: "Interviewers found the candidate perfectly (　　　): schedule set, paperwork done.",
    choices: ["copacetic", "copic", "coppery", "copulative"],
    answer: 0
  },
  {
    q: "Party leaders sought to (　　　) the map to entrench incumbents.",
    choices: ["filibuster", "gerrymander", "canvass", "disenfranchise"],
    answer: 1
  },
  {
    q: "Stop sitting in a (　　　) and choose.",
    choices: ["dither", "panegyric", "jeremiad", "aporia"],
    answer: 0
  },
  {
    q: "The closing chapter reads like a (　　　) to science.",
    choices: ["paean", "diatribe", "jeremiad", "threnody"],
    answer: 0
  },
  {
    q: "Rinse thoroughly; the glass is still (　　　).",
    choices: ["sudsy", "sandy", "sooty", "sinewy"],
    answer: 0
  }
];

window.QUIZ_QUESTIONS = QUESTIONS;
