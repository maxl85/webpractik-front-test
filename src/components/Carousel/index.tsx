"use client"

import { useCallback, useEffect, useState } from "react";
import { clsx } from 'clsx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import styles from './styles.module.scss';

const slides = [
  {
    url: '/assets/images/event-1.png',
    title: 'Закажи 2 пиццы – 3-я в подарок',
    text: 'При заказе 2-х больших пицц – средняя пицца в подарок',
  },
  {
    url: '/assets/images/event-2.png',
    title: 'Напиток в подарок',
    text: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
  },
  {
    url: '/assets/images/event-3.png',
    title: '25% при первом заказе',
    text: 'Скидка новым клиентам!',
  },
];

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