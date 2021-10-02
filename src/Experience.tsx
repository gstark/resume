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
  descriptions,
}: {
  showTitle?: boolean
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  location: string
  descriptions: string[]
}) {
  return (
    <section className="grid grid-cols-12 my-5">
      <div
        className={cx('tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}>
        {showTitle ? <span className="font-bold">Experience</span> : null}
      </div>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}>
        <p>
          <span className="font-bold tracking-wide">{jobTitle}</span> /{' '}
          <span>{companyName}</span>
        </p>
        {/* <p className="mb-1">
          <span className="text-xs">
            {skills ? skills.map((skill) => `${skill}. `) : null}
          </span>
        </p> */}
        <p className="mb-2 text-sm">
          <span>
            {startDate} - {endDate}
          </span>{' '}
          / <span>{location}</span>
        </p>
        <ul>
          {descriptions.map((description, index) => (
            <li
              key={index}
              className="leading-snug"
              dangerouslySetInnerHTML={{ __html: description }}></li>
          ))}
        </ul>
      </article>
    </section>
  )
}
