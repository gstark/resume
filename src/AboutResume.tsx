import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function AboutResume() {
  return (
    <section className="grid grid-cols-12 my-0 print:hidden">
      <p
        className={cx(
          'font-bold tracking-widest',
          sectionTitleClassNames,
          sectionTitleBorderClassNames
        )}>
        About
      </p>
      <article
        className={cx(sectionBodyClassNames, sectionBodyBorderClassNames)}>
        <div>
          <p>My resume uses the following technologies:</p>

          <ul>
            <li>
              <span className="font-bold">React</span>
            </li>
            <li>
              Resume details in <span className="font-bold">JSON</span> data
            </li>
            <li>
              <span className="font-bold">TailwindCSS</span> for styling
            </li>
            <li>
              <span className="font-bold">react-snap</span> for generating a
              static version of the page for the fastest page load possible.
            </li>
            <li>
              <a className="underline" href="https://resume.gstark.com">
                https://resume.gstark.com
              </a>{' '}
              -{' '}
              <a className="underline" href="https://github.com/gstark/resume">
                https://github.com/gstark/resume
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
