import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import DepartmentCard from '../../components/ui/DepartmentCard';
import Breadcrumb from '../../components/common/Breadcrumb';
import { DEPARTMENTS } from '../../data/dummyData';

const Departments = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Departments', path: '/departments' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Clinical Specialties</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Explore our range of comprehensive diagnostic and surgical departments.</p>
        </div>
      </div>

      {/* Grid listing */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Accredited Specialities"
          title="Multi-Speciality Care Divisions"
          description="Global Care Hospital houses state-of-the-art departments staffed by world-class surgeons and specialists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DEPARTMENTS.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Departments;
