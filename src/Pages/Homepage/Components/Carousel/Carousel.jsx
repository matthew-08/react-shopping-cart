import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import styles from './Carousel.module.css';
import clothingMens from './img/mens-clothing.jpg';
import clothingWomens from './img/womens-clothing.jpg';
import jewelry from './img/jewelry.jpg';
import electronics from './img/electronics.jpg';
import CategoryLink from './CategoryLink';

import 'swiper/css';

export default function Carousel() {
  return (
    <motion.div
      className={styles['swiper-container']}
      initial={{ x: 100 }}
      transition={{ duration: 0.4 }}
      animate={{ x: 0 }}
    >
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
      >
        <SwiperSlide
          className={styles.slide}
        >
          <img src={clothingMens} alt="shop-img" />
          <CategoryLink
            name={'Men\'s Clothing'}
          />
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
        >
          <img src={clothingWomens} alt="shop-img" />
          <CategoryLink
            name={'Women\'s Clothing'}
          />
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
        >
          <img src={jewelry} alt="shop-img" />
          <CategoryLink
            name="Jewelry"
          />
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
        >
          <img src={electronics} alt="shop-img" />
          <CategoryLink
            name="Electronics"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
