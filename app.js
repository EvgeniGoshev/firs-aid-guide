const lessonCategories = [
  {
    id: "assessment",
    name: "Safety and Assessment",
    icon: "shield-check",
    description: "How a first aider starts: protect the scene, organize the team, find life threats, and call help early.",
    lessons: [
      {
        id: "scene",
        title: "Scene Safety",
        tag: "Start here",
        icon: "shield-check",
        summary: "Check for danger before approaching. Protect yourself, the casualty, and bystanders.",
        signs: ["Traffic, electricity, fire, smoke, chemicals, weapons, animals, unstable structures, water, ice, or crowds.", "Bystanders giving pressure or unsafe advice.", "Personal risk from blood, vomit, sharp objects, or poor visibility."],
        steps: ["Stop and scan before entering.", "Use gloves or a barrier if available.", "Ask a bystander to control crowds or guide emergency services.", "Move the casualty only if there is immediate danger.", "Keep checking the scene because it can change."],
        avoid: ["Do not rush into danger.", "Do not become a second casualty.", "Do not move someone with possible head, neck, back, or major injury unless staying there is unsafe."],
        team: ["Leader: checks danger and gives roles.", "Helper 1: calls emergency services.", "Helper 2: brings kit/AED.", "Helper 3: manages bystanders."],
        scenarios: ["Broken glass in a school corridor.", "Cyclist down near traffic.", "Smoke smell in a workshop.", "Wet floor around an unconscious person."]
      },
      {
        id: "primary-survey",
        title: "Primary Survey",
        tag: "Assessment",
        icon: "scan-heart",
        summary: "Use a quick, ordered check to find life-threatening problems first.",
        signs: ["No response.", "Not breathing normally.", "Severe bleeding.", "Blue/grey skin, confusion, collapse, or signs of shock.", "Obvious pain, deformity, burns, or breathing difficulty."],
        steps: ["Check danger.", "Check response: speak loudly and gently tap shoulders.", "Shout for help.", "Open the airway if needed.", "Check breathing.", "Look for severe bleeding.", "Call emergency services early when life threats are present."],
        avoid: ["Do not spend time on minor injuries before life threats.", "Do not give food or drink to a very unwell casualty.", "Do not leave an unconscious person alone unless you must call for help and no one else can."],
        team: ["Leader calls out findings.", "One teammate writes times and changes.", "One teammate prepares equipment.", "One teammate talks calmly to the casualty."],
        scenarios: ["Student collapses during assembly.", "Teacher falls on stairs.", "Visitor is found confused in reception.", "Athlete is breathing fast after a race."]
      },
      {
        id: "handover",
        title: "Emergency Call and Handover",
        tag: "Communication",
        icon: "phone-call",
        summary: "Make the call clear and give professionals the information they need.",
        signs: ["Life-threatening bleeding, breathing problems, chest pain, unconsciousness, seizure, stroke signs, severe burns, anaphylaxis, poisoning, or major trauma.", "A situation too serious for first aid alone.", "Any doubt about whether urgent help is needed."],
        steps: ["Call your local emergency number.", "Say exact location, number of casualties, age if known, main problem, breathing status, and hazards.", "Follow dispatcher instructions.", "Send someone to meet the ambulance if possible.", "Handover: what happened, what you found, care given, changes, and concerns."],
        avoid: ["Do not hang up before the dispatcher says to.", "Do not make up information.", "Do not hide changes in the casualty's condition."],
        team: ["Caller repeats key facts back.", "Leader keeps treating.", "Runner meets emergency services.", "Recorder tracks times and care."],
        scenarios: ["Crowded sports hall with unclear address.", "Multi-casualty stair fall.", "AED needed in a large school.", "Language barrier with a bystander."]
      }
    ]
  },
  {
    id: "life-support",
    name: "Life Support",
    icon: "heart-pulse",
    description: "Unresponsive casualties, CPR, AED use, recovery position, airway problems, and choking.",
    lessons: [
      {
        id: "unresponsive-breathing",
        title: "Unresponsive and Breathing",
        tag: "Life support",
        icon: "bed",
        summary: "If a person is unresponsive but breathing normally, keep the airway open and monitor them.",
        signs: ["No response to voice or gentle touch.", "Normal breathing is present.", "Possible vomiting, noisy breathing, or reduced airway control.", "Possible injury from the fall or illness that caused collapse."],
        steps: ["Check danger, response, airway, and breathing.", "Call emergency help or ask someone to call.", "Place in the recovery position if trained and there is no major trauma preventing it.", "Keep airway open.", "Monitor breathing continuously.", "Keep them warm and protect dignity."],
        avoid: ["Do not give food, drink, or tablets.", "Do not leave them lying flat on their back if vomit or airway blockage is a risk.", "Do not assume they are sleeping."],
        team: ["One teammate watches breathing.", "One calls help.", "One checks for medical clues.", "Leader prepares to start CPR if breathing changes."],
        scenarios: ["Person found on classroom floor.", "Visitor faints at an event.", "Diabetic student becomes unresponsive.", "Unresponsive person after seizure."]
      },
      {
        id: "cpr-aed",
        title: "CPR and AED",
        tag: "Critical skill",
        icon: "activity",
        summary: "If an adult is unresponsive and not breathing normally, call help, get an AED, and start CPR if trained.",
        signs: ["Unresponsive.", "Not breathing or only gasping.", "No normal movement or speech.", "Collapse without warning."],
        steps: ["Check safety and response.", "Call emergency services and ask for an AED.", "Start chest compressions in the center of the chest if trained.", "Use the AED as soon as it arrives and follow prompts.", "Minimize pauses.", "Continue until help takes over, the person shows signs of life, or you cannot continue."],
        avoid: ["Do not delay CPR to search for a pulse if you are not trained to do that.", "Do not stop because ribs may be injured.", "Do not touch the casualty when the AED says not to."],
        team: ["Compressor performs CPR.", "AED teammate prepares pads.", "Caller stays on phone.", "Leader rotates tired compressors."],
        scenarios: ["Adult collapses at school open day.", "Coach collapses on sports field.", "Person found not breathing in corridor.", "AED arrives while CPR is ongoing."]
      },
      {
        id: "choking",
        title: "Choking",
        tag: "Airway",
        icon: "wind",
        summary: "Recognize mild versus severe choking and act quickly within your training.",
        signs: ["Mild choking: can cough, speak, or breathe.", "Severe choking: cannot speak, weak/no cough, distress, clutching throat, blue/grey color, collapse.", "Food, small object, or swelling may be involved."],
        steps: ["Ask: are you choking?", "If they can cough, encourage coughing and monitor.", "If severe and trained, give back blows and abdominal thrusts for adults/children according to your local training.", "Call emergency help if severe, repeated attempts fail, or they become unresponsive.", "If they become unresponsive, start CPR if trained."],
        avoid: ["Do not put fingers blindly into the mouth.", "Do not give water to someone who cannot breathe.", "Do not slap the back if the person is coughing effectively."],
        team: ["Leader assesses mild/severe.", "One teammate calls help.", "One clears space.", "One prepares for CPR if collapse occurs."],
        scenarios: ["Student choking at lunch.", "Spectator chokes on snack.", "Child coughs strongly after swallowing food.", "Adult collapses after severe choking."]
      }
    ]
  },
  {
    id: "injuries",
    name: "Injuries and Trauma",
    icon: "bandage",
    description: "Bleeding, wounds, burns, fractures, head injury, spinal care, eye injuries, and shock.",
    lessons: [
      {
        id: "bleeding",
        title: "Severe Bleeding",
        tag: "Trauma",
        icon: "droplets",
        summary: "Control life-threatening bleeding with firm direct pressure and emergency help.",
        signs: ["Blood spurting or flowing heavily.", "Blood soaking through clothing or dressings.", "Pale, cold, clammy skin.", "Dizziness, weakness, confusion, or collapse.", "Wound from glass, knife, machinery, crash, or fall."],
        steps: ["Put on gloves if available.", "Expose the wound enough to see the bleeding.", "Apply firm direct pressure with dressing, cloth, or hands.", "Call emergency services.", "Keep pressure steady.", "Add dressings on top if blood soaks through.", "Treat for shock and monitor breathing."],
        avoid: ["Do not remove embedded objects.", "Do not remove soaked dressings; add more on top.", "Do not waste time cleaning a life-threatening bleed before pressure."],
        team: ["Pressure teammate stays on wound.", "Caller contacts emergency help.", "Kit teammate finds dressings or tourniquet if trained and appropriate.", "Leader monitors shock."],
        scenarios: ["Broken glass cuts arm in science room.", "Kitchen knife injury.", "Bike crash with leg bleeding.", "Workshop tool injury."]
      },
      {
        id: "burns",
        title: "Burns and Scalds",
        tag: "Injury care",
        icon: "flame",
        summary: "Cool the burn, remove tight items, cover it, and seek help when serious.",
        signs: ["Red, painful skin.", "Blisters.", "White, charred, or leathery skin.", "Burns to face, hands, feet, genitals, joints, or large areas.", "Chemical, electrical, or inhalation concerns."],
        steps: ["Make the area safe and stop the burning.", "Cool the burn under cool running water for at least 20 minutes if possible.", "Remove jewelry or tight clothing near the burn unless stuck.", "Cover loosely with clean dressing or cling film where appropriate.", "Call emergency help for serious burns."],
        avoid: ["Do not use butter, creams, toothpaste, or oils.", "Do not use ice directly.", "Do not burst blisters.", "Do not pull away clothing stuck to the burn."],
        team: ["One starts cooling.", "One times cooling.", "One calls help if serious.", "One prevents hypothermia and protects privacy."],
        scenarios: ["Hot water scald in cafeteria.", "Chemical splash in lab.", "Electrical burn near equipment.", "Small cooking burn versus serious burn decision."]
      },
      {
        id: "fractures-sprains",
        title: "Fractures, Sprains, and Strains",
        tag: "Bones and joints",
        icon: "bone",
        summary: "Support the injury, reduce movement, and get medical help when needed.",
        signs: ["Pain, swelling, bruising.", "Deformity or unusual angle.", "Unable to use the limb.", "Numbness, tingling, pale/cold limb.", "Open wound over a possible fracture."],
        steps: ["Keep the person still and comfortable.", "Support the injured part in the position found.", "Apply a cold pack wrapped in cloth for sprains if available.", "Check circulation beyond the injury.", "Call emergency help for severe pain, deformity, open fracture, or suspected spine injury."],
        avoid: ["Do not force a limb straight.", "Do not let the casualty walk on a serious leg injury.", "Do not give food or drink if surgery may be needed."],
        team: ["Support teammate stabilizes injury.", "Leader checks circulation and pain.", "Caller arranges medical help.", "Recorder notes changes."],
        scenarios: ["Football ankle injury.", "Fall from stairs with wrist deformity.", "Open fracture after bike crash.", "Shoulder injury during competition."]
      },
      {
        id: "head-spine",
        title: "Head, Neck, and Spine Injury",
        tag: "High risk",
        icon: "brain",
        summary: "Suspect serious injury after falls, crashes, head impact, or altered awareness.",
        signs: ["Headache, dizziness, confusion, vomiting.", "Loss of consciousness.", "Memory problems.", "Neck/back pain.", "Weakness, numbness, tingling.", "Fluid or blood from ear/nose after head injury."],
        steps: ["Keep the casualty still.", "Support the head and neck in line if trained.", "Call emergency help for serious signs.", "Monitor breathing and responsiveness.", "Control bleeding gently without pressing hard on suspected skull injury.", "Reassure and prevent crowding."],
        avoid: ["Do not move them unless there is immediate danger.", "Do not remove a helmet unless airway access requires it and you are trained.", "Do not let them return to sport after concerning symptoms."],
        team: ["One stabilizes head if trained.", "One calls help.", "One manages bystanders.", "Leader watches breathing and consciousness."],
        scenarios: ["Student falls from steps.", "Cyclist hits head.", "Athlete collision.", "Person confused after being struck."]
      },
      {
        id: "shock",
        title: "Shock",
        tag: "Whole body",
        icon: "thermometer-snowflake",
        summary: "Shock can follow bleeding, burns, allergic reactions, heart problems, or major trauma.",
        signs: ["Pale, cold, clammy skin.", "Fast breathing.", "Weakness, dizziness, anxiety.", "Thirst, nausea, confusion.", "Collapse or reduced responsiveness."],
        steps: ["Treat the cause if possible, such as bleeding or burns.", "Call emergency help.", "Help them lie down if appropriate.", "Keep them warm.", "Do not give food or drink.", "Monitor breathing and responsiveness."],
        avoid: ["Do not raise legs if it causes pain or there may be spine, pelvis, leg, chest, or breathing injury.", "Do not ignore subtle deterioration.", "Do not leave them alone."],
        team: ["Leader treats cause.", "Helper keeps casualty warm.", "Caller updates emergency services.", "Recorder tracks vital changes."],
        scenarios: ["Bleeding casualty becomes pale.", "Burn casualty shivers.", "Allergic casualty becomes weak.", "Crash victim becomes confused."]
      }
    ]
  },
  {
    id: "medical",
    name: "Medical Emergencies",
    icon: "stethoscope",
    description: "Asthma, anaphylaxis, seizures, stroke, heart attack, diabetes, poisoning, heat/cold illness, and distress.",
    lessons: [
      {
        id: "asthma",
        title: "Asthma Attack",
        tag: "Breathing",
        icon: "cloud",
        summary: "Help the casualty sit upright, use their reliever inhaler, and call help if symptoms are severe or not improving.",
        signs: ["Wheezing, coughing, chest tightness.", "Difficulty speaking full sentences.", "Fast breathing.", "Anxiety or exhaustion.", "Blue/grey lips or worsening breathing."],
        steps: ["Keep them calm and sitting upright.", "Help them use their reliever inhaler if they have one and your training allows.", "Loosen tight clothing.", "Call emergency help if severe, no inhaler, not improving, or they become exhausted.", "Monitor breathing."],
        avoid: ["Do not make them lie down.", "Do not crowd them.", "Do not delay emergency help when breathing is worsening."],
        team: ["Leader reassures.", "Helper finds inhaler/spacer.", "Caller contacts emergency help if severe.", "Recorder notes time and doses if used."],
        scenarios: ["Student breathless after running.", "Asthma in dusty room.", "No inhaler available.", "Symptoms improve then worsen."]
      },
      {
        id: "anaphylaxis",
        title: "Severe Allergic Reaction",
        tag: "Anaphylaxis",
        icon: "siren",
        summary: "Anaphylaxis is life-threatening. Call emergency help and assist with an adrenaline auto-injector if available and trained.",
        signs: ["Breathing difficulty, wheeze, throat tightness.", "Swollen lips, tongue, face, or eyes.", "Widespread rash or hives.", "Dizziness, collapse, confusion.", "Known allergy after food, sting, or medicine."],
        steps: ["Call emergency services immediately.", "Help them use their adrenaline auto-injector if they have one and you are trained/allowed.", "Help them lie still in a comfortable position; sitting may help breathing.", "Monitor breathing.", "Prepare for CPR if they become unresponsive and not breathing normally."],
        avoid: ["Do not stand or walk them around.", "Do not delay adrenaline when prescribed and available.", "Do not assume a rash alone means mild if breathing or circulation is affected."],
        team: ["Caller states suspected anaphylaxis.", "Helper finds auto-injector.", "Leader monitors airway/breathing.", "Runner meets ambulance."],
        scenarios: ["Nut allergy at lunch.", "Bee sting at sports field.", "Allergy with no auto-injector.", "Breathing worsens after initial improvement."]
      },
      {
        id: "seizure",
        title: "Seizure",
        tag: "Neurological",
        icon: "waves",
        summary: "Protect the person from injury, time the seizure, and call help when needed.",
        signs: ["Sudden collapse.", "Jerking movements.", "Staring or confusion.", "Noisy breathing.", "Sleepiness or confusion after the seizure."],
        steps: ["Move hazards away.", "Protect the head with something soft if possible.", "Time the seizure.", "Do not restrain them.", "After movements stop, check breathing and place in recovery position if needed.", "Call emergency help if it lasts about 5 minutes, repeats, injury occurs, it is their first seizure, or you are worried."],
        avoid: ["Do not put anything in their mouth.", "Do not hold them down.", "Do not give food or drink until fully recovered."],
        team: ["One times seizure.", "One clears hazards.", "One manages bystanders.", "Leader checks recovery and breathing."],
        scenarios: ["Seizure in classroom.", "Seizure after head injury.", "Second seizure begins.", "Person confused after seizure."]
      },
      {
        id: "stroke",
        title: "Stroke",
        tag: "FAST",
        icon: "brain-circuit",
        summary: "Recognize FAST signs and call emergency help immediately.",
        signs: ["Face drooping.", "Arm weakness.", "Speech trouble.", "Sudden confusion, vision problems, severe headache, dizziness, or balance problems."],
        steps: ["Use FAST: Face, Arms, Speech, Time to call.", "Call emergency services immediately.", "Keep them comfortable and reassured.", "Note the time symptoms started or were last known well.", "Monitor breathing and responsiveness."],
        avoid: ["Do not give food, drink, or tablets.", "Do not wait to see if it passes.", "Do not drive them yourself if emergency ambulance care is available."],
        team: ["Caller reports suspected stroke and onset time.", "Leader monitors airway and speech.", "Helper gathers medication/medical info if available.", "Runner meets ambulance."],
        scenarios: ["Teacher suddenly slurs speech.", "Visitor has arm weakness.", "Stroke signs during public event.", "Symptoms started at unknown time."]
      },
      {
        id: "heart-attack",
        title: "Heart Attack",
        tag: "Chest pain",
        icon: "heart-crack",
        summary: "Chest pain or pressure can be serious. Call emergency help and keep the person at rest.",
        signs: ["Chest pain, pressure, tightness, or heaviness.", "Pain spreading to arm, jaw, back, neck, or stomach.", "Shortness of breath.", "Sweating, nausea, pale skin, fear, or collapse.", "Symptoms may be less obvious in some people."],
        steps: ["Call emergency services.", "Help them rest in a comfortable position.", "Loosen tight clothing.", "Reassure them.", "Assist with prescribed medication only according to training/local rules.", "Prepare for CPR/AED if they become unresponsive and not breathing normally."],
        avoid: ["Do not let them walk around.", "Do not delay calling.", "Do not give food or drink."],
        team: ["Caller says suspected heart attack.", "AED teammate locates AED.", "Leader monitors condition.", "Recorder notes symptom start time."],
        scenarios: ["Parent has chest pressure at school event.", "Coach becomes sweaty and breathless.", "Chest pain mistaken for indigestion.", "Casualty collapses while waiting."]
      },
      {
        id: "diabetes",
        title: "Diabetic Emergency",
        tag: "Blood sugar",
        icon: "candy",
        summary: "Low blood sugar can cause sudden confusion, sweating, weakness, or collapse.",
        signs: ["Hunger, trembling, sweating.", "Confusion, aggression, or unusual behavior.", "Weakness, dizziness, headache.", "Known diabetes or medical ID.", "Reduced responsiveness if severe."],
        steps: ["If fully awake and able to swallow, help them take sugary food or drink if available and allowed by training.", "Stay with them and monitor.", "Call emergency help if they do not improve, cannot swallow, become drowsy, or you are unsure.", "If unresponsive, check breathing and follow unresponsive care."],
        avoid: ["Do not give anything by mouth if drowsy or unresponsive.", "Do not assume unusual behavior is deliberate.", "Do not leave them alone."],
        team: ["One finds medical ID or friend/teacher info.", "One prepares emergency call.", "Leader checks swallowing and responsiveness.", "Recorder notes time sugar was given."],
        scenarios: ["Student confused before lunch.", "Athlete shaky after match.", "Unconscious person with diabetes ID.", "Improves then becomes confused again."]
      },
      {
        id: "heat-cold",
        title: "Heat and Cold Illness",
        tag: "Environment",
        icon: "sun-snow",
        summary: "Environmental illness can worsen quickly; cool or warm the casualty and call help for severe symptoms.",
        signs: ["Heat: headache, dizziness, cramps, heavy sweating, hot skin, confusion, collapse.", "Cold: shivering, pale/cold skin, clumsiness, confusion, slow responses, drowsiness.", "Exposure from weather, sports, water, or poor clothing."],
        steps: ["Move to a safer environment.", "For heat illness, cool the person and give sips of water if fully alert.", "For cold illness, warm gradually and remove wet clothing if possible.", "Call emergency help for confusion, collapse, very high temperature, severe hypothermia signs, or no improvement.", "Monitor breathing."],
        avoid: ["Do not give alcohol.", "Do not use extreme heat directly on cold skin.", "Do not ignore confusion or collapse."],
        team: ["One controls environment.", "One times cooling/warming.", "Caller escalates severe cases.", "Leader monitors mental state."],
        scenarios: ["Runner collapses in heat.", "Cold wet student after outdoor event.", "Cramps during sports day.", "Confused person in hot crowd."]
      },
      {
        id: "poisoning",
        title: "Poisoning and Harmful Substances",
        tag: "Toxins",
        icon: "skull",
        summary: "Call poison/emergency guidance, protect yourself, and do not make the person vomit.",
        signs: ["Nausea, vomiting, burns around mouth, confusion, sleepiness.", "Chemical smell, containers, tablets, alcohol, drugs, gas, or plant exposure.", "Breathing difficulty or collapse."],
        steps: ["Check scene safety first.", "Move away from fumes only if safe.", "Call emergency services or poison advice according to your country.", "Keep containers or labels for professionals.", "Monitor breathing and responsiveness.", "Rinse skin/eyes with water for chemical exposure when appropriate and safe."],
        avoid: ["Do not make them vomit.", "Do not give food or drink unless advised.", "Do not enter a dangerous gas/chemical area."],
        team: ["Leader protects team.", "Caller reads labels to dispatcher.", "Helper ventilates area if safe.", "Recorder notes substance and time."],
        scenarios: ["Cleaner chemical splash.", "Unknown tablets found nearby.", "Carbon monoxide suspicion.", "Alcohol poisoning at event."]
      },
      {
        id: "distress",
        title: "Panic, Distress, and Mental Health Support",
        tag: "Support",
        icon: "message-circle-heart",
        summary: "Use calm communication, reduce pressure, and get help when safety or medical risk is present.",
        signs: ["Fast breathing, shaking, crying, panic, fear.", "Chest tightness or tingling.", "Withdrawal, confusion, or inability to speak clearly.", "Possible risk of self-harm or harm from environment."],
        steps: ["Check immediate safety.", "Speak calmly and introduce yourself.", "Move to a quieter place if safe.", "Encourage slow breathing without forcing.", "Listen and reassure.", "Call emergency help if there is danger, chest pain, collapse, self-harm risk, or you are unsure."],
        avoid: ["Do not dismiss feelings.", "Do not crowd the person.", "Do not promise secrecy if safety is at risk."],
        team: ["One calm communicator stays with person.", "Leader keeps crowd away.", "Caller seeks trusted adult/professional support.", "Recorder notes triggers and changes."],
        scenarios: ["Student panic after accident.", "Bystander distressed by blood.", "Casualty refuses help.", "Crowd makes anxiety worse."]
      }
    ]
  },
  {
    id: "competition",
    name: "Competition Team Skills",
    icon: "trophy",
    description: "Practice like a student first aid team: leadership, role assignment, triage, documentation, and judge-ready handover.",
    lessons: [
      {
        id: "team-leadership",
        title: "Team Leadership",
        tag: "Competition",
        icon: "users-round",
        summary: "A strong team leader makes the scene calmer by giving clear roles and checking progress.",
        signs: ["Several people talking at once.", "No one has called help.", "Two injuries competing for attention.", "Bystanders interrupting.", "Team members waiting for instructions."],
        steps: ["Name yourself as leader.", "State priorities out loud: safety, response, breathing, bleeding, help.", "Give named tasks.", "Ask for closed-loop replies: repeat back and report done.", "Reassess regularly.", "Prepare final handover."],
        avoid: ["Do not do every task yourself.", "Do not give vague instructions.", "Do not let the loudest bystander control the scene."],
        team: ["Leader: directs and reassesses.", "Primary aider: casualty care.", "Caller: emergency services.", "Runner: kit/AED.", "Recorder: times and findings."],
        scenarios: ["Four-person student team at school competition.", "Leader changes when first leader freezes.", "Two casualties need prioritizing.", "Judge interrupts with new information."]
      },
      {
        id: "triage",
        title: "Multi-casualty Priorities",
        tag: "Competition",
        icon: "list-tree",
        summary: "When there is more than one casualty, treat life threats first and call for more help early.",
        signs: ["Multiple casualties.", "One quiet/unresponsive person.", "Severe bleeding.", "Breathing difficulty.", "Walking wounded asking for attention."],
        steps: ["Make the scene safe.", "Call for extra help.", "Identify life threats quickly.", "Treat severe bleeding and airway/breathing problems first.", "Use bystanders for simple safe tasks.", "Reassess all casualties."],
        avoid: ["Do not let minor injuries take all attention.", "Do not assume the loudest casualty is the most serious.", "Do not forget scene safety."],
        team: ["Leader prioritizes.", "Aider 1 handles life threat.", "Aider 2 checks second casualty.", "Caller requests multiple resources.", "Recorder tracks each casualty."],
        scenarios: ["Bus stop fall with three students.", "Sports field collision.", "Smoke irritation plus burn casualty.", "Stairwell with one quiet and one crying casualty."]
      },
      {
        id: "documentation",
        title: "Observation and Documentation",
        tag: "Competition",
        icon: "clipboard-list",
        summary: "Good notes help the team notice changes and give a better handover.",
        signs: ["Changing breathing or alertness.", "Pain increasing.", "Bleeding restarting.", "Medication used.", "Time-critical symptoms such as stroke, seizure, chest pain, or anaphylaxis."],
        steps: ["Record time found.", "Record responsiveness and breathing.", "Record main complaint, signs, care given, and changes.", "Note times of medication/auto-injector/inhaler if used.", "Use the notes during handover."],
        avoid: ["Do not write instead of treating life threats.", "Do not include guesses as facts.", "Do not lose timing details."],
        team: ["Recorder stays near leader.", "Leader confirms key facts.", "Caller uses notes for emergency call.", "Handover speaker summarizes clearly."],
        scenarios: ["Seizure timing.", "Chest pain onset time.", "Second dressing applied.", "Inhaler used before team arrived."]
      }
    ]
  }
];

const lessons = lessonCategories.flatMap((category) =>
  category.lessons.map((lesson) => ({ ...lesson, categoryId: category.id, categoryName: category.name }))
);

const competitionCategories = [
  {
    id: "student-team",
    name: "Student First Aid Team",
    description: "A school-age team works together under time pressure with a clear team leader.",
    places: ["school corridor", "science classroom", "sports hall", "school yard", "cafeteria", "stairwell", "library", "bus stop outside school"],
    patients: ["15-year-old student", "teacher", "visitor", "younger student", "sports coach", "parent volunteer"],
    problems: ["fainting with a minor head injury", "asthma attack after exercise", "severe bleeding from broken glass", "suspected fracture after a fall", "seizure in a classroom", "panic attack after witnessing an injury", "burn from hot water", "possible diabetic emergency"],
    hazards: ["crowd noise", "wet floor", "broken glass nearby", "poor communication from bystanders", "blocked exit", "teacher asking too many questions", "limited first aid kit", "noisy bell and moving students"],
    focus: ["team leader gives clear tasks", "scene safety", "calling emergency help", "reassurance and dignity"]
  },
  {
    id: "public-event",
    name: "Public Event",
    description: "A first aid post responds at a busy event with bystanders and limited space.",
    places: ["music festival gate", "community fair", "sports tournament", "train station entrance", "charity run finish line", "concert seating area", "food stall queue", "parade route"],
    patients: ["adult spectator", "volunteer marshal", "teen athlete", "elderly visitor", "food vendor", "child with parent nearby"],
    problems: ["heat exhaustion", "chest pain", "panic and fast breathing", "ankle injury with swelling", "severe allergic reaction", "choking on food", "collapse after standing in sun", "minor wound with a distressed crowd"],
    hazards: ["heavy crowd", "loud music", "blocked access route", "hot weather", "rain and slippery ground", "people filming", "poor radio signal", "security moving barriers"],
    focus: ["crowd control", "early emergency call", "calm communication", "handover to professionals"]
  },
  {
    id: "trauma",
    name: "Trauma and Bleeding",
    description: "The team must control bleeding, protect from shock, and watch for hidden injuries.",
    places: ["workshop", "kitchen", "bike path", "parking area", "school lab", "staircase", "football pitch", "warehouse aisle"],
    patients: ["adult worker", "cyclist", "cook", "delivery driver", "student", "maintenance worker"],
    problems: ["severe arm bleeding", "possible spinal injury", "burn and shock", "deep cut with dizziness", "head injury after a fall", "open fracture concern", "sprained ankle with severe pain", "eye splash from chemical"],
    hazards: ["sharp tools", "traffic nearby", "hot surfaces", "slippery ground", "chemical bottle nearby", "crowded narrow area", "blood on floor", "equipment still running"],
    focus: ["direct pressure", "infection control", "shock position when appropriate", "monitoring changes"]
  },
  {
    id: "medical",
    name: "Medical Emergency",
    description: "The team recognizes warning signs, calls help, and supports the casualty while waiting.",
    places: ["library", "office reception", "cafeteria", "bus stop", "school gym", "exam hall", "staff room", "outdoor event tent"],
    patients: ["adult with diabetes", "person with chest pain", "person having a seizure", "person with severe allergy", "student with asthma", "visitor showing stroke signs"],
    problems: ["diabetic emergency", "heart attack symptoms", "epileptic seizure", "anaphylaxis", "asthma attack", "stroke signs", "poisoning concern", "heat illness"],
    hazards: ["confused friends giving advice", "limited medical history", "privacy concerns", "busy room", "missing medication", "language barrier", "panic in the crowd", "unclear symptom start time"],
    focus: ["recognition of symptoms", "safe positioning", "using available medication only as trained", "continuous monitoring"]
  },
  {
    id: "mass-casualty",
    name: "Multi-casualty Drill",
    description: "A competition-style scene with more than one casualty and the need to prioritize.",
    places: ["school bus stop", "sports field", "stairwell", "community centre", "science corridor", "canteen", "parking area", "festival first aid tent"],
    patients: ["two students", "three bystanders", "a child and an adult", "several team members from another group", "one quiet casualty and one loud casualty", "two athletes and a coach"],
    problems: ["one severe bleed and one minor injury", "one unconscious casualty and one panicking friend", "two falls with different severity", "burns plus smoke irritation", "asthma attack plus ankle injury", "suspected stroke plus distressed relative", "head injury plus nosebleed", "chemical splash plus fainting"],
    hazards: ["confusing witness reports", "limited supplies", "unsafe area nearby", "time pressure from judges", "blocked access for ambulance", "bystanders filming", "one teammate distracted", "weather getting worse"],
    focus: ["triage thinking", "delegation", "calling extra help", "clear final handover"]
  }
];

