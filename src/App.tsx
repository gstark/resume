import React from 'react'
import resume from './resume.json'
import { Experience } from './Experience'
import { Education } from './Education'
import { OpenSource } from './OpenSource'
import { Community } from './Community'
import { AboutResume } from './AboutResume'
import { Skills } from './Skills'
import { Separator } from './Separator'
import { Header } from './Header'
import { SkillArea } from './SkillArea'

export function App() {
  return (
    <>
      <div
        className="
          print:hidden
          w-full bg-gray-700 text-gray-300 p-2 border-4 border-gray-300

          xl:block xl:fixed xl:w-auto xl:top-12 xl:-right-16 xl:transform xl:rotate-45 xl:bg-gray-700 xl:text-gray-300 xl:p-2 xl:border-4 xl:border-gray-300">
        <a
          className="block w-full xl:w-60 text-sm text-center"
          href={`https://github.com/${resume.contact.github}`}
          data-ribbon="Find me on GitHub"
          title="Find me on GitHub">
          Find me on GitHub
        </a>
      </div>

      <div className="mx-6 xl:mx-64 mb-20">
        <Header contact={resume.contact} />

        <div className="leading-snug">{resume.about}</div>

        <SkillArea />

        <Skills showTitle skills={resume.skills} />

        <Separator />

        {resume.experience.map((experience, index) => (
          <Experience key={index} showTitle={index === 0} {...experience} />
        ))}

        <Separator />

        {resume.community.map((community, index) => (
          <Community key={index} showTitle={index === 0} {...community} />
        ))}

        <Separator />

        {resume.eduction.map((education, index) => (
          <Education key={index} showTitle={index === 0} {...education} />
        ))}

        <Separator />

        {resume.opensource.map((opensource, index) => (
          <OpenSource key={index} showTitle={index === 0} {...opensource} />
        ))}

        <Separator />

        <AboutResume />

        <div className="my-24" />
      </div>
    </>
  )
}
