import '../styles/components/header.css'
import React from 'react'
const Changebar = () => {
  return (
    <div className="change-bar">
      <div className="h-content-change" frag="面板1">

        <div className="search" frag="窗口2">
          <form method="post" action="https://www.hdu.edu.cn/_web/_search/api/search/new.rst?locale=zh_CN&request_locale=zh_CN&_p=YXM9NCZ0PTMwJmQ9ODkmcD0xJm09U04m" target="_blank" >
            <input type="text" name="keyword" />
            <input name="submit" type="submit" className="sub-btn" value="" />
          </form>
        </div>
      </div>
    </div>
  )
}

const LogoBar = () => {
  return (
    <div className="logo-bar">
      <div className="h-content">
        <img src="/logo.png" className="logo-img" />
        <img src="/motto.png" className="motto-img" />
      </div>
    </div>
  )
}

export default function Home () {
  return (
    <div className='header'>
      <Changebar />
      <LogoBar />
    </div>
  )
}
