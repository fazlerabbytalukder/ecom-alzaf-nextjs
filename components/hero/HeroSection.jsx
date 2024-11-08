'use client'
import banner from "@/app/images/slide banner.png";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Category from './Category';


const HeroSection = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <div className="container mx-auto px-4">
                    <Category />
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
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