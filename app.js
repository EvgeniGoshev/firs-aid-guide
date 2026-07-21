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
    name: "School and Campus",
    description: "Everyday emergencies in classrooms, corridors, sports areas, and shared school spaces.",
    places: ["school corridor", "science classroom", "sports hall", "school yard", "cafeteria", "stairwell", "library", "bus stop outside school"],
    patients: ["15-year-old student", "teacher", "visitor", "younger student", "sports coach", "parent volunteer"],
    problems: ["fainting with a minor head injury", "asthma attack after exercise", "severe bleeding from broken glass", "suspected fracture after a fall", "seizure in a classroom", "panic attack after witnessing an injury", "burn from hot water", "possible diabetic emergency"],
    hazards: ["crowd noise", "wet floor", "broken glass nearby", "poor communication from bystanders", "blocked exit", "teacher asking too many questions", "limited first aid kit", "noisy bell and moving students"],
    focus: ["scene safety", "early recognition", "calling emergency help", "reassurance and dignity"]
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
    description: "Control bleeding, protect from shock, and watch for hidden injuries.",
    places: ["workshop", "kitchen", "bike path", "parking area", "school lab", "staircase", "football pitch", "warehouse aisle"],
    patients: ["adult worker", "cyclist", "cook", "delivery driver", "student", "maintenance worker"],
    problems: ["severe arm bleeding", "possible spinal injury", "burn and shock", "deep cut with dizziness", "head injury after a fall", "open fracture concern", "sprained ankle with severe pain", "eye splash from chemical"],
    hazards: ["sharp tools", "traffic nearby", "hot surfaces", "slippery ground", "chemical bottle nearby", "crowded narrow area", "blood on floor", "equipment still running"],
    focus: ["direct pressure", "infection control", "shock position when appropriate", "monitoring changes"]
  },
  {
    id: "medical",
    name: "Medical Emergency",
    description: "Recognize warning signs, call help, and support the casualty while waiting.",
    places: ["library", "office reception", "cafeteria", "bus stop", "school gym", "exam hall", "staff room", "outdoor event tent"],
    patients: ["adult with diabetes", "person with chest pain", "person having a seizure", "person with severe allergy", "student with asthma", "visitor showing stroke signs"],
    problems: ["diabetic emergency", "heart attack symptoms", "epileptic seizure", "anaphylaxis", "asthma attack", "stroke signs", "poisoning concern", "heat illness"],
    hazards: ["confused friends giving advice", "limited medical history", "privacy concerns", "busy room", "missing medication", "language barrier", "panic in the crowd", "unclear symptom start time"],
    focus: ["recognition of symptoms", "safe positioning", "using available medication only as trained", "continuous monitoring"]
  },
  {
    id: "mass-casualty",
    name: "Multi-casualty Drill",
    description: "A changing scene with more than one casualty and the need to prioritize life threats.",
    places: ["school bus stop", "sports field", "stairwell", "community centre", "science corridor", "canteen", "parking area", "festival first aid tent"],
    patients: ["two students", "three bystanders", "a child and an adult", "several team members from another group", "one quiet casualty and one loud casualty", "two athletes and a coach"],
    problems: ["one severe bleed and one minor injury", "one unconscious casualty and one panicking friend", "two falls with different severity", "burns plus smoke irritation", "asthma attack plus ankle injury", "suspected stroke plus distressed relative", "head injury plus nosebleed", "chemical splash plus fainting"],
    hazards: ["confusing witness reports", "limited supplies", "unsafe area nearby", "time pressure from judges", "blocked access for ambulance", "bystanders filming", "one teammate distracted", "weather getting worse"],
    focus: ["triage thinking", "delegation", "calling extra help", "clear final handover"]
  }
];