let activeScenario = {};
let scenarioSteps = [];

const fallbackQuizQuestions = [
  {
    question: "What is the first thing to check before giving aid?",
    options: ["Scene safety", "Pulse rate", "Medical history"],
    answer: 0,
    why: "Scene safety protects the responder, casualty, and bystanders."
  },
  {
    question: "A person is unresponsive and not breathing normally. What should you do?",
    options: ["Call emergency services and start CPR if trained", "Give them a drink", "Walk them around"],
    answer: 0,
    why: "This is a life-threatening emergency requiring immediate help and CPR."
  },
  {
    question: "For severe bleeding, what is the priority?",
    options: ["Direct pressure", "Remove all clothing", "Apply ice directly"],
    answer: 0,
    why: "Firm direct pressure helps control serious bleeding."
  },
  {
    question: "What should you do for a burn?",
    options: ["Cool it with running water", "Put butter on it", "Break blisters"],
    answer: 0,
    why: "Cooling reduces damage. Avoid creams, ice, and breaking blisters."
  },
  {
    question: "If someone can cough during choking, what should you do?",
    options: ["Encourage coughing", "Give water", "Put fingers in their mouth"],
    answer: 0,
    why: "Effective coughing can clear the blockage. Do not sweep blindly in the mouth."
  },
  {
    question: "When an AED arrives, what should you do?",
    options: ["Turn it on and follow prompts", "Wait for permission from the casualty", "Use it only after CPR fails for ten minutes"],
    answer: 0,
    why: "AEDs are designed to guide responders clearly and quickly."
  }
];

let quizQuestions = fallbackQuizQuestions.slice(0, 5);
let activeQuizRotationGroup = 0;

const supabaseConfig = window.FIRST_AID_SUPABASE_CONFIG || {};
const isSupabaseConfigured = Boolean(
  supabaseConfig.url &&
  supabaseConfig.anonKey &&
  !supabaseConfig.url.includes("PASTE_") &&
  !supabaseConfig.anonKey.includes("PASTE_") &&
  window.supabase
);
const supabaseClient = isSupabaseConfigured
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
  : null;

const defaultProgress = {
  completedLessons: [],
  quizScore: 0,
  quizTaken: false,
  scenariosPassed: 0,
  profileName: "",
  email: "",
  initials: "FA",
  role: "Competitor",
  heardFrom: "Other",
  streak: 0,
  lastStreakDate: "",
  totalXp: 0
};

let progress = loadProgress();
let scenarioIndex = 0;
let selectedCategoryId = "student-team";
let selectedDifficulty = "basic";
let selectedLessonCategoryId = "assessment";
let expandedLessonId = "";
let quizIndex = 0;
let quizCorrect = 0;
let quizAnswered = false;
let currentUser = null;
let authMode = "login";
let authMessage = "";
let currentAppRole = "learner";
let activeRoomRecord = null;
let activeRoomParticipantCount = 0;
let roomRealtimeChannel = null;
let academyData = {
  leaderboard: [],
  achievementCatalog: [],
  earnedAchievementIds: [],
  certificates: [],
  resources: [],
  content: [],
  notifications: []
};

function isStaffMember() {
  return currentAppRole === "admin" || currentAppRole === "instructor";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateAuthGate() {
  const locked = !currentUser;
  const appShell = document.getElementById("app-shell");
  const accountModal = document.getElementById("account-modal");

  document.body.classList.toggle("auth-locked", locked);
  document.body.classList.remove("auth-pending");
  appShell.setAttribute("aria-hidden", locked ? "true" : "false");

  if (locked) {
    accountModal.classList.remove("hidden");
  }
}

function requireAuthentication() {
  if (currentUser) return true;
  authMessage = supabaseClient
    ? "Login or create an account to unlock the training platform."
    : "Secure login is currently unavailable. Check the Supabase configuration.";
  renderAccount();
  updateAuthGate();
  document.getElementById("account-email").focus();
  return false;
}

function showAuthMessage(message) {
  authMessage = message;
  document.getElementById("auth-status").textContent = message;
  showStreakToast(message);
}

function defaultAuthMessage() {
  if (!supabaseClient) return "Secure sign-in is unavailable until Supabase is connected.";
  if (authMode === "register") return "Continue with Google or GitHub, or create an email account and confirm it before logging in.";
  if (authMode === "recovery") return "Enter and save your new password.";
  if (currentUser) return `Signed in as ${currentUser.email}`;
  return "Continue with Google or GitHub, or enter your email and password.";
}

function friendlyAuthError(error) {
  const message = String(error?.message || "Authentication failed.");
  if (/invalid login credentials/i.test(message)) {
    return "The email or password is incorrect. If you just registered, confirm your email before logging in.";
  }
  if (/email not confirmed/i.test(message)) {
    return "Your email is not confirmed yet. Open the confirmation email and click its link before logging in.";
  }
  if (/user already registered/i.test(message)) {
    return "An account with this email already exists. Log in or use ‘Forgot your password?’.";
  }
  if (/provider.*not.*enabled|unsupported provider/i.test(message)) {
    return "This social sign-in option is not enabled in Supabase yet.";
  }
  if (/rate limit/i.test(message)) {
    return "Too many email requests. Wait a few minutes, then try again.";
  }
  return message;
}

function choose(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function currentCategory() {
  return competitionCategories.find((category) => category.id === selectedCategoryId) || competitionCategories[0];
}

function buildScenario() {
  const category = currentCategory();
  const place = choose(category.places);
  const patient = choose(category.patients);
  const problem = choose(category.problems);
  const hazard = choose(category.hazards);
  const secondPatient = choose(["a panicking friend", "a quiet bystander with pale skin", "a younger student with a minor injury", "a teammate who becomes distracted", "a relative giving conflicting information"]);
  const complication = choose(["the casualty's breathing becomes noisier", "the crowd blocks the access route", "the first aid kit is missing one expected item", "a bystander says the casualty may have hit their head", "the casualty becomes more confused", "someone reports a second casualty nearby"]);
  const misleadingClue = choose(["a witness insists it is probably nothing", "one bystander wants to move the casualty immediately", "a friend offers medication without knowing what it is", "the casualty says they feel fine but looks pale and sweaty", "two witnesses give different stories about what happened"]);
  const isMultiCasualty = category.id === "mass-casualty";
  const extraPressure = isMultiCasualty ? {
    basic: "Several people need checking, but one life threat should be found first.",
    competition: "A judge is watching triage, delegation, and final handover.",
    advanced: "The scene changes during care and the team must reassess priorities."
  }[selectedDifficulty] : {
    basic: "One casualty is present and bystanders are willing to help.",
    competition: "A judge is watching how the team leader delegates tasks.",
    advanced: "There is more than one demand at the scene and the team must prioritize."
  }[selectedDifficulty];

  activeScenario = {
    title: category.name,
    brief: selectedDifficulty === "advanced"
      ? `${patient} at the ${place}: ${problem}. Challenge: ${hazard}. Added complication: ${complication}. Confusing information: ${misleadingClue}. Secondary issue: ${secondPatient}. ${extraPressure}`
      : `${patient} at the ${place}: ${problem}. Challenge: ${hazard}. ${extraPressure}`,
    focus: selectedDifficulty === "advanced"
      ? [...category.focus, "dynamic reassessment", "prioritising under uncertainty", "closed-loop communication"]
      : category.focus
  };

  if (selectedDifficulty === "advanced") {
    scenarioSteps = [
      {
        text: `Your team arrives at the ${place}. You can see ${hazard}, the main casualty is a ${patient} with ${problem}, and ${secondPatient} is pulling attention away. ${misleadingClue}. What is the strongest opening plan for the team leader?`,
        options: [
          ["Pause the team at the edge of the scene, state the visible hazards out loud, assign one named person to control access and call for help, assign another to begin a primary survey of the main casualty, and tell a third person to quickly check whether the secondary issue is safe and serious.", true, "Correct. Advanced scenarios test leadership under uncertainty. The best answer protects the team, starts life-threat assessment, uses named roles, and prevents a second problem from being ignored."],
          ["Send the most confident teammate straight to the main casualty while the leader follows the loudest bystander to collect a full story before anyone calls for help.", false, "Not enough control. This delays the primary survey and lets bystanders set the agenda. In advanced competition scenes, the leader should gather information while still assigning immediate safety, help, and assessment tasks."],
          ["Tell everyone to focus only on the visible injury because competition judges usually reward fast treatment more than scene management or communication.", false, "Too narrow. Fast treatment matters, but judges also look for safety, role clarity, reassessment, bystander control, and early escalation. Visible injuries can distract from breathing, shock, or a second casualty."]
        ]
      },
      {
        text: `During the first minute, the main casualty's story is unclear. The condition appears to involve ${problem}, but ${complication}. The casualty is anxious, a bystander interrupts repeatedly, and the team has limited equipment. What assessment sequence is best?`,
        options: [
          ["Use a structured primary survey first: responsiveness, airway, breathing quality, catastrophic bleeding, skin signs, position of comfort, and immediate red flags. At the same time, delegate one teammate to get SAMPLE-style history only after life threats are checked, while another teammate records times and changes.", true, "Correct. This is the advanced balance: primary survey first, history second, documentation throughout. The answer is longer because the decision is not just what to treat, but how to run the team without missing deterioration."],
          ["Ask detailed questions about allergies, medication, past illnesses, last meal, and events before checking breathing or severe bleeding, because a complete history gives the most accurate diagnosis.", false, "History is useful, but this order is risky. A first aid team must identify life threats before detailed questioning. Advanced cases often include tempting history clues that should not delay airway, breathing, bleeding, and shock checks."],
          ["Skip the assessment and begin the treatment most commonly linked to the first visible symptom, then adjust later if the judge gives more information.", false, "This is too reactive. Competition cases often include misleading symptoms. Treat obvious life threats, but do not skip the assessment structure that tells you whether the casualty is getting worse."]
        ]
      },
      {
        text: `Halfway through the scenario, the team finds a conflict: the main casualty needs continuing care, ${secondPatient} may also need assessment, and ${hazard} is making bystanders crowd closer. What delegation shows the strongest advanced teamwork?`,
        options: [
          ["Leader keeps overall command and reassesses priorities; Aider 1 stays with the main casualty and reports breathing/response changes; Aider 2 performs a quick safety-and-life-threat check on the secondary issue; Caller updates emergency services with the new complication; Recorder notes times, care, and changes for handover.", true, "Correct. This answer shows command structure, closed-loop communication, parallel tasking, and reassessment. Advanced scenarios are won by managing the whole scene, not by doing one skill beautifully while the rest of the scene drifts."],
          ["Everyone moves to the second problem together so the team can decide as a group whether it is more interesting or more serious than the original casualty.", false, "This abandons the main casualty and creates confusion. A team can investigate a second problem, but not by leaving the first casualty unmonitored."],
          ["The leader continues treating alone while the rest of the team waits silently, because too many people talking can look disorganized to judges.", false, "Quiet is not the same as organized. Strong teams use concise communication, named tasks, and clear reports. A leader who treats alone loses the advantage of the team."]
        ]
      },
      {
        text: `The casualty's presentation still fits ${problem}, but the complication changes the risk level: ${complication}. The judge asks what care you are giving and why. Which answer is most defensible?`,
        options: [
          ["Explain the working priority, not a final diagnosis: care is aimed at immediate threats, comfort, monitoring, and preventing deterioration. State the specific first aid being given within training, what signs are being watched, what would trigger escalation, and what information must be handed to professionals.", true, "Correct. Advanced first aid reasoning avoids pretending to diagnose. It explains priorities, treatment limits, monitoring, escalation points, and handover facts. This is exactly the kind of longer answer a competition judge may reward."],
          ["Give a confident diagnosis and say the team will continue only that pathway unless the casualty becomes unconscious, because changing plans might look uncertain.", false, "Overconfidence is dangerous. A first aider should use a working impression and reassess. Changing a plan because the casualty changes is a strength, not a weakness."],
          ["Focus on the neatest visible treatment and avoid explaining uncertainty, because judges mainly score whether the bandage, sling, or position looks correct.", false, "Presentation helps, but advanced scoring should value reasoning, safety, monitoring, communication, and whether treatment matches the casualty's changing condition."]
        ]
      },
      {
        text: `The scenario ends with professional help arriving. The scene involved ${problem}, ${hazard}, ${complication}, and ${secondPatient}. What handover would be strongest?`,
        options: [
          ["Give a structured handover: exact location and hazards, number of casualties, main casualty details, initial condition, primary survey findings, changes over time, care given and when, response to care, unresolved concerns, secondary casualty check, and any witness information that may be unreliable.", true, "Correct. Advanced handover should make the next responder safer and faster. It includes what you know, what changed, what you did, what remains uncertain, and why the scene still needs attention."],
          ["Say only the casualty's main complaint and the treatment given, because professional responders can repeat the assessment themselves when they arrive.", false, "Too little. Professionals will assess again, but they still need your timeline, changes, hazards, care already given, and concerns. Good handover prevents repeated mistakes and lost information."],
          ["Let every team member give their own version of events so no detail is missed, even if the information is repeated or contradictory.", false, "That can become chaotic. One clear speaker should hand over using team notes, with teammates available for specific details if asked."]
        ]
      },
      {
        text: "After the judge calls time, what should the student team review first to improve for the next advanced scenario?",
        options: [
          ["Review whether the team found life threats early, used named roles, communicated with closed-loop replies, reassessed after the complication, documented changes, and gave a clear handover. Then review technical treatment details.", true, "Correct. Advanced improvement starts with decision-making and team process, then technical skill. A perfect bandage cannot compensate for missed deterioration, weak leadership, or poor handover."],
          ["Review only the final score and decide who made the most visible mistake, because individual blame helps people remember not to repeat errors.", false, "Blame weakens team learning. A useful review is specific, calm, and focused on decisions, communication, safety, and next actions."],
          ["Review only equipment placement and speed, because advanced scenarios are mostly about moving faster than other teams.", false, "Speed helps only when priorities are right. Advanced cases reward controlled pace, accurate reassessment, and clear reasoning under pressure."]
        ]
      }
    ];
    return;
  }

  scenarioSteps = [
    {
      text: `Your team arrives at the ${place}. The main challenge is ${hazard}. What should the team leader do first?`,
      options: [
        ["Stop the team, check for danger, and assign safe roles.", true, "Correct. Judges usually expect safety and leadership before treatment."],
        ["Send everyone straight to the casualty.", false, "Slow down. A team can lose control of the scene if safety and roles are skipped."],
        ["Ask the casualty to walk to your team.", false, "Do not move a casualty unless there is immediate danger."]
      ]
    },
    {
      text: `The casualty is a ${patient} with ${problem}. What is the best first assessment?`,
      options: [
        ["Check responsiveness, breathing, severe bleeding, and ask what happened.", true, "Correct. A structured primary check helps the team find life threats quickly."],
        ["Start with a detailed medical history.", false, "History matters, but immediate life threats come first."],
        ["Look for the neatest bandage to use.", false, "Equipment comes after assessment and priorities."]
      ]
    },
    {
      text: "A teammate asks what they should do next. What instruction is strongest?",
      options: [
        ["Call emergency help or send a named person, bring the first aid kit/AED if needed, and report back.", true, "Correct. Clear named tasks reduce confusion in team competitions."],
        ["Tell everyone to do something useful.", false, "That is too vague. Good team leadership gives specific tasks."],
        ["Tell bystanders to leave without explanation.", false, "Bystanders may help. Control them calmly and use them when appropriate."]
      ]
    },
    {
      text: `The casualty's condition fits ${problem}. What care should the team prioritize?`,
      options: [
        ["Give appropriate first aid within training, monitor breathing, reassure, and protect privacy.", true, "Correct. Care should match the condition and stay within training limits."],
        ["Give food, drink, or medication without checking training rules.", false, "Avoid giving anything unless the protocol and training clearly allow it."],
        ["Focus only on making the bandage look tidy.", false, "Presentation matters less than safe, effective care and monitoring."]
      ]
    },
    {
      text: "Professional help arrives or the scenario judge calls time. What should the team finish with?",
      options: [
        ["Give a clear handover: scene, casualty, findings, care given, changes, and remaining concerns.", true, "Correct. A good handover shows control and clinical thinking."],
        ["Pack up immediately without speaking.", false, "The next responder needs a clear handover."],
        ["Argue about who did best.", false, "Team reflection comes later. Finish the casualty handover first."]
      ]
    }
  ];
}

function loadProgress() {
  const saved = localStorage.getItem("firstAidTrainerProgress");
  return saved ? { ...defaultProgress, ...JSON.parse(saved) } : { ...defaultProgress };
}

function saveProgress() {
  localStorage.setItem("firstAidTrainerProgress", JSON.stringify(progress));
  syncRemoteProgress();
  renderStats();
  renderAccount();
  renderProgress();
  renderRecommendations();
}

async function syncRemoteProgress() {
  if (!supabaseClient || !currentUser) return;

  await supabaseClient.from("user_progress").upsert({
    user_id: currentUser.id,
    quiz_score: progress.quizScore,
    quiz_taken: progress.quizTaken,
    scenarios_passed: progress.scenariosPassed,
    streak: progress.streak,
    last_streak_date: progress.lastStreakDate || null,
    total_xp: progress.totalXp,
    updated_at: new Date().toISOString()
  });
}

async function syncLessonLearned(lessonId) {
  if (!supabaseClient || !currentUser) return;

  await supabaseClient.from("lesson_progress").upsert({
    user_id: currentUser.id,
    lesson_id: lessonId
  });
}

async function loadRemoteProgress() {
  if (!supabaseClient || !currentUser) return;

  const [{ data: existingProfile }, { data: remoteProgress }, { data: learnedLessons }] = await Promise.all([
    supabaseClient.from("profiles").select("*").eq("id", currentUser.id).maybeSingle(),
    supabaseClient.from("user_progress").select("*").eq("user_id", currentUser.id).maybeSingle(),
    supabaseClient.from("lesson_progress").select("lesson_id").eq("user_id", currentUser.id)
  ]);

  let profile = existingProfile;
  if (!profile) {
    const metadata = currentUser.user_metadata || {};
    const fallbackName = metadata.display_name || currentUser.email?.split("@")[0] || "First aid learner";
    const profileValues = {
      id: currentUser.id,
      display_name: fallbackName,
      team_name: "First aid learner",
      initials: (metadata.initials || fallbackName.slice(0, 2) || "FA").toUpperCase(),
      role: metadata.role || "Competitor",
      heard_from: metadata.heard_from || "Other",
      updated_at: new Date().toISOString()
    };
    const { data: createdProfile } = await supabaseClient
      .from("profiles")
      .upsert(profileValues)
      .select()
      .maybeSingle();
    profile = createdProfile || profileValues;
  }

  currentAppRole = profile?.app_role || "learner";

  progress = {
    ...defaultProgress,
    ...progress,
    email: currentUser.email || "",
    profileName: profile?.display_name || progress.profileName || "",
    teamName: "First aid learner",
    initials: profile?.initials || progress.initials || "FA",
    role: profile?.role || progress.role || "Competitor",
    heardFrom: profile?.heard_from || progress.heardFrom || "Other",
    quizScore: remoteProgress?.quiz_score ?? progress.quizScore,
    quizTaken: remoteProgress?.quiz_taken ?? progress.quizTaken,
    scenariosPassed: remoteProgress?.scenarios_passed ?? progress.scenariosPassed,
    streak: remoteProgress?.streak ?? progress.streak,
    lastStreakDate: remoteProgress?.last_streak_date || progress.lastStreakDate,
    totalXp: remoteProgress?.total_xp ?? progress.totalXp,
    completedLessons: learnedLessons?.map((item) => item.lesson_id) || progress.completedLessons
  };

  localStorage.setItem("firstAidTrainerProgress", JSON.stringify(progress));
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function yesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function currentQuizRotationGroup() {
  return Math.floor(Date.now() / (6 * 60 * 60 * 1000)) % 4;
}

async function loadRotatingQuizQuestions() {
  activeQuizRotationGroup = currentQuizRotationGroup();

  if (!supabaseClient || !currentUser) {
    quizQuestions = fallbackQuizQuestions.slice(0, 5);
    return;
  }

  const { data, error } = await supabaseClient
    .from("quiz_questions")
    .select("question, options, answer_index, explanation")
    .eq("active", true)
    .eq("rotation_group", activeQuizRotationGroup)
    .order("id", { ascending: true })
    .limit(5);

  if (error || !data || data.length < 5) {
    quizQuestions = fallbackQuizQuestions.slice(0, 5);
    showStreakToast("Quiz database not ready. Using demo questions.");
    return;
  }

  quizQuestions = data.map((item) => ({
    question: item.question,
    options: item.options,
    answer: item.answer_index,
    why: item.explanation
  }));
}

async function recordQuizAttempt() {
  if (!supabaseClient || !currentUser) return;

  await supabaseClient.from("quiz_attempts").insert({
    user_id: currentUser.id,
    rotation_group: activeQuizRotationGroup,
    score: quizCorrect,
    total: quizQuestions.length
  });
}

function awardTrainingReward(reason, xp) {
  const today = todayKey();
  progress.totalXp += xp;

  if (progress.lastStreakDate === today) {
    showStreakToast(`${reason} complete. Streak already earned today. +${xp} XP`);
    saveProgress();
    return;
  }

  progress.streak = progress.lastStreakDate === yesterdayKey() ? progress.streak + 1 : 1;
  progress.lastStreakDate = today;
  showStreakToast(`+1 day streak for ${reason}. +${xp} XP`);
  saveProgress();
}

function showStreakToast(message) {
  const toast = document.getElementById("streak-toast");
  document.getElementById("streak-toast-text").textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(showStreakToast.timeout);
  showStreakToast.timeout = window.setTimeout(() => toast.classList.add("hidden"), 2600);
}

function setView(viewId) {
  if (!requireAuthentication()) return;
  if (viewId === "studio" && !isStaffMember()) {
    showStreakToast("Instructor or admin access is required for Academy Studio.");
    return;
  }
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active-view", view.id === viewId));
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewId));
  document.getElementById("page-title").textContent = {
    dashboard: "Dashboard",
    lessons: "Lessons",
    scenario: "Scenario Practice",
    quiz: "Knowledge Quiz",
    progress: "Progress",
    community: "Responder Academy",
    studio: "Academy Studio"
  }[viewId];

  if (viewId === "community" || viewId === "studio") {
    loadAcademyData();
  }
}

function renderStats() {
  document.getElementById("stat-lessons").textContent = `${progress.completedLessons.length}/${lessons.length}`;
  document.getElementById("stat-score").textContent = progress.quizTaken ? `${progress.quizScore}%` : "0%";
  document.getElementById("stat-scenarios").textContent = String(progress.scenariosPassed);
}

function renderAccount() {
  const displayName = progress.profileName || "Create your account";
  const backendLabel = currentUser ? "Secure backend account" : (supabaseClient ? "Not signed in" : "Authentication unavailable");
  const teamName = `${progress.role || "Competitor"} · ${backendLabel}`;
  const initials = (progress.initials || progress.profileName.slice(0, 2) || "FA").toUpperCase();
  const earnedToday = progress.lastStreakDate === todayKey();

  document.getElementById("profile-name").textContent = displayName;
  document.getElementById("profile-team").textContent = teamName;
  document.getElementById("profile-avatar").textContent = initials;
  document.getElementById("streak-count").textContent = String(progress.streak);
  document.getElementById("xp-count").textContent = String(progress.totalXp);
  document.getElementById("daily-goal-text").textContent = earnedToday
    ? "Daily streak earned. Come back tomorrow to keep it alive."
    : "Complete one quiz or scenario today to earn +1 streak.";

  document.getElementById("account-button-text").textContent = currentUser ? "Profile" : "Login";
  document.getElementById("auth-status").textContent = authMessage || defaultAuthMessage();
  document.getElementById("logout-button").classList.toggle("hidden", !currentUser);
  document.getElementById("account-name").value = progress.profileName;
  document.getElementById("account-email").value = progress.email || currentUser?.email || "";
  document.getElementById("account-initials").value = initials;
  document.getElementById("account-role").value = progress.role || "Competitor";
  document.getElementById("account-source").value = progress.heardFrom || "Other";
  renderAuthMode();
}

function renderAuthMode() {
  const isRegister = authMode === "register";
  const isRecovery = authMode === "recovery";
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === authMode);
  });
  document.querySelectorAll(".register-only").forEach((field) => {
    field.classList.toggle("hidden", !isRegister);
  });
  document.querySelectorAll(".login-only").forEach((element) => {
    element.classList.toggle("hidden", authMode !== "login");
  });
  document.querySelectorAll(".recovery-only").forEach((element) => {
    element.classList.toggle("hidden", !isRecovery);
  });
  document.querySelectorAll(".standard-auth-only").forEach((element) => {
    element.classList.toggle("hidden", isRecovery);
  });
  document.getElementById("auth-tabs").classList.toggle("hidden", isRecovery);
  document.getElementById("auth-email-field").classList.toggle("hidden", isRecovery);
  document.getElementById("auth-heading").textContent = isRecovery ? "Reset your password" : "Sign in to start training";
  document.getElementById("auth-description").textContent = isRecovery
    ? "The recovery link is verified. Choose a new password for your account."
    : "An account is required to access lessons, scenarios, quizzes, and progress.";
  document.getElementById("account-password").setAttribute("autocomplete", isRecovery || isRegister ? "new-password" : "current-password");
  document.getElementById("account-submit-text").textContent = isRecovery
    ? "Save new password"
    : (isRegister ? "Create account and send confirmation email" : "Login");
}

function renderRecommendations() {
  const container = document.getElementById("recommended-lessons");
  const nextLessons = lessons.filter((lesson) => !progress.completedLessons.includes(lesson.id)).slice(0, 3);
  const items = nextLessons.length ? nextLessons : lessons.slice(0, 3);
  container.innerHTML = items.map((lesson) => lessonCard(lesson)).join("");
  hydrateIcons();
}

function renderLessonCategories() {
  const container = document.getElementById("lesson-categories");
  const selectedCategory = lessonCategories.find((category) => category.id === selectedLessonCategoryId) || lessonCategories[0];
  container.innerHTML = lessonCategories.map((category) => `
    <button class="category-tab ${category.id === selectedLessonCategoryId ? "active" : ""}" type="button" data-lesson-category="${category.id}">
      <i data-lucide="${category.icon}"></i>
      <span>${category.name}</span>
    </button>
  `).join("");
  document.getElementById("lesson-category-summary").innerHTML = `
    <h3>${selectedCategory.name}</h3>
    <p>${selectedCategory.description}</p>
  `;
  hydrateIcons();
}

function lessonCard(lesson) {
  return `
    <article class="lesson-card">
      <span class="tag">${lesson.tag}</span>
      <h2>${lesson.title}</h2>
      <p>${lesson.summary}</p>
      <button class="lesson-action" type="button" data-complete="${lesson.id}">
        <i data-lucide="${progress.completedLessons.includes(lesson.id) ? "check" : "circle"}"></i>
        <span>${progress.completedLessons.includes(lesson.id) ? "Learned" : "Mark learned +5 XP"}</span>
      </button>
    </article>
  `;
}

