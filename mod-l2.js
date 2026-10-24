/* ============================================================
   NCEA LEVEL 2 — MODERATION DATA (internal standards only)
   Loaded by whs-moderation-engine.html. Keep in the same folder.
   Same shape as mod-l3.js — see that file's header for field notes.

   NZQA's 2025 National Moderator's Report covered no Level 2
   History standards, so nmr is empty here. Add insights when a
   later report includes them.
   ============================================================ */
(function () {

const FACULTIES = [
 { name:'Social Sciences', dark:'#7900CC', light:'#F5EFFF',
   subjects:['History','Geography','Classical Studies','Business Studies','Psychology'] },
 { name:'Science', dark:'#007040', light:'#E4F4E5',
   subjects:['Biology','Chemistry','Physics','Earth & Space Science'] },
 { name:'Maths', dark:'#9F1559', light:'#F8E7EE', subjects:['Mathematics and Statistics'] },
 { name:'English', dark:'#22229D', light:'#EBF5FA', subjects:['English','Media Studies'] },
 { name:'Māori', dark:'#1A6ABE', light:'#ECFBFF', subjects:['Te Reo Māori'] },
 { name:'Technology', dark:'#DB2026', light:'#FDECE7', subjects:['Digital Technologies'] },
 { name:'Arts', dark:'#9A6300', light:'#FFF7EE', subjects:['Art History','Drama','Music'] },
 { name:'PE & Health', dark:'#BF0000', light:'#FFEDED', subjects:['Physical Education','Health'] }
];

const SUBJECTS = {

'History':{
  association:'New Zealand History Teachers’ Association (NZHTA)',
  discipline:'History at Level 2 (curriculum level 7) is judged on explaining as an historian: key historical ideas, each supported by specific, attributed evidence, with how and why explained rather than events narrated. Excellence is about the quality of explanation — convincing, perceptive or discerning — not length.',
  sources:[
    { label:'NZQA History clarifications', url:'https://www2.nzqa.govt.nz/ncea/subjects/select-subject/history/clarifications/' },
    { label:'Key historical ideas with evidence (NZQA)', url:'https://www2.nzqa.govt.nz/ncea/subjects/select-subject/history/clarifications/key-historical-ideas/' },
    { label:'Level 2 History conditions of assessment (TKI)', url:'https://ncea.tki.org.nz/Resources-for-internally-assessed-achievement-standards/Social-sciences/History/Level-2-History' }
  ],
  standards:[

  /* ------------------------------------------------------------ 2.1 */
  { code:'91229', ref:'2.1', credits:4, version:'Version 3 (published December 2024)', verified:'2026-10-25',
    title:'Carry out an inquiry of an historical event or place that is of significance to New Zealanders',
    criteria:{
      achieved:'Carry out an inquiry of an historical event or place that is of significance to New Zealanders.',
      merit:'Carry out, in-depth, an inquiry of an historical event or place that is of significance to New Zealanders.',
      excellence:'Comprehensively carry out an inquiry of an historical event or place that is of significance to New Zealanders.'},
    notes:[
      'EN2 — Carry out an inquiry (Achieved) involves: preparing to carry out an inquiry; making annotations on the evidence; organising sources and evidence; evaluating the inquiry.',
      'EN2 — Carry out, in-depth (Merit) involves: making DETAILED annotations on the evidence; providing a COHERENT evaluation of the inquiry.',
      'EN2 — Comprehensively carry out (Excellence) involves: making PERCEPTIVE annotations on the evidence; providing a PERCEPTIVE evaluation of the inquiry.',
      'EN4 — Preparing typically involves: identifying a topic; preliminary reading to identify potentially useful sources of evidence; developing focussing question(s) (with guidance).',
      'EN5 — Annotations typically add explanatory or evaluative notes and may include: describing links between the evidence and the focussing question(s); identifying the particular usefulness of the evidence and/or the need for caution; identifying different perspectives; cross-referencing to support analysis; weighing the evidence the sources contain.',
      'EN6 — Organising typically involves: selecting evidence from a VARIETY of sources that answers the focussing question(s); recording source details so that an independent check can be made.',
      'EN7 — Evaluating typically involves: evaluating strengths and weaknesses and/or successes and difficulties in the inquiry process; identifying issues that affect the usefulness and reliability of the evidence gathered; explaining reliability issues; identifying issues that affect the inquiry as a whole.',
      'EN10 — Where a person is central, the focus must be their role in or contribution to an event or place, not a biography.',
      'EN11–14 — Significance may be judged by importance at the time, number and depth of lives affected, duration, and continuing effect. The event need not be in New Zealand. The context should be relevant to 21st-century students.'
    ],
    clarifications:{ date:'March 2025 (updated for the December 2024 standard) — summarised', points:[
      'The topic should be more than a title: a sentence or two of context explaining why it is worth studying.',
      'Preliminary reading should lead students to name specific sources and the useful evidence they might hold.',
      'The focusing question should be discrete, open-ended, manageable and worth researching. Only one is required, and teacher guidance in forming it is permitted.',
      'Not every piece of evidence needs an annotation. Higher grades can be reached with brief annotations tied to specific evidence.',
      'For Excellence, perceptive annotations move from explaining a source to evaluating its value and its limitations.',
      'Sources can vary by type (books, websites, interviews) and by number within a type. Recorded details must allow independent checking.',
      'Evaluations usually comment on several of the EN7 points. Evaluative comments made within the annotations count toward the evaluation judgement.',
      'For Merit and Excellence, generalisations in the evaluation need supporting detail, explanation and examples.'
    ]},
    nmr:[],
    exemplars:[
      { grade:'Achieved', text:'"The Battle of Long Tan": short context paragraph on significance; six possible sources with general comments on usefulness; focus question suited to level 7. Eight sources including archival footage, personal accounts and photographs, adequately referenced and organised. Most annotations explain nature, relevance and usefulness; some basic reliability comment and early discussion of caution; some cross-referencing. Evaluation identifies strengths, a difficulty with solutions, and gives general reasons for the most useful source.',
        miss:'Not Merit because annotations and evaluation were not detailed or coherent enough — e.g. be specific about which ideas were corroborated in which sources, and explore the motives of whoever filmed the footage and how that shaped what was recorded.' },
      { grade:'Merit', text:'Discrimination against Chinese miners in New Zealand. Five possible sources, though comments on their usefulness were generic. Eight sources including strong primary evidence (cartoon, contemporary newspapers, photographs) and reputable secondary sources, well organised. DETAILED annotations on content, relevance, usefulness, reliability, perspective, bias and the need for caution. COHERENT evaluation with specific strengths and weaknesses and their impact, including how the question itself drew biased sources and what that meant for representativeness.',
        miss:'Not Excellence because both annotations and evaluation must be PERCEPTIVE, not just detailed and coherent — e.g. recognising that few political sources are neutral, or the benefits of sources written years after the events.' },
      { grade:'Excellence', text:'"NZ medics in the Vietnam War": concise précis, six possible sources each with specific reasons, two focus questions. Eight sources, balanced primary and secondary, fully referenced. Every annotation covers main ideas, relevance and reliability; some are perceptive (how word choice and tone reveal the medics’ turmoil). The evaluation reads as a historian’s: how reliable sources were chosen, how varied perspectives were captured, how sources worked together, with a deep grasp of reliability (corroboration, intent, authorship, primacy). NZQA notes the annotations far exceeded the volume needed.' }
    ],
    components:[
      'Preparation: topic, preliminary reading and focus question',
      'Annotations on the evidence',
      'Organisation and recording of sources',
      'Evaluation of the inquiry'
    ],
    gates:{
      achieved:[
        'All four parts of the inquiry are present: preparation (topic with context, preliminary reading naming sources, a focusing question), annotations, organised evidence from a VARIETY of sources with details recorded, and an evaluation. A wholly missing part is a gate failure; a thin part is a best-fit matter.',
        'Annotations link the evidence to the focusing question and say something about its usefulness or the need for caution.',
        'The evaluation identifies strengths/weaknesses or successes/difficulties and at least touches on reliability.'
      ],
      merit:[
        'Annotations are DETAILED: specific to the evidence, covering reliability, perspective or bias, not just relevance.',
        'The evaluation is COHERENT: specific strengths and weaknesses with examples and their impact on the inquiry. Unsupported generalisations do not meet this gate.',
        'Both are needed. A strong evaluation cannot make up for annotations that only describe content.'
      ],
      excellence:[
        'Annotations are PERCEPTIVE: they move from explaining the source to evaluating its value and limitations (motive, intent, corroboration, what the source cannot show).',
        'The evaluation is PERCEPTIVE: it reads as a historian’s judgement of how reliable and representative the evidence base is and why.',
        'Both are needed. Perceptive annotations with a merely coherent evaluation cap at Merit, and vice versa.'
      ]},
    watch:[
      'Comments on the usefulness of possible sources that are generic rather than specific (the Merit exemplar was flagged for this).',
      'Primary/secondary misclassification, and "variety" that is really several sources of one type.',
      'Citations or URLs that cannot be traced, or quotations that do not appear in the cited source. Mark as "check", never as "fabricated".',
      'Biography instead of a person’s role in an event (EN10).',
      'Annotations repeated near-verbatim across sources.',
      'Evaluative comments buried in the annotations — the clarification says these count toward the evaluation, so look for them before judging the evaluation thin.',
      'Teacher guidance on the focusing question is allowed; guidance on the annotations or evaluation would be an authenticity question for the teacher.'
    ]},

  /* ------------------------------------------------------------ 2.2 */
  { code:'91230', ref:'2.2', credits:5, version:'Version 2 (published November 2014)', verified:'2026-10-25',
    title:'Examine an historical event or place that is of significance to New Zealanders',
    criteria:{
      achieved:'Examine an historical event or place that is of significance to New Zealanders.',
      merit:'Examine, in-depth, an historical event or place that is of significance to New Zealanders.',
      excellence:'Comprehensively examine an historical event or place that is of significance to New Zealanders.'},
    notes:[
      'EN2 — Examine (Achieved) involves communicating key historical ideas through a COHERENT explanation of an event or place, with supporting evidence, and DESCRIBING its significance to New Zealanders. Narrative by itself is insufficient — a chronological description of what happened is not by itself an examination.',
      'EN2 — Examine, in-depth (Merit) involves communicating key historical ideas through a coherent explanation, with DETAILED supporting evidence and an EXPLANATION of its significance to New Zealanders.',
      'EN2 — Comprehensively examine (Excellence) involves communicating key historical ideas through a CONVINCING explanation, with COMPREHENSIVE supporting evidence and an explanation of its significance to New Zealanders.',
      'EN5 — Where a person is central, the focus is their role in or contribution to an event or place; a biography alone is not enough.',
      'EN6–9 — Significance may be judged by importance at the time, depth/number/duration of lives affected, and continuing effect. The event need not be in New Zealand. The context should be relevant to 21st-century students.'
    ],
    clarifications:{ date:'December 2020 — summarised', points:[
      'The standard assesses: examining what happened in an event, place or movement; processing evidence into key historical ideas with supporting evidence; avoiding narrative; explaining the significance to New Zealanders.',
      'Judge whether each paragraph or section has a clearly expressed key idea, usually its topic sentence, with evidence that directly supports it and does not drift into other matters (which turns it into narrative).',
      'At Level 2, examining means identifying and communicating key historical ideas, with an appropriate depth of supporting evidence, and explaining the context.',
      'Most of the evidence should be the examination itself. Significance is normally a concluding section with specific evidence, likely about 350–450 words; take into account how hard significance is to establish for the topic.',
      'Teachers managing workload may suggest word counts, keep contexts focused, or combine with 91232.',
      'Key historical ideas guidance: a heading such as "nationalism" is not a key idea; "Nationalism was an important motivating force for the North Vietnamese during the 1960s" is. Paragraphs with few key ideas are simple narrative and do not meet the standard.'
    ]},
    nmr:[],
    exemplars:[
      { grade:'Achieved', text:'The atomic bombing of Japan. Introduction outlines context with specific evidence. Consistent key ideas (a basic cause, a basic consequence or significance), each paragraph staying on its idea. Most evidence explains how and why, meeting the "coherent explanation" requirement; the causes paragraphs are detailed. Significance covers J-Force veterans and changing New Zealand attitudes to nuclear weapons.',
        miss:'Not Merit because the other body paragraphs did not consistently integrate detailed evidence, the sequence was not consistently logical, stronger evidence (quotes, statistics, specific examples) was needed, and the significance section DESCRIBED rather than EXPLAINED.' },
      { grade:'Merit', text:'Kristallnacht. Each paragraph opens with a clear, sometimes complex key idea; causes are connected to their influence on the event rather than listed. Detailed, consistent evidence (names, dates, statistics, short primary extracts). Paragraphs discrete and logically sequenced, usually explaining how and why in closing sentences. Significance explains New Zealand’s acceptance of Kindertransport refugees and the precedent set.',
        miss:'Not Excellence because the explanation was not yet CONVINCING: more synthesis of descriptive elements, deeper explanation, links to wider context, and recognition that there is rarely one agreed narrative of what happened or why.' },
      { grade:'Excellence', text:'New Zealand’s Vietnam War protests. Comprehensive evidence from primary and secondary sources, case studies, statistics, names and quotations. Clear, well-developed key ideas, several showing critical thinking through wider context (ethical debate, public pressure on government, television coverage, counter-culture) and complexity (the Prime Minister’s stance against public opinion, conflicting historiography). Significance connects shifting social attitudes to foreign policy and draws present-day parallels.' }
    ],
    components:[
      'Key historical ideas and coherent explanation',
      'Supporting evidence',
      'Significance to New Zealanders'
    ],
    gates:{
      achieved:[
        'The response is organised through key historical ideas (claims, usually topic sentences) with supporting evidence. Predominantly narrative or chronological writing fails this gate.',
        'The explanation is coherent — it explains how and why, not just what.',
        'Significance to New Zealanders is at least DESCRIBED, with evidence.'
      ],
      merit:[
        'Evidence is DETAILED and integrated consistently across the body paragraphs, not just in one or two.',
        'Significance to New Zealanders is EXPLAINED (how and why it mattered), not just described.'
      ],
      excellence:[
        'The explanation is CONVINCING: synthesised, linked to wider context, and alert to complexity or competing interpretations.',
        'Evidence is COMPREHENSIVE: varied, specific, and sustained throughout.',
        'Convincing writing cannot lift a response whose evidence or significance only reached Achieved.'
      ]},
    watch:[
      'Headings standing in for key ideas ("Causes", "Social class").',
      'Long background or introduction that does not contribute to the examination.',
      'A significance section that is very short, generic, or only describes — the Achieved exemplar’s main shortfall.',
      'Quotations, statistics or dates that need checking against the cited source.',
      'Biography instead of a person’s role in an event (EN5).',
      'If combined with 91232, judge each standard on its own criteria and do not double-count evidence.'
    ]},

  /* ------------------------------------------------------------ 2.4 */
  { code:'91232', ref:'2.4', credits:5, version:'Version 2 (published November 2014)', verified:'2026-10-25',
    title:'Interpret different perspectives of people in an historical event that is of significance to New Zealanders',
    criteria:{
      achieved:'Interpret different perspectives of people in an historical event that is of significance to New Zealanders.',
      merit:'Interpret in-depth different perspectives of people in an historical event that is of significance to New Zealanders.',
      excellence:'Comprehensively interpret different perspectives of people in an historical event that is of significance to New Zealanders.'},
    notes:[
      'EN2 — Interpret (Achieved) involves investigating and explaining perspectives in an historically accurate manner, either from the perspective of named people or people in an identified historical context, or from the point of view of historians, with supporting evidence.',
      'EN2 — Interpret in-depth (Merit) involves interpreting perspectives which show DEPTH OF UNDERSTANDING, with relevant supporting evidence.',
      'EN2 — Comprehensively interpret (Excellence) involves interpreting perspectives which show depth of understanding AND DISCERNMENT, with significant relevant supporting evidence.',
      'EN3/4 — A perspective is a person’s point of view and attitudes or beliefs, including the reasons behind them and the related actions or responses. "People" may be individuals or groups.',
      'EN5 — Perspectives must be interpreted in relation to an historical event, covering the REASONS for and ACTIONS linked to each perspective, drawing on the views and actions of MORE THAN ONE person. Allowed formats include speeches, interview answers, diary entries, pamphlets, role plays, radio broadcasts, news reports, essays and briefing papers.',
      'EN6–9 — Event definitions and significance criteria as for 2.2; the event need not be in New Zealand; the context should be relevant to 21st-century students.'
    ],
    clarifications:{ date:'December 2020 — summarised', points:[
      'Students describe and explain people’s perspectives, with depth increasing from Achieved to Excellence. Depth comes from more sophisticated ideas and stronger historical evidence.',
      'At Excellence there must be at least ONE clear example of discernment — for instance showing the subtler factors behind a person’s viewpoint.',
      'Perspectives may belong to people at the time, later figures, historians, or the student.',
      'A brief historian’s introduction is fine but usually is not assessed evidence.',
      'Avoid narrative or chronological structure. For each person: identify the perspective, give historical evidence explaining it, and describe any actions taken because of it. Do not penalise a student where the person could not act.',
      'Role play is permitted (unlike Level 3 91437). Judge the accurate historical content, not invented detail added for authenticity.',
      'Teachers may suggest word counts, keep contexts narrow, or combine with 91230.'
    ]},
    nmr:[],
    exemplars:[
      { grade:'Achieved', text:'Diary entries by Olaf Nelson and Colonel Sir Stephen Allen on the Mau movement, largely historically accurate. Each person’s point of view and the reasons for it identified, with actions and responses discussed, using legislation, people, events, short quotes and dates as evidence.',
        miss:'Not Merit because of generalised sentiment and repetition. Merit needs more frequent specific examples (named ordinances, the banishment of chiefs), how those affected felt and why it mattered, and the attitudes behind the administration’s actions made explicit.' },
      { grade:'Merit', text:'Gandhi and General Dyer on the Rowlatt Act, written as a historian. Each perspective explained through values, attitudes, experiences and the cultural and political context; broader context and tensions identified; multiple factors shaping each view. Consistently specific evidence.',
        miss:'Not Excellence because discernment was missing: tensions only briefly identified, wider context under-developed, little on contradictions or how perspectives evolved (e.g. linking to other post-war unrest in Egypt, Ireland, Kenya, Iraq).' },
      { grade:'Excellence', text:'John Minto and Robert Muldoon on the 1981 Springbok Tour, as a historian. Thoroughly explains why each held their perspective, their actions, and how actions connect to viewpoint. Varied, well-selected evidence consistently applied. Discernment through wider context (an era of activism) and nuanced social, political and cultural influences, including identity.' }
    ],
    components:[
      'Perspectives identified and explained (reasons)',
      'Actions and responses linked to each perspective',
      'Supporting historical evidence and accuracy'
    ],
    gates:{
      achieved:[
        'Perspectives of MORE THAN ONE person or group are interpreted in relation to a specific historical event.',
        'For each: the perspective, the REASONS for it, and the related ACTIONS or responses (where the person could act), supported by historical evidence.',
        'The content is historically accurate. In role play, invented detail earns nothing; only the accurate history counts.',
        'Not narrative or chronological.'
      ],
      merit:[
        'DEPTH OF UNDERSTANDING: each perspective explained through values, attitudes, experiences and context, with consistently specific, relevant evidence rather than generalised sentiment.'
      ],
      excellence:[
        'DISCERNMENT: at least one clear example of seeing subtler factors, tensions, contradictions or change in a perspective, or connecting it to wider context.',
        'Significant relevant supporting evidence, consistently applied.',
        'Discernment must sit on top of Merit-level depth. One perceptive sentence in an otherwise general response does not lift it.'
      ]},
    watch:[
      'Role-play pieces where much of the content is invented colour rather than accurate history — separate the two before judging.',
      'Anachronisms or factual errors in role play (dates, offices held, events the speaker could not yet know about).',
      'Only one person’s perspective developed, with the other thin.',
      'Generalised or repeated sentiment in place of specific evidence (the Achieved exemplar’s main shortfall).',
      'Quotations attributed to historical figures that need checking.',
      'If combined with 91230, judge each standard on its own criteria and do not double-count evidence.'
    ]}
  ]}
};

window.MOD_DATA = window.MOD_DATA || {};
window.MOD_DATA['2'] = {
  meta:{ qualification:'NCEA', stage:'Level 2', year:2026 },
  faculties: FACULTIES,
  subjects: SUBJECTS
};

})();