const scenarioCaseLibrary = [
  {
    id: "school-asthma",
    categoryId: "student-team",
    title: "Breathing Trouble After Sport",
    scene: "At the edge of a school sports hall, a 15-year-old has stopped after a short race. They are sitting forward, wheezing, and can speak only a few words at a time. Their own blue reliever inhaler is in an open sports bag. Other students are crowding around and the hall is hot and noisy.",
    development: "After help with the casualty's own reliever inhaler, the wheeze is still loud and they look exhausted. Their answers are becoming shorter rather than clearer.",
    focus: ["breathing assessment", "upright position", "reliever inhaler", "early escalation"],
    opening: [
      ["Keep them upright, reduce crowding, assess severity, help with their own reliever if trained, and call 112 if signs are severe.", true, "This protects breathing, uses the casualty's prescribed reliever appropriately, and treats short speech and exhaustion as warning signs."],
      ["Move them to a quiet room, lie them flat, and wait ten minutes before deciding whether the inhaler is needed.", false, "Lying flat can make breathing harder, and severe or worsening breathing difficulty should not be observed without active help."],
      ["Walk them slowly around the hall, then use the reliever only if their breathing does not settle with controlled movement.", false, "Exertion can worsen an asthma attack. Keep the casualty at rest in a comfortable upright position."],
      ["Keep them seated, offer another student's reliever without checking the prescription, and delay the emergency call until you know whether that medicine works.", false, "Do not substitute someone else's medicine. Help with the casualty's own prescribed medication and follow your training or dispatcher guidance."]
    ],
    cluesPrompt: "Select every sign that should make you seek emergency help immediately.",
    clues: [
      ["They cannot complete a sentence because of breathlessness.", true],
      ["Their lips or skin are becoming blue or grey.", true],
      ["They are becoming exhausted, confused, or less responsive.", true],
      ["Their breathing is not improving or is getting worse after their reliever.", true],
      ["They say they missed lunch.", false],
      ["Their trainers are wet from the changing room floor.", false]
    ],
    cluesFeedback: "Severe speech difficulty, colour change, exhaustion, confusion, reduced responsiveness, or failure to improve are emergency warning signs.",
    sequencePrompt: "Arrange the response from first priority to ongoing care.",
    sequence: ["Make the space safe and help the casualty sit upright.", "Assess breathing severity and ask about their own reliever inhaler.", "Help them use their own inhaler if trained and allowed.", "Call 112 early if symptoms are severe, worsening, or not improving.", "Keep monitoring breathing and responsiveness until help takes over."],
    sequenceFeedback: "The safe order is positioning and assessment, appropriate help with the casualty's own medication, early escalation, and continuous monitoring.",
    changePrompt: "What is the safest response to this deterioration?",
    changeOptions: [
      ["Call 112 now, keep them upright, continue support within training, and be ready to act if they become unresponsive.", true, "Correct. Exhaustion and shorter answers show deterioration and need an emergency response."],
      ["Keep them upright and wait for the wheeze to become quieter before calling, because less noise usually suggests recovery.", false, "A suddenly quieter chest with exhaustion can mean very poor air movement, not recovery."],
      ["Keep them upright, offer food and a large drink for energy, then reassess before contacting emergency services.", false, "Do not delay emergency care or give food and drink during severe breathing difficulty."],
      ["Move them to a quieter changing room and monitor for five minutes before deciding whether the shorter answers mean deterioration.", false, "Keep the area calm, accessible, and easy for emergency responders to reach."]
    ],
    handoverFact: "inhaler use, the time it was used, and whether breathing improved"
  },
  {
    id: "school-seizure",
    categoryId: "student-team",
    title: "Seizure Between Library Tables",
    scene: "In a school library, a student has fallen between two tables and is having a convulsive seizure. A metal chair and a heavy backpack are close to their head. A friend says the student may have epilepsy, but nobody can find a care plan. The movements began about two minutes ago.",
    development: "The movements stop, but the student is not yet responding. They are breathing and there is no obvious major injury.",
    focus: ["remove nearby hazards", "protect the head", "time the seizure", "recovery and breathing"],
    opening: [
      ["Move nearby objects, cushion the head, start timing, and allow the seizure to continue without holding the student down.", true, "This reduces injury while preserving breathing and gives an accurate seizure duration."],
      ["Hold the limbs gently, place a jacket over the body, and stop timing once the strongest movements have passed.", false, "Restraint can cause injury and does not stop the seizure."],
      ["Place a folded cloth between the teeth, protect the head, and wait for the movements to become less forceful.", false, "Never put anything in the mouth during a seizure."],
      ["Move the student into a chair, support both arms, and begin checking their medical history while the seizure continues.", false, "Do not move the casualty unless the current position is dangerous."],
      ["Protect the head, give small sips of water, and ask the friend whether dehydration has caused previous seizures.", false, "Nothing should be given by mouth until the person has fully recovered."]
    ],
    cluesPrompt: "Select every reason to call 112 for this seizure.",
    clues: [
      ["It lasts more than five minutes or longer than usual for the person.", true],
      ["It is their first known seizure.", true],
      ["Another seizure starts before full recovery.", true],
      ["They are seriously injured or have difficulty breathing afterwards.", true],
      ["Their friend is upset and speaking loudly.", false],
      ["A book fell from the table without hitting anyone.", false]
    ],
    cluesFeedback: "Duration, first seizure, repeated seizures without recovery, injury, and breathing problems are the important escalation clues.",
    sequencePrompt: "Put the seizure response in the safest order.",
    sequence: ["Check the surrounding area and remove objects that could injure the casualty.", "Cushion the head, loosen tight neck clothing, and time the seizure.", "Do not restrain the casualty and do not put anything in the mouth.", "When movements stop, check breathing and place them on their side if appropriate.", "Stay, monitor recovery, and call 112 when an emergency criterion is present."],
    sequenceFeedback: "Protect during the seizure, then check breathing and recovery. Timing determines whether prolonged activity needs emergency escalation.",
    changePrompt: "What should happen now that the movements have stopped?",
    changeOptions: [
      ["Check breathing, place them on their side if appropriate, keep monitoring, and stay until recovery or emergency help arrives.", true, "Correct. The airway and breathing become the immediate priorities after the convulsions stop."],
      ["Sit them upright, ask detailed questions, and check breathing only if they become drowsy or unable to answer.", false, "Check breathing first and allow recovery without forcing them upright."],
      ["Keep them lying flat, give small sips of water for recovery, and assess breathing after they can follow instructions.", false, "There is a choking risk until the person has fully recovered."],
      ["Ask the friend to watch the apparently normal breathing while you leave to find the student's medical information.", false, "Stay with the casualty and continue checking breathing and responsiveness." ]
    ],
    handoverFact: "the exact start and finish time of the seizure and recovery afterwards"
  },
  {
    id: "event-choking",
    categoryId: "public-event",
    title: "Severe Choking at a Food Queue",
    scene: "At a community fair food queue, an adult suddenly grips their throat. They cannot speak, cough effectively, or draw in air. Their face is becoming dusky. A small crowd is forming, but there is clear space behind the casualty and a phone is available.",
    development: "The obstruction has not cleared after the first attempts and the casualty is becoming weaker.",
    focus: ["recognise severe choking", "back blows", "abdominal thrusts", "prepare for collapse"],
    opening: [
      ["Confirm severe choking, call for emergency help, and begin the trained choking sequence without waiting for the condition to change.", true, "The casualty cannot speak, cough, or breathe, so this is severe choking and requires immediate action."],
      ["Keep the casualty standing, offer small sips of water, and begin back blows only if swallowing does not clear the blockage.", false, "A person who cannot breathe cannot safely drink."],
      ["Look inside the mouth, sweep deeply with two fingers, and call for help only if the object cannot be reached.", false, "A blind finger sweep can push the object deeper."],
      ["Encourage another attempt at coughing, observe for a short time, and intervene only if the casualty becomes less responsive.", false, "They do not have an effective cough; severe choking needs immediate treatment." ]
    ],
    cluesPrompt: "Select all observations that identify severe rather than mild choking.",
    clues: [
      ["Unable to speak or make an effective cough.", true],
      ["Unable to breathe normally.", true],
      ["Blue or grey colour and increasing weakness.", true],
      ["Silent distress while gripping the throat.", true],
      ["A strong cough with full sentences between coughs.", false],
      ["Mild throat discomfort while breathing normally.", false]
    ],
    cluesFeedback: "Severe choking is marked by an ineffective or absent cough, inability to speak or breathe, colour change, and deterioration.",
    sequencePrompt: "Arrange the trained adult choking response. Follow local training and dispatcher instructions.",
    sequence: ["Recognise severe choking and call for immediate help.", "Give up to five back blows, checking after each attempt.", "If still blocked and appropriate, give up to five abdominal thrusts.", "Continue alternating trained actions while emergency help is coming.", "If the casualty becomes unresponsive, lower them safely and begin CPR as directed or trained."],
    sequenceFeedback: "Severe choking care progresses from recognition and help to repeated trained obstruction-removal attempts, then CPR if the casualty becomes unresponsive.",
    changePrompt: "The casualty now becomes unresponsive. What is the priority?",
    changeOptions: [
      ["Lower them safely, ensure 112 has been called, and begin CPR according to training and dispatcher instructions.", true, "Correct. Unresponsiveness changes the priority to cardiac arrest recognition and resuscitation."],
      ["Keep them standing, continue abdominal thrusts through another full cycle, and lower them only if breathing does not return.", false, "An unresponsive casualty should be lowered safely and managed using the unresponsive/CPR pathway."],
      ["Lower them, search the mouth repeatedly with your fingers, and begin CPR only after the object has been found.", false, "Remove only a clearly visible obstruction; do not perform blind finger sweeps."],
      ["Place them on their side, leave briefly to find the food packaging, and begin CPR when more information is available.", false, "Immediate resuscitation and emergency help take priority." ]
    ],
    handoverFact: "the number of back blows and thrusts, whether an object was seen, and when responsiveness changed"
  },
  {
    id: "event-heat",
    categoryId: "public-event",
    title: "Confused Runner in Extreme Heat",
    scene: "Near the finish of a charity run on a very hot afternoon, an adult runner has collapsed. Their skin is hot, they are confused, and they keep trying to stand. They cannot answer simple questions reliably. A shaded first aid area and cold-water supplies are nearby.",
    development: "Despite moving into shade, the casualty becomes drowsier and stops following instructions.",
    focus: ["heatstroke warning signs", "rapid cooling", "emergency call", "airway monitoring"],
    opening: [
      ["Call 112 for suspected heatstroke, move them into a cooler place, start active cooling, and keep checking breathing and responsiveness.", true, "Confusion and collapse in heat are emergency signs. Rapid cooling and emergency help are priorities."],
      ["Move them into shade, let them walk slowly to prevent stiffness, and call 112 only if confusion remains after resting.", false, "Exertion adds heat and fall risk. Keep the casualty at rest."],
      ["Lay them down in shade, cover them with a light blanket for shock, and delay active cooling until their pulse settles.", false, "The scene and hot skin point to dangerous overheating, so cooling is needed."],
      ["Move them into shade, give a full bottle of cold water, and reassess alertness before deciding whether to call 112.", false, "A confused casualty may not swallow safely. Do not give oral fluids when alertness is impaired." ]
    ],
    cluesPrompt: "Select every feature that makes this an emergency heat illness rather than simple heat discomfort.",
    clues: [["Confusion or unusual behaviour.", true], ["Collapse or inability to stand safely.", true], ["Hot conditions with very hot skin.", true], ["Reduced responsiveness.", true], ["Sweaty running clothes by themselves.", false], ["Wanting to sit in the shade while speaking normally.", false]],
    cluesFeedback: "Altered mental state, collapse, and worsening responsiveness in heat are emergency features and require rapid cooling plus emergency help.",
    sequencePrompt: "Arrange the first priorities for suspected heatstroke.",
    sequence: ["Call 112 and move the casualty away from the heat.", "Remove unnecessary outer clothing while protecting dignity.", "Begin rapid active cooling with available safe methods.", "Continuously check responsiveness and breathing.", "Be ready to use the unresponsive or CPR pathway if their condition worsens."],
    sequenceFeedback: "Call and cool early. Do not delay cooling while collecting a detailed history.",
    changePrompt: "What should you do as the casualty becomes drowsier?",
    changeOptions: [["Continue cooling, check airway and breathing repeatedly, and prepare for unresponsive care while 112 is responding.", true, "Correct. Drowsiness is deterioration, so airway and breathing monitoring are essential."], ["Stop active cooling, cover them lightly, and observe whether the drowsiness improves now that they are resting in shade.", false, "Drowsiness can indicate worsening heatstroke."], ["Reduce the cooling, give a sports drink in small sips, and call back only if they cannot swallow normally.", false, "Do not give oral fluids when the casualty may not swallow safely."], ["Let them sleep in the recovery area, ask someone to check periodically, and continue cooling only when they wake.", false, "Reduced responsiveness requires continuous monitoring." ]],
    handoverFact: "the heat exposure, mental-state changes, cooling method, and cooling start time"
  },
  {
    id: "trauma-bleeding",
    categoryId: "trauma",
    title: "Severe Bleeding Beside a Cycle Path",
    scene: "A cyclist has fallen beside a roadworks barrier. A deep lower-leg wound is bleeding heavily through torn clothing, and blood is pooling on the ground. The cyclist is pale and dizzy. Passing bicycles still come close to the scene, and a clean first aid kit is available.",
    development: "The first dressing becomes soaked while firm pressure is being maintained. The casualty is colder, quieter, and increasingly confused.",
    focus: ["scene safety", "firm direct pressure", "shock recognition", "continuous monitoring"],
    opening: [["Make the approach safe, use gloves or a barrier, apply firm direct pressure, and call 112 for the severe bleeding.", true, "This controls the immediate life threat without ignoring traffic or infection risk."], ["Make the approach safe, rinse away visible dirt, inspect the wound fully, and apply pressure once its depth is clear.", false, "Do not delay pressure for cleaning when bleeding is severe."], ["Apply pressure with one dressing, replace it whenever blood appears, and inspect the wound between each fresh dressing.", false, "Keep pressure and add material on top rather than repeatedly removing the original dressing."], ["Move the cyclist away from the path on foot, test whether the leg bears weight, and apply pressure in a quieter area.", false, "Standing can worsen collapse and injury. Keep the casualty still."], ["Control the path, photograph the bicycle and wound, then call 112 with complete evidence before beginning treatment.", false, "Once the scene is safe, the casualty's life-threatening bleeding is the priority."]],
    cluesPrompt: "Select all signs that suggest significant blood loss and developing shock.",
    clues: [["Pale, cold, or clammy skin.", true], ["Dizziness, weakness, or confusion.", true], ["Heavy bleeding soaking clothing or dressings.", true], ["Fast breathing or increasing quietness.", true], ["A scratched bicycle frame.", false], ["A bystander asking whether the road is open.", false]],
    cluesFeedback: "Heavy ongoing bleeding plus pallor, cold skin, dizziness, fast breathing, or confusion indicate a serious threat to circulation.",
    sequencePrompt: "Arrange the priorities for severe external bleeding.",
    sequence: ["Control scene danger and protect yourself from blood where possible.", "Expose enough of the injury to find the bleeding source.", "Apply firm, continuous direct pressure.", "Call 112 and maintain pressure; add dressings on top if needed.", "Keep the casualty warm, still, reassured, and monitored for deterioration."],
    sequenceFeedback: "Safety and immediate pressure come before cleaning or detailed examination. Emergency help and shock care continue alongside bleeding control.",
    changePrompt: "The dressing is soaked and the casualty is deteriorating. What should you do?",
    changeOptions: [["Keep firm pressure, add more dressing material on top, update 112, keep the casualty warm, and monitor breathing and responsiveness.", true, "Correct. Do not release effective pressure just to replace a soaked dressing."], ["Remove the soaked dressings, inspect whether bleeding has slowed, and replace them with a cleaner pad before restoring pressure.", false, "Removing dressings can disrupt clotting and increase blood loss."], ["Maintain light pressure, give a sugary drink for weakness, and use the improvement in alertness to judge further blood loss.", false, "Do not give food or drink to a seriously injured casualty."], ["Keep the dressing in place, help them walk to the ambulance access point, and sit them down if dizziness becomes worse.", false, "Keep a shocked casualty still and bring emergency responders to them." ]],
    handoverFact: "where the bleeding was, how it was controlled, dressing changes, and signs of shock"
  },
  {
    id: "trauma-chemical-burn",
    categoryId: "trauma",
    title: "Chemical Splash in a School Laboratory",
    scene: "A laboratory cleaner has splashed onto a student's forearm and sleeve. The student reports burning pain and the skin is becoming red. The labelled container is on the floor nearby, the sink is working, and no chemical has entered the eyes. Other students are moving closer to look.",
    development: "While the arm is being rinsed, the student reports increasing pain and the affected area appears larger than first seen.",
    focus: ["avoid contamination", "remove contaminated clothing", "prolonged rinsing", "medical assessment"],
    opening: [["Keep others away, protect yourself, seek urgent guidance, remove contaminated clothing if safe, and rinse with plenty of running water.", true, "Chemical burns need immediate decontamination and medical help while preventing a second exposure."], ["Protect yourself, identify the product, apply a neutralising cream from the kit, and rinse only if pain continues.", false, "Do not add creams or other chemicals; they can react or trap the substance."], ["Protect yourself, cover the wet sleeve tightly to contain the chemical, and wait for medical help before exposing the skin.", false, "Contaminated clothing should be removed carefully when safe, not sealed against the skin."], ["Keep others away, read the complete product label, and postpone rinsing until the exact chemical formula and antidote are known.", false, "Begin safe decontamination immediately while keeping the label for professionals." ]],
    cluesPrompt: "Select every action that helps prevent further chemical injury.",
    clues: [["Use gloves or another suitable barrier if available.", true], ["Keep the product label or container information for emergency responders.", true], ["Remove contaminated clothing carefully if it is safe to do so.", true], ["Use lots of running water and continue for the advised duration.", true], ["Apply another household chemical to neutralise it.", false], ["Let bystanders touch the wet clothing to identify the smell.", false]],
    cluesFeedback: "Protect the responder, remove the source, rinse generously, and preserve accurate product information. Do not improvise chemical neutralisers.",
    sequencePrompt: "Put the chemical-burn response in order.",
    sequence: ["Stop others approaching and protect yourself from contamination.", "Call 112 or urgent poison/medical guidance and identify the product if possible.", "Remove contaminated clothing carefully and brush off dry material when appropriate.", "Rinse with plenty of cool or lukewarm running water for the recommended time.", "Continue monitoring and hand the product information to professionals."],
    sequenceFeedback: "Prevent a second casualty, get specialist guidance, remove the chemical source, and irrigate promptly and thoroughly.",
    changePrompt: "Pain and the affected area are increasing during rinsing. What is the safest response?",
    changeOptions: [["Continue copious rinsing, update emergency services, protect unaffected skin, and monitor the casualty.", true, "Correct. Worsening chemical burns need continued decontamination and urgent professional care."], ["Stop the water, dry the arm carefully, and apply a thick burn cream before reassessing the painful area.", false, "Creams can trap contamination and are not appropriate first aid for a chemical burn."], ["Pause rinsing, scrub the painful skin gently with a soft brush, and restart the water if redness remains.", false, "Scrubbing can worsen tissue damage."], ["Finish a short rinse, cover the arm securely, and send the student back to class with instructions to report changes.", false, "Chemical burns require medical assessment." ]],
    handoverFact: "the product name, exposure time, affected area, and how long rinsing continued"
  },
  {
    id: "medical-stroke",
    categoryId: "medical",
    title: "Sudden Speech and Arm Weakness",
    scene: "In an office reception, an adult suddenly drops a pen from one hand. One side of their face appears lower and their speech is slurred. They are awake but confused. A colleague says they were speaking normally about ten minutes ago and wants to drive them home.",
    development: "While waiting for help, the casualty becomes more drowsy and can no longer lift the affected arm.",
    focus: ["FAST recognition", "time last known well", "immediate emergency call", "airway monitoring"],
    opening: [["Use FAST, call 112 for suspected stroke, note the last-known-well time, and keep monitoring breathing and responsiveness.", true, "Stroke is time-critical. FAST signs and onset information should trigger an immediate emergency call."], ["Use FAST, let the colleague drive them home to rest, and call 112 later if the weakness does not improve.", false, "Do not delay emergency assessment for suspected stroke."], ["Use FAST, give a small drink to test swallowing, and call 112 only if coughing or choking occurs.", false, "Swallowing may be unsafe after a stroke."], ["Use FAST, record the signs, and repeat the assessment after an hour before deciding whether emergency transport is necessary.", false, "Even temporary stroke-like symptoms need urgent medical assessment." ]],
    cluesPrompt: "Select all information that is important to recognise and report now.",
    clues: [["Face droop.", true], ["Arm weakness.", true], ["Speech difficulty.", true], ["The exact time symptoms began or they were last known well.", true], ["The brand of pen they dropped.", false], ["Whether the colleague can finish work today.", false]],
    cluesFeedback: "FAST findings and symptom timing are the key immediate facts. Do not let non-medical details delay the emergency call.",
    sequencePrompt: "Arrange the response to suspected stroke.",
    sequence: ["Recognise the sudden FAST signs.", "Call 112 immediately and say that stroke is suspected.", "Note the symptom start time or last-known-well time.", "Keep the casualty safe and comfortable; do not give food, drink, or tablets.", "Monitor breathing and responsiveness and update responders about changes."],
    sequenceFeedback: "Recognition and the emergency call come first because stroke treatment is time-sensitive.",
    changePrompt: "How should you respond to the increasing drowsiness?",
    changeOptions: [["Update 112, check airway and breathing repeatedly, and be ready to use unresponsive care if needed.", true, "Correct. Reduced responsiveness increases airway risk and must be reported."], ["Give a sugary drink in small sips, watch whether alertness improves, and update 112 only if swallowing becomes difficult.", false, "Do not give anything by mouth when stroke and unsafe swallowing are possible."], ["Support them while walking a few steps, compare strength on both sides, and then report the result to 112.", false, "Walking creates a fall risk and does not replace emergency assessment."], ["Move them into a quiet room, let them rest without interruption, and check again when the ambulance is close.", false, "They need continuous observation." ]],
    handoverFact: "FAST findings, last-known-well time, and changes in responsiveness"
  },
  {
    id: "medical-anaphylaxis",
    categoryId: "medical",
    title: "Severe Allergic Reaction After a Sting",
    scene: "At an outdoor event, an adult develops widespread hives, swelling around the lips, a hoarse voice, and noisy breathing minutes after a bee sting. They carry a prescribed adrenaline auto-injector and say they have used one before. They are frightened and try to stand.",
    development: "Several minutes after the first auto-injector, breathing remains difficult and the casualty is becoming faint while emergency help is on the way.",
    focus: ["recognise anaphylaxis", "adrenaline auto-injector", "emergency call", "safe positioning"],
    opening: [["Call 112 for anaphylaxis, help with their prescribed auto-injector if trained, position them safely, and monitor their breathing.", true, "Airway and breathing symptoms after a sting make this a life-threatening allergic reaction."], ["Keep them still, watch whether the rash spreads, and call 112 only if the swelling reaches the tongue or throat.", false, "Breathing and airway symptoms already make this an emergency."], ["Help them walk to the first aid post, use the auto-injector there, and call 112 if they cannot continue.", false, "Standing or walking can worsen collapse. Keep them still in the safest comfortable position."], ["Keep them seated, give an antihistamine first, and reserve the auto-injector for symptoms that remain after thirty minutes.", false, "Antihistamines do not replace adrenaline for life-threatening airway or breathing symptoms." ]],
    cluesPrompt: "Select all findings that support suspected anaphylaxis.",
    clues: [["Hoarse voice or throat tightness.", true], ["Noisy or difficult breathing.", true], ["Lip, tongue, or facial swelling.", true], ["Faintness, collapse, or confusion after an allergen exposure.", true], ["A small painless bruise from yesterday.", false], ["Normal speech and breathing with only a local sting mark.", false]],
    cluesFeedback: "Airway swelling, breathing difficulty, and circulation problems after allergen exposure are the critical features.",
    sequencePrompt: "Arrange the immediate anaphylaxis response.",
    sequence: ["Recognise airway, breathing, or circulation danger after allergen exposure.", "Call 112 and state suspected anaphylaxis.", "Help with the casualty's prescribed adrenaline auto-injector if trained and allowed.", "Keep the casualty still in a safe position suited to breathing and consciousness.", "Monitor continuously and follow the care plan or dispatcher guidance if symptoms persist."],
    sequenceFeedback: "Emergency help and prescribed adrenaline should not be delayed in suspected anaphylaxis.",
    changePrompt: "Symptoms remain severe after the first auto-injector. What should happen next?",
    changeOptions: [["Update 112, continue monitoring, and follow the casualty's care plan or dispatcher guidance about further adrenaline while preparing for CPR if needed.", true, "Correct. Persistent symptoms require continued emergency management within training and the person's prescribed plan."], ["Help them stand and walk slowly to improve circulation, then reassess whether the first auto-injector has started working before contacting 112 again.", false, "Standing can cause sudden collapse."], ["Discard the first device, use another immediately without checking the prescribed plan, and estimate both injection times during handover from memory.", false, "Keep it for handover and record the time it was used."], ["Keep them upright, give a small amount of food to test the throat swelling, and repeat adrenaline only if swallowing fails completely.", false, "Food is unsafe when airway swelling is present." ]],
    handoverFact: "the suspected trigger, airway and breathing signs, and the exact auto-injector time"
  },
  {
    id: "multi-road",
    categoryId: "mass-casualty",
    title: "Two Casualties Near Moving Traffic",
    scene: "At a bus stop beside a busy road, two people have fallen after avoiding a bicycle. One person is sitting up, crying loudly, and holding a painful ankle. The other is quiet on the pavement and does not respond when spoken to. Traffic is still passing close to the curb and several bystanders are available.",
    development: "The quiet casualty is breathing abnormally. The person with the ankle injury keeps calling for attention but remains awake and able to speak.",
    focus: ["scene control", "life-threat priority", "use bystanders safely", "request enough help"],
    opening: [["Control the traffic risk, call 112 for multiple casualties, check the quiet unresponsive person first, and give bystanders specific safe tasks.", true, "The quiet casualty may have the greatest life threat. Scene safety and extra help are immediate priorities."], ["Control the traffic risk, assess the conscious ankle injury first for a rapid history, record the findings, then move to the quiet casualty.", false, "The loudest casualty is not always the most seriously ill."], ["Ask bystanders to move both casualties together into a wider road area, then compare their injuries in the larger space before calling 112.", false, "Do not move into danger. Control the scene and move a casualty only when remaining creates immediate danger."], ["Call 112, ask each bystander to assess a different injury at once, and combine all their findings before choosing the first treatment priority.", false, "Uncoordinated help creates confusion. Give simple, safe, specific tasks." ]],
    cluesPrompt: "Select all priorities that matter in the first minute.",
    clues: [["Prevent another collision and keep responders out of traffic.", true], ["Tell 112 there is more than one casualty.", true], ["Check responsiveness and breathing of the quiet casualty.", true], ["Use a bystander to guide emergency services or control the crowd.", true], ["Decide who caused the bicycle incident.", false], ["Photograph every injury before giving aid.", false]],
    cluesFeedback: "Control continuing danger, request enough resources, and find life threats before minor injuries or incident details take attention.",
    sequencePrompt: "Arrange the opening priorities when you have more than one casualty.",
    sequence: ["Control immediate danger without entering moving traffic.", "Call 112, state the exact location, and report multiple casualties.", "Rapidly identify who has an airway, breathing, or severe-bleeding threat.", "Begin life-saving care for the highest-priority casualty.", "Keep reassessing both casualties and give safe tasks to available bystanders."],
    sequenceFeedback: "Triage is a rapid priority process: safety, help, life threats, immediate care, then repeated reassessment.",
    changePrompt: "Who remains the first clinical priority after this update?",
    changeOptions: [["The unresponsive person with abnormal breathing; begin the emergency response and CPR pathway as directed or trained.", true, "Correct. Abnormal breathing in an unresponsive casualty is immediately life-threatening."], ["The conscious person with ankle pain; severe pain and repeated calls for help make that casualty the clearest priority.", false, "Pain matters, but an airway or breathing threat takes priority."], ["The bystanders requesting an explanation; gaining their cooperation should be completed before beginning care for either casualty.", false, "Give brief directions, but do not delay life-saving care."], ["The bicycle and traffic evidence; preserving the incident scene should be finished before changing either casualty's position.", false, "Property is not the clinical priority." ]],
    handoverFact: "the number of casualties, initial priority decision, breathing findings, and care given to each person"
  },
  {
    id: "multi-smoke",
    categoryId: "mass-casualty",
    title: "Smoke and Burns Outside a Canteen",
    scene: "Smoke is coming from a canteen doorway. Outside, one casualty has a painful burn on the forearm and another is coughing, confused, and struggling to breathe. A third person says somebody may still be inside. The fire alarm is sounding and people are gathering near the entrance.",
    development: "The breathing casualty becomes less responsive while smoke continues to drift across the gathering area.",
    focus: ["do not enter smoke", "move to clean air", "breathing priority", "fire and ambulance response"],
    opening: [["Keep everyone out of smoke, move casualties to clean air if safe, call 112 for fire and medical help, and prioritise breathing.", true, "Do not create more casualties by entering smoke. Breathing difficulty and confusion are the immediate clinical threat."], ["Ask one capable bystander to search just inside the doorway while you call 112, gather equipment, and begin treating the casualties outside.", false, "An unprotected first aider must not enter a smoke-filled area."], ["Move both casualties away from smoke, cool the visible arm burn for several minutes first, and assess the confused casualty once cooling is established.", false, "The breathing casualty has the greater immediate life threat."], ["Open nearby doors and windows to clear the smoke, then call 112 once you know whether anyone remains inside and which exit is safest.", false, "Do not improvise fire control. Withdraw, call the fire service, and follow safety instructions." ]],
    cluesPrompt: "Select all actions that keep this changing scene safer.",
    clues: [["Move the gathering point away from drifting smoke.", true], ["Tell 112 there may be a person inside.", true], ["Prevent unprotected people from re-entering.", true], ["Monitor the casualty with breathing difficulty continuously.", true], ["Send a bystander inside with a wet cloth over their face.", false], ["Ignore the wind direction once casualties are outside.", false]],
    cluesFeedback: "Scene safety continues throughout care. Smoke movement, re-entry risk, and access for fire and ambulance crews all matter.",
    sequencePrompt: "Arrange the safest opening response.",
    sequence: ["Stay out of smoke and move everyone away from continuing exposure if safe.", "Call 112 for fire and medical help and report a possible person inside.", "Prioritise airway and breathing assessment of the confused casualty.", "Cool the visible burn with running water when this can be done without delaying breathing care.", "Reassess both casualties and prepare a clear handover."],
    sequenceFeedback: "Do not enter danger. Remove exposure, request the right resources, prioritise breathing, then manage the burn and continue reassessment.",
    changePrompt: "What is the immediate priority as responsiveness decreases?",
    changeOptions: [["Move to clean air if needed, update 112, check airway and breathing, and prepare for unresponsive care or CPR.", true, "Correct. Reduced responsiveness after smoke exposure can rapidly threaten the airway and breathing."], ["Return to the burn casualty, establish twenty minutes of cooling, and reassess the breathing casualty after the burn is covered.", false, "Breathing and reduced responsiveness take priority over a stable visible burn."], ["Keep them sitting upright, give small sips of water to clear smoke irritation, and update 112 if swallowing becomes difficult.", false, "Do not give oral fluids to a less responsive casualty."], ["Carry the casualty closer to the doorway where firefighters can see them, while keeping their face turned away from the smoke.", false, "Do not move anyone closer to smoke or fire." ]],
    handoverFact: "smoke exposure, time removed to fresh air, breathing and consciousness changes, and burn cooling"
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
let selectedPracticeMode = "individual";
let scenarioStepComplete = false;
let scenarioRunComplete = false;
let scenarioRewardAwarded = false;
let scenarioCorrectPositionState = {
  opening: { deck: [], last: -1, optionCount: 0 },
  change: { deck: [], last: -1, optionCount: 0 }
};
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

const translations = {
  en: {
    brandTagline: "Practice for responders", navDashboard: "Dashboard", navLessons: "Lessons", navScenario: "Scenario", navQuiz: "Quiz", navProgress: "Progress", navAcademy: "Academy", navStudio: "Studio",
    trainingMode: "Training mode", emergencyNotice: "In a real emergency, call your local emergency number immediately.", emergencyNumber: "Emergency: 112", privacyPolicy: "Privacy Policy", responderPractice: "Responder practice", readyToRespond: "Ready to respond",
    welcomeBack: "Welcome back", dayStreak: "Day streak", trainingXp: "Training XP", dailyStreakGoal: "Daily Streak Goal", trainToday: "Train Today", medicalDisclaimer: "This app supports training and revision. It does not replace certified instruction, medical advice, or emergency services.",
    lessonsCompleted: "Lessons completed", quizScore: "Quiz score", scenariosPassed: "Scenarios passed", continueTraining: "Continue Training", fastScenarioDrill: "Fast Scenario Drill", fastScenarioDescription: "Practice decisions in order: safety, responsiveness, call for help, then care.", startDrill: "Start Drill",
    lessonLibrary: "Lesson Library", lessonLibraryDescription: "Choose a category, then open a lesson for signs, actions, common mistakes, team roles, and practice ideas.", scenarioBuilder: "Scenario Practice Lab", scenarioBuilderDescription: "Work through realistic first aid cases with decisions, multiple-answer checks, and action ordering.", generateScenario: "Generate scenario", coachNotes: "Learning Notes", restart: "Restart", answerReview: "Answer Review", restartQuiz: "Restart Quiz", yourProgress: "Your Progress", progressSaved: "Progress is saved securely to your account.",
    secureAccount: "Secure Account", login: "Login", register: "Register", continueGoogle: "Continue with Google", continueGitHub: "Continue with GitHub", continueEmail: "or continue with email", confirmationRequired: "Email confirmation is required for email registration", confirmationExplanation: "If you register with email and password, open the confirmation email and click its link before logging in. Google and GitHub sign-in do not need this step.", createNewPassword: "Create a new password", newPasswordExplanation: "Use at least 8 characters. After saving it, you will stay signed in.",
    email: "Email", password: "Password", forgotPassword: "Forgot your password?", resendConfirmation: "Resend confirmation email", name: "Name", role: "Role", heardAboutUs: "Where did you hear about us?", avatarInitials: "Avatar initials", logout: "Logout", deleteAccount: "Delete my account", dataProtected: "Your account data is protected by Supabase.",
    privacyEyebrow: "Your data", privacyTitle: "Privacy Policy", permanentAction: "Permanent action", deleteAccountTitle: "Delete your account?", deleteAccountExplanation: "Your profile, training progress, achievements, room participation, and authentication account will be permanently removed.", typeDelete: "Type DELETE to confirm", cancel: "Cancel", deletePermanently: "Delete permanently",
    accountReady: "Account ready", welcomeTitle: "Welcome to First Aid Trainer!", welcomeMessage: "Your secure profile was created successfully. Your training progress will now follow you across devices.", benefitProgress: "Progress saved securely", benefitAchievements: "Achievements and certificates", benefitAcademy: "Academy and live practice", startTraining: "Start training",
    pageDashboard: "Dashboard", pageLessons: "Lessons", pageScenario: "Scenario Practice", pageQuiz: "Knowledge Quiz", pageProgress: "Progress", pageAcademy: "Responder Academy", pageStudio: "Academy Studio",
    createAccount: "Create your account", secureBackend: "Secure backend account", notSignedIn: "Not signed in", authUnavailable: "Authentication unavailable", profile: "Profile",
    dailyEarned: "Daily streak earned. Come back tomorrow to keep it alive.", dailyGoal: "Complete one quiz or scenario today to earn +1 streak.",
    authHeading: "Sign in to start training", authDescription: "An account is required to access lessons, scenarios, quizzes, and progress.", recoveryHeading: "Reset your password", recoveryDescription: "The recovery link is verified. Choose a new password for your account.",
    submitLogin: "Login", submitRegister: "Create account and send confirmation email", submitRecovery: "Save new password", signingIn: "Signing in...", creatingAccount: "Creating account...", savingPassword: "Saving password...", sendingEmail: "Sending email...", deletingAccount: "Deleting account...",
    authLoginPrompt: "Continue with Google or GitHub, or enter your email and password.", authRegisterPrompt: "Continue with Google or GitHub, or create an email account and confirm it before logging in.", authRecoveryPrompt: "Enter and save your new password.", authLockedPrompt: "Login or create an account to unlock the training platform.", authUnavailablePrompt: "Secure sign-in is unavailable until Supabase is connected.", signedInAs: "Signed in as {email}",
    invalidCredentials: "The email or password is incorrect. If you just registered, confirm your email before logging in.", emailNotConfirmed: "Your email is not confirmed yet. Open the confirmation email and click its link before logging in.", alreadyRegistered: "An account with this email already exists. Log in or use ‘Forgot your password?’.", providerDisabled: "This social sign-in option is not enabled in Supabase yet.", rateLimited: "Too many email requests. Wait a few minutes, then try again.",
    enterEmailFirst: "Enter your email address first.", resetSent: "Password reset email sent. Open it and click the recovery link to choose a new password. Check your Spam folder too.", confirmationSent: "A new confirmation email was sent. Open it and click the confirmation link. Check your Spam folder too.", resendIn: "Resend in {seconds}s", registrationSent: "Registration successful — we sent a confirmation email. Open it, click the confirmation link, then return here and log in. Check your Spam folder if you cannot see it.",
    passwordUpdated: "Password updated successfully. You are now signed in.", loggedIn: "Logged in securely.", loggedOut: "You have been logged out. Sign in to continue training.", accountDeleted: "Your account and saved training data were deleted.", socialOpening: "Opening {provider} secure sign-in...",
    category: "Category", practiceFormat: "Practice format", individualPractice: "Individual responder", teamPractice: "Team exercise", difficulty: "Difficulty", basic: "Basic", challenge: "Realistic", competition: "Competition", advanced: "Advanced", inProgress: "In progress", collapsedAdult: "Collapsed Adult",
    academyEyebrow: "First aid community", academyTitle: "Responder Academy", academyDescription: "Compete, collect achievements, join live practice, and use trusted learning resources.", learner: "Learner", leaderboard: "Leaderboard", achievements: "Achievements", certificate: "Certificate", certificateDescription: "Complete 10 lessons and score at least 80% to earn your First Aid Foundations certificate.", checkEligibility: "Check eligibility", liveRoom: "Live Training Room", offline: "Offline", liveRoomDescription: "Join an instructor-led scenario and see updates in real time.", join: "Join", resourceLibrary: "Resource Library", smartCoach: "Smart Coach Search", smartSearch: "Smart search", smartCoachDescription: "Search lessons and academy content by topic, symptom, or action.", search: "Search", academyFeed: "Academy Feed",
    instructorTools: "Instructor tools", academyStudio: "Academy Studio", studioDescription: "Create learning content, upload resources, and start live practice rooms.", staffAccess: "Staff access", publishContent: "Publish Content", type: "Type", title: "Title", summary: "Summary", publish: "Publish", uploadResource: "Upload Resource", selectFile: "Select PDF, image, or MP4 (max 50 MB)", uploadSecurely: "Upload securely", startLiveRoom: "Start Live Room", roomTitle: "Room title", openingPrompt: "Opening prompt", createLiveRoom: "Create live room", automations: "Automations", automationDescription: "Daily in-app streak reminders are generated automatically at 18:00 UTC with Supabase Cron.", refreshSearch: "Refresh smart-search index",
    certificateTitle: "Certificate of Achievement", certifiesThat: "This certifies that", completedRequirements: "has successfully completed the requirements for", printCertificate: "Print / Save as PDF", emailPlaceholder: "you@example.com", passwordPlaceholder: "Minimum 8 characters", namePlaceholder: "Your name"
  },
  bg: {
    brandTagline: "Практика за оказващи първа помощ", navDashboard: "Табло", navLessons: "Уроци", navScenario: "Сценарий", navQuiz: "Тест", navProgress: "Напредък", navAcademy: "Академия", navStudio: "Студио",
    trainingMode: "Режим обучение", emergencyNotice: "При реална спешна ситуация веднага се обади на местния спешен номер.", emergencyNumber: "Спешен номер: 112", privacyPolicy: "Политика за поверителност", responderPractice: "Практика за спасители", readyToRespond: "Готов за действие",
    welcomeBack: "Добре дошъл отново", dayStreak: "Дневна серия", trainingXp: "Тренировъчен XP", dailyStreakGoal: "Дневна цел", trainToday: "Тренирай днес", medicalDisclaimer: "Приложението подпомага обучението и преговора. То не заменя сертифицирано обучение, медицински съвет или спешна помощ.",
    lessonsCompleted: "Завършени уроци", quizScore: "Резултат от теста", scenariosPassed: "Успешни сценарии", continueTraining: "Продължи обучението", fastScenarioDrill: "Бърза сценарийна тренировка", fastScenarioDescription: "Упражнявай решенията подред: безопасност, реакция, повикване на помощ и грижа.", startDrill: "Започни тренировка",
    lessonLibrary: "Библиотека с уроци", lessonLibraryDescription: "Избери категория и отвори урок със симптоми, действия, чести грешки, екипни роли и идеи за практика.", scenarioBuilder: "Лаборатория за сценарийна практика", scenarioBuilderDescription: "Решавай реалистични случаи с избор на действие, няколко верни отговора и подреждане на стъпки.", generateScenario: "Генерирай сценарий", coachNotes: "Учебни бележки", restart: "Рестартирай", answerReview: "Преглед на отговора", restartQuiz: "Рестартирай теста", yourProgress: "Твоят напредък", progressSaved: "Напредъкът се пази сигурно в профила ти.",
    secureAccount: "Защитен профил", login: "Вход", register: "Регистрация", continueGoogle: "Продължи с Google", continueGitHub: "Продължи с GitHub", continueEmail: "или продължи с имейл", confirmationRequired: "Регистрацията с имейл изисква потвърждение", confirmationExplanation: "След регистрацията отвори получения имейл и натисни връзката за потвърждение. При вход с Google или GitHub тази стъпка не е нужна.", createNewPassword: "Създай нова парола", newPasswordExplanation: "Използвай поне 8 символа. След записването ще останеш влязъл.",
    email: "Имейл", password: "Парола", forgotPassword: "Забравена парола?", resendConfirmation: "Изпрати отново потвърждението", name: "Име", role: "Роля", heardAboutUs: "Откъде научи за нас?", avatarInitials: "Инициали за аватар", logout: "Изход", deleteAccount: "Изтрий профила ми", dataProtected: "Данните на профила са защитени от Supabase.",
    privacyEyebrow: "Твоите данни", privacyTitle: "Политика за поверителност", permanentAction: "Необратимо действие", deleteAccountTitle: "Да изтрием ли профила?", deleteAccountExplanation: "Профилът, учебният напредък, постиженията, участието в стаи и акаунтът за вход ще бъдат окончателно премахнати.", typeDelete: "Напиши DELETE за потвърждение", cancel: "Отказ", deletePermanently: "Изтрий окончателно",
    accountReady: "Профилът е готов", welcomeTitle: "Добре дошъл във First Aid Trainer!", welcomeMessage: "Защитеният ти профил беше създаден успешно. Учебният напредък вече ще те следва на различните устройства.", benefitProgress: "Сигурно запазен напредък", benefitAchievements: "Постижения и сертификати", benefitAcademy: "Академия и тренировки на живо", startTraining: "Започни обучение",
    pageDashboard: "Табло", pageLessons: "Уроци", pageScenario: "Сценарийна практика", pageQuiz: "Тест за знания", pageProgress: "Напредък", pageAcademy: "Академия за спасители", pageStudio: "Студио на академията",
    createAccount: "Създай своя профил", secureBackend: "Защитен профил в облака", notSignedIn: "Не си влязъл", authUnavailable: "Входът не е наличен", profile: "Профил",
    dailyEarned: "Дневната серия е спечелена. Върни се утре, за да я продължиш.", dailyGoal: "Завърши един тест или сценарий днес, за да получиш +1 към серията.",
    authHeading: "Влез, за да започнеш обучение", authDescription: "Необходим е профил за достъп до уроците, сценариите, тестовете и напредъка.", recoveryHeading: "Възстанови паролата си", recoveryDescription: "Връзката е потвърдена. Избери нова парола за профила.",
    submitLogin: "Вход", submitRegister: "Създай профил и изпрати потвърждение", submitRecovery: "Запази новата парола", signingIn: "Влизане...", creatingAccount: "Създаване на профил...", savingPassword: "Запазване на паролата...", sendingEmail: "Изпращане...", deletingAccount: "Изтриване на профила...",
    authLoginPrompt: "Продължи с Google или GitHub, или въведи имейл и парола.", authRegisterPrompt: "Продължи с Google или GitHub, или създай профил с имейл и го потвърди.", authRecoveryPrompt: "Въведи и запази новата си парола.", authLockedPrompt: "Влез или създай профил, за да отключиш обучителната платформа.", authUnavailablePrompt: "Защитеният вход не е наличен, докато Supabase не е свързан.", signedInAs: "Влязъл като {email}",
    invalidCredentials: "Имейлът или паролата са грешни. Ако току-що си се регистрирал, първо потвърди имейла си.", emailNotConfirmed: "Имейлът още не е потвърден. Отвори полученото писмо и натисни връзката за потвърждение.", alreadyRegistered: "Вече има профил с този имейл. Влез или използвай „Забравена парола?“.", providerDisabled: "Този начин за социален вход още не е включен в Supabase.", rateLimited: "Изпратени са прекалено много заявки. Изчакай няколко минути и опитай пак.",
    enterEmailFirst: "Първо въведи своя имейл адрес.", resetSent: "Изпратен е имейл за възстановяване на паролата. Отвори връзката в него. Провери и папка Спам.", confirmationSent: "Изпратен е нов имейл за потвърждение. Отвори го и натисни връзката. Провери и папка Спам.", resendIn: "Повторно след {seconds} сек.", registrationSent: "Регистрацията е успешна — изпратихме имейл за потвърждение. Отвори го, натисни връзката и после се върни тук, за да влезеш. Провери и папка Спам.",
    passwordUpdated: "Паролата е обновена успешно и вече си влязъл.", loggedIn: "Влезе успешно и защитено.", loggedOut: "Излезе от профила си. Влез отново, за да продължиш.", accountDeleted: "Профилът и запазеният учебен напредък бяха изтрити.", socialOpening: "Отваряне на защитен вход с {provider}...",
    category: "Категория", practiceFormat: "Формат на практиката", individualPractice: "Индивидуален спасител", teamPractice: "Отборно упражнение", difficulty: "Трудност", basic: "Основна", challenge: "Реалистична", competition: "Състезателна", advanced: "Напреднала", inProgress: "В процес", collapsedAdult: "Припаднал възрастен",
    academyEyebrow: "Общност по първа помощ", academyTitle: "Академия за спасители", academyDescription: "Състезавай се, събирай постижения, участвай в тренировки на живо и използвай доверени учебни материали.", learner: "Обучаващ се", leaderboard: "Класация", achievements: "Постижения", certificate: "Сертификат", certificateDescription: "Завърши 10 урока и постигни поне 80% на теста, за да получиш сертификата First Aid Foundations.", checkEligibility: "Провери условията", liveRoom: "Тренировъчна стая на живо", offline: "Извън линия", liveRoomDescription: "Включи се в сценарий с инструктор и получавай промени в реално време.", join: "Включи се", resourceLibrary: "Библиотека с ресурси", smartCoach: "Умно търсене с треньора", smartSearch: "Умно търсене", smartCoachDescription: "Търси в уроците и съдържанието на академията по тема, симптом или действие.", search: "Търси", academyFeed: "Новини от академията",
    instructorTools: "Инструменти за инструктори", academyStudio: "Студио на академията", studioDescription: "Създавай учебно съдържание, качвай ресурси и започвай тренировки на живо.", staffAccess: "Достъп за екипа", publishContent: "Публикувай съдържание", type: "Тип", title: "Заглавие", summary: "Обобщение", publish: "Публикувай", uploadResource: "Качи ресурс", selectFile: "Избери PDF, изображение или MP4 (до 50 MB)", uploadSecurely: "Качи защитено", startLiveRoom: "Започни стая на живо", roomTitle: "Заглавие на стаята", openingPrompt: "Начална ситуация", createLiveRoom: "Създай стая на живо", automations: "Автоматизации", automationDescription: "Ежедневните напомняния за серия се генерират автоматично в 18:00 UTC чрез Supabase Cron.", refreshSearch: "Обнови индекса за умно търсене",
    certificateTitle: "Сертификат за постижение", certifiesThat: "С настоящото се удостоверява, че", completedRequirements: "успешно изпълни изискванията за", printCertificate: "Печат / Запази като PDF", emailPlaceholder: "твоят@имейл.bg", passwordPlaceholder: "Минимум 8 символа", namePlaceholder: "Твоето име"
  }
};

let currentLanguage = localStorage.getItem("firstAidLanguage") === "bg" ? "bg" : "en";
let authBusy = false;
let resendCooldownTimer = null;

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] || translations.en[key] || key;
  return Object.entries(replacements).reduce(
    (result, [name, value]) => result.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.body.dataset.language = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll(".language-toggle-label").forEach((label) => {
    label.textContent = currentLanguage === "en" ? "BG" : "EN";
  });
  document.querySelectorAll(".policy-language").forEach((section) => {
    section.classList.toggle("hidden", section.dataset.policyLanguage !== currentLanguage);
  });
  renderAccount();
  const activeView = document.querySelector(".view.active-view")?.id || "dashboard";
  updatePageTitle(activeView);
  updateResendButton();
}

function updatePageTitle(viewId) {
  const titleKeys = {
    dashboard: "pageDashboard",
    lessons: "pageLessons",
    scenario: "pageScenario",
    quiz: "pageQuiz",
    progress: "pageProgress",
    community: "pageAcademy",
    studio: "pageStudio"
  };
  document.getElementById("page-title").textContent = t(titleKeys[viewId] || "pageDashboard");
}

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
    ? t("authLockedPrompt")
    : t("authUnavailablePrompt");
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

function updateResendButton() {
  const button = document.getElementById("resend-confirmation-button");
  const cooldownUntil = Number(sessionStorage.getItem("firstAidResendCooldownUntil") || 0);
  const seconds = Math.max(0, Math.ceil((cooldownUntil - Date.now()) / 1000));
  button.disabled = authBusy || seconds > 0;
  button.textContent = seconds > 0 ? t("resendIn", { seconds }) : t("resendConfirmation");

  window.clearTimeout(resendCooldownTimer);
  if (seconds > 0) {
    resendCooldownTimer = window.setTimeout(updateResendButton, 1000);
  }
}

function startResendCooldown() {
  sessionStorage.setItem("firstAidResendCooldownUntil", String(Date.now() + 60_000));
  updateResendButton();
}

function setAuthBusy(busy, labelKey = "") {
  authBusy = busy;
  const submitButton = document.getElementById("account-submit-button");
  const socialButtons = [
    document.getElementById("google-auth-button"),
    document.getElementById("github-auth-button")
  ];
  submitButton.disabled = busy;
  document.getElementById("forgot-password-button").disabled = busy;
  socialButtons.forEach((button) => { button.disabled = busy; });
  submitButton.classList.toggle("is-loading", busy);
  socialButtons.forEach((button) => button.classList.toggle("is-loading", busy));

  if (busy && labelKey) {
    document.getElementById("account-submit-text").textContent = t(labelKey);
  } else if (!busy) {
    renderAuthMode();
  }
  updateResendButton();
}

async function withAuthBusy(labelKey, task) {
  setAuthBusy(true, labelKey);
  try {
    return await task();
  } finally {
    setAuthBusy(false);
  }
}

function maybeShowSocialWelcome(user) {
  const provider = user?.app_metadata?.provider;
  if (!user || !["google", "github"].includes(provider)) return;

  const createdAt = new Date(user.created_at || 0).getTime();
  const isFreshAccount = Number.isFinite(createdAt) && Date.now() - createdAt < 10 * 60 * 1000;
  const storageKey = `firstAidSocialWelcome:${user.id}`;
  if (!isFreshAccount || sessionStorage.getItem(storageKey)) return;

  sessionStorage.setItem(storageKey, "shown");
  document.getElementById("social-welcome-modal").classList.remove("hidden");
  document.getElementById("close-social-welcome").focus();
}

function defaultAuthMessage() {
  if (!supabaseClient) return t("authUnavailablePrompt");
  if (authMode === "register") return t("authRegisterPrompt");
  if (authMode === "recovery") return t("authRecoveryPrompt");
  if (currentUser) return t("signedInAs", { email: currentUser.email });
  return t("authLoginPrompt");
}

function friendlyAuthError(error) {
  const message = String(error?.message || "Authentication failed.");
  if (/invalid login credentials/i.test(message)) {
    return t("invalidCredentials");
  }
  if (/email not confirmed/i.test(message)) {
    return t("emailNotConfirmed");
  }
  if (/user already registered/i.test(message)) {
    return t("alreadyRegistered");
  }
  if (/provider.*not.*enabled|unsupported provider/i.test(message)) {
    return t("providerDisabled");
  }
  if (/rate limit/i.test(message)) {
    return t("rateLimited");
  }
  return message;
}

function choose(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleScenarioItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function scenarioOptionObjects(options) {
  return shuffleScenarioItems(options.map(([label, correct, feedback = ""]) => ({ label, correct, feedback })));
}

function balancedSingleOptions(options, sequenceName) {
  const normalized = options.map(([label, correct, feedback = ""]) => ({ label, correct, feedback }));
  const correctOption = normalized.find((option) => option.correct);
  const distractors = shuffleScenarioItems(normalized.filter((option) => !option.correct));
  const state = scenarioCorrectPositionState[sequenceName];

  if (!state.deck.length || state.optionCount !== normalized.length) {
    state.optionCount = normalized.length;
    state.deck = shuffleScenarioItems(normalized.map((_, index) => index));
    if (state.deck.length > 1 && state.deck[0] === state.last) {
      [state.deck[0], state.deck[1]] = [state.deck[1], state.deck[0]];
    }
  }

  const correctPosition = state.deck.shift();
  state.last = correctPosition;
  distractors.splice(correctPosition, 0, correctOption);
  return distractors;
}

function teamOpeningOptions(caseData) {
  return balancedSingleOptions(caseData.opening, "opening").map((option) => ({
    ...option,
    label: `Leader's plan: ${option.label}`
  }));
}

function shuffledOrderItems(labels, teamMode) {
  const correctItems = labels.map((label, index) => ({
    id: `order-${index}`,
    label: teamMode && index === 0 ? `Team leader confirms: ${label}` : label,
    correctIndex: index
  }));
  let order = shuffleScenarioItems(correctItems);
  if (order.every((item, index) => item.correctIndex === index) && order.length > 1) {
    order = [...order.slice(1), order[0]];
  }
  return order;
}

function buildScenario() {
  const cases = scenarioCaseLibrary.filter((item) => item.categoryId === selectedCategoryId);
  const differentCases = cases.filter((item) => item.id !== activeScenario.caseId);
  const caseData = choose(differentCases.length ? differentCases : cases);
  const isTeam = selectedPracticeMode === "team";
  const modeLabel = isTeam ? "Team exercise" : "Individual responder";

  activeScenario = {
    caseId: caseData.id,
    title: caseData.title,
    mode: selectedPracticeMode,
    modeLabel,
    focus: isTeam
      ? [...caseData.focus, "named responsibilities", "closed-loop updates"]
      : [...caseData.focus, "personal safety", "clear emergency call"]
  };

  const openingOptions = isTeam ? teamOpeningOptions(caseData) : balancedSingleOptions(caseData.opening, "opening");
  const clueOptions = scenarioOptionObjects(caseData.clues);
  const changeOptions = balancedSingleOptions(caseData.changeOptions, "change");
  const orderItems = shuffledOrderItems(caseData.sequence, isTeam);

  scenarioSteps = [
    {
      type: "single",
      typeLabel: "Choose one answer",
      situation: caseData.scene,
      prompt: isTeam
        ? "Your responder team is first at the scene. Which opening plan should the team leader use?"
        : "You are the first trained responder at the scene. What should you do first?",
      options: openingOptions
    },
    {
      type: "multiple",
      typeLabel: "Select all that apply",
      situation: "Before continuing, separate the important clinical warning signs from details that should not distract you.",
      prompt: isTeam
        ? `Select every finding the team must recognise. ${caseData.cluesPrompt}`
        : caseData.cluesPrompt,
      options: clueOptions,
      feedback: caseData.cluesFeedback
    },
    {
      type: "order",
      typeLabel: "Put the actions in order",
      situation: "The immediate danger is being controlled. Build a complete response from the first priority through ongoing monitoring.",
      prompt: isTeam
        ? "Arrange the team's actions from first priority to last. Use the arrow buttons to move each action."
        : `${caseData.sequencePrompt} Use the arrow buttons to move each action.`,
      order: orderItems,
      feedback: caseData.sequenceFeedback
    }
  ];

  if (selectedDifficulty !== "basic") {
    scenarioSteps.push({
      type: "single",
      typeLabel: "Respond to a change",
      situation: caseData.development,
      prompt: isTeam
        ? `The situation has changed. What should the team do now? ${caseData.changePrompt}`
        : caseData.changePrompt,
      options: isTeam
        ? changeOptions.map((option) => ({ ...option, label: `Team response: ${option.label}` }))
        : changeOptions
    });
  }

  if (selectedDifficulty === "advanced") {
    scenarioSteps.push({
      type: "multiple",
      typeLabel: "Select all that apply",
      situation: "A bystander wants a definite diagnosis and suggests treatment outside your training. The casualty's condition may still change.",
      prompt: isTeam
        ? "Select every rule the team should follow while managing uncertainty."
        : "Select every rule you should follow while managing uncertainty.",
      options: scenarioOptionObjects([
        ["Describe what you observe without pretending to make a final diagnosis.", true],
        ["Give first aid only within your training and follow dispatcher guidance.", true],
        ["Reassess after every important change and report deterioration.", true],
        ["Say clearly what is unknown or based only on a witness report.", true],
        ["Use an unprescribed medicine if a confident bystander recommends it.", false],
        ["Keep the original plan even when the casualty becomes worse.", false]
      ]),
      feedback: "Safe advanced practice distinguishes observations from guesses, stays within training, follows professional guidance, and changes the plan when reassessment shows deterioration."
    });
  }

  scenarioSteps.push({
    type: "multiple",
    typeLabel: "Build the handover",
    situation: "Emergency professionals have arrived and need a short, accurate picture before taking over care.",
    prompt: isTeam
      ? "Select everything the team's handover should include."
      : "Select everything your handover should include.",
    options: scenarioOptionObjects([
      ["Exact location, continuing hazards, and number of casualties.", true],
      ["Initial responsiveness, breathing, severe bleeding, and other key findings.", true],
      ["Care given, important times, changes, and the response to care.", true],
      [`Case-specific detail: ${caseData.handoverFact}.`, true],
      ["A confident diagnosis even when it has not been confirmed.", false],
      ["Personal criticism of the casualty or people at the scene.", false]
    ]),
    feedback: `A useful handover is factual and time-based. For this case, do not omit ${caseData.handoverFact}.`
  });

  scenarioIndex = 0;
  scenarioStepComplete = false;
  scenarioRunComplete = false;
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
  updatePageTitle(viewId);

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
  const displayName = progress.profileName || t("createAccount");
  const backendLabel = currentUser ? t("secureBackend") : (supabaseClient ? t("notSignedIn") : t("authUnavailable"));
  const teamName = `${progress.role || "Competitor"} · ${backendLabel}`;
  const initials = (progress.initials || progress.profileName.slice(0, 2) || "FA").toUpperCase();
  const earnedToday = progress.lastStreakDate === todayKey();

  document.getElementById("profile-name").textContent = displayName;
  document.getElementById("profile-team").textContent = teamName;
  document.getElementById("profile-avatar").textContent = initials;
  document.getElementById("streak-count").textContent = String(progress.streak);
  document.getElementById("xp-count").textContent = String(progress.totalXp);
  document.getElementById("daily-goal-text").textContent = earnedToday
    ? t("dailyEarned")
    : t("dailyGoal");

  document.getElementById("account-button-text").textContent = currentUser ? t("profile") : t("login");
  document.getElementById("auth-status").textContent = authMessage || defaultAuthMessage();
  document.getElementById("logout-button").classList.toggle("hidden", !currentUser);
  document.getElementById("delete-account-button").classList.toggle("hidden", !currentUser);
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
  document.getElementById("auth-heading").textContent = isRecovery ? t("recoveryHeading") : t("authHeading");
  document.getElementById("auth-description").textContent = isRecovery
    ? t("recoveryDescription")
    : t("authDescription");
  document.getElementById("account-password").setAttribute("autocomplete", isRecovery || isRegister ? "new-password" : "current-password");
  document.getElementById("account-submit-text").textContent = isRecovery
    ? t("submitRecovery")
    : (isRegister ? t("submitRegister") : t("submitLogin"));
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
  document.getElementById("scenario-practice-mode").value = selectedPracticeMode;
  document.getElementById("scenario-difficulty").value = selectedDifficulty;
}

function renderScenarioOptions(step) {
  const options = document.getElementById("scenario-options");
  const action = document.getElementById("scenario-action");
  options.dataset.activityType = step.type;

  if (step.type === "single") {
    options.innerHTML = step.options.map((option, index) => `
      <button class="option-button scenario-choice" type="button" data-scenario-single="${index}">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHtml(option.label)}</span>
      </button>
    `).join("");
    action.innerHTML = "";
    return;
  }

  if (step.type === "multiple") {
    options.innerHTML = step.options.map((option, index) => `
      <label class="option-button checkbox-option" data-scenario-multiple-row="${index}">
        <input type="checkbox" data-scenario-multiple="${index}">
        <span class="custom-check" aria-hidden="true"></span>
        <span>${escapeHtml(option.label)}</span>
      </label>
    `).join("");
    action.innerHTML = `<button class="primary-button scenario-check-button" type="button" data-scenario-check>Check selected answers</button>`;
    return;
  }

  options.innerHTML = step.order.map((item, index) => `
    <div class="order-option" data-order-row="${index}">
      <span class="order-number">${index + 1}</span>
      <span class="order-label">${escapeHtml(item.label)}</span>
      <span class="order-controls">
        <button class="order-move" type="button" data-order-move="up" data-order-index="${index}" aria-label="Move action up" ${index === 0 ? "disabled" : ""}>↑</button>
        <button class="order-move" type="button" data-order-move="down" data-order-index="${index}" aria-label="Move action down" ${index === step.order.length - 1 ? "disabled" : ""}>↓</button>
      </span>
    </div>
  `).join("");
  action.innerHTML = `<button class="primary-button scenario-check-button" type="button" data-scenario-check>Check this order</button>`;
}

function renderScenario() {
  const step = scenarioSteps[scenarioIndex];
  if (!step) return;
  document.getElementById("scenario-step").textContent = `Step ${scenarioIndex + 1} of ${scenarioSteps.length}`;
  document.getElementById("scenario-result").textContent = scenarioRunComplete ? "Completed" : "In progress";
  document.getElementById("scenario-title").textContent = activeScenario.title;
  document.getElementById("scenario-task-type").textContent = step.typeLabel;
  document.getElementById("scenario-mode-badge").textContent = activeScenario.modeLabel;
  document.getElementById("scenario-text").textContent = `${step.situation}\n\n${step.prompt}`;
  scenarioStepComplete = false;
  renderScenarioOptions(step);
  document.getElementById("scenario-focus").innerHTML = activeScenario.focus.map((item) => `
    <span>${escapeHtml(item)}</span>
  `).join("");
  hydrateIcons();
}

function showScenarioNext(feedback) {
  scenarioStepComplete = true;
  document.getElementById("scenario-feedback").textContent = feedback;
  document.querySelectorAll("#scenario-options button, #scenario-options input").forEach((control) => {
    control.disabled = true;
  });

  const finalStep = scenarioIndex === scenarioSteps.length - 1;
  if (finalStep) {
    scenarioRunComplete = true;
    document.getElementById("scenario-result").textContent = "Completed";
    document.getElementById("scenario-action").innerHTML = `<button class="primary-button" type="button" data-scenario-new>Practice another case</button>`;
    if (!scenarioRewardAwarded) {
      scenarioRewardAwarded = true;
      progress.scenariosPassed += 1;
      const reward = selectedDifficulty === "advanced" ? 35 : selectedDifficulty === "challenge" ? 30 : 25;
      awardTrainingReward("scenario", reward);
    }
    return;
  }

  document.getElementById("scenario-action").innerHTML = `<button class="primary-button" type="button" data-scenario-next>Continue to next step</button>`;
}

function answerScenarioSingle(optionIndex) {
  if (scenarioStepComplete) return;
  const step = scenarioSteps[scenarioIndex];
  const option = step.options[optionIndex];
  const button = document.querySelector(`[data-scenario-single="${optionIndex}"]`);
  if (!option.correct) {
    button.classList.add("wrong");
    button.disabled = true;
    document.getElementById("scenario-feedback").textContent = `Not quite. ${option.feedback} Try another answer.`;
    return;
  }

  button.classList.add("correct");
  showScenarioNext(`Correct. ${option.feedback}`);
}

function checkMultipleScenario() {
  if (scenarioStepComplete) return;
  const step = scenarioSteps[scenarioIndex];
  const selected = new Set([...document.querySelectorAll("[data-scenario-multiple]:checked")].map((input) => Number(input.dataset.scenarioMultiple)));
  if (!selected.size) {
    document.getElementById("scenario-feedback").textContent = "Select at least one answer before checking.";
    return;
  }

  let correct = true;
  step.options.forEach((option, index) => {
    const row = document.querySelector(`[data-scenario-multiple-row="${index}"]`);
    row.classList.remove("correct", "wrong", "missed");
    if (option.correct !== selected.has(index)) correct = false;
    if (selected.has(index)) row.classList.add(option.correct ? "correct" : "wrong");
    if (option.correct && !selected.has(index)) row.classList.add("missed");
  });

  if (!correct) {
    document.getElementById("scenario-feedback").textContent = `Some choices need another look. Green choices are right; outlined choices were missed. ${step.feedback}`;
    return;
  }

  showScenarioNext(`Correct. ${step.feedback}`);
}

function moveScenarioOrder(index, direction) {
  if (scenarioStepComplete) return;
  const step = scenarioSteps[scenarioIndex];
  const nextIndex = direction === "up" ? index - 1 : index + 1;
  if (nextIndex < 0 || nextIndex >= step.order.length) return;
  [step.order[index], step.order[nextIndex]] = [step.order[nextIndex], step.order[index]];
  renderScenarioOptions(step);
  document.getElementById("scenario-feedback").textContent = "Order updated. Check it when the full sequence looks right.";
}

function checkScenarioOrder() {
  if (scenarioStepComplete) return;
  const step = scenarioSteps[scenarioIndex];
  const correct = step.order.every((item, index) => item.correctIndex === index);
  document.querySelectorAll("[data-order-row]").forEach((row, index) => {
    row.classList.toggle("correct", step.order[index].correctIndex === index);
    row.classList.toggle("wrong", step.order[index].correctIndex !== index);
  });

  if (!correct) {
    document.getElementById("scenario-feedback").textContent = `Not yet. Green actions are already in the correct position. Reorder the others and check again. ${step.feedback}`;
    return;
  }

  showScenarioNext(`Correct order. ${step.feedback}`);
}

function advanceScenario() {
  if (!scenarioStepComplete || scenarioIndex >= scenarioSteps.length - 1) return;
  scenarioIndex += 1;
  renderScenario();
  document.getElementById("scenario-feedback").textContent = "Read the full update before choosing your next action.";
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
  scenarioRunComplete = false;
  document.getElementById("scenario-feedback").textContent = "Scenario restarted. Read the full situation before acting.";
  renderScenario();
}

function generateScenario() {
  buildScenario();
  scenarioRewardAwarded = false;
  document.getElementById("scenario-feedback").textContent = selectedPracticeMode === "team"
    ? "New team exercise generated. Agree on priorities and use clear named roles."
    : "New individual case generated. Decide what you would do and why.";
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

  const scenarioSingle = event.target.closest("[data-scenario-single]");
  if (scenarioSingle) answerScenarioSingle(Number(scenarioSingle.dataset.scenarioSingle));

  const scenarioMove = event.target.closest("[data-order-move]");
  if (scenarioMove) moveScenarioOrder(Number(scenarioMove.dataset.orderIndex), scenarioMove.dataset.orderMove);

  if (event.target.closest("[data-scenario-check]")) {
    const step = scenarioSteps[scenarioIndex];
    if (step?.type === "multiple") checkMultipleScenario();
    if (step?.type === "order") checkScenarioOrder();
  }

  if (event.target.closest("[data-scenario-next]")) advanceScenario();
  if (event.target.closest("[data-scenario-new]")) generateScenario();

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

  if (event.target.id === "scenario-practice-mode") {
    selectedPracticeMode = event.target.value;
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

document.querySelectorAll(".language-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "bg" : "en";
    localStorage.setItem("firstAidLanguage", currentLanguage);
    authMessage = "";
    applyLanguage();
    hydrateIcons();
  });
});

document.querySelectorAll("[data-open-privacy]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("privacy-modal").classList.remove("hidden");
    document.getElementById("close-privacy").focus();
  });
});

