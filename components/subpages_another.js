import styles from '../styles/components/subpages_another.module.css'
import { useState, useEffect } from 'react'
function handleClick (item, active) {
    const nextPageData = item.id
    window.location.href = 'https://hdums.hdu.edu.cn/gw/home/news?' + "active=" + encodeURIComponent(active) + "&data=" + encodeURIComponent(nextPageData)
}
export default function Subpages_anothor (props) {
    //获取数据
    const [data, setdata] = useState(null)
    const activeSlide = props.data
    useEffect(() => {
        let url = "https://hdums.hdu.edu.cn/gw/api/" + activeSlide
        // alert(url)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setdata(response.data),
                    console.log("fetch_data", response.data)
            }
            )
    }, [])
    return (
        <div className={styles.anothorContainer}>
            <div className={styles.nav}>
                <span className={styles.othernews}>其他新闻</span>
                {/* <a href='#' className={styles.morenews}>更多新闻</a> */}
            </div>
            <div className={styles.content}>
                {(data !== null && data !== undefined) ?
                    (
                        data.map((item, index) => {
                            // alert(data.length)
                            if (item.id === 1) return
                            if (index % 2 == 1) {
                                if (index === data.length - 1) {
                                    return (
                                        <>
                                            <div className={styles.item} key={index} >
                                                <ul >
                                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                                    <li className={styles.resource} key={item.id}>来源： {item.resource}     时间： {item.time}  </li>
                                                    <a onClick={() => handleClick(item, activeSlide)}>
                                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                                    </a>
                                                </ul>
                                            </div>
                                            <div className={styles.item} key={index} >
                                                <ul >
                                                    <li className={styles.title} ></li>
                                                    <li className={styles.resource} ></li>

                                                </ul>
                                            </div>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <div className={styles.item} key={index}>
                                                <ul >
                                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                                    <li className={styles.resource} key={item.id}>来源： {item.resource}    时间： {item.time}</li>
                                                    <a onClick={() => handleClick(item, activeSlide)}>
                                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                                    </a>
                                                </ul>
                                            </div>
                                            <div className={styles.Cutoff} ></div>
                                        </>
                                    )
                                }
                            }
                            else {

                                return (
                                    <div className={styles.item} key={index}>
                                        <ul >
                                            <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                            <li className={styles.resource} key={item.id}>来源： {item.resource}     时间： {item.time}</li>
                                            <a onClick={() => handleClick(item, activeSlide)}>
                                                <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                            </a>
                                        </ul>
                                    </div>
                                )


                            }

                        })) : console.log("NULL")
                }


                {/* 
                <div className={styles.item}>
                    {(data || []).filter(item => item.id === 3).map((item) => {
                        return (
                            <>
                                <ul>
                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                    <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                                    <a onClick={() => handleClick(item, activeSlide)}>
                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                    </a>
                                </ul>
                            </>
                        )
                    })}
                </div>
                <div className={styles.item}>
                    {(data || []).filter(item => item.id === 4).map((item) => {
                        return (
                            <>
                                <ul>
                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                    <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                                    <a onClick={() => handleClick(item, activeSlide)}>
                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                    </a>
                                </ul>
                            </>
                        )
                    })}
                </div>
                <div className={styles.item}>
                    {(data || []).filter(item => item.id === 5).map((item) => {
                        return (
                            <>
                                <ul>
                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                    <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                                    <a onClick={() => handleClick(item, activeSlide)}>
                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                    </a>
                                </ul>
                            </>
                        )
                    })}
                </div>
                <div className={styles.item}>
                    {(data || []).filter(item => item.id === 6).map((item) => {
                        return (
                            <>
                                <ul>
                                    <li onClick={() => handleClick(item, activeSlide)} className={styles.title} key={item.id}>{item.title}</li>
                                    <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                                    <a onClick={() => handleClick(item, activeSlide)}>
                                        <li className={styles.datacontent} key={item.id}>{item.content}</li>
                                    </a>
                                </ul>
                            </>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}
