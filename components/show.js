'use client'

import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
import '../styles/swiper1.css'
import styles from '@/styles/components/show.module.css'
import 'swiper/css'
import "swiper/css/navigation"


export default function Show () {
  const [swiperkey, setswiperkey] = useState(0)
  const [nav, setnav] = useState(null)
  const [button, setbutton] = useState(true)
  const [MouseInside, setMouseInside] = useState(false)
  const handleMouseEnter = () => {
    // alert("IN")
    setMouseInside(true)
  }
  const handleReRender = () => {
    // 更新 key 值来触发重新渲染
    setswiperkey(prevKey => prevKey + 1)
  }
  const handleMouseLeave = () => {
    setMouseInside(false)
    // alert("OUT")
  }
  useEffect(() => {
    MouseInside ?
      (
        document.querySelector("#swiper1 .swiper-button-prev").style.opacity = 1,
        document.querySelector("#swiper1 .swiper-button-next").style.opacity = 1
      )
      :
      (
        document.querySelector("#swiper1 .swiper-button-prev").style.opacity = 0,
        document.querySelector("#swiper1 .swiper-button-next").style.opacity = 0
      )


  }, [MouseInside])
  useEffect(() => {
    fetch("https://hdums.hdu.edu.cn/gw/api/navswiper")
      .then(response => response.json())
      .then(data => {
        setnav(data.data)
        console.log("fecth_nav", data.data)
      }).catch(error => console.log("fetch_nav error:", error))
    setTimeout(() => {
      handleReRender()
    }, 2000)
  }, [])
  return (
    <section className={styles.myswiper}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}>
      <Swiper
        // ref={swiper1}
        key={swiperkey}
        className={styles.swiper1}
        id='swiper1'
        loop={true}
        initialSlide={0}
        centeredSlides={false}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={'coverflow'}
        navigation={true}
        modules={[Navigation]}
        autoplay={{ delay: 3000 }}
      >
        {
          nav === null ? (
            console.log("null")
          ) : (
            nav.map((item, index) => {
              console.log("nav")
              return (
                <SwiperSlide key="index" className={styles.swiperItem}>
                  <img src={"data:image/jpeg;base64," + item.picture_b64} alt="" />
                </SwiperSlide>
              )
            })
          )
        }
      </Swiper>
    </section>
  )
}