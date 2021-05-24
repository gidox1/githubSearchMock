import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../components/header/header'
import { NavBarProps } from '../home/Home'
import styles from './feeds.module.css'

interface profile {

}

const ProfileSection = (data) => ( 
  <div> 
    {
  Array.isArray(data) && data.map((info, key) => {
    <div>
      <hr></hr>
      <img
        src={info.avatar_url}
      />
      <p>{info.login}</p>
    </div>
  })
    }
</div>

)

export default function Feeds(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(JSON.parse(localStorage.getItem("data")))
    }
  }, [])
  console.log("setting Data", data)

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
              {data.total_count} users
            </b>
            <ProfileSection
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}