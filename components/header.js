import '../styles/components/header.css'
import React from 'react'
const Changebar = () => {
  return (
    <div className="change-bar">
      <div className="h-content-change" frag="面板1">
        <div className="check" frag="窗口1">
          <a href="https://en.hdu.edu.cn/" target="_blank">ENGLISH</a>
          <a href="http://www0.hdu.edu.cn/index_pc.html" target="_blank">旧版</a>
          <a href="http://cas.hdu.edu.cn/cas/login?service=http%3A%2F%2F106.14.9.60%3A3000%2Fcommon%2FgetTicket" target="_blank">在线投稿</a>
        </div>
        <div className="search" frag="窗口2">
          <form method="post" action="/_web/_search/api/search/new.rst?locale=zh_CN&request_locale=zh_CN&_p=YXM9NCZ0PTMwJmQ9ODkmcD0xJm09U04m" target="_blank" >
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
