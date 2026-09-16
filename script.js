const projects = [
  {
    number: "01",
    platform: "n8n",
    platformLabel: "n8n",
    title: "AI Car Sales Lead Qualification",
    summary: "Captures inbound vehicle-sales leads, scores them with AI, stores them in a CRM sheet, and routes HOT, WARM, and COLD follow-up paths.",
    flow: ["Webhook", "Groq AI", "Code parsing", "Sheets CRM", "Lead routing", "Gmail follow-up"],
    tools: "12 nodes · Groq · Google Sheets · Gmail",
    problem: "Inbound vehicle-sales leads need consistent qualification, organized records, and different follow-up timing based on buying intent.",
    solution: "A webhook passes each lead to a Groq-powered AI agent. Code normalizes the structured result, Google Sheets records it, and a Switch node routes HOT, WARM, and COLD paths.",
    safeguards: "Structured parsing, explicit category routing, immediate HOT alerts, timed WARM follow-up, and separate COLD nurturing.",
    images: [{ src: "assets/workflows/car-sales-lead.jpg", caption: "Complete n8n lead qualification workflow", alt: "n8n workflow for AI car sales lead qualification with HOT, WARM, and COLD routes" }]
  },
  {
    number: "02",
    platform: "n8n",
    platformLabel: "n8n",
    title: "AI Dental Clinic Automation",
    summary: "A conversational AI receptionist that checks availability, creates appointments, and manages status, cancellation, and rescheduling.",
    flow: ["Patient webhook", "AI receptionist", "Memory", "Slot tool", "Booking tool", "Management tool"],
    tools: "41 nodes · Groq · Sheets · Calendar · Gmail",
    problem: "Appointment requests require clinic-rule validation, conflict checking, record updates, confirmations, and safe handling of cancellations or reschedules.",
    solution: "A main AI receptionist uses memory and three connected tool sub-workflows. Each tool returns verified results before the assistant communicates availability or changes.",
    safeguards: "Calendar conflict checks, clinic-hours validation, exact action routing, verified tool returns, and synchronized Calendar/Sheets updates.",
    images: [
      { src: "assets/workflows/dental-main.jpg", caption: "Main AI Dental Receptionist", alt: "Main n8n AI dental receptionist workflow with Groq, memory, and three tools" },
      { src: "assets/workflows/dental-slots.jpg", caption: "Get Dental Slots tool", alt: "n8n sub-workflow that validates a requested dental slot and checks Google Calendar" },
      { src: "assets/workflows/dental-create.jpg", caption: "Create Appointment tool", alt: "n8n sub-workflow that validates, creates, records, and confirms a dental appointment" },
      { src: "assets/workflows/dental-manage.jpg", caption: "Manage Appointment tool", alt: "n8n sub-workflow for checking, canceling, and rescheduling dental appointments" }
    ]
  },
  {
    number: "03",
    platform: "n8n",
    platformLabel: "n8n",
    title: "HR Evaluation & Job Posting",
    summary: "Moves applicants from form submission and CV extraction through AI evaluation, questionnaires, communication, and interview scheduling.",
    flow: ["Application form", "Drive upload", "CV extraction", "AI evaluation", "Candidate route", "Interview coordination"],
    tools: "37 nodes · OpenAI · Airtable · Drive · Calendar",
    problem: "Candidate intake, CV review, role criteria, questionnaires, communication, and scheduling often become disconnected manual steps.",
    solution: "The workflow stores the applicant and CV, extracts the document, evaluates fit against Airtable job records, and routes potential hires and rejections through dedicated branches.",
    safeguards: "Structured output parsers, Airtable source records, explicit hiring branches, stored questionnaire answers, and controlled calendar tooling.",
    images: [{ src: "assets/workflows/hr-evaluation.jpg", caption: "Complete HR evaluation and interview workflow", alt: "Large n8n HR workflow for CV intake, AI evaluation, questionnaires, email, and calendar scheduling" }]
  },
  {
    number: "04",
    platform: "make",
    platformLabel: "Make.com",
    title: "AI E-commerce Order Fulfillment",
    summary: "Coordinates order intake, duplicate prevention, payment routing, inventory review, fulfillment records, and exception handling.",
    flow: ["Order webhook", "Duplicate check", "Airtable order", "Payment route", "AI inventory review", "Fulfillment"],
    tools: "35 modules · Data Store · Airtable · Groq · Gmail",
    problem: "Webhook orders need idempotency, payment verification, item-level stock validation, reliable updates, and clear responses for every exception path.",
    solution: "A Make Data Store blocks duplicate order IDs. Paid items pass Airtable inventory retrieval, Groq JSON review, deterministic quantity checks, aggregation, and fulfillment updates.",
    safeguards: "409 duplicate response, positive whole-quantity checks, stock validation, duplicate-SKU review, Needs Review and Awaiting Payment paths, and explicit HTTP responses.",
    images: [{ src: "assets/workflows/make-ecommerce.png", caption: "Complete Make.com e-commerce scenario", alt: "Panoramic Make.com workflow for e-commerce order fulfillment and inventory management" }]
  },
  {
    number: "05",
    platform: "make",
    platformLabel: "Make.com",
    title: "AI Customer Support Ticket Triage",
    summary: "Turns support requests into structured tickets, logs them, escalates urgent issues, and sends priority-appropriate acknowledgements.",
    flow: ["Support webhook", "Groq triage", "JSON parser", "Sheets log", "Priority router", "Slack / Gmail"],
    tools: "8 modules · Groq · Google Sheets · Slack · Gmail",
    problem: "Incoming support requests must be classified, recorded, acknowledged, and escalated without allowing urgent incidents to sit behind routine messages.",
    solution: "Groq returns a structured ticket with category, severity, priority, sentiment, summary, and recommended action. A router separates URGENT from NORMAL and LOW requests.",
    safeguards: "Controlled JSON schema, centralized ticket log, explicit priority filters, immediate human escalation, and customer acknowledgement paths.",
    images: [
      { src: "assets/workflows/make-support.jpg", caption: "Complete Make.com support triage scenario", alt: "Make.com workflow for AI support triage with Sheets, router, Slack, and Gmail" },
      { src: "assets/workflows/make-support-slack.jpg", caption: "Urgent Slack escalation output", alt: "Slack urgent customer support ticket generated by the Make.com workflow" },
      { src: "assets/workflows/make-support-email.jpg", caption: "Urgent customer acknowledgement", alt: "Customer support acknowledgement email generated by the workflow" },
      { src: "assets/workflows/make-support-sheet.jpg", caption: "Structured Google Sheets ticket log", alt: "Google Sheets row containing structured AI customer support ticket data" }
    ]
  },
  {
    number: "06",
    platform: "zapier",
    platformLabel: "Zapier",
    title: "Automated Client Onboarding",
    summary: "Transforms a new-client form into an organized record, confirmation, Drive folder, Trello card, and internal follow-up.",
    flow: ["Google Form", "Sheets row", "Client email", "Drive folder", "Trello card", "Internal email"],
    tools: "6 steps · Google Workspace · Trello",
    problem: "Every new client requires the same manual setup across records, folders, project tasks, and communications.",
    solution: "One form submission triggers a six-step Zap that records the client, sends confirmation, creates the workspace, opens the project task, and notifies the team.",
    safeguards: "Single source form, explicit field mapping, sequential setup, and separate client/internal notifications.",
    images: [{ src: "assets/workflows/zapier-onboarding.jpg", caption: "Complete six-step Zapier onboarding flow", alt: "Zapier client onboarding workflow using Forms, Sheets, Gmail, Drive, and Trello" }]
  },
  {
    number: "07",
    platform: "zapier",
    platformLabel: "Zapier",
    title: "AI Email Operations Management",
    summary: "Analyzes business-request emails, logs structured records, generates replies, and routes urgent work to Slack and Gmail.",
    flow: ["Gmail trigger", "Groq analysis", "Code cleanup", "Airtable record", "AI reply", "Paths routing"],
    tools: "12 steps · Groq · Airtable · Slack · Gmail",
    problem: "Operational emails need consistent analysis, records, priority decisions, and replies without losing urgent requests in the inbox.",
    solution: "Groq analyzes the message, Code steps normalize structured data, Airtable logs the request, and Paths route urgent work to Slack plus Gmail while standard work receives an acknowledgement.",
    safeguards: "Structured normalization, centralized logging, explicit path conditions, human escalation for urgent requests, and priority-specific responses.",
    images: [{ src: "assets/workflows/zapier-email-ops.jpg", caption: "Complete AI email operations Zap", alt: "Zapier AI email operations workflow with Groq, Code, Airtable, Paths, Slack, and Gmail" }]
  }
];

