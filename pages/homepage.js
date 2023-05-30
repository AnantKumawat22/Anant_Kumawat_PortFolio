import React from 'react';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills/Skill';
import ExperienceSection from '@/components/Experiences/ExperienceSection';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const homepage = () => {
  return (
    <>
      <Introduction/>
      <Skills/>
      <ExperienceSection/>
      <ContactMe/>
    </>
  )
}

export default homepage;
