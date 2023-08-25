'use client'
import Newshdu from './newshdu'
import Newscomp from './newscomp'
import Newsmedia from './newsmedia'
import Newsnotice from './newsnotice'
import { useEffect, useState } from 'react'
import styles from '../styles/components/newspart.module.css'

const ParentComponent = () => {
  //创建一个父组件便于子组件的跳转
  const [activeTab, setActiveTab] = useState('newshdu')
  useEffect(() => { document.querySelector("#" + activeTab).classList.add(styles.active) }, [])

  const handleTabClick = (tab) => {
    // 移除之前选中的标签的样式
    document.querySelector("#" + activeTab).classList.remove(styles.active)
    document.querySelector("#container").classList.remove(styles.pagein)
    document.querySelector("#container").classList.add(styles.pageout)
    // 设置新的选中标签
    setActiveTab(tab)

    // 在 setState 的回调函数中添加选中标签的样式
    setTimeout(() => {
      document.querySelector("#" + tab).classList.add(styles.active)
      setTimeout(() => {
        document.querySelector("#container").classList.remove(styles.pageout)
        document.querySelector("#container").classList.add(styles.pagein)
      }, 300)

    })
  }


  return (
    <>
      <div className={styles.navi} id='nav'>
        <li className={styles.subnav} id='newshdu' onClick={() => handleTabClick('newshdu')}><a>新闻动态</a></li>
        <li className={styles.subnav} id='newscomp' onClick={() => handleTabClick('newscomp')}><a>研究成果</a></li>
        <li className={styles.subnav} id='newsmedia' onClick={() => handleTabClick('newsmedia')}><a>叙事者专栏</a></li>
        <li className={styles.subnav} id='newsnotice' onClick={() => handleTabClick('newsnotice')}><a>八面来风</a></li>
        <li className={styles.subnav} id='aboutus' onClick={() => handleTabClick('aboutus')}><a>关于我们</a></li>
      </div>
      <div className={styles.container} id='container'>
        {activeTab === 'newshdu' && <Newshdu data={activeTab} />}
        {activeTab === 'newscomp' && <Newscomp data={activeTab} />}
        {activeTab === 'newsmedia' && <Newsmedia data={activeTab} />}
        {activeTab === 'newsnotice' && <Newsnotice data={activeTab} />}
      </div>
    </>
  )
}
export default ParentComponent