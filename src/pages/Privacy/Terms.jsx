import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionTitle from '../../components/ui/SectionTitle';

const Terms = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Terms & Conditions', path: '/terms-conditions' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Terms & Conditions</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Review standard consulting desk terms of use.</p>
        </div>
      </div>

      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed">
        <SectionTitle subtitle="Legal Desk" title="Hospital Terms of Use" align="left" />
        
        <h3 className="text-xl font-bold text-slate-800 pt-4">1. Consulting Slots Booking</h3>
        <p>
          Consultation times booked online represent preliminary reservations. Actual doctor availability is subject to emergency clinical schedules.
        </p>

        <h3 className="text-xl font-bold text-slate-800 pt-4">2. Emergency Care Priority</h3>
        <p>
          Critical trauma admissions take precedence over regular outpatient queues. Patients acknowledge that queue delays may happen in such medical scenarios.
        </p>

        <h3 className="text-xl font-bold text-slate-800 pt-4">3. Code of Conduct</h3>
        <p>
          Patients and visitors must comply with standard hospital hygiene codes, smoke-free environments, and relative visiting hours rules.
        </p>
      </section>
    </div>
  );
};

export default Terms;
