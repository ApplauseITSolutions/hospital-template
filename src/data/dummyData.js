import cardiologyImg from '../assets/department/Cardiology.jpg';
import oncologyImg from '../assets/department/Oncology.jpg';
import orthopedicsImg from '../assets/department/orthopaedics-banner.jpg';
import newPartnerLogoImg from '../assets/logo/images.png';
import drAnanyaIyerImg from '../assets/dr_ananya_iyer.png';



// Dummy Data for Global Care Multi-Speciality Hospital

export const DEPARTMENTS = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "State-of-the-art heart care including diagnostics, non-invasive cardiology, interventional cardiology, and cardiac surgery.",
    icon: "HeartIcon",
    imageUrl: cardiologyImg,
    longDescription: "Our Cardiology department offers the most advanced diagnostics and treatments for heart conditions. With a team of world-renowned cardiologists and state-of-the-art cath labs, we specialize in angioplasty, pacemaker installations, bypass surgeries, and preventive cardiac health checkups.",
    features: ["24/7 Cardiac Emergency Care", "Advanced Cath Labs", "Heart Failure Clinic", "Preventive Health Screenings"]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Comprehensive care for brain, spine, and nerve disorders, backed by advanced neuro-imaging and rehabilitation.",
    icon: "BrainIcon",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    longDescription: "Global Care Neurology provides comprehensive neurological care. We specialize in stroke management, epilepsy treatments, Parkinson's disease, Alzheimer's, neuro-oncology, and complex spinal disorders. Our advanced neuro-diagnostic center guarantees accurate and swift diagnosis.",
    features: ["Stroke & Neuro-Trauma Unit", "Epilepsy Monitoring", "Neuro-rehabilitation Center", "Advanced Brain Mapping"]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Expert joint replacements, sports medicine, spine surgeries, and trauma care with modern post-op rehab services.",
    icon: "BoneIcon",
    imageUrl: orthopedicsImg,
    longDescription: "Our Orthopedics department features top orthopedic surgeons who specialize in minimally invasive surgeries, joint replacements (hip, knee, shoulder), pediatric orthopedics, spinal alignments, and treating active sports injuries.",
    features: ["Joint Replacement Excellence", "Minimally Invasive Spine Surgery", "Sports Medicine & Rehabilitation", "24/7 Trauma & Fracture Care"]
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Compassionate, multi-disciplinary cancer care incorporating surgery, radiation therapy, chemotherapy, and immunotherapy.",
    icon: "RibbonIcon",
    imageUrl: oncologyImg,
    longDescription: "Our comprehensive oncology program brings together medical oncology, surgical oncology, radiation oncology, and pain management. We provide customized treatment plans supported by the latest advancements in targeted drug therapy and immunotherapy.",
    features: ["Multi-disciplinary Tumor Board", "Advanced Chemotherapy Bay", "Linear Accelerator Radiation", "Palliative Care Support"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Nurturing care for infants, children, and adolescents, featuring expert pediatric specialists and 24/7 NICU/PICU units.",
    icon: "BabyIcon",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    longDescription: "We provide high-quality pediatric services in a child-friendly environment. From routine childhood immunizations to critical intensive care in our Level III NICU and PICU, your child's health and development are in safe hands.",
    features: ["Level III NICU & PICU", "Child Development Assessment", "Pediatric Emergency Services", "Specialized Pediatric Surgery"]
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Advanced medical and cosmetic skin treatments, resolving allergies, acne, hair loss, and chronic skin conditions.",
    icon: "SparklesIcon",
    imageUrl: "https://images.unsplash.com/photo-1614859324967-bdf461fcf769?auto=format&fit=crop&q=80&w=800",
    longDescription: "Our dermatology specialists offer expert treatment for all skin, hair, and nail disorders. We provide clinical dermatology as well as advanced cosmetic treatments like laser therapies, chemical peels, and medical facials.",
    features: ["Clinical & Cosmetic Dermatology", "Advanced Laser Treatment", "Hair Restoration Clinic", "Skin Cancer Screenings"]
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    description: "Complete women's wellness, from prenatal care and painless deliveries to gynecological surgical interventions.",
    icon: "ActivityIcon",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
    longDescription: "We provide extensive maternity and gynecological care. Our maternity suites are designed to give mothers a comfortable birth experience, backed by maternal-fetal medicine specialists for high-risk pregnancies.",
    features: ["Premium Labor & Delivery Suites", "High-Risk Pregnancy Care", "Laparoscopic Gynecology Surgery", "Menopause & Wellness Clinic"]
  },
  {
    id: "ent",
    name: "ENT",
    description: "Expert evaluation and management of ear, nose, throat, head, and neck issues including hearing restoration.",
    icon: "EarIcon",
    imageUrl: "https://images.unsplash.com/photo-1584515906207-f79b273030c1?auto=format&fit=crop&q=80&w=800",
    longDescription: "Our ENT department treats disorders of the ear, nose, throat, head, and neck. We offer microsurgeries for hearing loss, sinus surgeries, tonsillectomies, and advanced speech therapy clinics.",
    features: ["Hearing Restoration & Cochlear Implants", "Endoscopic Sinus Surgery", "Voice & Swallowing Therapy", "Allergen Immunotherapy"]
  },
  {
    id: "nephrology",
    name: "Nephrology",
    description: "Comprehensive kidney care, featuring high-efficiency dialysis, hypertension control, and transplant counseling.",
    icon: "ShieldAlertIcon",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    longDescription: "Our renal care department offers state-of-the-art dialysis service with strict hygiene standards. We specialize in managing acute kidney injury, chronic kidney disease (CKD), and preparing patients for kidney transplants.",
    features: ["24/7 Dialysis Unit", "Kidney Transplant Registry", "Hypertension Management", "Pediatric Nephrology"]
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "Advanced gastrointestinal and liver care with high-definition endoscopy, colonoscopy, and ERCP diagnostic procedures.",
    icon: "ShieldAlertIcon",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    longDescription: "We diagnose and treat disorders of the esophagus, stomach, intestines, liver, gallbladder, and pancreas. Our advanced endoscopy suite allows for minimally invasive diagnostics and therapeutic interventions.",
    features: ["High-Definition Endoscopy & Colonoscopy", "Liver Disease Clinic", "ERCP Procedures", "Therapeutic Gastrointestinal Care"]
  },
  {
    id: "urology",
    name: "Urology",
    description: "Modern diagnosis and treatment for urinary tract diseases, kidney stones, and prostate health management.",
    icon: "ShieldIcon",
    imageUrl: "https://images.unsplash.com/photo-1631815541577-dee50570b7fa?auto=format&fit=crop&q=80&w=800",
    longDescription: "Our urologists treat conditions affecting the male and female urinary tract, as well as the male reproductive system. We offer laser lithotripsy for kidney stones and minimally invasive keyhole surgeries.",
    features: ["Laser Stone Management (Lithotripsy)", "Prostate Health Center", "Uro-oncology & Reconstructions", "Pediatric Urology"]
  },
  {
    id: "generalmedicine",
    name: "General Medicine",
    description: "Comprehensive primary healthcare, chronic disease management, vaccinations, and overall wellness consultations.",
    icon: "BriefcaseIcon",
    imageUrl: "https://images.unsplash.com/photo-1666214280556-f1f94209b67f?auto=format&fit=crop&q=80&w=800",
    longDescription: "Our internal medicine doctors provide outpatient consultations, inpatient treatments, and critical care management. We focus on diagnosing complex multi-system disorders, management of lifestyle diseases like diabetes, and preventive medicine.",
    features: ["Lifestyle & Diabetes Management", "Adult Immunization Center", "Executive Health Screenings", "Geriatric Care Services"]
  }
];

