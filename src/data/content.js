export const profile = {
  name: "Piyush Kumar",
  roles: ["Full-Stack Developer","AI/ML Engineer","AI Creator","Traveller","Entrepreneur"],
  heroTitle: ["TURNING IDEAS","INTO INTELLIGENT","IMPACT."],
  intro: "I build digital products, intelligent systems and immersive experiences that create real-world impact."
};

export const dimensions = [
  {key:"engineer", title:"ENGINEER", text:"Building scalable web applications and robust backend systems."},
  {key:"intelligence", title:"INTELLIGENCE", text:"AI/ML solutions that automate processes and create impact."},
  {key:"creator", title:"CREATOR", text:"AI video, visual storytelling and immersive digital experiences."},
  {key:"explorer", title:"EXPLORER", text:"Travel, discover and document stories beyond the screen."},
  {key:"entrepreneur", title:"ENTREPRENEUR", text:"Building ideas into ventures that create long-term value."}
];

export const projects = [
  {title:"MAXIMUS", label:"FinTech Platform", text:"A comprehensive banking platform covering loans, top-up and back-office operations.", tags:["Kotlin","Spring Boot","Microservices"], image:"/images/project-maximus.jpg", featured:true},
  {title:"LOAN MANAGEMENT SYSTEM", label:"Banking Application", text:"End-to-end loan management system for multiple loan products.", tags:["Java","React","PostgreSQL"], image:"/images/project-loan.jpg"},
  {title:"BACKOFFICE PORTAL", label:"Enterprise Solution", text:"Backoffice portal for operational efficiency and user management.", tags:["Angular","Node.js","MongoDB"], image:"/images/project-backoffice.jpg"},
  {title:"AI CHAT ASSISTANT", label:"AI / ML Solution", text:"Intelligent assistant for customer support automation.", tags:["Python","TensorFlow","FastAPI"], image:"/images/project-ai.jpg"}
];

export const services = [
  ["SOFTWARE DEVELOPMENT","Web Applications · Mobile Apps · Enterprise Systems"],
  ["AI & AUTOMATION","AI Solutions · Business Automation · Intelligent Workflows"],
  ["AI AGENTS","Custom AI Agents · Multi-Agent Systems · AI Integrations"],
  ["AI VIDEO & CONTENT","AI Video Creation · Visual Storytelling · Content Automation"],
  ["TECH CONSULTING","Product Strategy · Architecture · Technology Advisory"],
  ["STARTUP SUPPORT","MVP Development · Idea Validation · Product Scaling"]
];

export const gallery = [1,2,3,4,5,6].map(i=>`/images/journey-${i}.jpg`);
