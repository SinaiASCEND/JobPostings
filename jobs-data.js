/* Faculty job postings — Office of Curricular Affairs, ASCEND Curriculum.
   Sources: 11 program/course job descriptions, the EEC bylaws (v2.0), and
   2 Content Area Director descriptions (Nutrition, Physiology).
   Two "Ambulatory Care Site Director" files were near-duplicates -> one role.

   Roles are grouped into four faculty-facing CATEGORIES, color-coded.
   Each role also carries a `body` (the specific committee / program / domain),
   shown as a sub-tag on the card.
*/
window.CATEGORIES = {
  lead:    { id:"lead",    name:"Curricular Leadership",   short:"Leadership",  color:"cyan"    },
  gov:     { id:"gov",     name:"Curriculum Governance",   short:"Governance",  color:"magenta" },
  content: { id:"content", name:"Content Area Directors",  short:"Content",     color:"navy"    },
  committee:{ id:"committee",name:"Committee Work",         short:"Committee",   color:"teal"    },
  smallgroup:{ id:"smallgroup", name:"Small Group Preceptors",  short:"Small Group",  color:"violet" },
  clinical:{ id:"clinical", name:"Clinical Site Preceptors", short:"Clinical Site", color:"amber"  },
  apex:    { id:"apex",    name:"APEX Preceptors",         short:"APEX",       color:"coral"   },
  mentor:  { id:"mentor",  name:"Mentorship & Coaching",   short:"Mentorship",  color:"grey"    },
};