document.getElementById("close-privacy").addEventListener("click", () => {
  document.getElementById("privacy-modal").classList.add("hidden");
});

document.getElementById("privacy-modal").addEventListener("click", (event) => {
  if (event.target.id === "privacy-modal") {
    event.currentTarget.classList.add("hidden");
  }
});

document.getElementById("delete-account-button").addEventListener("click", () => {
  const confirmationInput = document.getElementById("delete-account-confirmation");
  confirmationInput.value = "";
  document.getElementById("confirm-delete-account").disabled = true;
  document.getElementById("delete-account-modal").classList.remove("hidden");
  confirmationInput.focus();
});

document.getElementById("delete-account-confirmation").addEventListener("input", (event) => {
  document.getElementById("confirm-delete-account").disabled = event.target.value.trim() !== "DELETE";
});

document.getElementById("cancel-delete-account").addEventListener("click", () => {
  document.getElementById("delete-account-modal").classList.add("hidden");
});

document.getElementById("delete-account-modal").addEventListener("click", (event) => {
  if (event.target.id === "delete-account-modal") {
    event.currentTarget.classList.add("hidden");
  }
});

document.getElementById("confirm-delete-account").addEventListener("click", async () => {
  const confirmationInput = document.getElementById("delete-account-confirmation");
  if (!supabaseClient || !currentUser || confirmationInput.value.trim() !== "DELETE") return;

  const button = document.getElementById("confirm-delete-account");
  const originalMarkup = button.innerHTML;
  button.disabled = true;
  button.classList.add("is-loading");
  button.textContent = t("deletingAccount");

  const { error } = await supabaseClient.functions.invoke("delete-account", {
    body: { confirmation: "DELETE" }
  });

  if (error) {
    button.innerHTML = originalMarkup;
    button.classList.remove("is-loading");
    button.disabled = false;
    hydrateIcons();
    showAuthMessage(error.message || "The account could not be deleted.");
    return;
  }

  await supabaseClient.auth.signOut({ scope: "local" });
  currentUser = null;
  currentAppRole = "learner";
  progress = { ...defaultProgress };
  localStorage.removeItem("firstAidTrainerProgress");
  document.getElementById("delete-account-modal").classList.add("hidden");
  authMode = "login";
  authMessage = t("accountDeleted");
  renderAll();
  applyLanguage();
  updateAuthGate();
  showStreakToast(t("accountDeleted"));
});

