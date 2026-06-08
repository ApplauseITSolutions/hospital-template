import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/ui/SectionTitle';

const Privacy = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Privacy Policy</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Learn how we protect and manage patient health records.</p>
        </div>
      </div>

      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed">
        <SectionTitle subtitle="Compliance Desk" title="Patient Data Security Guidelines" align="left" />
        
        <h3 className="text-xl font-bold text-slate-800 pt-4">1. Collection of Health Records</h3>
        <p>
          Global Care Multi-Speciality Hospital collects medical files, demographic indices, and contact details to facilitate clinical diagnoses and schedule consult queues.
        </p>

        <h3 className="text-xl font-bold text-slate-800 pt-4">2. Sharing & Disclosure</h3>
        <p>
          We do not disclose patient information to external marketers. Health files may only be shared with cashless insurance providers upon explicit patient consent during discharge processes.
        </p>

        <h3 className="text-xl font-bold text-slate-800 pt-4">3. Data Integrity</h3>
        <p>
          All electronic health records (EHR) are backed up under advanced encryption guidelines to prevent security leaks or unauthorized access.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
