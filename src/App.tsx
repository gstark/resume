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
      <div
        className="
          print:hidden
          w-full bg-gray-700 text-gray-300 p-2 border-4 border-gray-300

          xl:block xl:fixed xl:w-auto xl:top-12 xl:-right-16 xl:transform xl:rotate-45 xl:bg-gray-700 xl:text-gray-300 xl:p-2 xl:border-4 xl:border-gray-300"
      >
        <a
          className="block w-full xl:w-60 text-sm text-center"
          href="https://github.com/gstark"
          data-ribbon="Find me on GitHub"
          title="Find me on GitHub"
        >
          Find me on GitHub
        </a>
      </div>
      <div className="mx-6 xl:mx-64 mb-20">
        <section className="grid grid-cols-12 border-b-4 sticky top-0 pt-8 pb-2 bg-gray-50 z-10">
          <p className="col-span-12 md:col-span-10 text-3xl">Gavin Stark</p>
          <div className="col-span-12 md:col-span-2 leading-snug md:text-right">
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
