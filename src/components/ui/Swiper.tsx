'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { clx } from '@/utils/clx';

interface SwiperProps {
  items: React.ReactNode[];
  className?: string;
  settings?: {
    slidesPerView?: number;
    spaceBetween?: number;
    autoplay?: boolean | { delay: number };
    pagination?: boolean;
    navigation?: boolean;
  };
}

const MeSwiper: React.FC<SwiperProps> = ({
  items,
  className,
  settings = {}
}) => {
  const defaultSettings = {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: true,
    navigation: false,
    ...settings
  };

  return (
    <div className={clx("w-full mx-auto", className)}>
      <Swiper
        modules={[
          ...(defaultSettings.pagination ? [Pagination] : []),
          ...(defaultSettings.autoplay ? [Autoplay] : []),
          ...(defaultSettings.navigation ? [Navigation] : [])
        ]}
        spaceBetween={defaultSettings.spaceBetween}
        slidesPerView={defaultSettings.slidesPerView}
        pagination={defaultSettings.pagination ? {
          clickable: true,
          dynamicBullets: true
        } : false}
        navigation={defaultSettings.navigation}
        autoplay={defaultSettings.autoplay ?
          (typeof defaultSettings.autoplay === 'boolean'
            ? { delay: 10000, disableOnInteraction: false }
            : defaultSettings.autoplay)
          : false
        }
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: defaultSettings.slidesPerView,
            spaceBetween: defaultSettings.spaceBetween
          }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={clx("p-12")}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeSwiper;