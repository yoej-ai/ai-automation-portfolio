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
    images: [{ src: "car-sales-lead.jpg", caption: "Complete n8n lead qualification workflow", alt: "n8n workflow for AI car sales lead qualification with HOT, WARM, and COLD routes" }]
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
      { src: "dental-main.jpg", caption: "Main AI Dental Receptionist", alt: "Main n8n AI dental receptionist workflow with Groq, memory, and three tools" },
      { src: "dental-slots.jpg", caption: "Get Dental Slots tool", alt: "n8n sub-workflow that validates a requested dental slot and checks Google Calendar" },
      { src: "dental-create.jpg", caption: "Create Appointment tool", alt: "n8n sub-workflow that validates, creates, records, and confirms a dental appointment" },
      { src: "dental-manage.jpg", caption: "Manage Appointment tool", alt: "n8n sub-workflow for checking, canceling, and rescheduling dental appointments" }
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
    images: [{ src: "hr-evaluation.jpg", caption: "Complete HR evaluation and interview workflow", alt: "Large n8n HR workflow for CV intake, AI evaluation, questionnaires, email, and calendar scheduling" }]
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
    video: {
      src: "ai-ecommerce-demo.mp4",
      poster: "make-ecommerce.png",
      caption: "Live demo: order intake, inventory validation, fulfillment, and exception handling"
    },
    images: [{ src: "make-ecommerce.png", caption: "Complete Make.com e-commerce scenario", alt: "Panoramic Make.com workflow for e-commerce order fulfillment and inventory management" }]
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
      { src: "make-support.jpg", caption: "Complete Make.com support triage scenario", alt: "Make.com workflow for AI support triage with Sheets, router, Slack, and Gmail" },
      { src: "make-support-slack.jpg", caption: "Urgent Slack escalation output", alt: "Slack urgent customer support ticket generated by the Make.com workflow" },
      { src: "make-support-email.jpg", caption: "Urgent customer acknowledgement", alt: "Customer support acknowledgement email generated by the workflow" },
      { src: "make-support-sheet.jpg", caption: "Structured Google Sheets ticket log", alt: "Google Sheets row containing structured AI customer support ticket data" }
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
    images: [{ src: "zapier-onboarding.jpg", caption: "Complete six-step Zapier onboarding flow", alt: "Zapier client onboarding workflow using Forms, Sheets, Gmail, Drive, and Trello" }]
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
    images: [{ src: "zapier-email-ops.jpg", caption: "Complete AI email operations Zap", alt: "Zapier AI email operations workflow with Groq, Code, Airtable, Paths, Slack, and Gmail" }]
  }
  {
    number: "08",
    platform: "n8n",
    platformLabel: "n8n",
    title: "UrbanNest AI Support & Human Escalation",
    summary: "An AI support system that answers knowledge-base questions, detects human-review requests, creates or updates Supabase tickets, and notifies the support team through Gmail.",
    flow: ["Webhook", "Escalation filter", "AI Support Agent", "Vector search", "Supabase ticket", "Gmail alert"],
    tools: "n8n · Supabase · Gmail · Google Drive · Embeddings",
    problem: "UrbanNest needed a support workflow that could resolve routine questions automatically while routing urgent or repeated concerns to a human without creating duplicate tickets.",
    solution: "The main n8n workflow validates incoming webhook data, detects escalation phrases, and connects the AI Support Agent to a Google Drive knowledge-ingestion pipeline and Supabase vector search. A sub-workflow checks the session ID and open-ticket status before updating an existing ticket or creating a new one, then sends a Gmail notification.",
    safeguards: "Session-aware ticket matching, open-status filtering, human-review routing, structured Supabase records, knowledge-base retrieval, and verified Gmail escalation notifications.",
    skills: ["AI agent orchestration", "RAG and vector search", "Embeddings and semantic retrieval", "Supabase ticket design", "Session-based duplicate prevention", "Google Drive knowledge ingestion", "Gmail escalation automation", "Webhook and JSON payload handling"],
    brands: [
      { src: "assets/brands/n8n.svg", label: "n8n" },
      { src: "assets/brands/supabase.svg", label: "Supabase" },
      { src: "assets/brands/googledrive.svg", label: "Google Drive" },
      { src: "assets/brands/gmail.svg", label: "Gmail" },
      { src: "assets/brands/openai.svg", label: "AI / Embeddings" }
    ],
    images: [
      { src: "urbanest-main.jpg", caption: "Main UrbanNest support workflow", alt: "n8n UrbanNest support workflow with webhook validation, escalation routing, AI agent, memory, and vector search" },
      { src: "urbanest-knowledge-ingestion.jpg", caption: "Knowledge-base ingestion pipeline", alt: "Workflow that finds Google Drive documents, extracts text, and loads documents into Supabase Vector Store" },
      { src: "urbanest-ticketing-subworkflow.jpg", caption: "Human escalation ticket sub-workflow", alt: "n8n sub-workflow that finds, updates, or creates Supabase support tickets and sends Gmail notifications" },
      { src: "urbanest-escalation-routing.jpg", caption: "Escalation routing and AI agent", alt: "UrbanNest webhook workflow routing human escalation requests to a sub-workflow and AI support agent" },
      { src: "urbanest-supabase-tickets.jpg", caption: "Verified Supabase ticket records", alt: "Supabase support_tickets table showing ticket-test-004 and ticket-test-005 human review tickets" },
      { src: "urbanest-knowledge-base.jpg", caption: "UrbanNest knowledge-base documents", alt: "Google Drive folder containing Company FAQ, Services and Pricing, and Support Policies documents" },
      { src: "urbanest-email-proof.jpg", caption: "Verified human-review email", alt: "Gmail notification showing Human Review Required for session ticket-test-005" }
    ]
  },
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
    ${project.brands ? `
      <div class="tool-brand-row" aria-label="Tools used">
        ${project.brands.map(brand => `<span class="tool-brand"><img src="${brand.src}" alt="" /><strong>${brand.label}</strong></span>`).join("")}
      </div>
    ` : ""}
    ${project.skills ? `
      <h3 class="workflow-heading">Skills demonstrated</h3>
      <div class="case-skill-list">${project.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
    ` : ""}
    ${project.video ? `
      <h3 class="workflow-heading">Workflow demo video</h3>
      <figure style="margin:0 0 1.5rem">
        <video controls preload="metadata" poster="${project.video.poster}" style="display:block;width:100%;aspect-ratio:16/9;background:#050b14;border:1px solid rgba(148,163,184,.22);border-radius:16px" aria-label="${project.title} workflow demonstration">
          <source src="${project.video.src}" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <figcaption style="margin-top:.65rem;color:#9fb2c9;font-size:.88rem">${project.video.caption}</figcaption>
      </figure>
    ` : ""}
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