export const DOCTORS = [
  {
    id: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma",
    qualification: "MD, DM (Cardiology), FACC",
    experience: 22,
    department: "Cardiology",
    departmentId: "cardiology",
    availability: "Mon, Wed, Fri (09:00 AM - 01:00 PM)",
    bio: "Dr. Rajesh Sharma is a pioneer in interventional cardiology with over 5,000 successful angioplasties and pacemaker implantations to his credit.",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-ananya-iyer",
    name: "Dr. Ananya Iyer",
    qualification: "MD, DM (Neurology), PhD",
    experience: 16,
    department: "Neurology",
    departmentId: "neurology",
    availability: "Tue, Thu, Sat (10:00 AM - 03:00 PM)",
    bio: "Dr. Ananya Iyer is an esteemed neurologist specializing in stroke recovery, brain tumors, and chronic migraine therapies.",
    imageUrl: drAnanyaIyerImg
  },
  {
    id: "dr-amit-patel",
    name: "Dr. Amit Patel",
    qualification: "MS, MCh (Orthopedics), Joint Fellow (UK)",
    experience: 18,
    department: "Orthopedics",
    departmentId: "orthopedics",
    availability: "Mon to Fri (02:00 PM - 06:00 PM)",
    bio: "Dr. Amit Patel is internationally trained in robotic knee replacement, complex trauma reconstruction, and arthroscopic sports surgeries.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-priya-mukherjee",
    name: "Dr. Priya Mukherjee",
    qualification: "MD, DNB (Medical Oncology)",
    experience: 15,
    department: "Oncology",
    departmentId: "oncology",
    availability: "Mon, Tue, Thu (11:00 AM - 04:00 PM)",
    bio: "Dr. Priya Mukherjee is dedicated to breast and lung cancer treatments, championing targeted chemotherapy and customized immunotherapies.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    qualification: "MD (Pediatrics), Fellowship in Neonatology",
    experience: 14,
    department: "Pediatrics",
    departmentId: "pediatrics",
    availability: "Mon to Sat (09:00 AM - 12:00 PM)",
    bio: "Dr. Vikram Singh specializes in critical care neonatology, managing high-risk premature births and comprehensive child immunization programs.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-meera-reddy",
    name: "Dr. Meera Reddy",
    qualification: "MD, DNB (Gynecology & Obstetrics)",
    experience: 17,
    department: "Gynecology & Obstetrics",
    departmentId: "gynecology",
    availability: "Wed, Thu, Sat (01:00 PM - 05:00 PM)",
    bio: "Dr. Meera Reddy is highly experienced in painless natural deliveries, high-risk maternity care, and advanced laparoscopic surgeries.",
    imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-siddharth-joshi",
    name: "Dr. Siddharth Joshi",
    qualification: "MS, DNB (ENT), Fellowship in Cochlear Implant",
    experience: 12,
    department: "ENT",
    departmentId: "ent",
    availability: "Tue, Thu, Fri (03:00 PM - 07:00 PM)",
    bio: "Dr. Siddharth Joshi is an expert in cochlear transplants, micro-ear surgery, and functional endoscopic sinus surgery (FESS).",
    imageUrl: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dr-shalini-verma",
    name: "Dr. Shalini Verma",
    qualification: "MD (General Medicine)",
    experience: 20,
    department: "General Medicine",
    departmentId: "generalmedicine",
    availability: "Mon to Fri (08:00 AM - 11:00 AM)",
    bio: "Dr. Shalini Verma is focused on holistic management of chronic lifestyle diseases like diabetes, hypertension, and thyroid dysfunctions.",
    imageUrl: "https://images.unsplash.com/photo-1651008011912-b66416bfad7f?auto=format&fit=crop&q=80&w=500"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    patientName: "Rohan Mehra",
    patientImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    review: "The cardiology team at Global Care saved my father's life during an emergency. The response was immediate, and the doctors explained everything in detail. Highly grateful!",
    rating: 5,
    department: "Cardiology"
  },
  {
    id: 2,
    patientName: "Sneha Sen",
    patientImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    review: "I had my knee replacement surgery under Dr. Amit Patel. The advanced robotics used and the post-surgery physical rehab was amazing. I am back to walking without pain!",
    rating: 5,
    department: "Orthopedics"
  },
  {
    id: 3,
    patientName: "Arjun Nair",
    patientImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    review: "Very professional staff and top-notch infrastructure. Booking appointments online is seamless, and waiting times are minimal compared to other hospitals.",
    rating: 4,
    department: "General Care"
  },
  {
    id: 4,
    patientName: "Deepa Rao",
    patientImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    review: "We chose Global Care maternity services for our first child. The labor suites were luxurious and the nurses was exceptionally caring. Excellent experience!",
    rating: 5,
    department: "Gynecology"
  }
];

