import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import ContactAddress from '@/components/sections/contactAddress'
import ContactForm from '@/components/sections/contactForm'
import GoogleMap from '@/components/sections/googleMap'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sri Karpom Karpippom</title>
        <meta name="description" content="Get in touch with Sri Karpom Karpippom. We're happy to answer your questions and help enrol your child in our online Tamil classes." />
      </Helmet>
      <main>
        <PageTitle pageName={"Contact Us"} breadcrumbCurrent={"Contact Us"} />
        <ContactAddress />
        <GoogleMap />
        <ContactForm />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default ContactUs