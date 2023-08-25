import styles from '../styles/components/teacher.module.css'
import { useState } from 'react'
import '../styles/scollerbar.css'
function Toteacher (num) {
  window.location.href = 'https://hdums.hdu.edu.cn/home?num=' + encodeURIComponent(num)
}
function wrapTextWithLineBreaks (text, maxLineLength) {
  // alert("")
  const words = text.split(' ')
  let currentLine = ''
  const lines = []
  console.log("words", words)
  for (const word of words) {

    if (currentLine.length + word.length < maxLineLength) {
      // alert("")
      currentLine += (currentLine.length >= 0 ? ' ' : '') + word
    } else {
      currentLine.length !== 0 ?
        lines.push(currentLine) : currentLine = ''
      currentLine = word
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }
  console.log("line", lines)
  return lines.join('\n')
}
export default function TeacherItem (props) {
  const { parameter } = props
  const { MaxwordsPerline, setMaxwordsPerline } = useState(25)
  const keywordArry = wrapTextWithLineBreaks(parameter.keyword, 22)
  return (
    <div className={styles.TeacherItemContainer}>
      <div id='top' className={styles.top} onClick={() => Toteacher(parameter.num)}>
        <div id='left' className={styles.left}>
          <img id='img' src={"data:image/jpeg;base64," + parameter.picture_b64} alt="" className={styles.photo} />
          <div id='base' className={styles.base}>
            <div id='name' className={styles.name}>{parameter.name}</div>
            <div id='addr' className={styles.address}>{parameter.address}</div>
          </div>
          <img id='bigger' src={"data:image/jpeg;base64," + parameter.picture_b64} alt="" className={styles.biggerphoto} />
        </div>
        <div className={styles.logo}>
          <img src="/hdulogo.jpg" alt="" />
          杭电名师
        </div>
      </div>
      <div id='cut' className={styles.cutOff}></div>
      <div id='tag' className={styles.tag} onClick={() => Toteacher(parameter.num)}>{keywordArry}</div>
      <div id='cutr' className={styles.cutOff}></div>
      <div id='prof' className={styles.profile}>{parameter.intro}</div>
    </div>
  )

}