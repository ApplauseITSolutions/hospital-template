import React, { useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import { IoCheckmarkCircleOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { CAREERS } from '../../data/dummyData';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    cvUrl: ''
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setApplySuccess(true);
      setTimeout(() => {
        setApplySuccess(false);
        setSelectedJob(null);
        setFormData({ name: '', email: '', phone: '', experience: '', cvUrl: '' });
      }, 3000);
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Careers', path: '/careers' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Join Our Medical Team</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Build a rewarding career in healthcare. Explore current employment openings at Global Care.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Work With Us"
          title="Clinical & Administrative Openings"
          description="We seek empathetic, qualified clinicians and operational specialists committed to clinical excellence."
        />

        <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
          {CAREERS.map((job) => (
            <Card key={job.id} className="p-8 bg-white border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <IoBriefcaseOutline className="text-teal-600 text-lg" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">{job.department}</span>
                </div>
                <h3 className="font-extrabold text-slate-800 text-xl">{job.title}</h3>
                <p className="text-xs text-slate-400 font-semibold">Location: {job.location} | Experience Req: {job.experience}</p>
                <p className="text-sm text-slate-500 max-w-xl leading-relaxed">{job.description}</p>
              </div>
              <Button
                variant="primary"
                onClick={() => setSelectedJob(job)}
                className="!rounded-xl flex-shrink-0"
              >
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <Modal
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          title={`Apply for ${selectedJob.title}`}
        >
          {applySuccess ? (
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <IoCheckmarkCircleOutline className="text-6xl text-teal-500 animate-bounce" />
              <h4 className="text-xl font-bold text-slate-800 font-sans">Application Received</h4>
              <p className="text-slate-500 text-sm">
                Our HR department has logged your contact parameters. We will check your details and schedule an interview.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  label="Contact Phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <Input
                label="Total Experience (Years)"
                type="number"
                placeholder="e.g. 5"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
              <Input
                label="Resume CV Link (or Google Drive URL)"
                placeholder="https://drive.google.com/..."
                value={formData.cvUrl}
                onChange={(e) => setFormData({ ...formData, cvUrl: e.target.value })}
                required
              />

              <div className="flex justify-center">
                <Button type="submit" variant="primary" className="shadow-md pt-3 pb-3">
                  Submit Profile
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Careers;
