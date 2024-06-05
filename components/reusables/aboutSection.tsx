import Image from 'next/image'
import React from 'react'
import styles from './component.module.css'

const AboutSection = () => {
  return (
      <section id="about" className={`${styles.about}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.aboutWrapper}`}>
            <div className={`${styles.aboutHeader}`}>
              <h2 className={`${styles.aboutHeading}`}>
                <Image
                  className={`${styles.graphic}`}
                  src="/heading_polygon.png"
                  alt=""
                  width={50}
                  height={50}
                />{' '}
                About Us
              </h2>
            </div>
            <article className={`${styles.aboutContent}`}>
              <p className={`${styles.lead}`}>
                Coast Research Technology is an outstanding and emerging ICT
                giant in Africa, creating groundbreaking technological
                solutions. Since 2021, it has consistently helped all of its
                ever joyous clients ( both individual and corporate bodies) to
                bring their dream solutions to reality. Having the best team of
                idea-to-solution creators has helped position them as an
                authority within the tech industry, especially when it comes to
                creating groundbreaking solutions backed by innovative thinking
                and visionary map work.
              </p>
              <p className={`${styles.lead}`}>
                With our amiable classNamerooms and adepts trainers packing
                years of practical and theoretical experiences, our training
                center has since 2020, seen brilliant IT prodigies walk through
                our doors to get the technical skills needed in different IT
                fields, where they are currently using these skills to
                collaborate with other great minds both within the country and
                globally
              </p>
            </article>
          </div>
        </div>
      </section>
  )
}

export default AboutSection;
