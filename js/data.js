/* ==========================================================================
   DEVINE DENTAL — CONTENT DATA
   Single source of truth. Only real, provided information lives here.
   ========================================================================== */

const CLINIC = {
  name: "Devine Dental Services",
  tagline: "Improving oral health one smile at a time",
  phones: ["+260 975 910 919", "+260 778 380 300", "+260 769 179 593"],
  email: "devinedentalservicesltd@gmail.com",
  address: "84 Kantanta Street, Nkana East, Kitwe, Zambia",
  whatsappNumber: "260975910919", // first phone, wa.me format
};

/* Icon paths keyed by name — kept as raw SVG inner-markup so both the
   Services page and the Home preview can render from one source. */
const ICONS = {
  whitening: '<path d="M12 2c-1 3-1 5 0 7 1-2 1-4 0-7zM7 9c3 1 5 3 5 6s-2 5-5 6c-3-1-5-3-5-6s2-5 5-6zm10 0c3 1 5 3 5 6s-2 5-5 6c-3-1-5-3-5-6s2-5 5-6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  cleaning: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  xray: '<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M9 5v14M15 5v14" stroke="currentColor" stroke-width="1.2" opacity=".6"/>',
  braces: '<path d="M6 4c0 6 2 9 2 13M18 4c0 6-2 9-2 13M8 9h8M8 13h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  consult: '<path d="M12 21s-7-4.6-9.3-9.1C1.4 8.6 3 5 6.7 5c2 0 3.4 1.2 4.3 2.6C11.9 6.2 13.3 5 15.3 5 19 5 20.6 8.6 19.3 11.9 17 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  implant: '<path d="M12 3l4 3v4l-2 2v9h-4v-9l-2-2V6l4-3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9h6" stroke="currentColor" stroke-width="1.4"/>',
  root: '<path d="M12 3c-2.5 0-4 1.7-4 4 0 2 1 3 1 5v7l1.5-2L12 19l1.5-2L15 19v-7c0-2 1-3 1-5 0-2.3-1.5-4-4-4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  filling: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
};

const SERVICES = [
  { id: "whitening", name: "Teeth Whitening", icon: "whitening", desc: "Professional whitening to brighten your smile safely and evenly.", image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=600&q=80&auto=format&fit=crop" },
  { id: "cleaning", name: "Dental Cleaning", icon: "cleaning", desc: "Routine professional cleaning to remove plaque, tartar and support healthy gums.", image: "https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?w=600&q=80&auto=format&fit=crop" },
  { id: "xrays", name: "Digital X-rays", icon: "xray", desc: "Fast, clear digital imaging to help diagnose and plan your care accurately.", image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=600&q=80&auto=format&fit=crop" },
  { id: "crowns", name: "Crowns, Bridges & Braces", icon: "braces", desc: "Restorative and orthodontic options to repair, replace and align your teeth.", image: "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?w=600&q=80&auto=format&fit=crop" },
  { id: "consultation", name: "Dental Consultation", icon: "consult", desc: "A thorough one-on-one assessment of your oral health and treatment options.", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format&fit=crop" },
  { id: "extractions", name: "Surgical Extractions & Implants", icon: "implant", desc: "Surgical tooth removal and implant placement, carried out with care.", image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&q=80&auto=format&fit=crop" },
  { id: "rootcanal", name: "Fillings & Root Canal Treatment", icon: "root", desc: "Treating decay and infection to relieve pain and preserve your natural teeth.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&q=80&auto=format&fit=crop" },
  { id: "filling", name: "Tooth Filling", icon: "filling", desc: "Repairing cavities and minor damage to restore your tooth's shape and function.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop" },
];

/* Team — no real staff information has been supplied yet.
   These are clearly labelled placeholders only. Replace the name, title
   and photo (data-photo) below once real team details/photos are provided. */
const TEAM = [
  { name: "Doctor Name", role: "Professional Title" },
  { name: "Doctor Name", role: "Professional Title" },
  { name: "Doctor Name", role: "Professional Title" },
  { name: "Doctor Name", role: "Professional Title" },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&q=85&auto=format&fit=crop", cap: "Our Treatment Room" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1800&q=85&auto=format&fit=crop", cap: "Clinical Equipment" },
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1800&q=85&auto=format&fit=crop", cap: "Dental Examination" },
  { src: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=1800&q=85&auto=format&fit=crop", cap: "Healthy Smile" },
  { src: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=1800&q=85&auto=format&fit=crop", cap: "Digital Diagnostics" },
  { src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1800&q=85&auto=format&fit=crop", cap: "Implant Care" },
  { src: "https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?w=1800&q=85&auto=format&fit=crop", cap: "Consultation Tools" },
  { src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1800&q=85&auto=format&fit=crop", cap: "Our Dental Team" },
  { src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=1800&q=85&auto=format&fit=crop", cap: "Digital Scan Review" },
  { src: "https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e?w=1800&q=85&auto=format&fit=crop", cap: "Clinic Interior" },
  { src: "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?w=1800&q=85&auto=format&fit=crop", cap: "Braces & Aligners" },
  { src: "https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=1000&q=80&auto=format&fit=crop", full: "https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=1800&q=85&auto=format&fit=crop", cap: "Patient Room" },
];
