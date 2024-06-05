import { ITestimonialData } from '@/utils/type';
import Image from 'next/image';
import React from 'react';
import Styles from '../reusables/component.module.css'
import { QuoteIcon } from 'lucide-react';

const TestimonialCard: React.FC<{ testimonial: ITestimonialData; isActive: boolean }> = ({ testimonial, isActive }) => {
  return (
    <div className={`item text-center py-20 mb-20 ${isActive ? 'opacity-100 transform scale-100' : 'opacity-10 transform scale-80'} transition-all duration-300 ease-in-out w-[25vw] h-[70vh]`}>
      <div className={`${Styles.shadowEffect} bg-white rounded-xl p-4"`}>
        <QuoteIcon size={50} />
        <p className='text-[12px] py-6'>{testimonial.text}</p>
        <Image src={testimonial.imageSrc} alt={testimonial.name} width={90} height={90} className="rounded-full mx-auto mb-4 border-2 border-background" />
      </div>
      <div className={`${Styles.testimonialName} ${isActive ? 'bg-purple-500' : 'bg-blue-500'} text-white rounded-full py-1 px-4 mt-4 inline-block`}>
        {testimonial.name}
      </div>
    </div>
  );
};

export default TestimonialCard;
