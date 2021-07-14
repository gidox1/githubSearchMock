import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../components/header/header'
import { NavBarProps } from '../home/Home'
import styles from './feeds.module.css'
import { getUsers } from '../../lib/action'
import { useRouter } from 'next/router'

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
              key={key}
            >
              <div
                className={styles.stack}
              >
                <img
                  src={info.avatar_url}
                  className={styles.avatar}
                />
                <p
                  className={styles.name_}
                >
                  <a
                    href={info.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {info.login}
                  </a>
                </p>
              </div>
              <button
                type="button"
                className={styles.followBtn}
              >
                <a
                  href={info.html_url}
                  className={styles.a_}
                  target="_blank"
                  rel="noreferrer"
                >
                  follow
                </a>
              </button>
            </div>
            {
              key < props.data.length - 1 &&
                <hr className={styles._hr}></hr>
            }
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

export default function Feeds(props) {
  const router = useRouter()
  const query = {
    value: router.query.data
  };

  const [data, setData] = useState<any>([]);
  const [pageCount, setPageCount] = useState<number>(1);

  const handlePervious = async(e) => {
    e.preventDefault();
    let computed = (pageCount > 0) ? pageCount - 1 : pageCount;
    const response = await getUsers(query, computed, false);
    setPageCount(computed);
    setData(response.data);
  }

  const handleNext = async(e) => {
    e.preventDefault();
    let computed = pageCount + 1;
    const response = await getUsers(query, computed, false);
    setPageCount(computed);
    setData(response.data);
  }

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
              {console.log(data, "data")}
              {(data) ? data.total_count : 0} users
            </b>
            <ProfileSection
              data={(data && data.items) ? data.items : []}
            />
          </div>
        </div>
        <div
          className={styles.btnDivDown}
        >
          <div
            className={styles.btnDiv}
          >
            <input
              type="button"
              className={styles.nav}
              value="previous"
              onClick={(e) => handlePervious(e)}
            />
            <input
              type="button"
              className={styles.nav}
              value="next"
              onClick={(e) => handleNext(e)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}