import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import { testimonialData } from '@/lib/fackdata/testimonialData'
import quotation from "@/assets/images/testimonial/quotation.png"
import Rating from '../ui/rating'

const Testimonial = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 testimonial">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 lg:pb-15 pb-10">
                    <div className="lg:max-w-[410px]">
                        <SectionName>Parents Testimonial</SectionName>
                        <Title size={"3.5xl"}>What Parents Say About Sri Karpom Karpippom</Title>
                    </div>
                    <p className="lg:max-w-[410px]">Hear from the families whose children have grown in confidence, vocabulary, and love for the Tamil language through our online classes.</p>
                </div>
                <div className="relative w-full h-full after:absolute after:left-0 after:top-0 after:lg:max-w-[calc(100%-410px)] after:md:max-w-[calc(100%-310px)] after:max-w-[calc(100%-100px)] after:w-full after:h-full after:bg-testimonial-banner after:bg-cover after:bg-no-repeat after:z-[-1]">
                    <div className="py-10">
                        <Swiper
                            slidesPerView={1}
                            className='max-w-[630px] w-full ml-auto mr-0'
                        >
                            {
                                testimonialData.map(({ id, name, position, rating, review, src }) => <SwiperSlide key={id}><Card name={name} position={position} src={src} rating={rating} review={review} /></SwiperSlide>)
                            }
                        </Swiper>

                    </div>
                    {/* <div className="testimonial-pagination"></div> */}
                </div>
            </div>
        </section>
    )
}

export default Testimonial

const Card = ({ name, position, review, rating }) => {
    const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()
    return (
        <div className="lg:p-10 sm:p-8 py-8 sm:py-0 sm:-mr-10">
            <div className="bg-background border border-[#F2F2F2] lg:p-15 md:p-5 p-3 max-w-[630px] w-full rounded-[10px] ml-auto shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center relative z-10 lg:pb-7.5 pb-5">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <span className="text-cream-foreground text-lg font-bold">{initials}</span>
                        </div>
                        <div>
                            <h5 className="md:text-2xl text-xl font-semibold md:leading-[140%]">{name}</h5>
                            <p>{position}</p>
                        </div>
                    </div>
                    <div className="absolute right-0 z-[-1]">
                        <img src={quotation} alt="quotation" className="lg:w-auto w-9" />
                    </div>
                </div>
                <p>{review}</p>
                <Rating star={rating} />
            </div>
        </div>
    )
}