export const BLOGS = [
  {
    id: "heart-health-tips",
    title: "10 Essential Tips to Maintain a Healthy Heart",
    summary: "Discover simple lifestyle shifts, diet adjustments, and regular habits that can drastically reduce the risk of heart disease.",
    content: "Heart health is critical to long-term vitality. Cardiologists suggest regular exercise, avoiding processed fats, getting adequate sleep, and managing stress levels. In this comprehensive article, we look into detail on how small daily changes accumulate to secure a healthier heart for decades to come...",
    category: "Cardiology",
    author: "Dr. Rajesh Sharma",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    createdAt: "June 2, 2026"
  },
  {
    id: "stroke-prevention",
    title: "Understanding Strokes: Warning Signs & Prevention",
    summary: "Time is brain. Learn to identify the FAST symptoms of stroke and what preventive steps you can take today.",
    content: "A stroke occurs when blood supply to part of your brain is interrupted, depriving brain tissue of oxygen. Within minutes, brain cells begin to die. That is why recognizing FAST symptoms (Face drooping, Arm weakness, Speech difficulty, Time to call) is absolutely vital to save lives and prevent permanent brain damage...",
    category: "Neurology",
    author: "Dr. Ananya Iyer",
    imageUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800",
    createdAt: "May 25, 2026"
  },
  {
    id: "nutrition-during-pregnancy",
    title: "Maternal Nutrition: Eating Right During Pregnancy",
    summary: "A breakdown of crucial vitamins, mineral intake, and hydration requirements for expected mothers during each trimester.",
    content: "When you are pregnant, nutrition becomes doubly important. Incorporating foods rich in folic acid, iron, calcium, and protein safeguards the mother's health and supports the developmental stages of the baby. Here is a guided dietary chart prepared by our nutritionists and gynecologists...",
    category: "Gynecology",
    author: "Dr. Meera Reddy",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
    createdAt: "May 18, 2026"
  }
];

