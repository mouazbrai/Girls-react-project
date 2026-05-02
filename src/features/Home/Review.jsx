import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import girlImage from "../../assets/images/girl.jpg";
import girlTwoImage from "../../assets/images/girl2.jpg";
import girlThreeImage from "../../assets/images/girl3.jfif";

/* This is a Review Page */
const Review = () => {
    const reviewsData = [
        {
            id: 1,
            name: "Jessica White",
            image: girlImage,
            text: "This Magazine Is Amazing , You Have A very Funtastic Product , I hope You Recommanced Your Magazin Always To Best."
        },
        {
            id: 2,
            name: "Jane Smith",
            image: girlTwoImage,
            text: "Your confidence shines brighter than the sun!\" or \"I love your vibe"
        },
        {
            id: 3,
            name: "Alisha Brown",
            image: girlThreeImage,
            text: "Wow! This Is Funtastic , i like it. Believe in yourself, you are capable of amazing thing"
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: girlImage,
            text: "Great quality and very professional team. Highly recommended!"
        },
        {
            id: 5,
            name: "Emily Davis",
            image: girlTwoImage,
            text: "The designs are modern and very clean. I'm impressed with the work."
        },
        {
            id: 6,
            name: "Sophia Wilson",
            image: girlThreeImage,
            text: "Incredible attention to detail in every page of the magazine."
        }
    ];

    return (
        <>
            <div className="review-content w-full">
                <div className="review-head text-center w-full px-8">
                    <h2 className="review-title text-xl text-primary">Top Social Media Reviews</h2>
                    <p className="review-description text-sm my-5">Here We Presented A top Social Media Commants , For You Make Knowlage On Our Magazine</p>
                </div>
                
                <div className="review-cards px-4 max-w-7xl mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper !pb-12"
                    >
                        {reviewsData.map((item) => (
                            <SwiperSlide key={item.id} className="flex">
                                <div className="commant-card flex flex-col w-full self-start bg-white">
                                    <div className="commant-head">
                                        <div className="commant-platform">
                                            <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.3v-2.9h2.3V9.5c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.15c-1.14 0-1.5.71-1.5 1.44v1.73h2.56l-.41 2.9h-2.15v7.05A10 10 0 0 0 22 12z" />
                                            </svg>
                                        </div>
                                        <img src={item.image} alt="comment Image" className="commant-img" />
                                        <h3 className="commant-name">{item.name}</h3>
                                    </div>
                                    <div className="commant-body flex-grow">
                                        <p className="commant-text card-text">{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Review;