import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { IoStar } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';
import Card from '../common/Card';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          }
        }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        speed={1200}
        pagination={{ clickable: true }}
        loop={true}
        className="pb-16"
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.id}>
            <Card className="h-full relative overflow-hidden flex flex-col justify-between p-8">
              <FaQuoteLeft className="absolute right-6 top-6 text-slate-100/30 text-7xl -z-10" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, idx) => (
                    <IoStar key={idx} />
                  ))}
                </div>

                <p className="text-slate-600 italic leading-relaxed text-base">
                  "{test.review}"
                </p>
              </div>

              {/* Patient Profile */}
              <div className="flex items-center gap-4 mt-6 border-t border-slate-50 pt-4">
                <img
                  src={test.patientImage}
                  alt={test.patientName}
                  className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-primary-100 flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{test.patientName}</h4>
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                    {test.department} Patient
                  </span>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
