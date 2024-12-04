import React from 'react'
import Button from './Button'
import Contact from './Contact'

function About() {
  return (
    <>
      <h1 className='text-3xl'><b>About</b></h1>
      <Button />
      <div className=''>
        <Contact />
      </div>
    </>
  )
}

export default About