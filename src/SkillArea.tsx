import React from 'react'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import {
  sectionBodyBorderClassNames,
  sectionBodyClassNames,
  sectionTitleClassNames,
} from './styleConstants'

export function SkillArea() {
  return (
    <section className="grid grid-cols-12 mt-5 mb-2 print:hidden">
      <p className={cx('font-bold tracking-widest', sectionTitleClassNames)}>
        <span className="font-bold text-blue-900">Skill Areas</span>
      </p>
      <article
        className={cx(sectionBodyClassNames, sectionBodyBorderClassNames)}>
        <div className="flex justify-between">
          <NavLink exact to="/" className="nav-link">
            All Areas
          </NavLink>
          <NavLink to="/back-end-web" className="nav-link">
            Back End
          </NavLink>
          <NavLink to="/front-end-web" className="nav-link">
            Front End
          </NavLink>
          <NavLink to="/systems" className="nav-link">
            Systems
          </NavLink>
        </div>
      </article>
    </section>
  )
}
