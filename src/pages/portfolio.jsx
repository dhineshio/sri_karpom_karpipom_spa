import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import Gallery from '@/components/sections/gallery/gallery'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import PageTitle from '@/components/sections/pageTitle'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Sri Karpom Karpippom</title>
        <meta name="description" content="Browse our gallery of Tamil learning moments — live classes, student activities, and highlights from Sri Karpom Karpippom." />
      </Helmet>
      <main>
        <PageTitle pageName={"Portfolio"} breadcrumbCurrent={"Portfolio"} />
        <Gallery />
        <div className='lg:pb-15 pt-10'></div>
        <NewsletterOne />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Portfolio