function renderLessons() {
  const container = document.getElementById("lesson-list");
  const visibleLessons = lessons.filter((lesson) => lesson.categoryId === selectedLessonCategoryId);
  container.innerHTML = visibleLessons.map((lesson) => `
    <article class="lesson-row">
      <div class="lesson-icon"><i data-lucide="${lesson.icon}"></i></div>
      <div>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
        ${expandedLessonId === lesson.id ? lessonDetail(lesson) : ""}
      </div>
      <div class="lesson-actions">
        <button class="lesson-action" type="button" data-expand-lesson="${lesson.id}">
          <i data-lucide="${expandedLessonId === lesson.id ? "chevron-up" : "chevron-down"}"></i>
          <span>${expandedLessonId === lesson.id ? "Close" : "Open"}</span>
        </button>
      </div>
    </article>
  `).join("");
  hydrateIcons();
}

function lessonDetail(lesson) {
  return `
    <div class="lesson-detail">
      ${lessonBlock("Signs", lesson.signs)}
      ${lessonBlock("What to do", lesson.steps)}
      ${lessonBlock("Avoid", lesson.avoid)}
      ${lessonBlock("Team roles", lesson.team)}
      ${lessonBlock("Practice scenarios", lesson.scenarios)}
      <section class="lesson-complete-panel">
        <h4>Finish lesson</h4>
        <p>${progress.completedLessons.includes(lesson.id) ? "This lesson is already counted in your progress." : "Mark this lesson as learned when you have read it and can explain the main actions."}</p>
        <button class="lesson-action" type="button" data-complete="${lesson.id}">
          <i data-lucide="${progress.completedLessons.includes(lesson.id) ? "check" : "circle"}"></i>
          <span>${progress.completedLessons.includes(lesson.id) ? "Learned" : "Mark learned +5 XP"}</span>
        </button>
      </section>
    </div>
  `;
}

function lessonBlock(title, items) {
  return `
    <section>
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderCategorySelect() {
  const select = document.getElementById("scenario-category");
  select.innerHTML = competitionCategories.map((category) => `
    <option value="${category.id}" ${category.id === selectedCategoryId ? "selected" : ""}>${category.name}</option>
  `).join("");
  document.getElementById("scenario-difficulty").value = selectedDifficulty;
}

function renderScenario() {
  const step = scenarioSteps[scenarioIndex];
  if (!step) return;
  document.getElementById("scenario-step").textContent = `Step ${scenarioIndex + 1} of ${scenarioSteps.length}`;
  document.getElementById("scenario-result").textContent = "In progress";
  document.getElementById("scenario-title").textContent = activeScenario.title;
  document.getElementById("scenario-brief").textContent = activeScenario.brief;
  document.getElementById("scenario-text").textContent = step.text;
  document.getElementById("scenario-options").innerHTML = step.options.map(([label], index) => `
    <button class="option-button" type="button" data-scenario-option="${index}">${label}</button>
  `).join("");
  document.getElementById("scenario-focus").innerHTML = activeScenario.focus.map((item) => `
    <span>${item}</span>
  `).join("");
}

function answerScenario(optionIndex) {
  const step = scenarioSteps[scenarioIndex];
  const [label, correct, feedback] = step.options[optionIndex];
  document.querySelectorAll("[data-scenario-option]").forEach((button, index) => {
    const isCorrect = step.options[index][1];
    button.disabled = true;
    if (isCorrect) button.classList.add("correct");
    if (index === optionIndex && !correct) button.classList.add("wrong");
  });
  document.getElementById("scenario-feedback").textContent = feedback;

  if (!correct) return;

  if (scenarioIndex === scenarioSteps.length - 1) {
    document.getElementById("scenario-result").textContent = "Passed";
    progress.scenariosPassed += 1;
    awardTrainingReward("scenario", selectedDifficulty === "advanced" ? 35 : 25);
    return;
  }

  window.setTimeout(() => {
    scenarioIndex += 1;
    renderScenario();
    document.getElementById("scenario-feedback").textContent = "Good. Keep the order clear and calm.";
  }, 900);
}

function renderQuiz() {
  quizAnswered = false;
  const item = quizQuestions[quizIndex];
  if (!item) return;
  document.getElementById("quiz-count").textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.getElementById("quiz-live-score").textContent = `${quizCorrect} correct`;
  document.getElementById("quiz-question").textContent = item.question;
  document.getElementById("quiz-options").innerHTML = item.options.map((option, index) => `
    <button class="option-button" type="button" data-quiz-option="${index}">${option}</button>
  `).join("");
}

function answerQuiz(optionIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = quizQuestions[quizIndex];
  const correct = optionIndex === item.answer;
  if (correct) quizCorrect += 1;

  document.querySelectorAll("[data-quiz-option]").forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === optionIndex && !correct) button.classList.add("wrong");
  });

  document.getElementById("quiz-feedback").textContent = `${correct ? "Correct." : "Not quite."} ${item.why}`;
  document.getElementById("quiz-live-score").textContent = `${quizCorrect} correct`;

  window.setTimeout(() => {
    if (quizIndex === quizQuestions.length - 1) {
      progress.quizTaken = true;
      progress.quizScore = Math.round((quizCorrect / quizQuestions.length) * 100);
      recordQuizAttempt();
      awardTrainingReward("quiz", 15);
      document.getElementById("quiz-feedback").textContent = `Quiz complete. Your score is ${progress.quizScore}%.`;
      return;
    }
    quizIndex += 1;
    renderQuiz();
  }, 1100);
}

function restartScenario() {
  scenarioIndex = 0;
  document.getElementById("scenario-feedback").textContent = "Choose the safest first action.";
  renderScenario();
}

function generateScenario() {
  scenarioIndex = 0;
  buildScenario();
  document.getElementById("scenario-feedback").textContent = "New scenario generated. Start with safety, leadership, and a primary check.";
  renderScenario();
}

function restartQuiz() {
  quizIndex = 0;
  quizCorrect = 0;
  document.getElementById("quiz-feedback").textContent = "Select an answer to see why it is right or wrong.";
  renderQuiz();
}

function renderProgress() {
  const lessonCompletion = progress.completedLessons.length / lessons.length;
  const quizCompletion = progress.quizTaken ? 1 : 0;
  const scenarioCompletion = progress.scenariosPassed > 0 ? 1 : 0;
  const overall = Math.round(((lessonCompletion + quizCompletion + scenarioCompletion) / 3) * 100);
  document.getElementById("progress-percent").textContent = `${overall}%`;
  document.getElementById("progress-ring").style.strokeDashoffset = String(352 - (352 * overall) / 100);
  document.getElementById("progress-list").innerHTML = `
    <article class="progress-row">
      <div class="lesson-icon"><i data-lucide="book-open-check"></i></div>
      <div><h3>Lesson completion</h3><p>${progress.completedLessons.length} of ${lessons.length} lessons completed</p></div>
      <span class="completed">${Math.round(lessonCompletion * 100)}%</span>
    </article>
    <article class="progress-row">
      <div class="lesson-icon"><i data-lucide="list-checks"></i></div>
      <div><h3>Knowledge quiz</h3><p>${progress.quizTaken ? "Completed" : "Not taken yet"}</p></div>
      <span class="completed">${progress.quizTaken ? `${progress.quizScore}%` : "0%"}</span>
    </article>
    <article class="progress-row">
      <div class="lesson-icon"><i data-lucide="route"></i></div>
      <div><h3>Scenario practice</h3><p>${progress.scenariosPassed} successful run${progress.scenariosPassed === 1 ? "" : "s"}</p></div>
      <span class="completed">${scenarioCompletion ? "Done" : "Start"}</span>
    </article>
  `;
  hydrateIcons();
}

async function loadAcademyData() {
  if (!supabaseClient || !currentUser) return;

  await supabaseClient.rpc("refresh_my_achievements");

  const [leaderboardResult, catalogResult, earnedResult, certificatesResult, resourcesResult, contentResult, notificationsResult] = await Promise.all([
    supabaseClient.rpc("get_leaderboard", { limit_count: 20 }),
    supabaseClient.from("achievements").select("*").order("sort_order", { ascending: true }),
    supabaseClient.from("user_achievements").select("achievement_id, earned_at"),
    supabaseClient.from("certificates").select("*").order("issued_at", { ascending: false }),
    supabaseClient.from("resources").select("*").eq("active", true).order("created_at", { ascending: false }).limit(20),
    supabaseClient.from("content_items").select("*").eq("status", "published").order("created_at", { ascending: false }).limit(20),
    supabaseClient.from("notifications").select("*").order("created_at", { ascending: false }).limit(20)
  ]);

  academyData = {
    leaderboard: leaderboardResult.data || [],
    achievementCatalog: catalogResult.data || [],
    earnedAchievementIds: (earnedResult.data || []).map((item) => item.achievement_id),
    certificates: certificatesResult.data || [],
    resources: resourcesResult.data || [],
    content: contentResult.data || [],
    notifications: notificationsResult.data || []
  };

  renderAcademy();
  renderStudioAccess();
}

function renderStudioAccess() {
  const studioNav = document.getElementById("studio-nav");
  studioNav.classList.toggle("hidden", !isStaffMember());
  document.getElementById("academy-role").textContent = currentAppRole === "admin"
    ? "Administrator"
    : currentAppRole === "instructor" ? "Instructor" : "Learner";
}

function renderAcademy() {
  renderStudioAccess();

  const leaderboard = document.getElementById("leaderboard-list");
  leaderboard.innerHTML = academyData.leaderboard.length
    ? academyData.leaderboard.map((entry) => `
      <div class="leaderboard-row">
        <span class="leaderboard-rank">#${entry.rank}</span>
        <span class="mini-avatar">${escapeHtml(entry.initials || "FA")}</span>
        <div class="leaderboard-person"><strong>${escapeHtml(entry.display_name)}</strong><span>${entry.lessons_completed} lessons · ${entry.streak} day streak</span></div>
        <span class="leaderboard-xp">${entry.total_xp} XP</span>
      </div>
    `).join("")
    : "<p>No rankings yet. Be the first responder on the board.</p>";

  document.getElementById("achievement-count").textContent = `${academyData.earnedAchievementIds.length}/${academyData.achievementCatalog.length || 7}`;
  document.getElementById("achievement-list").innerHTML = academyData.achievementCatalog.length
    ? academyData.achievementCatalog.map((achievement) => {
      const earned = academyData.earnedAchievementIds.includes(achievement.id);
      return `
        <div class="achievement-badge ${earned ? "earned" : ""}">
          <span class="feature-icon amber"><i data-lucide="${escapeHtml(achievement.icon)}"></i></span>
          <div><strong>${escapeHtml(achievement.title)}</strong><span>${escapeHtml(achievement.description)}</span></div>
        </div>`;
    }).join("")
    : "<p>Achievements will appear after the platform upgrade is applied.</p>";

  const certificate = academyData.certificates[0];
  document.getElementById("certificate-status").textContent = certificate
    ? `Certificate ${certificate.certificate_code} was issued on ${new Date(certificate.issued_at).toLocaleDateString()}.`
    : "Keep training to unlock your certificate.";
  document.querySelector("#issue-certificate span").textContent = certificate ? "View certificate" : "Check eligibility";

  document.getElementById("resource-count").textContent = `${academyData.resources.length} file${academyData.resources.length === 1 ? "" : "s"}`;
  document.getElementById("resource-list").innerHTML = academyData.resources.length
    ? academyData.resources.map((resource) => `
      <div class="resource-row">
        <div><strong>${escapeHtml(resource.title)}</strong><span>${escapeHtml(resource.category)}${resource.description ? ` · ${escapeHtml(resource.description)}` : ""}</span></div>
        <button class="secondary-button resource-open" type="button" data-resource-id="${resource.id}"><i data-lucide="external-link"></i><span>Open</span></button>
      </div>
    `).join("")
    : "<p>No resources uploaded yet.</p>";

  document.getElementById("academy-feed").innerHTML = academyData.content.length
    ? academyData.content.map((item) => `
      <div class="feed-row">
        <div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.content_type)} · ${escapeHtml(item.summary)}</span></div>
        <span class="academy-role">${new Date(item.created_at).toLocaleDateString()}</span>
      </div>
    `).join("")
    : "<p>No announcements yet.</p>";

  const unreadCount = academyData.notifications.filter((item) => !item.read_at).length;
  const notificationCount = document.getElementById("notification-count");
  notificationCount.textContent = String(unreadCount);
  notificationCount.classList.toggle("hidden", unreadCount === 0);

  renderActiveRoom();
  hydrateIcons();
}

function renderActiveRoom() {
  const container = document.getElementById("active-room");
  const status = document.getElementById("room-status");

  if (!activeRoomRecord) {
    container.classList.add("hidden");
    status.textContent = "Offline";
    status.classList.remove("live");
    return;
  }

  const prompt = activeRoomRecord.active_prompt?.text || "Waiting for the instructor to begin the scenario.";
  status.textContent = activeRoomRecord.status === "live" ? "Live now" : activeRoomRecord.status;
  status.classList.toggle("live", activeRoomRecord.status === "live");
  container.classList.remove("hidden");
  container.innerHTML = `
    <h3>${escapeHtml(activeRoomRecord.title)}</h3>
    <p><strong>Room ${escapeHtml(activeRoomRecord.room_code)}</strong> · ${activeRoomParticipantCount} participant${activeRoomParticipantCount === 1 ? "" : "s"}</p>
    <p>${escapeHtml(prompt)}</p>
  `;
}

async function refreshActiveRoom() {
  if (!activeRoomRecord || !supabaseClient) return;
  const [{ data: room }, participantResult] = await Promise.all([
    supabaseClient.from("training_rooms").select("*").eq("id", activeRoomRecord.id).maybeSingle(),
    supabaseClient.from("room_participants").select("user_id", { count: "exact", head: true }).eq("room_id", activeRoomRecord.id)
  ]);
  if (room) activeRoomRecord = room;
  activeRoomParticipantCount = participantResult.count || 0;
  renderActiveRoom();
}

function subscribeToActiveRoom() {
  if (!supabaseClient || !activeRoomRecord) return;
  if (roomRealtimeChannel) supabaseClient.removeChannel(roomRealtimeChannel);

  roomRealtimeChannel = supabaseClient
    .channel(`training-room-${activeRoomRecord.id}`)
    .on("postgres_changes", { event: "*", schema: "public", table: "training_rooms", filter: `id=eq.${activeRoomRecord.id}` }, refreshActiveRoom)
    .on("postgres_changes", { event: "*", schema: "public", table: "room_participants", filter: `room_id=eq.${activeRoomRecord.id}` }, refreshActiveRoom)
    .subscribe();
}

async function joinTrainingRoom() {
  const roomCode = document.getElementById("room-code").value.trim().toUpperCase();
  if (!roomCode) {
    showStreakToast("Enter a room code first.");
    return;
  }

  const { data: room, error } = await supabaseClient
    .from("training_rooms")
    .select("*")
    .eq("room_code", roomCode)
    .neq("status", "finished")
    .maybeSingle();

  if (error || !room) {
    showStreakToast("No active training room was found with that code.");
    return;
  }

  const { error: joinError } = await supabaseClient.from("room_participants").insert({
    room_id: room.id,
    user_id: currentUser.id
  });
  if (joinError && joinError.code !== "23505") {
    showStreakToast(joinError.message);
    return;
  }

  activeRoomRecord = room;
  subscribeToActiveRoom();
  await refreshActiveRoom();
  showStreakToast(`Joined room ${roomCode}.`);
}

async function runCoachSearch() {
  const query = document.getElementById("coach-search").value.trim().toLowerCase();
  const results = document.getElementById("coach-results");
  if (query.length < 2) {
    results.innerHTML = "<p>Enter at least two characters.</p>";
    return;
  }

  results.innerHTML = "<p>Searching trusted academy content...</p>";
  const { data: semanticData, error: semanticError } = await supabaseClient.functions.invoke("semantic-search", {
    body: { query }
  });
  if (!semanticError && semanticData?.results?.length) {
    results.innerHTML = semanticData.results.map((item) => `
      <div class="coach-result"><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.content_type)} · ${escapeHtml(item.summary)} · ${Math.round(item.similarity * 100)}% match</span></div></div>
    `).join("");
    return;
  }

  const lessonMatches = lessons
    .filter((lesson) => [lesson.title, lesson.summary, lesson.tag, ...(lesson.signs || []), ...(lesson.actions || [])].join(" ").toLowerCase().includes(query))
    .map((lesson) => ({ title: lesson.title, type: "Lesson", summary: lesson.summary }));
  const contentMatches = academyData.content
    .filter((item) => `${item.title} ${item.summary} ${JSON.stringify(item.body)}`.toLowerCase().includes(query))
    .map((item) => ({ title: item.title, type: item.content_type, summary: item.summary }));
  const resourceMatches = academyData.resources
    .filter((item) => `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query))
    .map((item) => ({ title: item.title, type: "Resource", summary: item.description || item.category }));
  const matches = [...lessonMatches, ...contentMatches, ...resourceMatches].slice(0, 8);

  results.innerHTML = matches.length
    ? matches.map((item) => `<div class="coach-result"><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.type)} · ${escapeHtml(item.summary)}</span></div></div>`).join("")
    : "<p>No matching training content was found.</p>";
}

