import Image from 'next/image'
import '../styles/components/footer.css'
import React from 'react'
export default function Footer () {

  return (
    <>
      <div className="foot-bar"></div>
      <div className="footer">
        <div className="t-c" style={{ position: 'relative' }}>
          <span id="_ideConac" style={{ float: 'left' }}>
            <a href="https://bszs.conac.cn/sitename?method=show&id=DD1223430023BDB0E05310291AAC6BD6" target="_blank">
              <img id="imgConac" vspace="0" hspace="0" border="0" src="/blue.png" data-bd-imgshare-binded="1" />
            </a>
          </span>
          <div className="foot-content">
            <p>地址：杭州市钱塘区白杨街道2号大街1158号 邮编:310018 电话查号:86915114</p>
            <p>党委宣传部制作维护 制作：曹瀚洋 郏宣博 徐宇杰 黄佳丽 陶鑫</p>
            <p>推荐使用Google浏览器、火狐浏览器、360浏览器（极速模式）</p>
            <p>Copyright© 2010 杭州电子科技大学版权所有 All right reserved</p>
            <div style={{ textAlign: 'center', marginTop: '30px', color: 'white', width: "100%" }}>
              <a style={{ color: '#c8ffff', textDecoration: 'none' }} rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
                浙ICP备12028388号-2
              </a>
            </div>
          </div>
          <div className="dingyue">
            <img src="/dingyue.png" />
            <span className="df-text">杭电官方微博</span>
          </div>
          <div className="fuwu">
            <img src="/fuwu.jpg" />
            <span className="df-text">杭电官方微信</span>
          </div>

        </div>
      </div>
    </>
  )
};
