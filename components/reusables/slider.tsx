"use client"

import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx'; // replace 'react-icons/rx' with the actual path
import { ISlide } from '@/utils/type';
import { slides } from '@/utils/data';
import Image from 'next/image';
import styles from './component.module.css';
import Link from 'next/link';
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const DotFilled = ({ active, ...rest }) => (
    <RxDotFilled {...rest} style={{ color: active ? ' #3c026d' : 'grey' }} />
  );

  return (
    <div className={`${styles.slider}`}>
      <div className={styles.heroPage}>
        <div className={styles.textContent}>
          <h1>{slides[currentSlide].h1}</h1>
          <p>{slides[currentSlide].p}</p>
          <button>
            <Link href={slides[currentSlide].Link} className={styles.btn}>Read More</Link>
          </button>
        </div>

        <Image key={slides[currentSlide].id}
          src={slides[currentSlide].url}
          width={380} height={380}
          alt={`Slide ${currentSlide + 1}`}
          className={`${styles.slideImage} ${slides[currentSlide].url === "3" || slides[currentSlide].url === "4" ? '' : ''}`}
        />

      </div>
      <div className={styles.sliderControls}>
        <button>
          <ChevronLeftCircleIcon size={30} color='#3c026d' onClick={goToPrevSlide} />
        </button>
        <div className={styles.dots}>
          {slides.map((slide: ISlide, index) => (
            <DotFilled key={slide.id} active={index === currentSlide} size={30} />
          ))}
        </div>
        <button>
          <ChevronRightCircleIcon size={30} color='#3c026d' onClick={goToNextSlide} />
        </button>
      </div>
    </div>
  );
};

export default Slider;