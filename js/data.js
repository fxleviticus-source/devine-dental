/* ==========================================================================
   DEVINE DENTAL — CONTENT DATA
   Single source of truth. Only real, provided information lives here.
   ========================================================================== */

const CLINIC = {
  name: "Devine Dental Services",
  legalName: "DEVINE DENTAL SERVICES Limited",
  tagline: "Improving oral health one smile at a time",
  phones: ["+260 778 380 300", "+260 769 179 593"],
  emergencyPhone: "+260 975 910 919", // Sunday emergencies only
  email: "info@devinedentalzm.com",
  address: "House 84, Corner of 19th Avenue & Kantanta Street, Nkana East, Kitwe, Zambia",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday & Public Holidays", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Emergencies only" },
  ],
  whatsappNumber: "260778380300", // primary general number, wa.me format
};

/* Icon paths keyed by name — kept as raw SVG inner-markup so both the
   Services page and the Home preview can render from one source. */
const ICONS = {
  consult: '<path d="M12 21s-7-4.6-9.3-9.1C1.4 8.6 3 5 6.7 5c2 0 3.4 1.2 4.3 2.6C11.9 6.2 13.3 5 15.3 5 19 5 20.6 8.6 19.3 11.9 17 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  extraction: '<path d="M7 3l3 8M17 3l-3 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M10 11c0 4-1 6-1 8M14 11c0 4 1 6 1 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="3" r="1.4" fill="currentColor"/><circle cx="17" cy="3" r="1.4" fill="currentColor"/>',
  filling: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
  root: '<path d="M12 3c-2.5 0-4 1.7-4 4 0 2 1 3 1 5v7l1.5-2L12 19l1.5-2L15 19v-7c0-2 1-3 1-5 0-2.3-1.5-4-4-4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  cleaning: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  whitening: '<path d="M12 2c-1 3-1 5 0 7 1-2 1-4 0-7zM7 9c3 1 5 3 5 6s-2 5-5 6c-3-1-5-3-5-6s2-5 5-6zm10 0c3 1 5 3 5 6s-2 5-5 6c-3-1-5-3-5-6s2-5 5-6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  crown: '<path d="M4 17l1.5-8L9 12l3-6 3 6 3.5-3L20 17H4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 17h16v2H4z" fill="currentColor"/>',
  implant: '<path d="M12 3l4 3v4l-2 2v9h-4v-9l-2-2V6l4-3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9h6" stroke="currentColor" stroke-width="1.4"/>',
  dentures: '<path d="M4 8c0 6 3.5 10 8 10s8-4 8-10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7 8v3M10 8v4M14 8v4M17 8v3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  braces: '<path d="M6 4c0 6 2 9 2 13M18 4c0 6-2 9-2 13M8 9h8M8 13h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  veneers: '<path d="M12 3c-2.2 0-4 1.8-4 4.5 0 2 .8 3 .8 5.5 0 2 .6 4 1.4 6l1.8-3 1.8 3c.8-2 1.4-4 1.4-6 0-2.5.8-3.5.8-5.5C16 4.8 14.2 3 12 3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor"/>',
  xray: '<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M9 5v14M15 5v14" stroke="currentColor" stroke-width="1.2" opacity=".6"/>',
};

const SERVICES = [
  { id: "consultation", name: "Dental Consultation", icon: "consult", desc: "A thorough one-on-one assessment of your oral health and treatment options.", image: "assets/img/services/consultation.jpg" },
  { id: "extractions", name: "Extractions", icon: "extraction", desc: "Safe removal of a damaged or problem tooth, carried out with care.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&q=80&auto=format&fit=crop" },
  { id: "filling", name: "Tooth Fillings", icon: "filling", desc: "Repairing cavities and minor damage to restore your tooth's shape and function.", image: "assets/img/services/fillings.jpg" },
  { id: "rootcanal", name: "Root Canal Treatment", icon: "root", desc: "Treating infection inside the tooth to relieve pain and preserve your natural tooth.", image: "assets/img/services/rootcanal.jpg" },
  { id: "cleaning", name: "Teeth Cleaning", icon: "cleaning", desc: "Routine professional cleaning to remove plaque, tartar and support healthy gums.", image: "assets/img/services/cleaning.jpg" },
  { id: "whitening", name: "Teeth Whitening", icon: "whitening", desc: "Professional whitening to brighten your smile safely and evenly.", image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=600&q=80&auto=format&fit=crop" },
  { id: "crowns", name: "Crowns and Bridges", icon: "crown", desc: "Custom restorations to repair a damaged tooth or replace a missing one.", image: "assets/img/services/crowns.jpg" },
  { id: "implants", name: "Implants", icon: "implant", desc: "Implant placement to replace missing teeth with a secure, natural-looking result.", image: "assets/img/services/implants.jpg" },
  { id: "dentures", name: "Dentures", icon: "dentures", desc: "Removable replacement teeth, fitted to restore your bite and your smile.", image: "assets/img/services/dentures.jpg" },
  { id: "braces", name: "Braces", icon: "braces", desc: "Orthodontic treatment to gradually straighten and align your teeth.", image: "assets/img/services/braces.jpg" },
  { id: "veneers", name: "Veneers", icon: "veneers", desc: "Thin custom shells bonded to the front of your teeth to refine your smile.", image: "assets/img/services/veneers.jpg" },
  { id: "xrays", name: "Digital X-Ray", icon: "xray", desc: "Fast, clear digital imaging to help diagnose and plan your care accurately.", image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=600&q=80&auto=format&fit=crop" },
];

/* Real team members, provided by the clinic. Photo files live in
   assets/img/team/ — replace those files (keeping the same names) if the
   clinic sends updated headshots later. */
const TEAM = [
  { name: "Twaambo Chilema", role: "Director / Dentist", photo: "assets/img/team/twaambo.jpg" },
  { name: "Memory Zulu", role: "Dentist", photo: "assets/img/team/memory.jpg" },
  { name: "Scholastica Gomora", role: "Dental Assistant", photo: "assets/img/team/scholastica.jpg" },
  { name: "Mwaya Chifuta", role: "Office Dental Assistant", photo: "assets/img/team/mwaya.jpg" },
  { name: "Chansa Chimutete", role: "Administrative Assistant", photo: "assets/img/team/chansa.jpg" },
  { name: "Queen Munkanta", role: "Facility Hygiene Assistant", photo: "assets/img/team/queen.jpg" },
];

const GALLERY = [
  { src: "assets/img/gallery/thumb/entrance.jpg", full: "assets/img/gallery/entrance.jpg", cap: "Clinic Entrance — 84 Kantanta Street" },
  { src: "assets/img/gallery/thumb/exterior-side.jpg", full: "assets/img/gallery/exterior-side.jpg", cap: "Our Clinic Building" },
  { src: "assets/img/gallery/thumb/reception.jpg", full: "assets/img/gallery/reception.jpg", cap: "Reception" },
  { src: "assets/img/gallery/thumb/waiting-room.jpg", full: "assets/img/gallery/waiting-room.jpg", cap: "Waiting Area" },
  { src: "assets/img/gallery/thumb/room1.jpg", full: "assets/img/gallery/room1.jpg", cap: "Treatment Room" },
  { src: "assets/img/gallery/thumb/room2.jpg", full: "assets/img/gallery/room2.jpg", cap: "Treatment Room" },
  { src: "assets/img/gallery/thumb/xray-room.jpg", full: "assets/img/gallery/xray-room.jpg", cap: "Digital X-Ray Room" },
  { src: "assets/img/gallery/thumb/sterilization.jpg", full: "assets/img/gallery/sterilization.jpg", cap: "Sterilization Station" },
  { src: "assets/img/gallery/thumb/parking.jpg", full: "assets/img/gallery/parking.jpg", cap: "Patient Parking" },
];
