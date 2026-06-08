import React, { useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import DoctorCard from '../../components/ui/DoctorCard';
import Breadcrumb from '../../components/common/Breadcrumb';
import Input from '../../components/common/Input';
import { DOCTORS } from '../../data/dummyData';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  // Extract unique departments for filter dropdown
  const departmentsList = [
    { value: '', label: 'All Specialties' },
    ...Array.from(new Set(DOCTORS.map((d) => d.department))).map((dept) => ({
      value: dept,
      label: dept
    }))
  ];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === '' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Doctors', path: '/doctors' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Consult Our Specialists</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Find highly skilled doctors across various disciplines and request appointment slots.</p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Search by Doctor Name or Qualification..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Input
            type="select"
            placeholder="Filter by Speciality"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            options={departmentsList}
          />
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Clinical Directory"
          title="Our Eminent Staff Members"
          description="Access highly certified medical practitioners trained in advanced clinical interventions."
        />

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg font-semibold">No specialists found matching your filter criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Doctors;
