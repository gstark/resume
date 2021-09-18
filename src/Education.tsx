import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Education({
  showTitle = false,
  school,
  degree,
  _years,
  _location,
}: {
  showTitle?: boolean
  school: string
  degree: string
  _years: string
  _location: string
}) {
  return (
    <section className="grid grid-cols-12 my-5">
      <p
        className={cx('font-bold tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}
      >
        {showTitle ? 'Education' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <p className="mb-1">
          <span className="font-bold tracking-wide">{school}</span>
        </p>
        <p className="mb-1">
          <span>{degree}</span>
        </p>
      </article>
    </section>
  )
}