const grid = document.querySelector("#projects-grid");
const caseDialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const imageDialog = document.querySelector("#image-dialog");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");

function renderProjects(filter = "all") {
  const visible = filter === "all" ? projects : projects.filter(project => project.platform === filter);
  grid.innerHTML = visible.map(project => `
    <article class="project-card reveal" style="--accent:${project.platform === "n8n" ? "rgba(41,214,199,.14)" : project.platform === "make" ? "rgba(155,140,255,.15)" : "rgba(255,163,92,.13)"}">
      <div class="project-meta">
        <span class="project-number">CASE STUDY ${project.number}</span>
        <div class="badge-row"><span class="project-badge">${project.platformLabel}</span><span class="project-badge completed">● Completed</span></div>
      </div>
      <h3>${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
      <div class="mini-flow">${project.flow.map(step => `<span>${step}</span>`).join("")}</div>
      <div class="project-footer"><span class="tool-list">${project.tools}</span><button class="case-button" type="button" data-project="${project.number}">View case study ↗</button></div>
    </article>`).join("");
  bindReveals();
}

function openCaseStudy(number) {
  const project = projects.find(item => item.number === number);
  if (!project) return;
  dialogContent.innerHTML = `
    <span class="dialog-kicker">Case study ${project.number} · ${project.platformLabel} · Completed</span>
    <h2 id="dialog-title">${project.title}</h2>
    <p class="dialog-intro">${project.summary}</p>
    <div class="dialog-grid">
      <div class="detail-box"><small>Business problem</small><p>${project.problem}</p></div>
      <div class="detail-box"><small>Solution architecture</small><p>${project.solution}</p></div>
      <div class="detail-box"><small>Reliability & safeguards</small><p>${project.safeguards}</p></div>
      <div class="detail-box"><small>Technology</small><p>${project.tools}</p></div>
    </div>
    <h3 class="workflow-heading">Actual workflow evidence</h3>
    <div class="workflow-gallery">
      ${project.images.map((image, index) => `
        <button class="workflow-shot" type="button" data-src="${image.src}" data-caption="${image.caption}" data-alt="${image.alt}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy" />
          <span>${index + 1}. ${image.caption} · Click to enlarge</span>
        </button>`).join("")}
    </div>`;
  caseDialog.showModal();
  document.body.classList.add("modal-open");
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) openCaseStudy(button.dataset.project);
});

document.querySelector(".dialog-close").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
caseDialog.addEventListener("click", event => { if (event.target === caseDialog) caseDialog.close(); });
dialogContent.addEventListener("click", event => {
  const shot = event.target.closest(".workflow-shot");
  if (!shot) return;
  lightboxImage.src = shot.dataset.src;
  lightboxImage.alt = shot.dataset.alt;
  lightboxCaption.textContent = shot.dataset.caption;
  imageDialog.showModal();
});
document.querySelector(".image-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => { item.classList.remove("active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navLinks.addEventListener("click", event => {
  if (event.target.matches("a")) { navLinks.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }
});
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 10));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: .12 });
function bindReveals() { document.querySelectorAll(".reveal").forEach(element => observer.observe(element)); }

renderProjects();
bindReveals();
