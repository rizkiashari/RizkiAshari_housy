import styles from './NotFound.module.css'
import notfoundLogo from '../../assets/logoIcon/NotFound.svg'
const NotFound = () => {
  return (
    <div className={styles.Center}>
      <img src={notfoundLogo} alt="IconNotFound" className={styles.Images} />
      <div>
        <p>House not Found</p>
      </div>
    </div>
  )
}

export default NotFound
