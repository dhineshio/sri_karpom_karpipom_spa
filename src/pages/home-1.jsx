import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import HeroOne from '@/components/sections/heros/heroOne'
import AboutOne from '@/components/sections/abouts/aboutOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import Gallery from '@/components/sections/gallery/gallery'
import FaqComp from '@/components/sections/faqComp'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne'
import AgeOne from '@/components/sections/studentsAge/ageOne'
import ExtraCurricular from '@/components/sections/extraCurricular'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import Programs from '@/components/sections/programs'

const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>Home | Sri Karpom Karpippom</title>
        <meta name="description" content="Learn about Sri Karpom Karpippom — our mission to nurture young Tamil minds through structured, fun online classes for children aged 5–12." />
      </Helmet>
      <main>
        <HeroOne />
        {/* <SuccessProjectOne /> */}
        <AboutTwo isAboutpage={false} />
        {/* <Programs /> */}
        <ExtraCurricular/>
        <Gallery />
        <AgeOne />
        {/* <Testimonial /> */}
        {/* <NewsletterOne /> */}
        <NewsletterTwo/>
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default HomeOne