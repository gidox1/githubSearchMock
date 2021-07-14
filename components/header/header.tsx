import styles from './header.module.css'
import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Image from 'next/image'
import { composeStrings } from '../../utils/utils'
import Router, { useRouter } from 'next/router'

const NavBar = (
  props: InferProps<typeof NavBar.propTypes>
) => {
  const [active, setActive] = useState(false);

  //redirect to gitHub for header labels click
  const handleGithubRedirect = () => {
    Router.push({
      pathname: 'https://github.com/',
    })
  }

  return (
  <div className={styles.headerClass}>
    <div className={styles.innerHeading}>
      <div className={styles.logoContainer}>
        <div className={styles.headrImg}>
          <Image
            height={50}
            src="/images/github.svg"
            width={100}
          />
        </div>
        {
          Array.isArray(props.labels) && props.labels.map((info, key) => (
            <label
              className={styles.labels}
              key={key}
              onClick={handleGithubRedirect}
            >
              {info}
            </label>
          ))
        }
      </div>
      <div
        className={styles.authDiv}
      >
        <button
          className={
            composeStrings(
              styles.authBtn,
              styles.inactive
            )
        }
        onClick={handleGithubRedirect}
        > 
          Sign in
        </button>
        <button
          className={styles.authBtn}
          onClick={handleGithubRedirect}
        > Sign up
        </button>
      </div>
      <div
          className={styles.menu}
          onClick={() => {
            setActive(!active)
          }}
      >
        <div
          className={
            composeStrings(
              styles.bar1,
              active && styles.bar1Active,
            )
        }
        >
        </div>
        <div
          className={
            composeStrings(
              styles.bar2,
              active && styles.bar2Active,
            )
        }
        >
        </div>
        <div
          className={
            composeStrings(
              styles.bar3,
              active && styles.bar3Active,
            )
        }
        >
        </div>
      </div>
    </div>
  </div>
  )
}

NavBar.propTypes = {
  labels: PropTypes.array.isRequired,
}

export default NavBar
