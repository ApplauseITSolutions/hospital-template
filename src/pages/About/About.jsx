import React from 'react';
import { motion } from 'framer-motion';
import { IoEyeOutline, IoCompassOutline, IoHeartOutline, IoRibbonOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/common/Card';
import Breadcrumb from '../../components/common/Breadcrumb';

const LEADERSHIP = [
  {
    name: "Dr. Sandeep Deshmukh",
    role: "Chairman & Medical Director",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    bio: "Under Dr. Deshmukh's stewardship, Global Care Hospital expanded from a local clinic into a JCI-accredited tertiary care referral center."
  },
  {
    name: "Mrs. Radhika Goel",
    role: "Chief Executive Officer (CEO)",
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400",
    bio: "With over 18 years in healthcare administration, Radhika specializes in workflow optimization and patient satisfaction protocols."
  }
];

const TIMELINE = [
  { year: "2005", title: "Inception", desc: "Started as a 50-bed multi-speciality nursing home in Pune." },
  { year: "2012", title: "Capacity Expansion", desc: "Expanded to 200 beds, introducing a JCI accredited cardiovascular lab." },
  { year: "2018", title: "Robotic Surgery", desc: "Pioneered robotic keyhole joint replacements and spinal surgical units." },
  { year: "2024", title: "Enterprise Oncology", desc: "Launched a state-of-the-art oncology center with linear accelerator therapy." }
];

const About = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'About Us', path: '/about' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">About Our Hospital</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Pioneering medical interventions and caring for families for over 20 years.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <SectionTitle
            subtitle="Our History"
            title="The Story Behind Global Care"
            align="left"
          />
          <p className="text-slate-600 leading-relaxed">
            Founded in 2005, Global Care Multi-Speciality Hospital was built upon a simple promise: to offer world-class medical treatments accessible to everyone. What began as a 50-bed primary care clinic has grown into a comprehensive healthcare provider housing over 450 beds.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our campus spans over 3 acres, featuring high-efficiency diagnostic units, standard operating fields, fully integrated pharmacy depots, and JCI certified laboratories.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
            alt="Hospital campus"
            className="w-full h-80 object-cover rounded-3xl shadow-lg border border-slate-100"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-100/60 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-3xl mb-6 shadow-sm">
              <IoEyeOutline />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              To be the most trusted healthcare institution, recognized globally for clinical outcomes, medical ethics, and compassionate patient care.
            </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-3xl mb-6 shadow-sm">
              <IoCompassOutline />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              To deliver clinical excellence using evidence-based medical treatments in a safe environment, supported by continuous learning and research.
            </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-3xl mb-6 shadow-sm">
              <IoHeartOutline />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Core Values</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Integrity, Empathy, Quality Excellence, and Team Collaboration are the guiding values that define our medical ethics.
            </p>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Journey"
          title="Milestones of Growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative border-l-2 border-primary-100 pl-6 space-y-2">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary-600 border-2 border-white" />
              <span className="text-3xl font-extrabold text-primary-600 block">{item.year}</span>
              <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Hospital Administration"
            title="Our Leadership Team"
            description="Meet the key medical administrators steering our clinical guidelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {LEADERSHIP.map((leader, idx) => (
              <Card key={idx} className="flex flex-col md:flex-row gap-6 p-6 items-center text-center md:text-left">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-32 h-32 rounded-2xl object-cover border border-slate-100 shadow-sm"
                />
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{leader.name}</h4>
                  <span className="text-teal-600 text-xs font-bold uppercase tracking-wider block">{leader.role}</span>
                  <p className="text-xs text-slate-500 leading-relaxed">{leader.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Accreditation"
          title="Awards & Certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 space-y-3">
            <IoRibbonOutline className="text-5xl text-primary-600 mx-auto" />
            <h4 className="font-bold text-slate-800 text-lg">JCI Accredited</h4>
            <p className="text-sm text-slate-500">Recognized for international standards of patient safety and clinical care cycles.</p>
          </div>
          <div className="p-6 space-y-3">
            <IoShieldCheckmarkOutline className="text-5xl text-teal-600 mx-auto" />
            <h4 className="font-bold text-slate-800 text-lg">NABH Certified</h4>
            <p className="text-sm text-slate-500">Achieved National Accreditation Board certification for hospital hygiene.</p>
          </div>
          <div className="p-6 space-y-3">
            <IoRibbonOutline className="text-5xl text-primary-600 mx-auto" />
            <h4 className="font-bold text-slate-800 text-lg">Green Hospital Award</h4>
            <p className="text-sm text-slate-500">Awarded for high recycling safety standards and energy conservation protocols.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
