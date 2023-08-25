'use client'
import styles from '../styles/components/teacher.module.css'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import '../styles/swiper2.css'
import titleicon from '../public/newstitleicon.png'
import 'swiper/css'
import "swiper/css/navigation"
import TeacherItem from './techerItem'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Teacher () {
  const [count, setcount] = useState(0)
  const [newone, setnewone] = useState(0)
  const [IsMouseInside, setMouseInside] = useState(false)
  const [Get, setget] = useState(null)
  const [IsSlideChange, setSlideChange] = useState(0)
  const [swiperdom, setswiperdom] = useState(null)
  const [Active, setActive] = useState(null)
  const swiper2 = useRef()
  // setover(swiper2)
  const handleMouseEnter = () => {
    // alert("IN")
    setMouseInside(true)
  }

  const handleMouseLeave = () => {
    setMouseInside(false)
    // alert("OUT")
  }

  useEffect(() => {
    fetch("https://hdums.hdu.edu.cn/gw/api/teacher")
      .then(response => response.json())
      .then(data => {
        setget(data.data)
        setSlideChange(!IsSlideChange)
        console.log("data", data.data)
      })
      .catch(error => {
        console.error("fetching error", error)
      })
  }, [])

  let time = 0
  const next = () => {
    // time == 2 ? (
    document.querySelector(".swiper2 .swiper-button-next").click(),
      setnewone(newone + 1)
    // ) : time + 1
  }
  const prev = () => {
    document.querySelector(".swiper2 .swiper-button-prev").click()
    setnewone(newone - 1)
  }
  //给active-slide下的teacheritem添加，卸载类名
  useEffect(() => {//设定计时器
    const intervalId = setInterval(() => {
      console.log(IsMouseInside)
      IsMouseInside ?
        (
          console.log("MouseIn")
        ) :
        (
          document.querySelector(".swiper2 .swiper-button-next").click(),
          setnewone(newone + 1)
        )
      setcount(count + 1)
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [count, IsSlideChange])
  useEffect(() => {//改变active样式
    const active = document.querySelector(".swiper2 .swiper-slide-active .teacher_TeacherItemContainer__REjCC")
    // setActive(swiperdom)
    // active.ref = swiper2
    // console.log("activeref", swiper2)
    const nextone = document.querySelector(".swiper2 .swiper-slide-next .teacher_TeacherItemContainer__REjCC")
    const prevone = document.querySelector(".swiper2 .swiper-slide-prev .teacher_TeacherItemContainer__REjCC")
    active !== null ?
      active.classList.add("activeItem") : console.log("NUll")
    const activeSlide = document.querySelector(".swiper2 .swiper-slide-active")
    // console.dir(activeSlide.style)

    return () => {
      active !== null ?
        active.classList.remove("activeItem") : setnewone(newone + 1)
    }

  }, [newone, IsSlideChange, Active])



  return (
    <section className={styles.teacher}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={styles.ellibgc}>
        <div className={styles.title}>
          <img src="/newstitleicon.png" className={styles.titleicon} alt=''></img>
          <div className={styles.at}>
            <span className={styles.ctitle}>团队成员</span>
            <span className={styles.stitle}>/Team members</span>
          </div>
        </div>
        <div className="swiper2container">
          <Swiper
            observeSlideChildren={true}
            onSwiper={(swiper) => setswiperdom(swiper)}

            // onSwiper={(swiper) => console.log(swiper)}
            // onUpdate={swiper2}
            simulateTouch={false}
            // ref={swiper2}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            // spaceBetween={0}
            className="swiper2"
            // initialSlide={0}
            id='swiper2'
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            effect={'coverflow'}
            navigation={true}
            modules={[Navigation]}
          // autoplay={{ delay: 5000 }}
          >
            {
              Get !== null ?
                (
                  console.log("GET"),
                  Get.map((item, index) => {
                    // swiper2.update()
                    // swiperdom.update()
                    // console.log("swiper", swiperdom)
                    // swiperdom.update()
                    swiperdom.updateActiveIndex()
                    return (
                      <SwiperSlide key={index} className={styles.swiperItem} >
                        <TeacherItem parameter={item} >
                        </TeacherItem>
                      </SwiperSlide>
                    )
                  })
                )
                : console.log("GETNULL")
            }



          </Swiper>
          <div className="swiper-button-prev" id='pre' onClick={prev}></div>
          <div className="swiper-button-next" id='next' onClick={next}
          ></div>
        </div>
      </div>

    </section >
  )
}