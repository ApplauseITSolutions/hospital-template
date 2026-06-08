import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { IoCheckmarkCircleOutline, IoCalendarOutline } from 'react-icons/io5';
import { DEPARTMENTS, DOCTORS } from '../../data/dummyData';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: '',
    department: '',
    doctor: '',
    preferredDate: '',
    preferredTime: '',
    symptoms: ''
  });

  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Dynamically update doctors when department changes
  useEffect(() => {
    if (formData.department) {
      const filtered = DOCTORS.filter(
        (doc) => doc.departmentId === formData.department || doc.department === formData.department
      );
      setAvailableDoctors(filtered.map((d) => ({ value: d.name, label: d.name })));
      setFormData((prev) => ({ ...prev, doctor: '' })); // reset doctor
    } else {
      setAvailableDoctors([]);
    }
  }, [formData.department]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Provide a valid age';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.mobileNumber.match(/^\+?[0-9]{10,12}$/)) newErrors.mobileNumber = 'Provide a valid 10-12 digit mobile number';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Provide a valid email address';
    if (!formData.department) newErrors.department = 'Please select a clinical department';
    if (!formData.doctor) newErrors.doctor = 'Please select a consultant';
    if (!formData.preferredDate) newErrors.preferredDate = 'Select your preferred appointment date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Select preferred consulting hour';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      mobileNumber: '',
      email: '',
      address: '',
      department: '',
      doctor: '',
      preferredDate: '',
      preferredTime: '',
      symptoms: ''
    });
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Book Appointment', path: '/appointment' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Book An Appointment</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Register your consultation slot. Get quick confirmation updates from our desk.</p>
        </div>
      </div>

      {/* Form Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <SectionTitle
          subtitle="Direct Registration"
          title="Patient Consult Consultation Desk"
          description="Fill out the registration details below. All fields with asterisk are mandatory."
        />

        <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-premium space-y-6">
          
          <h3 className="font-bold text-slate-800 text-lg border-b border-slate-50 pb-3 mb-6">1. Patient Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Age"
                name="age"
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                error={errors.age}
                required
              />
              <Input
                label="Gender"
                name="gender"
                type="select"
                placeholder="Select Gender"
                value={formData.gender}
                onChange={handleInputChange}
                options={['Male', 'Female', 'Other']}
                error={errors.gender}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Mobile Number"
              name="mobileNumber"
              placeholder="10-digit number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              error={errors.mobileNumber}
              required
            />
            <Input
              label="Email Address"
              name="email"
              placeholder="name@domain.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />
          </div>

          <Input
            label="Address"
            name="address"
            placeholder="Full Residential Address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <h3 className="font-bold text-slate-800 text-lg border-b border-slate-50 pb-3 pt-6 mb-6">2. Clinical Consultation Slot</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Speciality Department"
              name="department"
              type="select"
              placeholder="Choose Speciality"
              value={formData.department}
              onChange={handleInputChange}
              options={DEPARTMENTS.map((d) => ({ value: d.id, label: d.name }))}
              error={errors.department}
              required
            />
            <Input
              label="Preferred Doctor"
              name="doctor"
              type="select"
              placeholder="Select Consultant"
              value={formData.doctor}
              onChange={handleInputChange}
              options={availableDoctors}
              error={errors.doctor}
              disabled={!formData.department}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Preferred Date"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleInputChange}
              error={errors.preferredDate}
              required
            />
            <Input
              label="Preferred Time"
              name="preferredTime"
              type="select"
              placeholder="Select Slot"
              value={formData.preferredTime}
              onChange={handleInputChange}
              options={['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 04:00 PM', '04:00 PM - 06:00 PM']}
              error={errors.preferredTime}
              required
            />
          </div>

          <Input
            label="Symptoms / Brief Medical Reason"
            name="symptoms"
            placeholder="Describe any symptoms or clinical issues briefly..."
            value={formData.symptoms}
            onChange={handleInputChange}
            textarea
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-lg"
          >
            Submit Booking Request
          </Button>
        </form>
      </section>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        title="Booking Successful"
      >
        <div className="flex flex-col items-center text-center p-6 space-y-4">
          <IoCheckmarkCircleOutline className="text-7xl text-teal-500 animate-bounce" />
          <h4 className="text-2xl font-bold text-slate-800">Consultation Slot Reserved</h4>
          <p className="text-slate-600 max-w-md">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We have logged your request for <strong className="text-slate-900">{formData.doctor}</strong> on <strong className="text-slate-900">{formData.preferredDate}</strong> ({formData.preferredTime}).
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl w-full text-left text-sm space-y-2 border border-slate-100">
            <p><span className="font-semibold text-slate-500">Queue ID:</span> GCH-{Math.floor(Math.random() * 90000) + 10000}</p>
            <p><span className="font-semibold text-slate-500">Status:</span> Pending SMS Validation</p>
            <p><span className="font-semibold text-slate-500">Contact Helpline:</span> +91 98765 43210</p>
          </div>
          <Button variant="primary" onClick={handleCloseSuccess}>
            Okay, Close Window
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Appointment;
