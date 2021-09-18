import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Experience({
  showTitle = false,
  companyName,
  jobTitle,
  startDate,
  endDate,
  location,
  description,
  skills,
}: {
  showTitle?: boolean
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  location: string
  description: string
  skills?: string[]
}) {
  return (
    <section className="grid grid-cols-12 my-5">
      <div
        className={cx('tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}
      >
        {showTitle ? <span className="font-bold">Experience</span> : null}
        <div className="hidden print:hidden md:flex h-full items-center">
          <span className="text-xs opacity-60 mx-1">
            {skills ? skills.map((skill) => `${skill}. `) : null}
          </span>
        </div>
      </div>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <p className="mb-1">
          <span className="font-bold tracking-wide">{jobTitle}</span> /{' '}
          <span>{companyName}</span>
        </p>
        <p className="mb-2 text-sm">
          <span>
            {startDate} - {endDate}
          </span>{' '}
          / <span>{location}</span>
        </p>
        <p className="leading-snug">{description}</p>
      </article>
    </section>
  )
}
