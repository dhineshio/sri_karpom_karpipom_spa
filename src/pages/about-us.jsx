import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import FaqComp from '@/components/sections/faqComp'

const AboutUs = () => {

  return (
    <>
      <Helmet>
        <title>About Us | Sri Karpom Karpippom</title>
        <meta name="description" content="Learn about Sri Karpom Karpippom — our mission to nurture young Tamil minds through structured, fun online classes for children aged 5–12." />
      </Helmet>
      <main>
        <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
        <AboutTwo gridClass={"lg:grid-cols-2"} isAboutpage={true} />
        <FaqComp />
        {/* <Testimonial /> */}
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default AboutUs