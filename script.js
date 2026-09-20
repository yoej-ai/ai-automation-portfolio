const projects = [
  {
    "number": "01",
    "platform": "n8n",
    "platformLabel": "n8n",
    "title": "AI Car Sales Lead Qualification & Automated Follow-Up",
    "summary": "An AI-powered lead qualification workflow designed to organize vehicle-sales inquiries, evaluate lead quality, and route each prospect to the appropriate follow-up action.",
    "flow": [
      "Webhook receives the customer inquiry",
      "Data is cleaned and validated",
      "AI analyzes the customer’s intent, vehicle interest, budget, and urgency",
      "Lead is categorized as HOT, WARM, or COLD",
      "Lead details are stored in Google Sheets as a CRM record",
      "The appropriate follow-up path is selected",
      "Gmail sends the relevant follow-up message"
    ],
    "tools": "12 nodes · Groq AI · Google Sheets · Gmail",
    "problem": "Vehicle inquiries often arrive with incomplete or unstructured information. Without a consistent qualification process, sales teams may spend too much time reviewing leads manually and may miss high-intent prospects.",
    "solution": "A webhook receives the inquiry, code parsing normalizes the data, Groq AI evaluates the lead, Google Sheets stores the CRM record, and a Switch node routes the correct follow-up path.",
    "safeguards": "Structured validation, explicit category routing, and fallback handling for incomplete AI responses.",
    "caseStudy": {
      "overview": "An AI-powered lead qualification workflow designed to organize vehicle-sales inquiries, evaluate lead quality, and route each prospect to the appropriate follow-up action.",
      "challenge": "Vehicle inquiries often arrive with incomplete or unstructured information. Without a consistent qualification process, sales teams may spend too much time reviewing leads manually and may miss high-intent prospects.",
      "workflow": [
        "Webhook receives the customer inquiry",
        "Data is cleaned and validated",
        "AI analyzes the customer’s intent, vehicle interest, budget, and urgency",
        "Lead is categorized as HOT, WARM, or COLD",
        "Lead details are stored in Google Sheets as a CRM record",
        "The appropriate follow-up path is selected",
        "Gmail sends the relevant follow-up message"
      ],
      "aiLogic": "The AI reviews the inquiry and returns structured information instead of a free-form response. The workflow uses the AI result to support lead classification and routing while keeping the process organized and consistent.",
      "integrations": [
        "n8n",
        "Webhooks",
        "Groq AI",
        "Google Sheets",
        "Gmail",
        "Code parsing",
        "JSON data handling",
        "Lead routing"
      ],
      "safeguards": [
        "Validates incoming lead information",
        "Uses structured AI output for predictable routing",
        "Separates HOT, WARM, and COLD follow-up paths",
        "Includes parsing and fallback logic for incomplete responses",
        "Keeps lead information centralized for easier review"
      ],
      "result": "The workflow transforms unstructured inquiries into organized sales records and gives each lead a clear next action. It helps reduce manual sorting, improve follow-up consistency, and give sales teams better visibility into incoming prospects.",
      "limitations": "AI classification supports follow-up routing but does not replace sales judgment, inventory confirmation, pricing approval, or final customer communication decisions."
    },
    "images": [
      {
        "src": "car-sales-lead.jpg",
        "caption": "Complete n8n lead qualification workflow",
        "alt": "n8n workflow for AI car sales lead qualification with HOT, WARM, and COLD routes"
      }
    ]
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
    "number": "03",
    "platform": "n8n",
    "platformLabel": "n8n",
    "title": "HR Evaluation & Job Posting Automation",
    "summary": "An AI-assisted HR workflow that helps manage job-posting information, applicant documents, candidate evaluation, communication, and interview scheduling.",
    "flow": [
      "Job or application form is submitted",
      "Candidate and position details are collected",
      "CV is uploaded and processed from Google Drive",
      "Candidate information is extracted and structured",
      "OpenAI evaluates the application against the job requirements",
      "Candidate information is recorded in Airtable",
      "Applicants are routed based on the evaluation result",
      "Questionnaire or follow-up communication is sent",
      "Qualified candidates are coordinated through Google Calendar"
    ],
    "tools": "37 nodes · OpenAI · Airtable · Google Drive · Google Calendar · Forms · Gmail",
    "problem": "Recruitment teams often manage job requirements, CV files, candidate screening, email communication, and interview scheduling across different tools. This can lead to repetitive work, inconsistent evaluations, and delayed communication.",
    "solution": "The workflow collects the application, extracts the CV, evaluates fit against the defined role requirements, records the candidate in Airtable, routes the result, sends the next communication, and coordinates qualified candidates through Google Calendar.",
    "safeguards": "Structured evaluation fields, human-controlled hiring decisions, explicit candidate routing, and connected calendar scheduling.",
    "caseStudy": {
      "overview": "An AI-assisted HR workflow that helps manage job-posting information, applicant documents, candidate evaluation, communication, and interview scheduling.",
      "challenge": "Recruitment teams often manage job requirements, CV files, candidate screening, email communication, and interview scheduling across different tools. This can lead to repetitive work, inconsistent evaluations, and delayed communication.",
      "workflow": [
        "Job or application form is submitted",
        "Candidate and position details are collected",
        "CV is uploaded and processed from Google Drive",
        "Candidate information is extracted and structured",
        "OpenAI evaluates the application against the job requirements",
        "Candidate information is recorded in Airtable",
        "Applicants are routed based on the evaluation result",
        "Questionnaire or follow-up communication is sent",
        "Qualified candidates are coordinated through Google Calendar"
      ],
      "aiLogic": "The AI compares candidate information with the defined role requirements and returns a structured evaluation. The result supports the HR workflow but does not replace final human decision-making.",
      "integrations": [
        "n8n",
        "OpenAI",
        "Airtable",
        "Google Drive",
        "Google Calendar",
        "Forms",
        "Gmail",
        "CV extraction",
        "JSON structured outputs"
      ],
      "safeguards": [
        "Separates candidate data from evaluation results",
        "Uses structured fields for consistent screening",
        "Routes candidates according to defined conditions",
        "Keeps the final hiring decision with a human reviewer",
        "Organizes interview scheduling through a connected calendar workflow",
        "Reduces duplicate manual encoding across HR tools"
      ],
      "result": "The workflow creates a more organized recruitment process from application submission to interview coordination. It helps HR teams spend less time on repetitive administrative work and more time reviewing qualified candidates.",
      "limitations": "AI evaluation supports screening and routing, but final hiring decisions, interview outcomes, and candidate communications remain subject to human review and company policy."
    },
    "images": [
      {
        "src": "hr-evaluation.jpg",
        "caption": "Complete HR evaluation and interview workflow",
        "alt": "Large n8n HR workflow for CV intake, AI evaluation, questionnaires, email, and calendar scheduling"
      }
    ]
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
    "number": "05",
    "platform": "make",
    "platformLabel": "Make.com",
    "title": "AI Customer Support Ticket Triage & Escalation",
    "summary": "An AI-powered support workflow that converts incoming customer requests into structured tickets, assigns priority, records the request, and escalates urgent issues to the appropriate team.",
    "flow": [
      "Customer support request is received through a webhook",
      "Request content is sent to the AI triage step",
      "AI identifies the request category, urgency, and priority",
      "Output is converted into structured JSON",
      "Ticket information is logged in Google Sheets",
      "A priority router selects the correct action",
      "Customer acknowledgement is sent through Gmail",
      "Urgent or high-priority cases are escalated through Slack or email"
    ],
    "tools": "8 modules · Groq AI · Google Sheets · Slack · Gmail",
    "problem": "Support requests can arrive in different formats and may vary in urgency. Without a consistent triage process, urgent concerns can be delayed and support teams may need to manually review every request.",
    "solution": "A webhook receives the request, Groq AI returns structured triage fields, a JSON parser normalizes the result, Google Sheets logs the ticket, and a priority router selects the acknowledgement or escalation path.",
    "safeguards": "Structured ticket data, defined priority routing, centralized logging, and human escalation for urgent cases.",
    "caseStudy": {
      "overview": "An AI-powered support workflow that converts incoming customer requests into structured tickets, assigns priority, records the request, and escalates urgent issues to the appropriate team.",
      "challenge": "Support requests can arrive in different formats and may vary in urgency. Without a consistent triage process, urgent concerns can be delayed and support teams may need to manually review every request.",
      "workflow": [
        "Customer support request is received through a webhook",
        "Request content is sent to the AI triage step",
        "AI identifies the request category, urgency, and priority",
        "Output is converted into structured JSON",
        "Ticket information is logged in Google Sheets",
        "A priority router selects the correct action",
        "Customer acknowledgement is sent through Gmail",
        "Urgent or high-priority cases are escalated through Slack or email"
      ],
      "aiLogic": "The AI analyzes each request and returns structured fields that can be used by the automation. Instead of allowing the AI to directly control the entire process, the workflow uses defined routing rules for consistent handling.",
      "integrations": [
        "Make.com",
        "Webhooks",
        "Groq AI",
        "JSON parser",
        "Google Sheets",
        "Slack",
        "Gmail",
        "Priority routing"
      ],
      "safeguards": [
        "Converts AI output into structured ticket data",
        "Uses defined priority-routing conditions",
        "Logs support requests for tracking and review",
        "Separates normal requests from urgent cases",
        "Sends human escalation alerts when a request requires attention",
        "Maintains a clear record of the support workflow"
      ],
      "result": "The workflow gives support teams a consistent way to receive, classify, record, and escalate customer requests. It improves visibility, reduces manual triage, and helps urgent issues reach the right person faster.",
      "limitations": "AI triage depends on the quality of the incoming request and structured output. Support teams still need to verify high-impact decisions and handle exceptions."
    },
    "images": [
      {
        "src": "make-support.jpg",
        "caption": "Complete Make.com support triage scenario",
        "alt": "Make.com workflow for AI support triage with Sheets, router, Slack, and Gmail"
      },
      {
        "src": "make-support-slack.jpg",
        "caption": "Urgent Slack escalation output",
        "alt": "Slack urgent customer support ticket generated by the Make.com workflow"
      },
      {
        "src": "make-support-email.jpg",
        "caption": "Urgent customer acknowledgement",
        "alt": "Customer support acknowledgement email generated by the workflow"
      },
      {
        "src": "make-support-sheet.jpg",
        "caption": "Structured Google Sheets ticket log",
        "alt": "Google Sheets row containing structured AI customer support ticket data"
      }
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
  },
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
  {
    "number": "09",
    "platform": "n8n",
    "platformLabel": "n8n",
    "title": "News Automation — Groq + Telegram Approval",
    "summary": "A content automation workflow that collects Philippine news, uses Groq to prepare a concise post draft, sends it to Telegram for human approval, and publishes approved content to the news page and Facebook.",
    "flow": [
      "Scheduled news collection",
      "RSS / feed parsing",
      "Groq summary and caption generation",
      "News item validation and filtering",
      "Telegram approval request",
      "Approve or reject decision",
      "Publish approved post"
    ],
    "tools": "n8n · Groq · Telegram · RSS · Blogger · Facebook",
    "problem": "News publishing can become repetitive when headlines, summaries, captions, source links, and social posts all need to be prepared manually while still requiring a human to review the final wording.",
    "solution": "The workflow gathers news items, prepares a structured draft with Groq, routes the draft to Telegram with Approve and Reject actions, and continues to publishing only after approval. The result is a repeatable news-to-social workflow with a clear human checkpoint.",
    "safeguards": "Human approval before publishing, source-link preservation, structured news-item handling, duplicate and empty-item checks, and a reject path that stops publication.",
    "skills": [
      "RSS and feed ingestion",
      "Groq AI summarization",
      "Telegram approval workflows",
      "Human-in-the-loop automation",
      "Content filtering and validation",
      "Blogger publishing",
      "Facebook post automation",
      "n8n branching and routing"
    ],
    "images": [
      {
        "src": "news-automation-facebook-post.png",
        "caption": "Published Facebook news post",
        "alt": "Facebook news page post generated from the approved news automation workflow"
      },
      {
        "src": "news-automation-workflow.png",
        "caption": "Complete n8n news automation workflow",
        "alt": "n8n workflow for collecting Philippine news, generating content with Groq, requesting Telegram approval, and publishing approved posts"
      },
      {
        "src": "news-automation-telegram-approval.png",
        "caption": "Telegram approval checkpoint",
        "alt": "Telegram news bot message showing a generated news draft with Approve and Reject buttons"
      }
    ],
    "caseStudy": {
      "overview": "A human-in-the-loop n8n news publishing system designed to turn incoming Philippine news items into reviewed, ready-to-publish content for a blog and Facebook page.",
      "challenge": "News updates arrive from multiple sources and require repeated research, summarization, caption writing, link formatting, and social publishing. Fully automatic publishing can also create a quality-control risk, so the workflow needed a fast approval step before anything went live.",
      "integrations": [
        "n8n",
        "Groq",
        "Telegram",
        "RSS / news feeds",
        "Blogger",
        "Facebook"
      ],
      "workflow": [
        "A schedule starts the workflow and collects new items from configured news feeds.",
        "The workflow parses and filters the incoming items, keeping only usable records with source information.",
        "Groq prepares a concise summary, headline treatment, and Facebook-ready caption from the news content.",
        "n8n sends the draft to a Telegram bot with Approve and Reject actions.",
        "An approval webhook routes the decision: approved items continue, while rejected items stop without publication.",
        "The approved content is published to the blog and social channel, then the workflow records the result."
      ],
      "aiLogic": "Groq is used for content preparation and classification support, not for final publishing authority. The automation keeps the generated output structured so the headline, summary, caption, source, and publish decision can be routed reliably through n8n.",
      "safeguards": [
        "Telegram approval is required before publication.",
        "The source link is carried into the generated post.",
        "Empty or unusable news items are filtered before the AI step.",
        "Reject actions stop the publishing branch.",
        "Publishing remains traceable through the workflow outputs and platform posts."
      ],
      "result": "A repeatable news-to-social pipeline that reduces manual formatting work while keeping the final publish decision with a human reviewer.",
      "limitations": "The workflow still depends on the availability and quality of the configured feeds, Groq output quality, Telegram delivery, and the publishing platforms' API or account permissions. A human should review sensitive, disputed, or high-impact news before approval."
    }
  }
];

const demoConfigs = {
  "01": {
    title: "AI Car Sales Lead Qualification",
    description: "Enter a sample vehicle inquiry and preview how the workflow turns unstructured text into a lead status, buying intent, and next action.",
    flow: ["Demo webhook input", "Data validation", "Lead classification", "HOT / WARM / COLD route", "Simulated follow-up"],
    fields: [
      { name: "customer_name", label: "Customer name", type: "text", placeholder: "Alex Santos", defaultValue: "Alex Santos" },
      { name: "message", label: "Vehicle inquiry", type: "textarea", rows: 5, placeholder: "I am interested in a Ford Ranger. My budget is PHP 1.2M and I want to buy this month.", defaultValue: "I am interested in a Ford Ranger. My budget is PHP 1.2M and I want to buy this month." }
    ],
    run(values) {
      const message = String(values.message || "");
      const text = message.toLowerCase();
      const hot = /buy|purchase|budget|ready|today|this month|finance|urgent/.test(text);
      const warm = /interested|looking|compare|test drive|price|available/.test(text);
      const status = hot ? "HOT" : warm ? "WARM" : "COLD";
      const vehicleMatch = message.match(/(?:ford|toyota|honda|mitsubishi|ranger|hilux|civic|fortuner)[a-z0-9 -]*?(?=\s+(?:budget|price|for|at)\b|,|$)/i);
      const budgetMatch = message.match(/budget\s*(?:is\s*)?(?:₱|php|\$)?\s*[\d,.]+\s*(?:k|m|million|thousand)?/i);
      const budget = budgetMatch ? budgetMatch[0].replace(/^budget\s*(?:is\s*)?/i, "").trim() : "Not provided";
      const budgetParts = budget.match(/([\d,.]+)\s*(k|m|million|thousand)?/i);
      const normalizedBudget = budgetParts ? (() => {
        const amount = Number(budgetParts[1].replace(/,/g, ""));
        const suffix = (budgetParts[2] || "").toLowerCase();
        const multiplier = suffix === "k" || suffix === "thousand" ? 1000 : suffix === "m" || suffix === "million" ? 1000000 : 1;
        return "PHP " + new Intl.NumberFormat("en-PH", { maximumFractionDigits: 0 }).format(amount * multiplier);
      })() : budget;
      return {
        lead_status: status,
        customer: values.customer_name || "Demo customer",
        vehicle_interest: vehicleMatch ? vehicleMatch[0].trim() : "Vehicle not specified",
        budget: budget === "Not provided" ? budget : normalizedBudget,
        urgency: status === "HOT" ? "High" : status === "WARM" ? "Medium" : "Low",
        next_action: status === "HOT" ? "Immediate sales follow-up (simulated Gmail)" : status === "WARM" ? "Scheduled follow-up (simulated Gmail)" : "Nurture sequence (simulated Gmail)"
      };
    }
  },
  "02": {
    title: "AI Dental Clinic Automation",
    description: "Try a safe clinic assistant preview for booking, appointment checks, cancellations, and rescheduling. All tools are simulated and no real patient record is accessed.",
    flow: ["Demo patient request", "Intent detection", "Clinic-rule validation", "Availability / management route", "Simulated confirmation"],
    fields: [
      { name: "patient_name", label: "Patient name", type: "text", placeholder: "Morgan Lee", defaultValue: "Morgan Lee" },
      { name: "request", label: "Appointment request", type: "textarea", rows: 6, placeholder: "I need a dental cleaning next Tuesday at 10 AM.", defaultValue: "I need a dental cleaning next Tuesday at 10 AM." }
    ],
    run(values) {
      const request = String(values.request || "");
      const text = request.toLowerCase();
      const action = /cancel/.test(text) ? "Cancel appointment" : /resched|move|change the time/.test(text) ? "Reschedule appointment" : /check|status|existing appointment/.test(text) ? "Check appointment status" : "Book appointment";
      const service = /clean/.test(text) ? "Dental cleaning" : /extract|tooth|molar/.test(text) ? "Dental treatment consultation" : "General dental appointment";
      const timeMatch = request.match(/(?:next|this)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)(?:\s+at\s+[\d: ]+(?:am|pm)?)?/i) || request.match(/at\s+[\d: ]+(?:am|pm)/i);
      const managementAction = action !== "Book appointment";
      return {
        action,
        patient: values.patient_name || "Demo patient",
        service,
        requested_time: timeMatch ? timeMatch[0].trim() : "Time not specified",
        validation: managementAction ? "Appointment ID or email required before management action" : "Input validated — slot check simulated",
        next_step: managementAction ? "ManageAppointment tool (simulated)" : "GetDentalSlots → Create Appointment (simulated)",
        safety_note: "No real calendar event, patient record, or email was created"
      };
    }
  },
  "03": {
    title: "HR Evaluation & Job Posting",
    description: "Use a sample candidate summary to preview structured screening output. The demo always keeps the final hiring decision with a human reviewer.",
    flow: ["Demo application input", "Candidate data extraction", "Role-fit scoring", "Candidate routing", "Human-review handoff"],
    fields: [
      { name: "candidate_name", label: "Candidate name", type: "text", placeholder: "Jamie Cruz", defaultValue: "Jamie Cruz" },
      { name: "role", label: "Position", type: "text", placeholder: "AI Automation Specialist", defaultValue: "AI Automation Specialist" },
      { name: "cv_summary", label: "CV / experience summary", type: "textarea", rows: 6, placeholder: "3 years of experience with n8n, APIs, JSON, JavaScript, and workflow automation.", defaultValue: "3 years of experience with n8n, APIs, JSON, JavaScript, and workflow automation." }
    ],
    run(values) {
      const text = String(values.cv_summary || "").toLowerCase();
      const keywords = ["automation", "n8n", "make", "zapier", "api", "json", "javascript", "workflow", "project"];
      const matches = keywords.filter(keyword => text.includes(keyword)).length;
      const score = Math.min(95, 45 + matches * 7);
      return {
        candidate: values.candidate_name || "Demo candidate",
        position: values.role || "Demo position",
        match_score: score + "%",
        evaluation: score >= 75 ? "Strong match for human review" : score >= 55 ? "Potential match — manual review" : "Needs further review",
        next_step: "Human review required — questionnaire and interview scheduling are simulated"
      };
    }
  },
  "04": {
    title: "AI E-commerce Order Fulfillment",
    description: "Submit a sample order and preview duplicate prevention, payment routing, AI risk assessment, inventory validation, and fulfillment status.",
    flow: ["Demo order input", "Duplicate check", "Payment route", "AI risk assessment", "Inventory validation", "Fulfillment decision"],
    fields: [
      { name: "order_id", label: "Order ID", type: "text", placeholder: "DEMO-1001", defaultValue: "DEMO-1001" },
      { name: "payment_status", label: "Payment status", type: "text", placeholder: "Paid", defaultValue: "Paid" },
      { name: "order_items", label: "Order items", type: "textarea", rows: 4, placeholder: "2x Wireless Mouse, 1x Keyboard", defaultValue: "2x Wireless Mouse, 1x Keyboard" },
      { name: "inventory_snapshot", label: "Demo inventory snapshot", type: "textarea", rows: 4, placeholder: "Wireless Mouse: 5 in stock; Keyboard: 3 in stock", defaultValue: "Wireless Mouse: 5 in stock; Keyboard: 3 in stock" }
    ],
    run(values) {
      const paymentText = String(values.payment_status || "").toLowerCase();
      const inventoryText = String(values.inventory_snapshot || "").toLowerCase();
      const orderText = String(values.order_items || "");
      const paymentRoute = /paid|complete|confirmed|success/.test(paymentText) ? "Paid" : "Awaiting Payment";
      const riskSignal = /out of stock|low stock|0 in stock|backorder|mismatch|manual review/.test(inventoryText + " " + orderText);
      const fulfillmentStatus = paymentRoute !== "Paid" ? "Awaiting Payment" : riskSignal ? "Needs Review" : "FULFILLED";
      const itemCount = (orderText.match(/\d+\s*x/gi) || []).length || (orderText.trim() ? orderText.split(/[,;\n]/).filter(Boolean).length : 0);
      return {
        order_id: values.order_id || "DEMO-ORDER",
        duplicate_check: "Passed — demo datastore lookup",
        order_items_detected: itemCount + " item line(s)",
        payment_route: paymentRoute,
        ai_order_summary: riskSignal ? "Potential inventory exception detected" : "Order appears ready for fulfillment",
        ai_risk_assessment: riskSignal ? "MEDIUM — manual review recommended" : "LOW — no demo exception detected",
        inventory_decision: riskSignal ? "Needs Review" : "Inventory check passed (simulated)",
        fulfillment_status: fulfillmentStatus,
        next_action: fulfillmentStatus === "FULFILLED" ? "Create fulfillment record (simulated)" : fulfillmentStatus === "Awaiting Payment" ? "Wait for payment confirmation (simulated)" : "Route to manual review (simulated)",
        side_effects: "Simulated only — no Airtable, payment, inventory, or Gmail update"
      };
    }
  },
  "05": {
    title: "AI Customer Support Ticket Triage",
    description: "Submit a sample support request and preview how the workflow categorizes priority, logs a ticket, and chooses an escalation path.",
    flow: ["Demo support request", "AI-style classification", "Structured JSON", "Priority router", "Simulated acknowledgement / escalation"],
    fields: [
      { name: "customer_name", label: "Customer name", type: "text", placeholder: "Taylor Reyes", defaultValue: "Taylor Reyes" },
      { name: "request", label: "Support request", type: "textarea", rows: 6, placeholder: "URGENT: I cannot access my account and I need help before today.", defaultValue: "URGENT: I cannot access my account and I need help before today." }
    ],
    run(values) {
      const text = String(values.request || "").toLowerCase();
      const category = /refund|payment|invoice|charge/.test(text) ? "Billing" : /login|password|access|account/.test(text) ? "Account access" : /shipping|delivery|order/.test(text) ? "Order / delivery" : "General support";
      const urgent = /urgent|emergency|down|can't|cannot|blocked|fraud|security/.test(text);
      const priority = urgent ? "URGENT" : /when|how|question|status/.test(text) ? "NORMAL" : "LOW";
      return {
        ticket_id: "DEMO-001",
        customer: values.customer_name || "Demo customer",
        category,
        priority,
        acknowledgement: "Simulated Gmail acknowledgement",
        escalation: urgent ? "Simulated Slack / email escalation" : "No escalation — standard support queue",
        human_review: "Required for final resolution"
      };
    }
  }
};

