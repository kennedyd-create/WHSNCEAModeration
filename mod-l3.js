/* ============================================================
   NCEA LEVEL 3 — MODERATION DATA (internal standards only)
   Loaded by whs-moderation-engine.html. Keep in the same folder.

   Each standard carries everything the moderation prompt needs:
     criteria        verbatim achievement criteria
     notes           the explanatory notes that define the criteria
     clarifications  NZQA clarification points (dated)
     nmr             National Moderator's Report insights (dated)
     exemplars       what NZQA's annotated exemplars say sits at
                     each grade, and why the next grade was missed
     gates           the bottom-up checks the AI applies
     components      default task components (teacher can edit)
     watch           things that often go wrong in this standard —
                     fed into "Points to note"

   verified: date the NZQA sources were last read for this entry.
   To add a subject: copy a subject block, swap the standards, and
   add the subject name to its faculty below.
   ============================================================ */
(function () {

const FACULTIES = [
 { name:'Social Sciences', dark:'#7900CC', light:'#F5EFFF',
   subjects:['History','Geography','Classical Studies','Business Studies','Economics','Psychology'] },
 { name:'Science', dark:'#007040', light:'#E4F4E5',
   subjects:['Biology','Chemistry','Physics','Earth & Space Science'] },
 { name:'Maths', dark:'#9F1559', light:'#F8E7EE', subjects:['Calculus','Statistics'] },
 { name:'English', dark:'#22229D', light:'#EBF5FA', subjects:['English','Media Studies'] },
 { name:'Māori', dark:'#1A6ABE', light:'#ECFBFF', subjects:['Te Reo Māori','Te Ao Haka'] },
 { name:'Technology', dark:'#DB2026', light:'#FDECE7', subjects:['Digital Technologies'] },
 { name:'Arts', dark:'#9A6300', light:'#FFF7EE', subjects:['Art History','Drama','Music'] },
 { name:'PE & Health', dark:'#BF0000', light:'#FFEDED', subjects:['Physical Education','Health'] }
];

const SUBJECTS = {

'History':{
  association:'New Zealand History Teachers’ Association (NZHTA)',
  discipline:'History is judged on thinking as a historian: an argument built from key historical ideas, each supported by specific, attributed evidence, with sources interrogated rather than quoted and judgements kept distinct from description. Length is never a criterion in itself.',
  sources:[
    { label:'NZQA History clarifications', url:'https://www2.nzqa.govt.nz/ncea/subjects/select-subject/history/clarifications/' },
    { label:'History National Moderator’s Report (2025 round)', url:'https://www2.nzqa.govt.nz/ncea/subjects/select-subject/history/nmr/' },
    { label:'Key historical ideas with evidence (NZQA)', url:'https://www2.nzqa.govt.nz/ncea/subjects/select-subject/history/clarifications/key-historical-ideas/' },
    { label:'Level 3 History conditions of assessment (TKI)', url:'https://ncea.tki.org.nz/Resources-for-internally-assessed-achievement-standards/Social-sciences/History/Level-3-History' }
  ],
  standards:[

  /* ------------------------------------------------------------ 3.1 */
  { code:'91434', ref:'3.1', credits:5, version:'Version 3 (published December 2024)', verified:'2026-10-25',
    title:'Research an historical event or place of significance to New Zealanders, using primary and secondary sources',
    criteria:{
      achieved:'Research an historical event or place of significance to New Zealanders, using primary and secondary sources.',
      merit:'Research, in depth, an historical event or place of significance to New Zealanders, using primary and secondary sources.',
      excellence:'Comprehensively research an historical event or place of significance to New Zealanders, using primary and secondary sources.'},
    notes:[
      'EN2 — Research (Achieved) involves: following a research process; evaluating the research process, for example explaining the successes and difficulties encountered, explaining how the line of inquiry may have changed as evidence was accumulated, identifying the issues to consider for future inquiries.',
      'EN2 — Research in depth (Merit) involves: making analytical and critical annotations that include assessment of the reliability of selected evidence.',
      'EN2 — Comprehensively research (Excellence) involves: showing initiative in the gathering and selecting of relevant evidence, which may include persevering with difficult sources and/or using evidence from sources which are not readily available; AND evaluating the research process, for example by analysing the strength(s) and weakness(es) of the process, analysing how these are likely to impact on the validity of the findings, considering alternative research steps and/or lines of inquiry and/or methods, and their implications.',
      'EN3 — Following a research process typically involves: a research proposal that explains the importance of the topic; focusing question(s) that result from preliminary research; identifying specific possible sources through preliminary readings; selecting sufficient relevant evidence from BOTH primary and secondary sources to enable comprehensive analysis; making annotations; organising the evidence; recording source details.',
      'EN4 — Annotations may include: relevance and comparative usefulness in terms of the focusing question(s); different perspectives; cross-referencing specific information or ideas between sources; assessing the reliability of the evidence and/or source; identifying omissions or inaccuracies.',
      'EN7 — Sufficient source details to allow a later bibliography (author, title, publisher, place, date, full URL, access date). A full reference list/bibliography is NOT required.',
      'EN10/11/13 — Significance may be determined by importance at the time, depth/number/duration of lives affected, and continuing effect. The event need not be located in New Zealand.',
      'EN12 — Where a person is prominent, a biography is not sufficient; the focus must be their role in or contribution to an event or place.'
    ],
    clarifications:{ date:'March 2025 (updated for the December 2024 standard)', points:[
      'Annotations can be relatively brief and still reach the higher grades if they are directly linked to specific, identified evidence and show historian thinking. For Merit and Excellence they must be analytical and critical.',
      'Level 3 annotations must show a deeper and more critical assessment of the source than Level 2, with more consistent specificity. SEVERAL instances of higher-level annotation are required at Merit and/or Excellence — one good annotation is not enough.',
      'Excellence initiative commonly includes EITHER at least one source beyond the school and beyond the internet, OR a good amount of worthwhile evidence selected from at least one challenging source (difficult to read, very lengthy, archaic or academic).',
      'At every grade, evaluation comments should be fully explained and supported by specific examples. For Excellence they must be analytical and show awareness of how the strengths and weaknesses impact the validity of the findings.',
      'Only one focus question is required. "Specific possible sources" means specific titles or URLs, with a statement of how each could contribute.',
      'The evidence collected should be sufficient for comprehensive analysis of the context, of a depth and complexity suited to curriculum level 8, with meaningful engagement with BOTH primary and secondary sources.'
    ]},
    nmr:[],
    exemplars:[
      { grade:'Achieved', text:'Short, somewhat general statement of importance; focus question formed after preliminary reading with specific possible sources. Six sources, two primary; primary evidence embedded in secondary sources was engaged with and counted. Annotations assess relevance, perspective, bias, limitations and corroboration. The evaluation explains strengths and weaknesses with basic links to reliability and validity.',
        miss:'Not Merit because only some comments began to reach critical depth; more instances that go beyond explanatory or evaluative comment were needed.' },
      { grade:'Merit', text:'Detailed, insightful statement of importance; specific, manageable focus question. Six sources, one primary, but secondary sources containing rich primary accounts were engaged with. Several annotations are critical and analytical (e.g. the impact of and reasons for an author’s bias). Evaluation considers strengths and weaknesses with some reference to validity.',
        miss:'Not Excellence because most reliability comments stopped at author credentials, and the evaluation was not consistently analytical or explicitly linked to the validity of findings. Reliability at Excellence goes beyond bias and authorship: gaps in the evidence, corroboration between sources, how representative the sources are, the agenda behind their production.' },
      { grade:'Excellence', text:'Ten sources, four primary and two academic chapters; persevered with difficult sources. Annotations frequently critical and analytical (perspective, bias, agenda, expertise, gaps, comparative usefulness, corroboration). Evaluation analyses strengths and weaknesses and their direct impact on validity: how primary and secondary sources worked together, how the methodology may have narrowed findings, how personal bias shaped source selection. NZQA notes the annotations were longer than required — length is not what earned the grade.' }
    ],
    components:[
      'Research proposal and focus question',
      'Evidence selection and annotations',
      'Evaluation of the research process'
    ],
    gates:{
      achieved:[
        'A research process has been followed: importance of the topic explained, a focusing question that arises from preliminary reading, specific possible sources identified, relevant evidence from BOTH primary and secondary sources selected, annotated, organised and recorded. (EN3 says "typically", so a thin element is a best-fit matter; a wholly absent element is a gate failure to flag.)',
        'Annotations engage with the specific evidence, not just the source type, at curriculum level 8.',
        'The research process is evaluated in explained terms, with specific examples. No evaluation = Not Achieved.'
      ],
      merit:[
        'SEVERAL annotations are analytical and critical and include assessment of the RELIABILITY of the selected evidence. Reliability confined to an author’s credentials is weak evidence for this gate.'
      ],
      excellence:[
        'Initiative in gathering and selecting evidence is shown (a source beyond school and internet, or substantial worthwhile evidence from a challenging source).',
        'The evaluation is analytical and explicitly connects strengths and weaknesses to the VALIDITY of the findings, ideally considering alternative steps or lines of inquiry.',
        'Both conditions are needed. Strong initiative cannot make up for an explanatory evaluation, and a strong evaluation cannot lift annotations that never reached Merit.'
      ]},
    watch:[
      'Primary/secondary misclassification, especially edited document collections or primary quotations inside a secondary text (these can count as primary evidence if the student engaged with them).',
      'Citations that may not exist or do not match: unfamiliar book titles, plausible-looking URLs, page numbers or quotations that cannot be traced. Mark as "check", never as "fabricated".',
      'A focus question written after the evidence was collected, or so broad/narrow that the evidence cannot answer it.',
      'Biography instead of a person’s role in an event (EN12).',
      'Annotations repeated near-verbatim across sources, or generic comment about source type ("newspapers can be biased").',
      'An evaluation that only says what went well, or reads as a generic reflection unconnected to this student’s actual sources.'
    ]},

  /* ------------------------------------------------------------ 3.2 */
  { code:'91435', ref:'3.2', credits:5, version:'Version 3 (published December 2024)', verified:'2026-10-25',
    title:'Analyse an historical event, or place, of significance to New Zealanders',
    criteria:{
      achieved:'Analyse an historical event, or place, of significance to New Zealanders.',
      merit:'Analyse, in depth, an historical event, or place, of significance to New Zealanders.',
      excellence:'Comprehensively analyse an historical event, or place, of significance to New Zealanders.'},
    notes:[
      'EN2 — Analyse (Achieved) involves using key historical ideas with supporting evidence to communicate an ARGUMENT, and establishing the significance of the historical event or place to New Zealanders.',
      'EN2 — Analyse, in depth (Merit) involves using key historical ideas with IN-DEPTH supporting evidence to communicate an argument.',
      'EN2 — Comprehensively analyse (Excellence) involves presenting sound understanding, well-considered judgements of the evidence, and conclusions from an historian’s perspective. The analysis is presented through an argument using key historical ideas supported by comprehensive evidence drawn from primary AND secondary sources.',
      'EN3 — The format must give the opportunity to show the depth of analysis appropriate to Level 3.',
      'EN6 — Significance may be determined by importance at the time, depth/number/duration of lives affected, and continuing effect on society. EN7/8 — The event need not be located in New Zealand.'
    ],
    clarifications:{ date:'February 2025 (updated from issues sighted in external moderation)', points:[
      'Analysis moves beyond description of what happened, using key historical ideas with supporting evidence to communicate an argument. Description alone does not meet the standard at any grade.',
      'Analysis may include identifying different versions of the history and judging the differences, or examining causes and motives and relating these to the position the student is arguing.',
      'For Excellence, the student presents their own judgements on the historical debates and differences discussed — not written in the first person.',
      'Responding to a specific question or moot is more likely to produce an argument and analysis than a topic heading.',
      'Conclusions "as an historian" follow logically from the argument, rest on examined primary and secondary evidence, may go beyond the obvious, are balanced and fair rather than selective, and reflect the complex, constructed nature of history.',
      'Evidence is processed into key historical ideas, usually the topic sentence of a paragraph. At Level 3 each key idea needs specific supporting evidence at curriculum level 8 depth. A heading such as "Social class" is not a key idea; "Social class was an important factor in Victorian England" is. Paragraphs with few key ideas are narrative and do not meet the standard.',
      'Significance to New Zealanders must be addressed specifically, not only by inference, with specific supporting evidence. NZQA suggests this is likely to be more than a paragraph, around 350–450 words, and that the difficulty of establishing significance for the chosen context should be taken into account.'
    ]},
    nmr:[
      'The requirement to communicate an ARGUMENT (introduced in v3, end of 2024) was met in most responses sighted in 2025, usually where the task asked students to take a position on a moot or question.',
      'Most successful: argument stated clearly in the introduction, developed through the body paragraphs, and used as the basis of a logical, well-supported conclusion.',
      'Responses that only analysed causes, consequences and significance often lacked the argument the standard now requires.'
    ],
    exemplars:[
      { grade:'Achieved', text:'Several key historical ideas presenting an argument (acculturation rather than fatal impact). Frequent instances of analysis. Most paragraphs supported by a relevant extract of primary or secondary evidence. Significance inferred throughout and explicitly addressed in places.',
        miss:'Not Merit because further examples and depth were needed — e.g. a second piece of source evidence for a key idea, and the weighing of "to what extent" developed further.' },
      { grade:'Merit', text:'Two key historical ideas carrying an argument (the Native Land Court remains significant today). Frequent analysis, including of the authority and validity of the source authors. Every paragraph supported by extracts or summaries of primary or secondary evidence. Significance explicit throughout because of how the moot was phrased.',
        miss:'Not Excellence because conclusions were not drawn "as a historian": deeper engagement with the historiography (the merits of authors’ arguments and possible counter-arguments) or with wider context (other factors, their comparative weight) was needed.' },
      { grade:'Excellence', text:'A reasoned, supported argument (the extent of Enlightenment influence on the Declaration of Independence). Key ideas at the start of each paragraph; primary and secondary evidence integrated to set up the debate, then used to support the student’s own position. Frequent well-considered judgements ("This suggests that", "It is more accurate to assert"). Conclusions follow from the argument, are balanced, and go beyond the obvious. Significance to New Zealand established meaningfully (e.g. He Whakaputanga, Te Tiriti).' }
    ],
    components:[
      'Argument and key historical ideas',
      'Supporting evidence (primary and secondary)',
      'Significance to New Zealanders',
      'Judgements and conclusions as an historian'
    ],
    gates:{
      achieved:[
        'An ARGUMENT is communicated — a position that the response develops. A response that only explains causes, consequences and significance without arguing anything fails this gate.',
        'The response is organised through key historical ideas (claims, usually topic sentences), each with specific supporting evidence. Predominantly narrative writing fails this gate.',
        'Analysis is present, not just description.',
        'Significance to New Zealanders is established specifically, with evidence, not only by inference.'
      ],
      merit:[
        'Key ideas are supported by IN-DEPTH evidence, consistently — typically more than one piece of specific evidence per idea, and the "extent" or weighing developed.'
      ],
      excellence:[
        'Sound understanding and well-considered judgements of the evidence, with conclusions drawn as an historian (historiography weighed, counter-arguments or wider context considered, beyond the obvious, balanced).',
        'Comprehensive evidence drawn from BOTH primary and secondary sources. A response using only secondary sources cannot meet this gate.',
        'Judgements must sit on top of in-depth evidence. Confident conclusions resting on thin evidence cap at Achieved or Merit.'
      ]},
    watch:[
      'A topic heading instead of a moot or question in the task, which makes the argument requirement hard to meet — a task-design issue to raise with the teacher, not the student.',
      'Lengthy background that does not contribute to the argument.',
      'First-person judgements ("I think") — the clarification says Excellence judgements should not be in the first person. Note it; do not treat it as a grade gate.',
      'Quotations or statistics that need checking against the cited source, and historians quoted for positions they may not hold.',
      'Significance section much shorter than NZQA’s 350–450 word guide, or only implied.',
      'If the school combines this with 91437, make sure evidence is judged against each standard’s own criteria and not double-counted.'
    ]},

  /* ------------------------------------------------------------ 3.4 */
  { code:'91437', ref:'3.4', credits:5, version:'Version 2', verified:'2026-10-25',
    title:'Analyse different perspectives of a contested event of significance to New Zealanders',
    criteria:{
      achieved:'Analyse different perspectives of a contested event of significance to New Zealanders.',
      merit:'Analyse, in depth, different perspectives of a contested event of significance to New Zealanders.',
      excellence:'Comprehensively analyse different perspectives of a contested event of significance to New Zealanders.'},
    notes:[
      'EN2 — Analyse (Achieved) involves explaining, as an historian, different perspectives of the contested event.',
      'EN2 — Analyse, in depth (Merit) involves evaluating, as an historian, the VALIDITY of different perspectives of the contested event. Evaluating involves appraising and presenting an opinion.',
      'EN2 — Comprehensively analyse (Excellence) means making judgements, as an historian, on the historical validity of different perspectives, drawing conclusions that demonstrate thorough engagement with the evidence and the historical ideas it contains. Historical validity refers to people’s different historical perspectives and the reasons for them.',
      'EN3 — A contested event is subject to debate and argument about its origins, nature and/or consequences, and must have caused a significant divergence of opinion at the time or since.',
      'EN4 — Perspectives may be current (with hindsight) or previous interpretations, e.g. the "lions led by donkeys" debate: previous (Liddell Hart, AJP Taylor, CEW Bean, Sassoon) and current (Sheffield, Strachan, Pugsley, Harper).',
      'EN5–7 — Significance criteria as for 3.2; the event need not be located in New Zealand.'
    ],
    clarifications:{ date:'December 2020', points:[
      'Written as an historian writes, not as a role-play in which the student assumes the identity of an historical person.',
      'At least TWO perspectives that are CLEARLY DIFFERENT must be analysed.',
      'Achieved: identify different perspectives, then provide historical evidence that explains WHY each was or is held. Explanations specific and at curriculum level 8 depth.',
      'Merit: make judgements about the perspectives — identify the historical reasons or prejudices that created them, then comment as an historian on their validity, supported by historical evidence rather than unsupported personal reaction.',
      'Excellence: similar to Merit, but judgements rest on greater depth of evidence and explanation, showing thorough engagement; OVERALL CONCLUSIONS are drawn about whether the perspectives analysed are valid.',
      'A brief historian’s introduction is fine but usually does not contribute to the judgement.',
      'Teachers may supply some or all materials, provided students can still produce evidence of level 8 depth and sophistication.',
      'Schools may combine this with 91435 to manage workload.'
    ]},
    nmr:[
      'A context with a clearly contested element is essential: there must be genuine historical debate at the time or among historians since — for example disputed causes or a debated moral decision.',
      'Successful 2025 contexts: the intent of the Tohunga Suppression Act; why the atomic bomb was dropped (revisionist vs traditionalist); the Black Armband vs White Blindfold debate; functionalist vs intentionalist debate on the Holocaust.',
      'Comparing two different "experiences" of an event (e.g. Muldoon and Pasifika peoples in the Dawn Raids; Calley and Thompson at My Lai; pro- and anti-tour protestors in 1981) is unlikely to give the evidence required, especially for validity. That is closer to the Level 2 standard 91232.'
    ],
    exemplars:[
      { grade:'Achieved', text:'Three perspectives (Pankhurst, Viscount Helmsley, historian Fern Riddell) on whether the Suffragettes helped or hindered women’s suffrage. Explanations supported by historical evidence at level 8 depth; some basic analysis of the influences shaping each perspective.',
        miss:'Not Merit because the validity of the perspectives was not evaluated — no appraisal or opinion as an historian. More depth of explanation and evidence was also needed.' },
      { grade:'Merit', text:'Whether the US was justified in using atomic bombs: revisionist and post-revisionist perspectives fully unpacked, with varied, specific evidence including strong use of primary sources. Clear appraisals of validity: the accuracy, bias and reliability of the sources each side relies on, and whether evidence used by revisionists was available to Truman.',
        miss:'Not Excellence because the student stayed "on the fence" and did not conclude which perspective is best supported by the historical evidence.' },
      { grade:'Excellence', text:'The execution of Mary Queen of Scots: contemporary and later perspectives explained in wider context. Consistently evaluative (historians’ critiques of cipher-letter reliability, blame-shifting, procedural irregularities, Mary’s agency). After weighing them, judges one perspective more flawed than another and reaches a final judgement that follows logically from the discussion.' }
    ],
    components:[
      'Explanation of the perspectives and why they were held',
      'Evaluation of the validity of each perspective',
      'Overall conclusion on historical validity'
    ],
    gates:{
      achieved:[
        'The context has a genuinely CONTESTED element with historical debate. If the task only compares two experiences of an event, flag it as a task-design risk for the whole cohort.',
        'At least two CLEARLY DIFFERENT perspectives are identified.',
        'Each is explained with historical evidence for WHY it was or is held, specific and at level 8 depth.',
        'Written as an historian, not as role-play.'
      ],
      merit:[
        'The VALIDITY of the perspectives is evaluated as an historian — appraisal and opinion supported by historical evidence (reasons or prejudices behind the perspective; reliability of the evidence each side uses). Unsupported personal reaction does not count.'
      ],
      excellence:[
        'An OVERALL CONCLUSION is reached on which perspective(s) are more or less historically valid, following logically from the evaluation. Staying on the fence caps at Merit.',
        'Judgements rest on greater depth of evidence showing thorough engagement. A confident conclusion without the Merit-level evaluation underneath it does not lift the grade.'
      ]},
    watch:[
      'Perspectives that are not clearly different, or are really two experiences rather than two interpretations (NMR 2025).',
      'Historians or historical figures credited with positions they may not hold — check attributions.',
      'Role-play or first-person-as-character writing.',
      'Long introductions that carry no assessable evidence.',
      'If combined with 91435, judge each standard on its own criteria.'
    ]}
  ]}
};

window.MOD_DATA = window.MOD_DATA || {};
window.MOD_DATA['3'] = {
  meta:{ qualification:'NCEA', stage:'Level 3', year:2026 },
  faculties: FACULTIES,
  subjects: SUBJECTS
};

})();
