import Header from '../components/header'
import Teacher from '../components/teacher'
import Newspart from '../components/newspart'
import Footer from '../components/footer'
import styles from '../styles/components/page.module.css'
import './globals.css'
import Show from '../components/show'
export default function Home () {

  return (
    <div className={styles.container}>

      <Header />
      <Show />
      <Teacher />
      <Newspart></Newspart>
      <Footer />
    </div>
  )
}