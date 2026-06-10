import React from 'react';
import { IoFlameOutline, IoConstructOutline, IoPulseOutline, IoSkullOutline, IoMedkitOutline, IoScanOutline, IoFlaskOutline, IoLaptopOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/common/Card';
import Breadcrumb from '../../components/common/Breadcrumb';
import Button from '../../components/common/Button';

const SERVICES = [
  {
    title: "Emergency Care",
    desc: "24/7 cardiac and trauma stabilization teams with advanced life support dispatch capabilities.",
    icon: <IoFlameOutline />,
    color: "rose"
  },
  {
    title: "ICU / CCU Unit",
    desc: "Level III critical care beds with constant hemodynamics monitoring and multi-parameter ventilators.",
    icon: <IoPulseOutline />,
    color: "primary"
  },
  {
    title: "Advanced Surgery",
    desc: "Cleanroom operating theaters optimized for robotic arthroplasty, bypasses, and neurosurgery.",
    icon: <IoConstructOutline />,
    color: "teal"
  },
  {
    title: "Diagnostics & Imaging",
    desc: "High-definition CT, MRI scans, cardiovascular angiography cath labs, and digital ultrasound systems.",
    icon: <IoScanOutline />,
    color: "primary"
  },
  {
    title: "24/7 Pharmacy",
    desc: "In-campus drug dispensaries supplying specialized critical care drugs and routine medical formulas.",
    icon: <IoMedkitOutline />,
    color: "teal"
  },
  {
    title: "JCI Clinical Laboratory",
    desc: "Advanced assay testing covering pathology, biochemistry screens, immunology, and culture tests.",
    icon: <IoFlaskOutline />,
    color: "rose"
  },
  {
    title: "Telemedicine Consulting",
    desc: "Consult our senior doctors remotely via secure HD video calls and receive digital prescriptions.",
    icon: <IoLaptopOutline />,
    color: "primary"
  }
];

const PACKAGES = [
  {
    name: "Executive Heart Screening",
    price: "$199",
    features: ["ECG & Echocardiogram", "TMT (Treadmill Test)", "Lipid Profile Assay", "Senior Cardiologist Consultation"]
  },
  {
    name: "Premium Women Health Check",
    price: "$149",
    features: ["Mammography Scan", "Gynecology Consultation", "Thyroid Profile Screens", "Complete Hemogram Screen"]
  },
  {
    name: "Comprehensive Senior Citizen Health Check",
    price: "$249",
    features: ["Renal & Liver Function Test", "Dual Energy X-Ray", "Ophthalmology Consultation", "Geriatric Physician Consult"]
  }
];

const Services = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Services', path: '/services' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Clinical Services</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Comprehensive clinical solutions, diagnostic checks, and wellness packages.</p>
        </div>
      </div>

      {/* Core Services grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Hospital Capabilities"
          title="Advanced Clinical Systems"
          description="Global Care Hospital provides customized patient care models and immediate diagnostic validations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((serv, idx) => (
            <Card key={idx} className="flex flex-col p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-3xl mb-6 shadow-sm">
                {serv.icon}
              </div>
              <h3 className="font-semibold text-slate-800 text-base mb-3">{serv.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-grow">{serv.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Health Checkup Packages */}
      <section className="bg-slate-100/60 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Preventive Medicine"
            title="Executive Health Checkup Packages"
            description="Secure early diagnosis of lifestyle issues. Highly recommended for annual parameters tracking."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <Card key={idx} className="p-8 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">{pkg.name}</h3>
                    <span className="block text-4xl font-extrabold text-primary-600 mt-3">{pkg.price}</span>
                  </div>

                  <div className="w-full h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                        <IoCheckmarkCircleOutline className="text-teal-500 text-lg flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="/appointment" className="block">
                    <Button variant="primary" className="w-full justify-center !rounded-xl">
                      Book Package Slot
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
