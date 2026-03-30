import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/services/serviceArtical'

const ServiceDetails = () => {
  return (
    <>
      <Helmet>
        <title>Course Details | Sri Karpom Karpippom</title>
        <meta name="description" content="Detailed information about our Tamil course curriculum — what your child will learn, how classes are conducted, and how to get started." />
      </Helmet>
      <main>
        <PageTitle pageName={"Service Details"} breadcrumbCurrent={"Service Details"} />
        <ServiceArtical />
        <NewsletterTwo />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails