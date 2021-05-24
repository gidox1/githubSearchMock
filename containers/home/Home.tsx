import NavBar from '../../components/header/header'
import SearchBarContainer from '../../components/searchBar/searchBar'
import Footer from '../../components/footer/footer'
import React, { Fragment } from 'react'
import styles from './Home.module.css'

export const NavBarProps = [
  'Why Github?',
  'Team',
  'Enterprise',
  'Explore',
  'Marketplace',
  'Pricing'
];

export default function Home() {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <NavBar
          labels={NavBarProps}
        />
        <div className={styles.contents}>
          <div className={styles.searchDiv}>
            <SearchBarContainer/>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.footerClass}>
            <Footer/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
