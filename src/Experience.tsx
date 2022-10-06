import React from 'react'
import cx from 'classnames'
import { useParams } from 'react-router-dom'
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
  visibleOnWeb,
  visibleOnPrint,
  descriptions,
}: {
  showTitle?: boolean
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  location: string
  visibleOnWeb: boolean
  visibleOnPrint: boolean
  descriptions: {
    text: string
    show: string
    areas: string[]
  }[]
}) {
  const { area } = useParams<{ area: string | undefined }>()

  const descriptionsToShow =
    area === undefined
      ? descriptions
      : descriptions.filter((description) => description.areas.includes(area))

  return (
    <section
      className={`grid grid-cols-12 my-2 ${visibleOnWeb ? 'block' : 'hidden'} ${
        visibleOnPrint ? 'print:block' : 'print:hidden'
      }`}>
      <div
        className={cx('tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}>
        {showTitle ? (
          <span className="font-bold text-blue-900">Career Experience</span>
        ) : null}
      </div>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}>
        <p className="flex justify-between mb-2 font-bold print:text-sm text-blue-900">
          <span>
            {jobTitle}, {companyName}, {location}
          </span>
          <span className="text-right whitespace-nowrap">
            {startDate} - {endDate}
          </span>
        </p>
        {/* <p className="mb-1">
          <span className="text-xs">
            {skills ? skills.map((skill) => `${skill}. `) : null}
          </span>
        </p> */}
        <p
          className="leading-snug"
          dangerouslySetInnerHTML={{
            __html: descriptionsToShow
              .filter((description) => description.show === 'paragraph')
              .map((description) => description.text)
              .join(' '),
          }}></p>
        <ul>
          {descriptionsToShow
            .filter((description) => description.show === 'list')
            .map((description, index) => (
              <li
                key={index}
                className="leading-snug"
                dangerouslySetInnerHTML={{ __html: description.text }}></li>
            ))}
        </ul>
      </article>
    </section>
  )
}
