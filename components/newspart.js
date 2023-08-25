import Image from 'next/image'
import styles from '../styles/components/newspart.module.css'
import titleicon from '../public/newstitleicon.png'
import ParentComponent from '../components/parentcomponent'


export default function Newspart () {
  return (
    <>
      <div className={styles.bgc} >
        <div className={styles.ellibgc}>
        </div>
        <div className={styles.news}>
          <div className={styles.title}>
            <img src="/newstitleicon.png" className={styles.titleicon} alt=''></img>
            <div className={styles.at}>
              <span className={styles.ctitle}>新闻动态</span>
              <span className={styles.stitle}>/News Trends</span>
            </div>
          </div>
          <div className={styles.content}>
            <ParentComponent></ParentComponent>
          </div>
        </div>
      </div>
    </>

  )
}
