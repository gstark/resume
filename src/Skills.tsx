import React from 'react'
import cx from 'classnames'
import { sectionTitleClassNames, sectionBodyClassNames } from './styleConstants'
import { Skill } from './Skill'

export function Skills({
  showTitle = false,
  skills,
}: {
  showTitle?: boolean
  skills: string[]
}) {
  return (
    <section className="grid grid-cols-12 my-5">
      <p className={cx('font-bold tracking-widest', sectionTitleClassNames)}>
        {showTitle ? 'Skills' : null}
      </p>
      <article className={cx(sectionBodyClassNames)}>
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </article>
    </section>
  )
}
