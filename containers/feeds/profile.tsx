import styles from './feeds.module.css'

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

export default ProfileSection