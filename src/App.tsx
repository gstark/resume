import React from 'react'
import resume from './resume.json'
import { Experience } from './Experience'
import { Education } from './Education'
import { OpenSource } from './OpenSource'
import { Community } from './Community'
import { Skills } from './Skills'

export function App() {
  return (
    <>
      <div className="mx-6 xl:mx-64 mb-20">
        <section className="grid grid-cols-12 border-b-4 sticky top-0 pt-8 pb-2 bg-gray-50 z-10">
          <p className="col-span-12 md:col-span-10 text-3xl">Gavin Stark</p>
          <div className="col-span-12 md:col-span-2 leading-snug">
            <p>
              <a href="tel:727-560-3116">(727) 560-3116</a>
            </p>
            <p>
              <a href="mailto:gavin@gstark.com">gavin@gstark.com</a>
            </p>
          </div>
        </section>

        <Skills showTitle skills={resume.skills} />

        {resume.experience.map((experience, index) => (
          <Experience key={index} showTitle={index === 0} {...experience} />
        ))}

        {resume.community.map((community, index) => (
          <Community key={index} showTitle={index === 0} {...community} />
        ))}

        {resume.eduction.map((education, index) => (
          <Education key={index} showTitle={index === 0} {...education} />
        ))}

        {resume.opensource.map((opensource, index) => (
          <OpenSource key={index} showTitle={index === 0} {...opensource} />
        ))}
      </div>
    </>
  )
}
