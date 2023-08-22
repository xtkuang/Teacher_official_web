'use client'
import Newshdu from './newshdu'
import Newscomp from './newscomp';
import Newsmedia from './newsmedia';
import Newsnotice from './newsnotice'
import { useState } from 'react';
import styles from '../styles/newspart.module.css'


const ParentComponent = () => {
  
  const [activeTab, setActiveTab] = useState('newshdu');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className={styles.nav}>
        <li className={styles.subnav} onClick={() => handleTabClick('newshdu')}><a>杭电要闻</a></li>
        <li className={styles.subnav} onClick={() => handleTabClick('newscomp')}><a>综合新闻</a></li>
        <li className={styles.subnav} onClick={() => handleTabClick('newsmedia')}><a>媒体关注</a></li>
        <li className={styles.subnav} onClick={() => handleTabClick('newsnotice')}><a>通知公告</a></li>
      </div>
      {activeTab === 'newshdu' && <Newshdu />}
      {activeTab === 'newscomp' && <Newscomp />}
      {activeTab === 'newsmedia' && <Newsmedia />}
      {activeTab === 'newsnotice' && <Newsnotice />}
   
    </>
  );
};
export default ParentComponent;