import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import FaqComp from '@/components/sections/faqComp'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | Sri Karpom Karpippom</title>
        <meta name="description" content="Have questions about our Tamil classes? Find answers to frequently asked questions about enrolment, course levels, schedules, and more." />
      </Helmet>
      <main>
        <PageTitle pageName={"Faq's"} breadcrumbCurrent={"Faq's"} />
        <FaqComp />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Faq