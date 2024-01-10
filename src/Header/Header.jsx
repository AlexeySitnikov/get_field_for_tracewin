import { DownloadFile } from '../DownloadFile/DownloadFile'
import style from './style.module.css'

export function Header({ setSelectedFile }) {
  return (
    <div className={style.headerStyle}>
      <DownloadFile setSelectedFile={setSelectedFile} />
    </div>
  )
}
