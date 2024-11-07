'use client'
import arrowRight from '@/app/images/icons/arrow-right.svg';
import linkImg from '@/app/images/icons/link-icon.svg';
import banner from "@/app/images/slide banner.png";
import Image from 'next/image';
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const HeroSection = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="relative">
                    <div className="absolute top-0 left-0 z-10">
                        <div className="w-[230px] bg-white space-y-[5px] p-[5px]">
                            <Link href="/" className="text-xs text-secondary flex items-center gap-2">
                                <Image
                                    src={linkImg}
                                    alt="icon"
                                />
                                Womens & Girls Fashion
                            </Link>
                            <Link href="/" className="text-xs text-secondary flex items-center gap-2">
                                <Image
                                    src={linkImg}
                                    alt="icon"
                                />
                                Health & Beauty
                            </Link>
                            <div typeof='button' className="fristLayer text-xs text-secondary relative">
                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <Image
                                            src={linkImg}
                                            alt="icon"
                                        />
                                        Watches, Bags, Jewellery
                                    </div>
                                    <Image
                                        src={arrowRight}
                                        alt="icon"
                                    />
                                </div>
                                <div className='absolute left-[225px] top-[-47px]'>
                                    <div className='w-[230px] bg-white p-[5px]'>
                                        <div typeof='button' className="secondLayer text-xs text-secondary relative">
                                            <div className='flex items-center justify-between gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <Image
                                                        src={linkImg}
                                                        alt="icon"
                                                    />
                                                    2nd
                                                </div>
                                                <Image
                                                    src={arrowRight}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className='absolute left-[225px] top-[-5px]'>
                                                <div className='w-[230px] bg-white p-[5px]'>
                                                    <Link href="/" className="text-xs text-secondary flex items-center gap-2">
                                                        <Image
                                                            src={linkImg}
                                                            alt="icon"
                                                        />
                                                        3rd
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="/" className="text-xs text-secondary flex items-center gap-2">
                                <Image
                                    src={linkImg}
                                    alt="icon"
                                />
                                Womens & Girls Fashion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
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