export const FAQS = [
  {
    question: "How do I book an appointment online?",
    answer: "You can easily book an appointment by visiting our 'Book Appointment' page, selecting your preferred department, doctor, and choosing an available date and time. You will receive an immediate confirmation popup and SMS update."
  },
  {
    question: "Do you accept international insurance panels?",
    answer: "Yes, Global Care is empaneled with major global insurance networks, corporate healthcare brokers, and domestic TPA agencies. Please contact our insurance desk during admission for specific details."
  },
  {
    question: "What are the visiting hours for ICU patients?",
    answer: "To ensure patient rest and recovery, visiting hours for the ICU are strictly regulated: Morning: 11:00 AM - 12:00 PM, and Evening: 05:00 PM - 06:00 PM. Only one relative is allowed at a time."
  },
  {
    question: "Is emergency ambulance service available 24/7?",
    answer: "Yes, our Advanced Life Support (ALS) and Basic Life Support (BLS) ambulances operate round-the-clock. Call our emergency hotline at +91 9876543210 for immediate dispatch."
  },
  {
    question: "Does the hospital offer telemedicine services?",
    answer: "Yes, we provide online video consultations for several specialities. You can select 'Telemedicine' as the service option while booking your slot or through the patient login portal."
  }
];

export const CAREERS = [
  {
    id: "senior-resident-cardiology",
    title: "Senior Resident - Cardiology",
    department: "Cardiology",
    experience: "3+ Years post DM/DNB",
    location: "Pune, India",
    description: "Looking for an energetic cardiologist to handle critical ICCU admissions, interventional cardiac support, and outpatient consultations.",
    requirements: ["DM/DNB in Cardiology", "Registration with Medical Council of India", "Strong communication and clinical diagnosis skills"]
  },
  {
    id: "staff-nurse-icu",
    title: "Staff Nurse - ICU & Critical Care",
    department: "Nursing Services",
    experience: "2-5 Years in ICU setup",
    location: "Pune, India",
    description: "Requires compassionate critical care nurses specialized in managing ventilators, monitor interpretations, and critical drug administrations.",
    requirements: ["B.Sc. Nursing / GNM", "Advanced Cardiac Life Support (ACLS) certification is preferred", "Willingness to work in shifts"]
  },
  {
    id: "medical-laboratory-technician",
    title: "Senior Laboratory Technician",
    department: "Pathology & Diagnostics",
    experience: "4+ Years in clinical pathology",
    location: "Pune, India",
    description: "Seeking laboratory professional skilled in handling fully automated biochemistry analyzers, hematology assays, and quality control systems.",
    requirements: ["B.Sc. / M.Sc. in Medical Laboratory Technology (MLT)", "Detail-oriented with strict adherence to ISO standards"]
  }
];

export const GALLERY = [
  {
    id: 1,
    title: "Advanced CT Scan Facility",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Modern Premium Maternity Suite",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Cardiovascular Cath Lab Unit",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Department of Neurology Consultation",
    category: "Doctors",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "High-Efficiency Cleanroom Operating Theater",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Pediatric Consultation Chamber",
    category: "Doctors",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
  }
];

export const INSURANCE_PARTNERS = [
  { name: "Insurance Partner", logoUrl: newPartnerLogoImg },
  { name: "ICICI Lombard", logoUrl: newPartnerLogoImg },
  { name: "Star Health Insurance", logoUrl: newPartnerLogoImg },
  { name: "HDFC ERGO", logoUrl: newPartnerLogoImg },
  { name: "Bajaj Allianz", logoUrl: newPartnerLogoImg },
  { name: "Max Bupa", logoUrl: newPartnerLogoImg },
  { name: "Reliance General", logoUrl: newPartnerLogoImg }
];
