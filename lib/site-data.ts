import {
  Bot,
  CalendarCheck,
  MessageSquareText,
  PhoneCall,
  Route,
  Star,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#capabilities" },
  { label: "Solutions", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#validation" },
  { label: "FAQ", href: "#faq" },
];

export const heroMetrics = [
  { value: "240x", label: "Faster Response" },
  { value: "340%", label: "Avg 90-Day ROI" },
];

export const problemStats = [
  {
    value: "62%",
    label: "of inbound calls go unanswered during local business hours",
  },
  {
    value: "85%",
    label: "of callers routed to voicemail will immediately call a competitor",
  },
  {
    value: "$24k",
    label: "average annual revenue lost from just 2 missed calls per day",
  },
  {
    value: "400%",
    label: "drop in conversion probability if a lead is not contacted within 5 minutes",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Missed-Call Text-Back & Revenue Recovery",
    description:
      "Capture the caller before the moment goes cold, trigger a direct text path, and route the opportunity toward a booking.",
    metric: "Recover silent demand",
    flow: "Missed call -> instant text -> qualified handoff",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "24/7 AI Voice Receptionist",
    description:
      "Answer after-hours demand, qualify the request, and keep appointment momentum moving when the front desk is offline.",
    metric: "Always-on intake",
    flow: "Call -> qualify -> book",
    icon: Bot,
  },
  {
    number: "03",
    title: "Speed-to-Lead Instant Follow-Up",
    description:
      "Route new inquiries immediately across the channels your prospects already use, before a competitor gets the conversation.",
    metric: "Sub-minute response",
    flow: "Lead -> score -> route -> reply",
    icon: Route,
  },
  {
    number: "04",
    title: "AI Review & Reputation Management",
    description:
      "Identify satisfied customers, request reviews at the right time, and keep reputation signals moving upward.",
    metric: "Reputation lift",
    flow: "Visit -> signal -> review request",
    icon: Star,
  },
  {
    number: "05",
    title: "No-Show Reduction & Schedule Optimization",
    description:
      "Use reminders, confirmations, and recovery sequences to protect calendar capacity and refill openings.",
    metric: "Protected calendar",
    flow: "Appointment -> confirm -> recover gaps",
    icon: CalendarCheck,
  },
  {
    number: "06",
    title: "AI Customer Support & FAQ Agent",
    description:
      "Triage repeat questions, route urgent needs, and keep staff focused on higher-value work.",
    metric: "Lower support drag",
    flow: "Question -> answer -> escalate",
    icon: MessageSquareText,
  },
];

export const philosophyPillars = [
  {
    number: "01",
    title: "ROI-First Architecture",
    body: "Every system starts with the leak: missed calls, slow follow-up, manual entry, dormant contacts, or reporting drag.",
  },
  {
    number: "02",
    title: "Zero-Friction, Done-For-You",
    body: "Clients do not need to learn another platform. We build around the tools and operating habits already in place.",
  },
  {
    number: "03",
    title: "Built for Service Businesses",
    body: "The work is designed for calls, bookings, reviews, intake, field teams, document flow, and local revenue pressure.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnose Analysis",
    body: "Map response gaps, intake friction, manual labor, and the exact places revenue or time is leaking.",
  },
  {
    step: "02",
    title: "Automate Deploy",
    body: "Build the workflows, routing, prompts, integrations, and handoff logic that remove the bottleneck.",
  },
  {
    step: "03",
    title: "Optimize Scale",
    body: "Tune performance, watch outcomes, and expand automation only where the business case is clear.",
  },
];

export const validationLogs = [
  "Missed inquiries converted into immediate follow-up paths.",
  "Lead response compressed from manual delay to automated routing.",
  "Document and reporting work prepared for future automation layers.",
  "Revenue recovery logic tied to measurable operating bottlenecks.",
];

export const faqs = [
  {
    question: "Do we have to replace our current software?",
    answer:
      "No. IQ Integrations is built around your existing tools wherever possible. The goal is to remove friction, not force your team into another platform.",
  },
  {
    question: "What kind of businesses is this built for?",
    answer:
      "Service businesses with inbound calls, booked appointments, repeat follow-up, reviews, documents, or operational reporting needs are the strongest fit.",
  },
  {
    question: "Is the AI customer-facing?",
    answer:
      "It can be, but only where it improves the customer experience. Some systems run behind the scenes to route leads, clean data, trigger follow-up, or notify staff.",
  },
  {
    question: "How do you decide what to automate first?",
    answer:
      "We start with the highest-cost bottleneck: missed calls, slow response, no-shows, manual document entry, dormant contacts, or fragmented reporting.",
  },
  {
    question: "Will this pretend to be a human?",
    answer:
      "No. Systems should be clear, useful, and trustworthy. Automation should create faster service without damaging customer confidence.",
  },
];
