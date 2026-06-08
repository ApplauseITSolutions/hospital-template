import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Card from '../../components/common/Card';
import { IoStar } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';
import { TESTIMONIALS } from '../../data/dummyData';

const Testimonial = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Testimonials', path: '/testimonials' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Patient Testimonials</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Read about the positive healthcare experiences shared directly by our recovered patients.</p>
        </div>
      </div>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Success Stories"
          title="Stories of Healing & Recovery"
          description="We take pride in delivering highly sterile diagnostic protocols and patient care treatments to facilitate quick recoveries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test) => (
            <Card key={test.id} className="relative overflow-hidden flex flex-col justify-between p-8 border border-slate-100 rounded-3xl bg-white shadow-premium">
              <FaQuoteLeft className="absolute right-6 top-6 text-slate-100/30 text-7xl -z-10" />
              
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, idx) => (
                    <IoStar key={idx} />
                  ))}
                </div>

                <p className="text-slate-600 italic leading-relaxed text-base">
                  "{test.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 border-t border-slate-50 pt-4">
                <img
                  src={test.patientImage}
                  alt={test.patientName}
                  className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{test.patientName}</h4>
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                    {test.department} Patient
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
