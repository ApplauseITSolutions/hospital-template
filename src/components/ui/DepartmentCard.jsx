import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { IoArrowForwardOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

const DepartmentCard = ({ dept }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden !p-0 border border-slate-100 rounded-3xl bg-white shadow-premium transition-all duration-300 hover:shadow-premium-hover">
        <div className="relative h-48 overflow-hidden group">
          <img
            src={dept.imageUrl}
            alt={dept.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{dept.name}</h3>
          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed flex-grow mb-6">
            {dept.description}
          </p>

          <Button
            variant="text"
            onClick={() => setShowModal(true)}
            icon={<IoArrowForwardOutline />}
            iconPosition="right"
            className="text-primary-600 font-semibold hover:text-primary-700 w-fit self-start"
          >
            Read More
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${dept.name} Department Details`}
      >
        <div className="space-y-6">
          <img
            src={dept.imageUrl}
            alt={dept.name}
            className="w-full h-64 object-cover rounded-2xl"
          />

          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Overview</h4>
            <p className="text-slate-600 leading-relaxed">{dept.longDescription}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Key Features & Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dept.features && dept.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <IoCheckmarkCircleOutline className="text-teal-500 text-xl flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DepartmentCard;