/* meta icon keys: fte (clock) · term (calendar) · meet (recurring) · reports (org) */
window.JOBS = [

  /* ───────── CURRICULAR LEADERSHIP — Chronic Care Clerkship ───────── */
  {
    id:"ccc-physician-codirector", category:"lead", body:"Chronic Care Clerkship",
    title:"Physician Co-Clerkship Director", type:"Clerkship Leadership", badge:"0.4 FTE",
    reports:"Clinical Curriculum Subcommittee, via the Director of Clinical Curriculum",
    summary:"Serve as physician Co-Director of the Chronic Care Clerkship, bringing primary expertise in clinical care delivery, diagnostic reasoning, and the assessment of clinical performance.",
    meta:[{k:"fte",v:"<b>0.4 FTE</b>&nbsp;protected"},{k:"term",v:"Multi-year · renewed annually"}],
    responsibilities:[
      "Provide strategic and operational leadership of the clerkship across clinical, classroom, and community-based settings",
      "Lead design of clinical learning experiences aligned with real-world patient care",
      "Lead clinical evaluation tools, grading frameworks, and competency decisions",
      "Oversee clinical site recruitment, onboarding, development, and evaluation; serve as liaison with physician preceptors",
      "Co-lead student competency in behavior change, counseling, and risk-reduction strategies",
      "Co-lead curricular integration of health promotion, health maintenance, nutrition, and disease prevention",
      "Lead active-learning teaching sessions",
      "Ensure appropriate patient mix, supervision, and clinical exposure across sites",
      "Participate in CCS governance and ongoing LCME compliance",
    ],
    qualifications:[
      "MD or DO required",
      "Demonstrated success in clinical education leadership, clerkship administration, or curriculum innovation",
      "Strong communication, collaboration, and clinical site development skills",
      "Experience with competency-based assessment and program evaluation preferred",
    ],
  },
  {
    id:"ccc-interprofessional-codirector", category:"lead", body:"Chronic Care Clerkship",
    title:"Interprofessional Co-Clerkship Director", type:"Clerkship Leadership", badge:"0.4 FTE",
    reports:"Clinical Curriculum Subcommittee, via the Director of Clinical Curriculum",
    summary:"Co-lead the Chronic Care Clerkship with primary expertise in health promotion, prevention, behavior change, interprofessional education, and community-based learning.",
    meta:[{k:"fte",v:"<b>0.4 FTE</b>&nbsp;protected"},{k:"term",v:"Multi-year · renewed annually"}],
    responsibilities:[
      "Share strategic leadership, operational management, and CQI for the clerkship",
      "Co-lead curricular integration of health promotion, health maintenance, nutrition, and disease prevention",
      "Co-lead student competency in behavior change, counseling, and risk-reduction strategies",
      "Serve as primary liaison for interprofessional educators",
      "Lead development of interprofessional and team-based learning experiences",
      "Develop community-based learning (e.g., senior centers, prevention programs)",
      "Integrate social and structural determinants of health into student learning",
      "Lead active-learning teaching sessions",
    ],
    qualifications:[
      "Advanced degree (NP, PA, PhD, DNP, EdD, MSW, PharmD, MD/DO, or equivalent)",
      "Success in curriculum design, interprofessional education, or program development",
      "Strong cross-disciplinary collaboration and facilitation skills",
    ],
  },
  {
    id:"ccc-associate-director", category:"lead", body:"Chronic Care Clerkship",
    title:"Associate Clerkship Director", type:"Site & Operations", badge:"0.3 FTE",
    reports:"Co-Clerkship Directors, Chronic Care Clerkship",
    summary:"Support the implementation, evaluation, and daily operations of the Chronic Care Clerkship, ensuring a well-organized, integrated, and student-centered experience across classroom and clinical components.",
    meta:[{k:"fte",v:"<b>0.3 FTE</b>&nbsp;protected"},{k:"term",v:"Multi-year · renewed annually"}],
    responsibilities:[
      "Lead clinical site recruitment, onboarding, development, and evaluation; serve as primary liaison with physician preceptors",
      "Draft, revise, and maintain clerkship materials — syllabi, guides, assignments, and student resources",
      "Contribute to the development of assessment tools and grading rubrics",
      "Assist with placement logistics, preceptor communication, and clinical site operations",
      "Manage student tracking and site coordination processes",
      "Prepare and lead didactic or case-based teaching sessions using active learning",
      "Support orientation, check-ins, CQI initiatives, and accreditation data collection",
    ],
    qualifications:[
      "Advanced degree (MD, DO, NP, PA, PhD, DNP, EdD, PharmD, MSW/DSW, or relevant professional degree)",
      "Demonstrated interest in teaching, curriculum development, or clinical education",
      "Strong organizational, communication, and collaboration skills",
      "Professionalism, integrity, and dependability",
    ],
  },
  {
    id:"ccc-nutrition-lifestyle", category:"lead", body:"Chronic Care Clerkship",
    title:"Nutrition & Lifestyle Medicine Director", type:"Domain Director", badge:"0.2 FTE",
    reports:"Co-Clerkship Directors, Chronic Care Clerkship",
    summary:"Provide strategic oversight for the design, integration, standardization, and advancement of nutrition and lifestyle medicine education across the MD curriculum — leading content on health promotion, nutrition, disease prevention, and lifestyle medicine across the life cycle, anchored in the pre-clerkship phase and reinforced longitudinally into clinical training.",
    meta:[{k:"fte",v:"<b>0.2 FTE</b>&nbsp;protected"},{k:"term",v:"Pre-Clerkship anchor · longitudinal thread"}],
    responsibilities:[
      "Lead the design, implementation, and oversight of nutrition and lifestyle medicine content across the pre-clerkship curriculum, integrating it across foundational sciences, organ systems, and Areas of Concentration",
      "Define and maintain core competencies spanning nutrition assessment, dietary counseling, risk reduction, behavior change, clinical care, public health, and patient counseling",
      "Ensure alignment with MEPOs, LCME standards, and national nutrition and prevention priorities (e.g., HHS competencies)",
      "Develop and curate evidence-based, clinically integrated instructional materials, and coordinate prevention-focused and nutrition-centered learning experiences across phases",
      "Lead active-learning teaching sessions focused on nutrition, culinary medicine, and patient education",
      "Partner with faculty, dietitians, and community educators to strengthen nutrition and lifestyle medicine education",
      "Provide faculty development and participate in curriculum governance and continuous quality improvement (CQI)",
    ],
    qualifications:[
      "Advanced degree (MD, DO, NP, PA, PhD, DrPH, RD/RDN, MPH, or related field); for RD/RDN, an advanced degree in nutrition, public health, or a related field",
      "Expertise in clinical, public health, or applied nutrition, lifestyle medicine, or preventive medicine",
      "Demonstrated teaching experience and curriculum development / assessment experience",
      "Ability to integrate nutrition and prevention content across basic and clinical sciences",
      "Strong communication, facilitation, and collaboration skills",
    ],
  },

  /* ───────── CURRICULAR LEADERSHIP — Transition to Residency ───────── */
  {
    id:"ttr-core", category:"lead", body:"Transition to Residency (TTR)",
    title:"Co-Director, TTR — Core Curriculum", type:"Course Co-Director", badge:"0.1 FTE",
    reports:"Director of the Clinical Curriculum",
    summary:"Provide strategic oversight for the design, integration, and delivery of the shared Transition to Residency core curriculum that prepares all graduating students for internship.",
    meta:[{k:"fte",v:"<b>0.1 FTE</b>&nbsp;protected"},{k:"term",v:"Phase 3 · Integration & Transitions"}],
    responsibilities:[
      "Lead design and delivery of the core TTR curriculum",
      "Ensure alignment with MEPOs, LCME standards, and ACGME competencies / EPAs",
      "Maintain core competencies in clinical reasoning, inpatient care, and cross-cover responsibilities",
      "Develop and implement programmatic assessment and readiness-evaluation strategies",
      "Collaborate with specialty track leaders to ensure curricular integration",
      "Oversee course operations, governance participation, and continuous quality improvement",
    ],
    qualifications:[
      "Doctoral degree (MD, DO, or equivalent)",
      "Demonstrated expertise in clinical education and/or inpatient care preparation",
      "Experience in curriculum development and assessment (health professions education preferred)",
      "Familiarity with competency-based frameworks (ACGME, EPAs) and LCME standards",
    ],
  },
  {
    id:"ttr-procedural", category:"lead", body:"Transition to Residency (TTR)",
    title:"Co-Director, TTR — Procedural Skills", type:"Course Co-Director", badge:"0.1 FTE",
    reports:"Director of the Clinical Curriculum",
    summary:"Provide strategic oversight for the design and delivery of procedural and skills-based training within the Transition to Residency course.",
    meta:[{k:"fte",v:"<b>0.1 FTE</b>&nbsp;protected"},{k:"term",v:"Phase 3 · Integration & Transitions"}],
    responsibilities:[
      "Lead development and delivery of the procedural skills component of the TTR course",
      "Define competencies in core procedures and acute patient management",
      "Develop and standardize simulation-based and hands-on training experiences",
      "Integrate training in emergency response, code management, and escalation of care",
      "Coordinate simulation resources, equipment, and instructional faculty",
      "Develop and implement skills-based assessment strategies",
    ],
    qualifications:[
      "Doctoral degree (MD or DO) with expertise in a procedural specialty",
      "Demonstrated expertise in simulation-based education and procedural skills training",
      "Experience with simulation program development, OSCEs, or skills-based assessment",
      "Familiarity with ACGME competencies, EPAs, and LCME standards",
    ],
  },

  /* ───────── CURRICULUM GOVERNANCE — Executive Education Committee ───────── */
  {
    id:"eec-cochair", category:"gov", body:"Executive Education Committee (EEC)",
    title:"Faculty Co-Chair, Executive Education Committee", type:"Committee Co-Chair · Voting", badge:"3-yr term",
    reports:"Dean for Medical Education — appointed on recommendation of the Faculty Council",
    summary:"Preside over the EEC, the principal faculty body responsible for oversight of the MD curriculum. The Faculty Co-Chair is a voting member who leads the committee’s governance of curriculum design, integration, assessment, and continuous quality improvement.",
    meta:[{k:"term",v:"<b>3-year</b> term · renewable once"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Preside over EEC meetings and ensure decisions of the committee are documented",
      "Lead centralized faculty oversight of the MD curriculum across all ASCEND phases",
      "Direct continuous quality improvement and closed-loop monitoring of curricular actions",
      "Recommend subcommittee Faculty Co-Chairs and confirm appointments with the committee",
      "Submit the EEC’s annual written report to the Dean for Medical Education",
      "Adjudicate conflicts of interest and ensure recusal procedures are followed",
    ],
    qualifications:[
      "Mount Sinai faculty appointment with a record of curricular leadership and educational scholarship",
      "Deep familiarity with the ASCEND curriculum, MEPOs, and LCME accreditation standards",
      "Strong facilitation, governance, and consensus-building skills",
      "Appointed by the Dean on the recommendation of the Faculty Council",
    ],
  },
  {
    id:"eec-at-large-1", category:"gov", body:"Executive Education Committee (EEC)",
    title:"Faculty-at-Large Representative, EEC", type:"Voting Member · Faculty-at-Large", badge:"Voting seat",
    reports:"Executive Education Committee (EEC)",
    summary:"Serve as one of eight Faculty-at-Large voting members of the EEC, providing objective review of curricular quality from a perspective independent of course, module, and clerkship leadership.",
    meta:[{k:"term",v:"<b>3-year</b> staggered term"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Review and vote on the structure, content, and substantive revisions of the MD curriculum",
      "Evaluate program evaluation data and direct curricular improvements",
      "Approve curricular policies related to assessment, grading, and academic standards",
      "Monitor educational outcomes and integration across curricular phases",
      "Represent broad faculty perspectives distinct from those of curricular directors",
    ],
    qualifications:[
      "Mount Sinai faculty appointment, any rank",
      "Must NOT concurrently hold a Module, Course, Clerkship, or Acting Internship Director role (independence requirement)",
      "Commitment to objective, data-informed review of curricular quality",
      "Appointed by the Dean on the recommendation of the Faculty Council",
    ],
  },
  {
    id:"eec-at-large-2", category:"gov", body:"Executive Education Committee (EEC)",
    title:"Faculty-at-Large Representative, EEC", type:"Voting Member · Faculty-at-Large", badge:"Voting seat",
    reports:"Executive Education Committee (EEC)",
    summary:"Second of two open Faculty-at-Large seats on the EEC. Voting members provide independent oversight of the MD curriculum and represent faculty perspectives across the school.",
    meta:[{k:"term",v:"<b>3-year</b> staggered term"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Review and vote on the structure, content, and substantive revisions of the MD curriculum",
      "Evaluate program evaluation data and direct curricular improvements",
      "Approve curricular policies related to assessment, grading, and academic standards",
      "Monitor educational outcomes and integration across curricular phases",
      "Represent broad faculty perspectives distinct from those of curricular directors",
    ],
    qualifications:[
      "Mount Sinai faculty appointment, any rank",
      "Must NOT concurrently hold a Module, Course, Clerkship, or Acting Internship Director role (independence requirement)",
      "Commitment to objective, data-informed review of curricular quality",
      "Appointed by the Dean on the recommendation of the Faculty Council",
    ],
  },

  /* ───────── CURRICULUM GOVERNANCE — Assessment & Evaluation Subcommittee ───────── */
  {
    id:"aes-cochair", category:"gov", body:"Assessment & Evaluation Subcommittee (AES)",
    title:"Faculty Co-Chair, Assessment & Evaluation Subcommittee", type:"Subcommittee Co-Chair · Voting", badge:"3-yr term",
    reports:"EEC — appointed by the Dean on recommendation of the EEC Faculty Co-Chair (holds a non-voting EEC seat)",
    summary:"Provide academic leadership of the AES, which oversees assessment strategy and program evaluation across the MD curriculum, ensuring assessment methods validly measure achievement of the program objectives.",
    meta:[{k:"term",v:"<b>3-year</b> term · renewable once"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Preside over AES meetings and guide review of assessment strategy and program evaluation data",
      "Ensure alignment of assessment methods with the Medical Education Program Objectives (MEPOs)",
      "Facilitate development of recommendations to improve assessment and program evaluation",
      "Present subcommittee reports and recommendations to the EEC and hold a non-voting EEC seat",
      "Communicate EEC decisions back to the subcommittee and support implementation",
    ],
    qualifications:[
      "Mount Sinai faculty appointment with expertise in assessment, psychometrics, or program evaluation",
      "Experience with competency-based assessment and educational data analysis",
      "Strong facilitation and committee-leadership skills",
      "Appointed by the Dean on the recommendation of the EEC Faculty Co-Chair, with EEC concurrence",
    ],
  },
  {
    id:"aes-at-large-1", category:"gov", body:"Assessment & Evaluation Subcommittee (AES)",
    title:"Faculty-at-Large Representative, AES", type:"Voting Member · Faculty-at-Large", badge:"Voting seat",
    reports:"Assessment & Evaluation Subcommittee (AES)",
    summary:"Serve as one of two Faculty-at-Large voting members of the AES, contributing faculty perspective to the review of assessment methods, student performance data, and program outcomes.",
    meta:[{k:"term",v:"<b>3-year</b> staggered term"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Review assessment strategies used across modules and clerkships",
      "Monitor alignment of assessment methods with the MEPOs",
      "Review student performance data and program evaluation results across the curriculum",
      "Help develop recommendations to improve assessment and program evaluation processes",
      "Vote on subcommittee recommendations advanced to the EEC",
    ],
    qualifications:[
      "Mount Sinai faculty appointment, any rank",
      "Interest or experience in assessment, evaluation, or educational measurement",
      "Commitment to data-informed improvement of assessment practices",
      "Three-year staggered term, renewable once",
    ],
  },
  {
    id:"aes-at-large-2", category:"gov", body:"Assessment & Evaluation Subcommittee (AES)",
    title:"Faculty-at-Large Representative, AES", type:"Voting Member · Faculty-at-Large", badge:"Voting seat",
    reports:"Assessment & Evaluation Subcommittee (AES)",
    summary:"Second of two open Faculty-at-Large seats on the AES. Voting members bring faculty perspective to assessment strategy and program evaluation across the MD curriculum.",
    meta:[{k:"term",v:"<b>3-year</b> staggered term"},{k:"meet",v:"≥ 10 meetings / year"}],
    responsibilities:[
      "Review assessment strategies used across modules and clerkships",
      "Monitor alignment of assessment methods with the MEPOs",
      "Review student performance data and program evaluation results across the curriculum",
      "Help develop recommendations to improve assessment and program evaluation processes",
      "Vote on subcommittee recommendations advanced to the EEC",
    ],
    qualifications:[
      "Mount Sinai faculty appointment, any rank",
      "Interest or experience in assessment, evaluation, or educational measurement",
      "Commitment to data-informed improvement of assessment practices",
      "Three-year staggered term, renewable once",
    ],
  },

  /* ───────── CONTENT AREA DIRECTORS — Pre-Clerkship Phase ───────── */
  {
    id:"cad-physiology", category:"content", body:"Pre-Clerkship · Physiology",
    title:"Content Area Director — Physiology", type:"Content Area Director", badge:"0.1 FTE",
    reports:"Director of the Pre-Clerkship Phase",
    summary:"Lead the organization and integration of physiology content throughout the curriculum, ensuring objectives align with the MEPOs and the pre-clerkship blueprint and that content is comprehensive and consistently applied across phases.",
    meta:[{k:"fte",v:"<b>0.1 FTE</b>&nbsp;protected"},{k:"term",v:"Pre-Clerkship · longitudinal thread"}],
    responsibilities:[
      "Supervise all aspects of physiology content during the pre-clerkship phase",
      "Standardize module materials and independent learning resources for consistency",
      "Collaborate with Module Directors, AOC Directors, and the Pre-Clerkship Phase Director on instruction and assessment",
      "Provide faculty development to enable effective teaching by module educators",
      "Teach physiology content weekly as needed and remain available to students",
      "Maintain curricular materials and participate in content planning and evaluation with OCA",
    ],
    qualifications:[
      "Doctoral degree (MD, DO, MD/PhD, or PhD)",
      "Significant teaching experience documented by peer/learner evaluations or teaching awards",
      "Experience applying pedagogical approaches to curriculum development and assessment",
      "Awareness of current trends and future directions in medical education",
    ],
  },

  /* ───────── MENTORSHIP & COACHING ───────── */
  {
    id:"ccm-mentor", category:"mentor", body:"Practice of Medicine (POM)",
    title:"Clinical Competency Mentor", type:"Longitudinal Mentorship", badge:"0.25 FTE",
    reports:"Director of Clinical Competency, Office of Curricular Affairs",
    summary:"Develop and promote the clinical competency of a small cohort of students across the duration of their training in the new MD ASCEND curriculum — a critical part of the Practice of Medicine (POM) module.",
    meta:[{k:"fte",v:"<b>0.25 FTE</b>&nbsp;protected"},{k:"term",v:"≥ 4-year commitment"}],
    timeCommitment:"½ to full day each Thursday during the ~14-month pre-clerkship phase; group and individual meetings between clerkship blocks (~12 months); quarterly 1:1 meetings until graduation (~22 months).",
    responsibilities:[
      "Guide clinical competency development through small-group instruction, formative assessment, mentoring, and direct skills observation",
      "Co-create clinical skills acquisition and competence action plans with each student",
      "Track each student's progress in clinical skills acquisition, application, and competence",
      "Offer drop-in clinical competency mentoring — in person, remote, by email or phone",
      "Participate in Clinical Competency Mentor faculty development",
      "Provide summative assessment and progress reports to Student Affairs colleagues",
    ],
    qualifications:[
      "Doctoral degree (MD, DO, or MD/PhD)",
      "Proven track record of effective clinical mentoring, documented by mentee evaluations",
      "Clinical teaching experience documented by peer/learner evaluations or teaching awards",
      "Able to facilitate small-group discussion of medical ethics, diversity, and anti-racist pedagogy",
    ],
  },

];
