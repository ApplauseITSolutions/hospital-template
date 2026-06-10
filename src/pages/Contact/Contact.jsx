import React, { useState } from 'react';
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoTimeOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Contact Us', path: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Contact Our Desk</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Reach out to our clinical admin teams, emergency dispatch desks, or submit a query.</p>
        </div>
      </div>

      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Info Column */}
        <div className="space-y-8">
          <div>
            <SectionTitle
              subtitle="Get In Touch"
              title="Global Care Multi-Speciality Hospital"
              align="left"
            />
            <p className="text-slate-600 leading-relaxed -mt-6">
              Our support lines are active 24/7 for trauma cases. For billing and general OPD consultations schedules, visit during working hours.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="flex items-start gap-4 p-5">
              <IoLocationOutline className="text-primary-600 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Hospital Address</h4>
                <p className="text-sm text-slate-500 mt-1">123 Healthcare Avenue, Medical District, Pune, Maharashtra, India</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-5">
              <IoCallOutline className="text-teal-600 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Helpline Numbers</h4>
                <p className="text-sm text-slate-500 mt-1">Emergency Dispatch: +91 98765 43210</p>
                <p className="text-sm text-slate-500">General OPD Desk: +91 98765 43215</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-5">
              <IoMailOutline className="text-primary-600 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Email Desk</h4>
                <p className="text-sm text-slate-500 mt-1">info@globalcarehospital.com</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-5">
              <IoTimeOutline className="text-teal-600 text-3xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Working Hours</h4>
                <p className="text-sm text-slate-500 mt-1">Emergency Unit: 24 Hours / 365 Days</p>
                <p className="text-sm text-slate-500">OPD & Administration: Mon - Sat (08:00 AM - 08:00 PM)</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-premium">
          <h3 className="font-extrabold text-slate-800 text-xl mb-6 border-b border-slate-50 pb-3">Submit General Inquiry</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 space-y-4 min-h-[350px]">
              <IoCheckmarkCircleOutline className="text-6xl text-teal-500 animate-bounce" />
              <h4 className="text-xl font-bold text-slate-800">Inquiry Logged</h4>
              <p className="text-slate-500 text-sm">
                Thank you. We have saved your feedback query. A representative will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                label="Full Name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  label="Phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <Input
                label="Subject"
                placeholder="e.g. Health records inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <Input
                label="Message Details"
                placeholder="Write your query here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                textarea
                rows={3}
                required
              />
              <Button type="submit" variant="primary" className="w-full justify-center shadow-md mt-2">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="w-full h-96 relative border-t border-slate-200 bg-slate-100">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.8400%2C18.5100%2C73.8600%2C18.5300&layer=mapnik&marker=18.5204%2C73.8567"
          title="Global Care Hospital Location Map"
          className="w-full h-full border-none filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      </section>
    </div>
  );
};

export default Contact;
