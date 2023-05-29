import React from 'react';
import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills/Skill';
import ExperienceSection from '@/components/Experiences/ExperienceSection';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const homepage = () => {
  return (
    <>
      <Navbar />
      <Introduction/>
      <Skills/>
      <ExperienceSection/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default homepage;