async function openAcademyResource(resourceId) {
  const resource = academyData.resources.find((item) => item.id === resourceId);
  if (!resource) return;

  if (resource.external_url) {
    window.open(resource.external_url, "_blank", "noopener,noreferrer");
    return;
  }

  const resourceWindow = window.open("", "_blank");
  const { data, error } = await supabaseClient.storage
    .from("training-resources")
    .createSignedUrl(resource.file_path, 3600);

  if (error || !data?.signedUrl) {
    if (resourceWindow) resourceWindow.close();
    showStreakToast(error?.message || "The resource could not be opened.");
    return;
  }

  if (resourceWindow) resourceWindow.location = data.signedUrl;
}

function openCertificate(certificate) {
  document.getElementById("certificate-name").textContent = progress.profileName || currentUser?.email?.split("@")[0] || "First Aid Learner";
  document.getElementById("certificate-date").textContent = `Issued ${new Date(certificate.issued_at).toLocaleDateString()}`;
  document.getElementById("certificate-code").textContent = `Certificate ${certificate.certificate_code}`;
  document.getElementById("certificate-modal").classList.remove("hidden");
  hydrateIcons();
}

async function issueOrOpenCertificate() {
  if (academyData.certificates[0]) {
    openCertificate(academyData.certificates[0]);
    return;
  }

  const { data, error } = await supabaseClient.rpc("issue_my_certificate");
  if (error) {
    showStreakToast(error.message);
    return;
  }
  const certificate = Array.isArray(data) ? data[0] : data;
  if (certificate) {
    academyData.certificates = [certificate];
    renderAcademy();
    openCertificate(certificate);
  }
}

function hydrateIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("click", (event) => {
  if (!currentUser && event.target.closest(".app-shell")) {
    event.preventDefault();
    requireAuthentication();
    return;
  }

  const nav = event.target.closest("[data-view]");
  if (nav) setView(nav.dataset.view);

  const goto = event.target.closest("[data-goto]");
  if (goto) setView(goto.dataset.goto);

  const complete = event.target.closest("[data-complete]");
  if (complete) {
    const id = complete.dataset.complete;
    if (!progress.completedLessons.includes(id)) {
      progress.completedLessons.push(id);
      progress.totalXp += 5;
      syncLessonLearned(id);
      showStreakToast("Lesson learned. +5 XP");
    } else {
      showStreakToast("Lesson already learned.");
    }
    saveProgress();
    renderLessons();
  }

  const categoryButton = event.target.closest("[data-lesson-category]");
  if (categoryButton) {
    selectedLessonCategoryId = categoryButton.dataset.lessonCategory;
    expandedLessonId = "";
    renderLessonCategories();
    renderLessons();
  }

  const expandLesson = event.target.closest("[data-expand-lesson]");
  if (expandLesson) {
    expandedLessonId = expandedLessonId === expandLesson.dataset.expandLesson ? "" : expandLesson.dataset.expandLesson;
    renderLessons();
  }

  const scenarioOption = event.target.closest("[data-scenario-option]");
  if (scenarioOption) answerScenario(Number(scenarioOption.dataset.scenarioOption));

  const quizOption = event.target.closest("[data-quiz-option]");
  if (quizOption) answerQuiz(Number(quizOption.dataset.quizOption));

  const resourceButton = event.target.closest("[data-resource-id]");
  if (resourceButton) openAcademyResource(resourceButton.dataset.resourceId);
});

document.addEventListener("change", (event) => {
  if (!currentUser && event.target.closest(".app-shell")) {
    event.preventDefault();
    requireAuthentication();
    return;
  }

  if (event.target.id === "scenario-category") {
    selectedCategoryId = event.target.value;
    generateScenario();
  }

  if (event.target.id === "scenario-difficulty") {
    selectedDifficulty = event.target.value;
    generateScenario();
  }
});

