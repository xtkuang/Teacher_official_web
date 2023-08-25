import styles from '../styles/components/subpages_main.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import img from '../public/新闻图片.png'
// import '../app/News/news.html'
function handleClick (item, active) {
  const nextPageData = item.id
  window.location.href = 'https://hdums.hdu.edu.cn/gw/home/news?' + "active=" + encodeURIComponent(active) + "&data=" + encodeURIComponent(nextPageData)
}
export default function Subpages_main (props) {
  //获取数据
  const [data, setdata] = useState(null)
  const activeSlide = props.data
  useEffect(() => {
    fetch("https://hdums.hdu.edu.cn/gw/api/" + activeSlide)
      .then(response => response.json())
      .then(response => {
        setdata(response.data),
          console.log("fetch_data", response.data)
      }
      )
  }, [])

  return (
    <>
      {(data || []).filter(item => item.id === 1).map((item) => {
        return (
          <>
            <div className={styles.word}>
              <ul>
                <li className={styles.title} key={item.id} onClick={() => handleClick(item, activeSlide)}>{item.title}</li>
                <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                <a >
                  <li className={styles.content} key={item.id}>{item.content}</li>
                </a>
                <a onClick={() => handleClick(item, activeSlide)} className={styles.knowmore}>了解详情</a>
              </ul>
            </div>

            <div className={styles.picture} >
              {/* <Image src={img}></Image> */}
              <img src={"data:image/jpeg;base64," + item.picture_b64} alt="" />
            </div>
          </>
        )
      })}
    </>
  )
} 