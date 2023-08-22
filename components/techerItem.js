import styles from '@/styles/components/teacher.module.css'
import { useState } from 'react'

function wrapTextWithLineBreaks (text, maxLineLength) {
  const words = text.split(' ')
  let currentLine = ''
  const lines = []

  for (const word of words) {
    if (currentLine.length + word.length <= maxLineLength) {
      currentLine += (currentLine.length > 0 ? ' ' : '') + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }

  return lines.join('\n')
}
export default function TeacherItem (props) {
  const { parameter } = props
  const { MaxwordsPerline, setMaxwordsPerline } = useState(20)
  const keywordArry = wrapTextWithLineBreaks(parameter.keyword, MaxwordsPerline)
  return (
    <div className={styles.TeacherItemContainer}>
      <div id='top' className={styles.top}>
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
      <div id='tag' className={styles.tag}>{keywordArry}</div>
      <div id='cutr' className={styles.cutOff}></div>
      <div id='prof' className={styles.profile}>{parameter.intro}</div>
    </div>
  )

}