import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import shap_1 from "@/assets/images/shapes/knowledge-lshpe.png"
import shap_2 from "@/assets/images/shapes/knowledge-animal.png"
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import SectionDescription from '@/components/ui/sectionDescription'

const AgeOne = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="bg-warm lg:py-[120px] py-20 relative z-[1]">
                <div className="container">
                    <div className="grid lg:grid-cols-[37%_auto] grid-cols-1 items-center xl:gap-20 gap-10">

                        <div>
                            <div className="lg:max-w-[460px]">
                                <SectionName>Who Can Join?</SectionName>
                                <Title size={"3.5xl"}>Tamil Classes for Every Child, Every Age</Title>
                            </div>
                            <SectionDescription className={'pt-5 pb-7.5'}>Our structured Tamil program welcomes children aged 5–12. Whether your child is just starting or ready to advance, we have the right level for them.</SectionDescription>
                            <Button asChild variant="pill">
                                <Link to={"/about-us"}>Learn More</Link>
                            </Button>
                        </div>


                        <div className="relative flex justify-center flex-wrap sm:flex-nowrap lg:justify-between md:gap-7.5 sm:gap-4 gap-3">
                            <div className="mt-[110px] flex flex-col items-end md:gap-7.5 sm:gap-4 gap-3">
                                <BigCard age={"5-6"} />
                                <SmallCard className={"bg-primary"} age={"7-8"} />
                            </div>
                            <div className="flex flex-col md:gap-7.5 sm:gap-4 gap-3">
                                <SmallCard className={"bg-secondary"} age={"9-10"} />
                                <SmallCard className={"bg-destructive"} age={"11-12"} />
                            </div>
                            <div className="self-center">
                                <SmallCard className={"bg-green"} age={"5-12"} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="absolute 2xl:left-15 left-0 bottom-0 z-[-1] xl:block hidden">
                    <img src={shap_1} alt="tree" />
                </div>
                <div className="absolute 2xl:top-[120px] lg:top-16 top-5 right-[67px] 2xl:w-auto lg:w-48 w-32 animate-left-right">
                    <img src={shap_2} alt="animal" />
                </div>

            </div>
        </section>
    )
}

export default AgeOne

const SmallCard = ({ age, className }) => {
    return (
        <div className={cn('bg-secondary rounded-[10px] xl:py-[53px] lg:py-9 py-7 xl:px-10 lg:px-8 md:px-6 px-5 max-w-[190px] max-h-[190px]', className)}>
            <h5 className="font-nunito text-cream-foreground lg:text-[32px] md:text-2xl text-xl font-bold leading-[130%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{age}</span> <span>Years</span>
            </h5>
        </div>
    )
}

const BigCard = ({age, className}) => {
    return (
        <div className="bg-[#0A6375] rounded-[10px] xl:py-20 lg:py-10 py-7 xl:px-[85px] lg:px-10 md:px-6 px-5 lg:max-w-[300px] max-w-[190px] max-h-[300px] ">
            <h5 className="font-nunito text-cream-foreground lg:text-[32px] md:text-2xl text-xl font-bold leading-[140%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{age}</span> <span>Years</span>
            </h5>
        </div>
    )
}