document.getElementById("close-social-welcome").addEventListener("click", () => {
  document.getElementById("social-welcome-modal").classList.add("hidden");
});

document.getElementById("social-welcome-modal").addEventListener("click", (event) => {
  if (event.target.id === "social-welcome-modal") {
    event.currentTarget.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.getElementById("privacy-modal").classList.add("hidden");
  document.getElementById("delete-account-modal").classList.add("hidden");
  document.getElementById("social-welcome-modal").classList.add("hidden");
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
    const { error } = await withAuthBusy("savingPassword", () => supabaseClient.auth.updateUser({ password }));
    if (error) {
      showAuthMessage(friendlyAuthError(error));
      return;
    }
    authMode = "login";
    document.getElementById("account-password").value = "";
    authMessage = t("passwordUpdated");
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
    const { data, error } = await withAuthBusy("signingIn", () => supabaseClient.auth.signInWithPassword({ email, password }));
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
    showStreakToast(t("loggedIn"));
    return;
  }

  if (!name) {
    showAuthMessage("Add your name to register.");
    return;
  }

  const { data, error } = await withAuthBusy("creatingAccount", () => supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
        data: {
          display_name: name,
          initials: (initials || name.slice(0, 2) || "FA").toUpperCase(),
          role,
          heard_from: heardFrom
        }
      }
    }));

  if (error) {
    showAuthMessage(friendlyAuthError(error));
    return;
  }

  if (!data.session) {
    currentUser = null;
    authMode = "login";
    renderAuthMode();
    document.getElementById("account-password").value = "";
    startResendCooldown();
    showAuthMessage(t("registrationSent"));
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
  setAuthBusy(true, "signingIn");
  showAuthMessage(t("socialOpening", { provider: providerName }));
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider,
    options: { redirectTo }
  });
  if (error) {
    setAuthBusy(false);
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
    showAuthMessage(t("enterEmailFirst"));
    document.getElementById("account-email").focus();
    return;
  }
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await withAuthBusy("sendingEmail", () => supabaseClient.auth.resetPasswordForEmail(email, { redirectTo }));
  if (error) {
    showAuthMessage(friendlyAuthError(error));
    return;
  }
  showAuthMessage(t("resetSent"));
});

