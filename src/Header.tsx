import React from 'react'
import resume from './resume.json'

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
    <section className="grid grid-cols-12 border-b-4 sticky top-0 pt-8 pb-2 bg-gray-50 z-10">
      <p className="col-span-12 md:col-span-10 text-3xl">{contact.name}</p>
      <div className="col-span-12 md:col-span-2 leading-snug md:text-right">
        <p>
          <a href="tel:727-560-3116">{resume.contact.phone}</a>
        </p>
        <p>
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
        </p>
        <p>
          <a href={`https://www.linkedin.com/in/${resume.contact.linkedin}`}>
            Linked-In: {resume.contact.linkedin}
          </a>
        </p>
        <p>
          <a href={`https://github.com/${resume.contact.github}`}>
            GitHub: {resume.contact.github}
          </a>
        </p>
      </div>
    </section>
  )
}
