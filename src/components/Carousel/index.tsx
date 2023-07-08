"use client"

import { useCallback, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import styles from './styles.module.scss';

import { slides } from '../../data/promo';


export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="container">
      <div className={styles.carousel}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={styles.carouselSlides} >
          <div onClick={prevSlide} className={styles.carouselLeftArrow}>
            <BsChevronCompactLeft size={30} />
          </div>

          <div onClick={nextSlide} className={styles.carouselRightArrow}>
            <BsChevronCompactRight size={30} />
          </div>
        </div>
        <h3 className={styles.carouselTitle}>{slides[currentIndex].title}</h3>
        <p className={styles.carouselText}>{slides[currentIndex].text}</p>

        <div className={styles.carouselPoints}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={clsx(styles.carouselPointsItem, slideIndex === currentIndex && styles.selected)} >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}