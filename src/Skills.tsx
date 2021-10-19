import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'
import { useParams } from 'react-router'

export function Skills({
  showTitle = false,
  skills,
}: {
  showTitle?: boolean
  skills: { tech: string; years: number; areas: string[] }[]
}) {
  const { area } = useParams<{ area: string | undefined }>()

  const sortedSkills =
    area === undefined
      ? skills
      : skills
          .filter((skill) => skill.areas.includes(area))
          .sort(
            (a, b) =>
              (b.areas.includes(area) ? b.years : 0) -
              (a.areas.includes(area) ? a.years : 0)
          )

  return (
    <section className="grid grid-cols-12 mt-5 mb-2">
      <p className={cx('font-bold tracking-widest', sectionTitleClassNames)}>
        <span className="font-bold text-blue-900">
          {showTitle ? 'Technical Proficiencies' : null}
        </span>
      </p>
      <article
        className={cx(
          sectionBodyClassNames,
          sectionBodyBorderClassNames,
          sectionBodyBorderClassNames
            .split(' ')
            .map((className) => `print:${className}`)
        )}>
        <div className="mb-4 flex flex-wrap">
          {sortedSkills.map((skill) => (
            <div
              key={`print-${skill.tech}`}
              className="w-1/2 sm:w-1/3 md:w-1/4 h-7">
              {skill.tech} <sub>({Math.round(skill.years)} years)</sub>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
