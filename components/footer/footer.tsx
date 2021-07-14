import styles from './footer.module.css'
import React from 'react'
import Image from 'next/image'
import { labelsLeft, labelsRight } from './data'

interface LinkData {
  links: string[]
}

const Links = (props: LinkData) => (
  <div
    className={styles.linkDiv}
  >
    {
      props.links.map((info, key) => (
        <a
          className={styles.aTags}
          href="https://github.com/"
          key={key}
        >
          {info}
        </a>
      ))
    }
  </div>
)

const Footer: React.FC<any> = () => {
  return (
  <div className={styles.container}>
      <span
        className={styles.aTags}
      >
        © 2021 GitHub, Inc.
      </span>
        <Links
          links={labelsLeft}
        />
      <div
        className={styles.footerImage}
      >
        <Image
          height={25}
          src="/images/git.svg"
          width={25}
        />
      </div>
      <Links
       links={labelsRight}
      />
  </div>
  )
}

export default Footer
