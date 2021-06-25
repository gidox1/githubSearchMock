import styles from './searchBar.module.css'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Router, { useRouter } from 'next/router'
import config from '../../lib/config';

const SearchBarContainer: React.FC<any> = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const query = 'in:user&order=desc&page=1&per_page=10';

  const onSubmit = async (data) => {
    await axios.get<any>(`${config.apiBaseUrl}/search/users?q=${data.value}+${query}`)
      .then(async (response) => {
        let data = JSON.stringify(await response.data);
        if (typeof window !== "undefined") {
          localStorage.setItem("data", data)
        }
        Router.push({
          pathname: '/feeds',
        })
      });
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
