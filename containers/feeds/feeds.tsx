import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../components/header/header'
import { NavBarProps } from '../home/Home'
import styles from './feeds.module.css'

interface profile {

}

const ProfileSection = (props) => ( 
  
  <div
    className={styles.profileSec}
  > 
    {
      Array.isArray(props.data) && props.data.length &&
        props.data.map((info, key) => (
          <div>
            <div
              className={styles.profileItems}
            >
              <img
                src={info.avatar_url}
                className={styles.avatar}
              />
              <p
                className={styles.name_}
              >
                {info.login}
              </p>
            </div>
            <hr className={styles._hr}></hr>
          </div>
        ))
    }
    {
      (!props.data.length) && 
        <div>
          No data available
        </div>
    }
  </div>
)

export default function Feeds() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(JSON.parse(localStorage.getItem("data")))
    }
  }, [])

  return (
    <Fragment>
      <div>
        <NavBar
          labels={NavBarProps}
        />
        <div className={styles.usersSection}>
          <div className={styles.sidebarSec}>

          </div>
          <div className={styles.feeds}>
            <b className={styles.count}>
              {(data && data.total_count) ? data.total_count : 0} users
            </b>
            <ProfileSection
              data={(data && data.items) ? data.items : []}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}