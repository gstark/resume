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
    <section className="border-b-4 sticky top-0 pt-8 pb-2 bg-gray-50 z-10">
      <p className="col-span-12 text-3xl">{contact.name}</p>
      <div className="flex justify-between leading-snug my-3">
        <div>
          <a className="block" href={`mailto:${resume.contact.email}`}>
            {resume.contact.email}
          </a>
          <a className="block" href="tel:727-560-3116">
            {resume.contact.phone}
          </a>
        </div>
        <div className="w-100">
          <a
            className="block"
            href={`https://www.linkedin.com/in/${resume.contact.linkedin}`}>
            <img
              className="inline pr-1"
              style={{ height: '1rem' }}
              src={linkedin}
            />
            {resume.contact.linkedin}
          </a>
          <a
            className="block"
            href={`https://github.com/${resume.contact.github}`}>
            <img
              className="inline pr-1"
              style={{ height: '1rem' }}
              src={github}
            />
            {resume.contact.github}
          </a>
        </div>
      </div>
    </section>
  )
}
