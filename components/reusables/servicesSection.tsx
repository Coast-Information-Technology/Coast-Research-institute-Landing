import Image from 'next/image'
import React from 'react'
import styles from './component.module.css'
import Link from 'next/link'

const ServicesSection = () => {
  return (
      <section id="services" className={`${styles.services}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.servicesWrapper}`}>
            <div className={`${styles.servicesHeader}`}>
              <h2 className={`${styles.servicesHeading}`}>
                <Image
                  className={`${styles.graphic}`}
                  src="/heading_polygon.png"
                  alt=""
                  width={50}
                  height={50}
                />{' '}
                Our Services
              </h2>
            </div>
            <div className={`${styles.servicesCards}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                  <h3 className={`${styles.cardHeading}`}>
                    Research and App Development
                  </h3>
                </div>
                <div className={`${styles.cardBody}`}>
                  <ul role="list" style={{ listStyleType: 'circle' }}>
                    <li>
                      We specialize in developing complex, sophisticated software
                      that will help you digitally transform your business and
                      the industry.
                    </li>
                    <li>
                      Get world-className enterprise engineering, design and
                      technology, consulting services to automate your business
                      processes, soar your operations and customer service
                    </li>
                  </ul>
                </div>
                <Link href="https://coastresearchtechnology1.netlify.app" className="btn btn--primary">
                    Read More
                </Link>
              </div>
              <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                  <h3 className={`${styles.cardHeading}`}>
                    Skill acquisition and career growth
                  </h3>
                </div>
                <div className={`${styles.cardBody}`}>
                  <ul role="list" style={{ listStyleType: 'circle' }}>
                    <li>
                      Are you tired of learning outdated technologies?
                    </li>
                    <li>
                      Are you tired of learning with outdated course materials?
                    </li>
                    <li>
                      Do you need practical training on the latest IT
                      technologies?
                    </li>
                    <li>
                      Taking a decision on the right place to train yourself or
                      your staff can be very vital for your career or the future
                      of your organization.
                    </li>
                  </ul>
                </div>
                <Link href="https://coastresearchtechnology2.netlify.app" className="btn btn--primary">
                    Read More
                </Link>
              </div>
            </div>
            <div className={`${styles.servicesCards}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                  <h3 className={`${styles.cardHeading}`}>
                    Research and App Development
                  </h3>
                </div>
                <div className={`${styles.cardBody}`}>
                  <ul role="list" style={{ listStyleType: 'circle' }}>
                    <li>
                      We specialize in developing complex, sophisticated software
                      that will help you digitally transform your business and
                      the industry.
                    </li>
                    <li>
                      Get world-className enterprise engineering, design and
                      technology, consulting services to automate your business
                      processes, soar your operations and customer service
                    </li>
                  </ul>
                </div>
                <Link href="https://coastresearchtechnology1.netlify.app" className="btn btn--primary">
                    Read More
                </Link>
              </div>
              <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                  <h3 className={`${styles.cardHeading}`}>
                    Skill acquisition and career growth
                  </h3>
                </div>
                <div className={`${styles.cardBody}`}>
                  <ul role="list" style={{ listStyleType: 'circle' }}>
                    <li>
                      Are you tired of learning outdated technologies?
                    </li>
                    <li>
                      Are you tired of learning with outdated course materials?
                    </li>
                    <li>
                      Do you need practical training on the latest IT
                      technologies?
                    </li>
                    <li>
                      Taking a decision on the right place to train yourself or
                      your staff can be very vital for your career or the future
                      of your organization.
                    </li>
                  </ul>
                </div>
                <Link href="https://coastresearchtechnology2.netlify.app" className="btn btn--primary">
                    Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServicesSection;
