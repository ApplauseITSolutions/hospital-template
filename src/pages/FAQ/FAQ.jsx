import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import FAQAccordion from '../../components/ui/FAQAccordion';
import Breadcrumb from '../../components/common/Breadcrumb';
import { FAQS } from '../../data/dummyData';

const FAQ = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'FAQ', path: '/faq' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Frequently Asked Questions</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Find details on consultation schedules, medical records access, and cashless billing.</p>
        </div>
      </div>

      {/* Accordion List */}
      <section className="py-6 px-6 max-w-5xl mx-auto">
        <SectionTitle
          subtitle="Support Hub"
          title="Common Clinical Inquiries"
          description="If you have specific queries regarding inpatient checkouts, corporate empanelment, or surgery approvals, browse the items below."
        />

        <FAQAccordion faqs={FAQS} />
      </section>
    </div>
  );
};

export default FAQ;