const roiInputs = {
  hours: document.querySelector("#hours-per-task"),
  tasks: document.querySelector("#tasks-per-week"),
  cost: document.querySelector("#hourly-cost"),
  efficiency: document.querySelector("#efficiency"),
  currency: document.querySelector("#currency"),
  platform: document.querySelector("#roi-platform"),
  complexity: document.querySelector("#complexity"),
  integrations: document.querySelector("#integrations")
};

const priceRanges = {
  USD: { simple: [200, 300], medium: [500, 750], complex: [900, 1500], enterprise: [1800, 3500], integration: [50, 90] },
  PHP: { simple: [11500, 17500], medium: [29000, 43500], complex: [52000, 87000], enterprise: [105000, 205000], integration: [3000, 5200] }
};

const moneyFormat = (value, currency) => new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-PH", {
  style: "currency",
  currency,
  maximumFractionDigits: 0
}).format(value);

function updateRoiCalculator() {
  if (!roiInputs.hours) return;
  const currency = roiInputs.currency.value;
  const hours = Number(roiInputs.hours.value);
  const tasks = Number(roiInputs.tasks.value);
  const hourlyCost = Number(roiInputs.cost.value);
  const efficiency = Number(roiInputs.efficiency.value) / 100;
  const integrations = Number(roiInputs.integrations.value);
  const complexity = roiInputs.complexity.value;
  const pricing = priceRanges[currency][complexity];
  const extraApps = Math.max(0, integrations - 2);
  const lowInvestment = pricing[0] + extraApps * priceRanges[currency].integration[0];
  const highInvestment = pricing[1] + extraApps * priceRanges[currency].integration[1];
  const midpoint = (lowInvestment + highInvestment) / 2;
  const weeklyHours = hours * tasks * efficiency;
  const monthlySavings = weeklyHours * hourlyCost * 4.33;
  const annualSavings = monthlySavings * 12;
  const roi = midpoint > 0 ? ((annualSavings - midpoint) / midpoint) * 100 : 0;
  const paybackMonths = monthlySavings > 0 ? midpoint / monthlySavings : 0;

  document.querySelector("#hours-output").textContent = `${hours % 1 ? hours.toFixed(2) : hours} hr${hours === 1 ? "" : "s"}`;
  document.querySelector("#tasks-output").textContent = `${tasks} task${tasks === 1 ? "" : "s"}`;
  document.querySelector("#cost-output").textContent = `${moneyFormat(hourlyCost, currency)}/hr`;
  document.querySelector("#efficiency-output").textContent = `${Math.round(efficiency * 100)}%`;
  document.querySelector("#currency-pill").textContent = currency;
  document.querySelector("#weekly-hours").textContent = weeklyHours.toFixed(1).replace(".0", "");
  document.querySelector("#monthly-savings").textContent = moneyFormat(monthlySavings, currency);
  document.querySelector("#annual-savings").textContent = moneyFormat(annualSavings, currency);
  document.querySelector("#roi-value").textContent = `${Math.round(roi).toLocaleString()}%`;
  document.querySelector("#investment-range").textContent = `${moneyFormat(lowInvestment, currency)} – ${moneyFormat(highInvestment, currency)}`;
  document.querySelector("#estimate-label").textContent = `${complexity[0].toUpperCase() + complexity.slice(1)} · ${roiInputs.platform.value} · ${integrations} integration${integrations === 1 ? "" : "s"}`;
  document.querySelector("#payback-period").textContent = paybackMonths < 1 ? `${Math.max(1, Math.round(paybackMonths * 4.33))} week${Math.round(paybackMonths * 4.33) === 1 ? "" : "s"}` : `${paybackMonths.toFixed(1)} months`;
}

Object.values(roiInputs).forEach(input => {
  input?.addEventListener("input", () => {
    if (input === roiInputs.currency) {
      roiInputs.cost.min = input.value === "USD" ? "5" : "100";
      roiInputs.cost.max = input.value === "USD" ? "150" : "3000";
      roiInputs.cost.step = input.value === "USD" ? "5" : "100";
      roiInputs.cost.value = input.value === "USD" ? "25" : "300";
    }
    updateRoiCalculator();
  });
});

updateRoiCalculator();
