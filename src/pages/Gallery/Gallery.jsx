import React, { useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';
import { IoChevronBack, IoChevronForward, IoContractOutline } from 'react-icons/io5';
import { GALLERY } from '../../data/dummyData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Infrastructure', 'Equipment', 'Doctors'];

  const filteredItems = GALLERY.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleOpenLightbox = (imgUrl) => {
    const idx = GALLERY.findIndex((item) => item.imageUrl === imgUrl);
    setLightboxIndex(idx);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? GALLERY.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Gallery', path: '/gallery' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Hospital Gallery</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Take a virtual tour of our premium infrastructure, advanced equipment, and clinical wings.</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-100 px-6 flex justify-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Virtual Tour"
          title="Inside Our Medical Center"
          description="Explore high-definition photographs of clinical infrastructure, modular operating cleanrooms, and patient rooms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item.imageUrl)}
              className="relative overflow-hidden rounded-3xl group cursor-pointer border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 h-64 bg-slate-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">{item.category}</span>
                <h4 className="font-bold text-lg leading-tight mt-1">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md px-6">
          {/* Close Backdrop */}
          <div className="absolute inset-0" onClick={handleCloseLightbox} />

          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-slate-300 p-2 focus:outline-none"
          >
            <IoContractOutline />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-3xl hover:text-slate-300 p-3 bg-white/10 hover:bg-white/20 rounded-full focus:outline-none z-10"
          >
            <IoChevronBack />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-3xl hover:text-slate-300 p-3 bg-white/10 hover:bg-white/20 rounded-full focus:outline-none z-10"
          >
            <IoChevronForward />
          </button>

          {/* Lightbox Image Content */}
          <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center z-10 select-none">
            <img
              src={GALLERY[lightboxIndex].imageUrl}
              alt={GALLERY[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">
                {GALLERY[lightboxIndex].category}
              </span>
              <h4 className="text-lg font-bold mt-1 pr-6 pl-6">{GALLERY[lightboxIndex].title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