const grid = document.querySelector("#projects-grid");
const caseDialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const imageDialog = document.querySelector("#image-dialog");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const demoDialog = document.querySelector("#demo-dialog");
const demoContent = document.querySelector("#demo-content");

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
      <div class="project-footer"><span class="tool-list">${project.tools}</span><div class="project-actions"><button class="case-button" type="button" data-project="${project.number}">View case study ↗</button>${demoConfigs[project.number] && document.querySelector("#demo-dialog") ? `<button class="demo-button" type="button" data-demo="${project.number}">Try live demo ↗</button>` : ""}</div></div>
    </article>`).join("");
  bindReveals();
}

function openCaseStudy(number) {
  const project = projects.find(item => item?.number === number);
  if (!project) return;

  const detailedContent = project.caseStudy ? [
    '<div class="case-overview"><small>Project overview</small><p>',
    project.caseStudy.overview,
    '</p></div>',
    '<div class="dialog-grid case-study-top-grid">',
      '<div class="detail-box"><small>The challenge</small><p>',
      project.caseStudy.challenge,
      '</p></div>',
      '<div class="detail-box"><small>Tools and integrations</small><div class="case-tag-list">',
      project.caseStudy.integrations.map(tool => '<span>' + tool + '</span>').join(""),
      '</div></div>',
    '</div>',
    '<h3 class="workflow-heading">Workflow architecture</h3>',
    '<ol class="workflow-steps">',
      project.caseStudy.workflow.map((step, index) => '<li><span class="workflow-step-number">' + String(index + 1).padStart(2, "0") + '</span><div><strong>' + step + '</strong></div></li>').join(""),
    '</ol>',
    '<div class="dialog-grid case-study-text-grid">',
      '<div class="detail-box"><small>AI logic</small><p>',
      project.caseStudy.aiLogic,
      '</p></div>',
      '<div class="detail-box"><small>Reliability and safeguards</small><ul class="case-list">',
      project.caseStudy.safeguards.map(item => '<li>' + item + '</li>').join(""),
      '</ul></div>',
    '</div>',
    '<div class="dialog-grid case-study-outcome-grid">',
      '<div class="detail-box case-result-box"><small>Result</small><p>',
      project.caseStudy.result,
      '</p></div>',
      '<div class="detail-box"><small>Limitations and human review</small><p>',
      project.caseStudy.limitations,
      '</p></div>',
    '</div>'
  ].join("") : [
    '<div class="dialog-grid">',
      '<div class="detail-box"><small>Business problem</small><p>' + project.problem + '</p></div>',
      '<div class="detail-box"><small>Solution architecture</small><p>' + project.solution + '</p></div>',
      '<div class="detail-box"><small>Reliability & safeguards</small><p>' + project.safeguards + '</p></div>',
      '<div class="detail-box"><small>Technology</small><p>' + project.tools + '</p></div>',
    '</div>'
  ].join("");

  const brandDetails = project.brands ? [
    '<div class="tool-brand-row" aria-label="Tools used">',
      project.brands.map(brand => '<span class="tool-brand"><img src="' + brand.src + '" alt="" /><strong>' + brand.label + '</strong></span>').join(""),
    '</div>'
  ].join("") : "";

  const skillDetails = project.skills ? [
    '<h3 class="workflow-heading">Skills demonstrated</h3>',
    '<div class="case-skill-list">',
      project.skills.map(skill => '<span>' + skill + '</span>').join(""),
    '</div>'
  ].join("") : "";

  const videoDetails = project.video ? [
    '<h3 class="workflow-heading">Workflow demo video</h3>',
    '<figure style="margin:0 0 1.5rem">',
      '<video controls preload="metadata" poster="' + project.video.poster + '" style="display:block;width:100%;aspect-ratio:16/9;background:#050b14;border:1px solid rgba(148,163,184,.22);border-radius:16px" aria-label="' + project.title + ' workflow demonstration">',
        '<source src="' + project.video.src + '" type="video/mp4" />',
        'Your browser does not support HTML video.',
      '</video>',
      '<figcaption style="margin-top:.65rem;color:#9fb2c9;font-size:.88rem">' + project.video.caption + '</figcaption>',
    '</figure>'
  ].join("") : "";

  const evidenceDetails = [
    '<h3 class="workflow-heading">Screenshots & workflow evidence</h3>',
    '<div class="workflow-gallery">',
      project.images.map((image, index) => [
        '<button class="workflow-shot" type="button" data-src="', image.src,
        '" data-caption="', image.caption,
        '" data-alt="', image.alt, '">',
        '<img src="', image.src, '" alt="', image.alt, '" loading="lazy" />',
        '<span>', String(index + 1), '. ', image.caption, ' · Click to enlarge</span>',
        '</button>'
      ].join("")).join(""),
    '</div>'
  ].join("");

  const ctaDetails = project.caseStudy ? [
    '<div class="case-cta">',
      '<div><small>Project CTA</small><strong>Need a similar workflow for your business?</strong><p>Let’s map the process, define the safeguards, and build a practical automation around the tools your team already uses.</p></div>',
      '<a class="button button-small" href="#contact" data-close-case>Discuss a similar workflow <span aria-hidden="true">↗</span></a>',
    '</div>'
  ].join("") : "";

  dialogContent.innerHTML = [
    '<span class="dialog-kicker">Case study ', project.number, ' · ', project.platformLabel, ' · Completed</span>',
    '<h2 id="dialog-title">', project.title, '</h2>',
    '<p class="dialog-intro">', project.summary, '</p>',
    evidenceDetails,
    detailedContent,
    brandDetails,
    skillDetails,
    videoDetails,
    ctaDetails
  ].join("");
  caseDialog.showModal();
  document.body.classList.add("modal-open");
}
function escapeDemoHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function openDemo(number) {
  const config = demoConfigs[number];
  if (!config || !demoDialog || !demoContent) return;
  const fields = config.fields.map(field => field.type === "textarea"
    ? '<label>' + field.label + '<textarea name="' + field.name + '" rows="' + (field.rows || 4) + '" placeholder="' + field.placeholder + '">' + (field.defaultValue || "") + '</textarea></label>'
    : '<label>' + field.label + '<input type="' + field.type + '" name="' + field.name + '" placeholder="' + field.placeholder + '" value="' + (field.defaultValue || "") + '" /></label>'
  ).join("");
  const flow = config.flow.map(step => '<span class="demo-flow-chip">' + step + '</span>').join("");
  demoContent.innerHTML = [
    '<span class="demo-kicker">Free public sandbox · Simulated workflow</span>',
    '<h2 id="demo-title">' + config.title + '</h2>',
    '<p class="demo-intro">' + config.description + '</p>',
    '<div class="demo-notice"><strong>Demo mode only</strong><span>This preview uses sample data and local rule-based logic. It does not call Gmail, Calendar, Slack, Facebook, APIs, or private workflows.</span></div>',
    '<div class="demo-flow">' + flow + '</div>',
    '<form class="demo-form" id="demo-form">' + fields + '<button class="button demo-submit" type="submit">Run demo workflow <span aria-hidden="true">↗</span></button></form>',
    '<div class="demo-result" id="demo-result" aria-live="polite"><strong>Structured output</strong><p>Submit the sample input to preview the routed result.</p></div>',
    '<p class="demo-footnote">Portfolio sandbox · no credentials, webhooks, real messages, or customer records are used.</p>'
  ].join("");
  demoDialog.showModal();
  document.body.classList.add("modal-open");
  const form = document.querySelector("#demo-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const output = config.run(values);
    const resultHtml = Object.entries(output).map(([key, value]) => [
      '<div class="demo-result-item"><span>',
      escapeDemoHtml(key.replace(/_/g, " ")),
      '</span><strong>',
      escapeDemoHtml(value),
      '</strong></div>'
    ].join("")).join("");
    document.querySelector("#demo-result").innerHTML = '<strong>Structured output</strong><div class="demo-result-grid">' + resultHtml + '</div><p class="demo-result-note">This is a simulated result for portfolio demonstration. A production workflow would pass validated data to the connected tools.</p>';
  });
}

grid.addEventListener("click", event => {
  const demoButton = event.target.closest("[data-demo]");
  if (demoButton) {
    openDemo(demoButton.dataset.demo);
    return;
  }
  const button = event.target.closest("[data-project]");
  if (button) openCaseStudy(button.dataset.project);
});

document.querySelector(".dialog-close").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
caseDialog.addEventListener("click", event => { if (event.target === caseDialog) caseDialog.close(); });
dialogContent.addEventListener("click", event => {
  const cta = event.target.closest("[data-close-case]");
  if (cta) {
    event.preventDefault();
    caseDialog.close();
    setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 0);
    return;
  }
  const shot = event.target.closest(".workflow-shot");
  if (!shot) return;
  lightboxImage.src = shot.dataset.src;
  lightboxImage.alt = shot.dataset.alt;
  lightboxCaption.textContent = shot.dataset.caption;
  imageDialog.showModal();
});
document.querySelector(".image-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });
document.querySelector(".demo-close")?.addEventListener("click", () => demoDialog.close());
demoDialog?.addEventListener("close", () => document.body.classList.remove("modal-open"));
demoDialog?.addEventListener("click", event => { if (event.target === demoDialog) demoDialog.close(); });

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