document.getElementById("resend-confirmation-button").addEventListener("click", async () => {
  const email = document.getElementById("account-email").value.trim();
  if (!supabaseClient) {
    showAuthMessage(t("authUnavailablePrompt"));
    return;
  }
  if (!email) {
    showAuthMessage(t("enterEmailFirst"));
    document.getElementById("account-email").focus();
    return;
  }

  const emailRedirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await withAuthBusy("sendingEmail", () => supabaseClient.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo }
  }));
  if (error) {
    showAuthMessage(friendlyAuthError(error));
    return;
  }

  startResendCooldown();
  showAuthMessage(t("confirmationSent"));
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
  authMessage = t("loggedOut");
  progress = { ...defaultProgress };
  localStorage.removeItem("firstAidTrainerProgress");
  renderAll();
  updateAuthGate();
  document.getElementById("account-modal").classList.remove("hidden");
  showStreakToast(t("loggedOut"));
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
      authMessage = t("authLockedPrompt");
    }

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
      currentUser = session?.user || null;
      if (event === "PASSWORD_RECOVERY" && currentUser) {
        authMode = "recovery";
        authMessage = t("authRecoveryPrompt");
        renderAll();
        applyLanguage();
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
        authMessage = t("authLockedPrompt");
      }
      renderAll();
      applyLanguage();
      updateAuthGate();
      maybeShowSocialWelcome(currentUser);
    });
  } else {
    authMessage = t("authUnavailablePrompt");
  }

  await loadRotatingQuizQuestions();
  quizIndex = 0;
  quizCorrect = 0;
  renderAll();
  applyLanguage();
  updateResendButton();
  updateAuthGate();
  maybeShowSocialWelcome(currentUser);
}

initApp();
