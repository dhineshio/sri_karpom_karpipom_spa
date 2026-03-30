import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import ExtraCurricular from '@/components/sections/extraCurricular'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Courses | Sri Karpom Karpippom</title>
        <meta name="description" content="Explore our Tamil learning courses — Level 1 Foundation and Level 2 Progressive — designed for children aged 5–12 to build strong Tamil skills." />
      </Helmet>
      <main>
        <PageTitle pageName={"Services"} breadcrumbCurrent={"Services"} />
        {/* <ServicesTwo /> */}
        <ExtraCurricular/>
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Services