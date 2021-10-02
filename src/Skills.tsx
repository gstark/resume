import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Skills({
  showTitle = false,
  skills,
}: {
  showTitle?: boolean
  skills: { tech: string; years: number }[]
}) {
  return (
    <section className="grid grid-cols-12 my-5">
      <p className={cx('font-bold tracking-widest', sectionTitleClassNames)}>
        <span className="font-bold">{showTitle ? 'Skills' : null}</span>
      </p>
      <article
        className={cx(
          sectionBodyClassNames,
          sectionBodyBorderClassNames
            .split(' ')
            .map((className) => `print:${className}`)
        )}>
        {skills.map((skill, index) => (
          <span key={skill.tech}>
            {skill.tech}
            <sub className="text-xs hidden md:inline print:hidden">
              {' '}
              {skill.years}
              {index === 0 ? ' years' : null}
            </sub>
            .{' '}
          </span>
        ))}
      </article>
    </section>
  )
}
