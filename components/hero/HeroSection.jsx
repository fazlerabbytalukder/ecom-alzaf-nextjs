'use client'
import banner from "@/app/images/slide banner.png";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSection = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]} // Add the Pagination module here
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Image
                        src={banner}
                        alt="banner"
                        layout="responsive" // Add layout to ensure proper image sizing
                        width={1600} // Set image width
                        height={600} // Set image height
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner}
                        alt="banner"
                        layout="responsive"
                        width={1600}
                        height={600}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner}
                        alt="banner"
                        layout="responsive"
                        width={1600}
                        height={600}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner}
                        alt="banner"
                        layout="responsive"
                        width={1600}
                        height={600}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner}
                        alt="banner"
                        layout="responsive"
                        width={1600}
                        height={600}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection;