import React from 'react';
import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills/Skill';
import ExperienceSection from '@/components/Experiences/ExperienceSection';

const homepage = () => {
  return (
    <>
      <Navbar />
      <Introduction/>
      <Skills/>
      <ExperienceSection/>
    </>
  )
}

export default homepage;