document.getElementById("generate-scenario").addEventListener("click", generateScenario);
document.getElementById("restart-scenario").addEventListener("click", restartScenario);
document.getElementById("restart-quiz").addEventListener("click", restartQuiz);
document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    authMode = button.dataset.authMode;
    authMessage = "";
    renderAuthMode();
    document.getElementById("auth-status").textContent = defaultAuthMessage();
  });
});
document.getElementById("account-button").addEventListener("click", () => {
  authMessage = "";
  renderAccount();
  document.getElementById("account-modal").classList.remove("hidden");
  document.getElementById("account-email").focus();
});
document.getElementById("close-account").addEventListener("click", () => {
  if (!currentUser) return;
  document.getElementById("account-modal").classList.add("hidden");
});
document.getElementById("account-modal").addEventListener("click", (event) => {
  if (event.target.id === "account-modal" && currentUser) {
    document.getElementById("account-modal").classList.add("hidden");
  }
});
document.getElementById("account-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("account-email").value.trim();
  const password = document.getElementById("account-password").value;
  const name = document.getElementById("account-name").value.trim();
  const initials = document.getElementById("account-initials").value.trim();
  const role = document.getElementById("account-role").value;
  const heardFrom = document.getElementById("account-source").value;

  if (!supabaseClient) {
    showAuthMessage("Secure login is unavailable. Check the Supabase configuration.");
    return;
  }

  if (authMode === "recovery") {
    if (password.length < 8) {
      showAuthMessage("Your new password must contain at least 8 characters.");
      return;
    }
    const { error } = await supabaseClient.auth.updateUser({ password });
    if (error) {
      showAuthMessage(friendlyAuthError(error));
      return;
    }
    authMode = "login";
    document.getElementById("account-password").value = "";
    authMessage = "Password updated successfully. You are now signed in.";
    renderAll();
    updateAuthGate();
    showStreakToast(authMessage);
    return;
  }

  if (!email || password.length < 8) {
    showAuthMessage("Use a valid email and a password with at least 8 characters.");
    return;
  }

  if (authMode === "login") {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      showAuthMessage(friendlyAuthError(error));
      return;
    }
    currentUser = data.session?.user || data.user;
    authMessage = "";
    await loadRemoteProgress();
    await loadRotatingQuizQuestions();
    await loadAcademyData();
    renderAll();
    updateAuthGate();
    document.getElementById("account-modal").classList.add("hidden");
    showStreakToast("Logged in securely.");
    return;
  }

  if (!name) {
    showAuthMessage("Add your name to register.");
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
        initials: (initials || name.slice(0, 2) || "FA").toUpperCase(),
        role,
        heard_from: heardFrom
      }
    }
  });

  if (error) {
    showAuthMessage(friendlyAuthError(error));
    return;
  }

  if (!data.session) {
    currentUser = null;
    authMode = "login";
    renderAuthMode();
    document.getElementById("account-password").value = "";
    showAuthMessage("Registration successful — we sent a confirmation email. Open it, click the confirmation link, then return here and log in. Check your Spam folder if you cannot see it.");
    updateAuthGate();
    return;
  }

  currentUser = data.session.user;
  if (currentUser) {
    await supabaseClient.from("profiles").upsert({
      id: currentUser.id,
      display_name: name,
      team_name: "First aid learner",
      initials: (initials || name.slice(0, 2) || "FA").toUpperCase(),
      role,
      heard_from: heardFrom,
      updated_at: new Date().toISOString()
    });
    progress = {
      ...progress,
      email,
      profileName: name,
      initials: (initials || name.slice(0, 2) || "FA").toUpperCase(),
      role,
      heardFrom
    };
    await syncRemoteProgress();
    await loadRemoteProgress();
  }

  saveProgress();
  authMessage = "";
  await loadRotatingQuizQuestions();
  await loadAcademyData();
  renderAll();
  updateAuthGate();
  document.getElementById("account-modal").classList.add("hidden");
  showStreakToast("Account created and signed in securely.");
});
async function signInWithSocialProvider(provider) {
  if (!supabaseClient) {
    showAuthMessage("Social sign-in is unavailable. Check the Supabase configuration.");
    return;
  }

  const providerName = provider === "google" ? "Google" : "GitHub";
  const buttons = [
    document.getElementById("google-auth-button"),
    document.getElementById("github-auth-button")
  ];
  buttons.forEach((button) => { button.disabled = true; });
  showAuthMessage(`Opening ${providerName} secure sign-in...`);
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider,
    options: { redirectTo }
  });
  if (error) {
    buttons.forEach((button) => { button.disabled = false; });
    showAuthMessage(friendlyAuthError(error));
  }
}

document.getElementById("google-auth-button").addEventListener("click", () => {
  signInWithSocialProvider("google");
});
document.getElementById("github-auth-button").addEventListener("click", () => {
  signInWithSocialProvider("github");
});
document.getElementById("password-visibility-button").addEventListener("click", () => {
  const passwordInput = document.getElementById("account-password");
  const button = document.getElementById("password-visibility-button");
  const showing = passwordInput.type === "text";
  passwordInput.type = showing ? "password" : "text";
  button.setAttribute("aria-pressed", String(!showing));
  button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  button.innerHTML = `<i data-lucide="${showing ? "eye" : "eye-off"}"></i>`;
  hydrateIcons();
});
document.getElementById("forgot-password-button").addEventListener("click", async () => {
  const email = document.getElementById("account-email").value.trim();
  if (!supabaseClient) {
    showAuthMessage("Password recovery is currently unavailable.");
    return;
  }
  if (!email) {
    showAuthMessage("Enter your email address first, then select ‘Forgot your password?’ again.");
    document.getElementById("account-email").focus();
    return;
  }
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo });
  if (error) {
    showAuthMessage(friendlyAuthError(error));
    return;
  }
  showAuthMessage("Password reset email sent. Open it and click the recovery link to choose a new password. Check your Spam folder too.");
});

document.getElementById("join-room").addEventListener("click", joinTrainingRoom);
document.getElementById("run-coach-search").addEventListener("click", runCoachSearch);
document.getElementById("coach-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    runCoachSearch();
  }
});
document.getElementById("issue-certificate").addEventListener("click", issueOrOpenCertificate);
document.getElementById("close-certificate").addEventListener("click", () => {
  document.getElementById("certificate-modal").classList.add("hidden");
});
document.getElementById("print-certificate").addEventListener("click", () => window.print());
document.getElementById("reindex-search").addEventListener("click", async () => {
  if (!isStaffMember()) return;
  showStreakToast("Refreshing the smart-search index...");
  const { data, error } = await supabaseClient.functions.invoke("semantic-search", { body: { action: "index" } });
  showStreakToast(error ? "Smart search deployment is not active yet." : `${data.indexed} academy items indexed.`);
});

document.getElementById("notification-button").addEventListener("click", async () => {
  if (!academyData.notifications.length) {
    showStreakToast("You have no new notifications.");
    return;
  }

  const unread = academyData.notifications.filter((item) => !item.read_at);
  const message = unread[0] || academyData.notifications[0];
  showStreakToast(`${message.title}: ${message.message}`);

  if (unread.length) {
    await supabaseClient
      .from("notifications")
      .update({ read_at: new Date().toISOString() })
      .in("id", unread.map((item) => item.id));
    await loadAcademyData();
  }
});

document.getElementById("content-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isStaffMember()) return;

  const contentType = document.getElementById("content-type").value;
  const title = document.getElementById("content-title").value.trim();
  const summary = document.getElementById("content-summary").value.trim();
  const { error } = await supabaseClient.from("content_items").insert({
    content_type: contentType,
    title,
    summary,
    body: { text: summary },
    status: "published",
    created_by: currentUser.id
  });

  if (error) {
    showStreakToast(error.message);
    return;
  }
  event.currentTarget.reset();
  await loadAcademyData();
  showStreakToast("Academy content published.");
});

document.getElementById("resource-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isStaffMember()) return;

  const title = document.getElementById("resource-title").value.trim();
  const category = document.getElementById("resource-category").value;
  const file = document.getElementById("resource-file").files[0];
  if (!file || file.size > 50 * 1024 * 1024) {
    showStreakToast("Choose an allowed file smaller than 50 MB.");
    return;
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const filePath = `${currentUser.id}/${Date.now()}-${safeName}`;
  const { error: uploadError } = await supabaseClient.storage
    .from("training-resources")
    .upload(filePath, file, { upsert: false });
  if (uploadError) {
    showStreakToast(uploadError.message);
    return;
  }

  const { error: metadataError } = await supabaseClient.from("resources").insert({
    title,
    category,
    file_path: filePath,
    created_by: currentUser.id
  });
  if (metadataError) {
    await supabaseClient.storage.from("training-resources").remove([filePath]);
    showStreakToast(metadataError.message);
    return;
  }

  event.currentTarget.reset();
  await loadAcademyData();
  showStreakToast("Training resource uploaded securely.");
});

document.getElementById("room-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isStaffMember()) return;

  const title = document.getElementById("room-title").value.trim();
  const prompt = document.getElementById("room-prompt").value.trim();
  const roomCode = Math.random().toString(36).slice(2, 8).toUpperCase();
  const { data: room, error } = await supabaseClient.from("training_rooms").insert({
    room_code: roomCode,
    title,
    host_id: currentUser.id,
    status: "live",
    active_prompt: { text: prompt || "The instructor is preparing the opening scenario." }
  }).select().single();

  if (error) {
    showStreakToast(error.message);
    return;
  }

  await supabaseClient.from("room_participants").insert({ room_id: room.id, user_id: currentUser.id });
  activeRoomRecord = room;
  subscribeToActiveRoom();
  await refreshActiveRoom();
  document.getElementById("studio-room-result").innerHTML = `<div class="active-room"><strong>Room code: ${escapeHtml(roomCode)}</strong><p>Share this code with your learners.</p></div>`;
  document.getElementById("room-code").value = roomCode;
  showStreakToast(`Live room ${roomCode} is ready.`);
});

document.getElementById("logout-button").addEventListener("click", async () => {
  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }
  currentUser = null;
  currentAppRole = "learner";
  activeRoomRecord = null;
  academyData = { leaderboard: [], achievementCatalog: [], earnedAchievementIds: [], certificates: [], resources: [], content: [], notifications: [] };
  authMode = "login";
  authMessage = "You have been logged out. Sign in to continue training.";
  progress = { ...defaultProgress };
  localStorage.removeItem("firstAidTrainerProgress");
  renderAll();
  updateAuthGate();
  document.getElementById("account-modal").classList.remove("hidden");
  showStreakToast("Logged out.");
});
function renderAll() {
  buildScenario();
  renderLessonCategories();
  renderCategorySelect();
  renderStats();
  renderAccount();
  renderRecommendations();
  renderLessons();
  renderScenario();
  renderQuiz();
  renderProgress();
  renderAcademy();
  hydrateIcons();
}

async function initApp() {
  if (supabaseClient) {
    const { data } = await supabaseClient.auth.getSession();
    currentUser = data.session?.user || null;
    if (currentUser) {
      await loadRemoteProgress();
      await loadAcademyData();
      authMessage = "";
    } else {
      authMessage = "Login or create an account to unlock the training platform.";
    }

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
      currentUser = session?.user || null;
      if (event === "PASSWORD_RECOVERY" && currentUser) {
        authMode = "recovery";
        authMessage = "Recovery link accepted. Enter a new password below.";
        renderAll();
        updateAuthGate();
        document.getElementById("account-modal").classList.remove("hidden");
        document.getElementById("account-password").value = "";
        document.getElementById("account-password").focus();
        return;
      }
      if (currentUser) {
        await loadRemoteProgress();
        await loadRotatingQuizQuestions();
        await loadAcademyData();
        authMessage = "";
      } else {
        progress = { ...defaultProgress };
        currentAppRole = "learner";
        authMode = "login";
        authMessage = "Login or create an account to unlock the training platform.";
      }
      renderAll();
      updateAuthGate();
    });
  } else {
    authMessage = "Secure login is unavailable. Check the Supabase configuration.";
  }

  await loadRotatingQuizQuestions();
  quizIndex = 0;
  quizCorrect = 0;
  renderAll();
  updateAuthGate();
}

initApp();
