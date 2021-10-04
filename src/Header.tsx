import React from 'react'
import resume from './resume.json'
import linkedin from './images/linkedin.png'
import github from './images/github.png'

export function Header({
  contact,
}: {
  contact: {
    name: string
    phone: string
    email: string
    linkedin: string
    github: string
  }
}) {
  return (
    <section className="border-b-4 sticky top-0 pt-8 pb-2 mb-3 z-10 bg-white">
      <p className="col-span-12 text-3xl">{contact.name}</p>
      <div className="flex justify-between leading-snug my-3">
        <div>
          <a className="block" href={`mailto:${resume.contact.email}`}>
            {resume.contact.email}
          </a>
          <a className="block" href="tel:727-560-3116">
            {resume.contact.phone}
          </a>
          <span className="block">{resume.contact.address}</span>
        </div>
        <div className="w-100">
          <a
            className="block print:hidden"
            href={`https://www.linkedin.com/in/${resume.contact.linkedin}`}>
            <img
              alt="Gavin's LinkedIn Profile"
              className="inline pr-1"
              style={{ height: '1rem' }}
              src={linkedin}
            />
            {resume.contact.linkedin}
          </a>
          <span className="hidden print:block">
            https://www.linkedin.com/in/{resume.contact.linkedin}
          </span>
          <a
            className="block print:hidden"
            href={`https://github.com/${resume.contact.github}`}>
            <img
              alt="Gavin's Github Profile"
              className="inline pr-1"
              style={{ height: '1rem' }}
              src={github}
            />
            {resume.contact.github}
          </a>
          <span className="hidden print:block">
            https://github.com/{resume.contact.github}
          </span>
        </div>
      </div>
    </section>
  )
}
