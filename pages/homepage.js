import React from 'react';
import Navbar from '@/components/Navbar';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills';

const homepage = () => {
  return (
    <>
      <Navbar />
      <Introduction/>
      <Skills/>
    </>
  )
}

export default homepage;
