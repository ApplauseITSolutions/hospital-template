import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { IoTimeOutline, IoCalendarOutline, IoMedkitOutline, IoRibbonOutline } from 'react-icons/io5';

const DoctorCard = ({ doctor }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden !p-0">
        <div className="relative h-64 overflow-hidden group">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {doctor.experience}+ Years Exp
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1 flex items-center gap-1">
            <IoMedkitOutline /> {doctor.department}
          </span>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{doctor.name}</h3>
          <p className="text-sm text-slate-500 font-medium mb-4">{doctor.qualification}</p>

          <div className="space-y-2.5 mb-6 text-sm text-slate-600 flex-grow">
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-primary-500 text-base" />
              <span>Available slots in profile</span>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeOutline className="text-primary-500 text-base" />
              <span className="truncate">{doctor.availability}</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowModal(true)}
            className="w-full justify-center !rounded-xl"
          >
            View Profile
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${doctor.name} - Profile Details`}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div>
              <h4 className="text-2xl font-bold text-slate-900">{doctor.name}</h4>
              <p className="text-primary-600 font-semibold">{doctor.qualification}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
              <div>
                <span className="block text-xs text-slate-400 font-medium uppercase">Speciality</span>
                <span className="font-bold text-slate-800">{doctor.department}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-medium uppercase">Experience</span>
                <span className="font-bold text-slate-800">{doctor.experience} Years</span>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-800 mb-1">Professional Bio</h5>
              <p className="text-slate-600 leading-relaxed text-sm">{doctor.bio}</p>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <IoCalendarOutline className="text-primary-500 text-lg" />
                <span className="font-semibold text-slate-700">Outpatient Timings:</span> {doctor.availability}
              </p>
              <p className="flex items-center gap-2">
                <IoRibbonOutline className="text-primary-500 text-lg" />
                <span className="font-semibold text-slate-700">Hospital Registry:</span> Active Staff Member
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DoctorCard;
