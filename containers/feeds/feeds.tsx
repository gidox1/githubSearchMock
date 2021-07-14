import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../components/header/header'
import { NavBarProps } from '../home/Home'
import styles from './feeds.module.css'
import { getUsers } from '../../lib/action'
import Router, { useRouter } from 'next/router'
import ProfileSection from './profile';

export default function Feeds() {
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

  const backToSearch = () => {
    Router.push({
      pathname: '/',
      query: {data: data.value}
    })
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
          <div
            className={styles.feeds}
          >
            <div
              className={styles.count}
            >
              <div>
                <b>
                  {(data) ? data.total_count : 0} users
                </b>
              </div>
              <div
                className={styles.bckDiv}
              >
                <button
                  type="button"
                  className={styles.back_}
                  onClick={backToSearch}
                >
                  Back to search
                </button>
              </div>
            </div>
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
            {
              (pageCount > 1) && (
                <input
                  type="button"
                  className={styles.nav}
                  value="previous"
                  onClick={(e) => handlePervious(e)}
                />
              )
            }
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