import styles from './searchBar.module.css'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Router, { useRouter } from 'next/router'
import config from '../../lib/config';
import { getUsers } from '../../lib/action'

const SearchBarContainer: React.FC<any> = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const page:number = 1;
    await getUsers(data, page);

    Router.push({
      pathname: '/feeds',
      query: {data: data.value}
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.miniDiv}>
        <Image
          height={30}
          src="/images/icons8-search-150.svg"
          width={30}
        />
        <p
          className={styles.headerLabel}
        >
          Search more than <b>227M</b> repositories
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={styles.barDiv}
        >
          <input
            className={styles.searchBarInput}
            placeholder="Search GitHub"
            {...register('value')}
          />
          <input
            className={styles.searchButton}
            type="submit"
            value="Search"
          />
        </div>
      </form>
      <p
        className={styles.proTips}
      >
        ProTip! For an <a href="#">advanced search</a>, use some of our <a href="#">prefixes</a>
      </p>
    </div>
  )
}

export default SearchBarContainer
