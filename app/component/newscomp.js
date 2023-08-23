import styles from '../styles/newscomp.module.css'
import { useState, useEffect } from 'react';




export default function Newscomp(){
 
  const [data, setdata] = useState(null);
  useEffect(() => { 
    fetch("https://hdums.hdu.edu.cn/gw/api/newshdu")
    .then(response=>response.json())
    .then(response=>
      {
      setdata(response.data),
      console.log("fetch_data",response.data)
        } 
      )}, []);
    return(
        <div className={styles.content}>
            <div className={styles.content1}>
                <div className={styles.items1}>
                    {(data||[]).map((item)=>{
                      return(
                      <ul>
                        <li key={item.id}>{item.content}</li>
                      </ul>
                      )
                  })}
                </div>
                <div className={styles.items2}>
                    
                </div>
            </div>
            <div className={styles.content2}>
            </div>
        </div>
    )
}