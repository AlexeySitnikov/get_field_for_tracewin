import { DownloadFile } from '../DownloadFile/DownloadFile'
import style from './style.module.css'

export function Header({ setSelectedFiles }) {
  return (
    <div className={style.headerStyle}>
      <DownloadFile setSelectedFiles={setSelectedFiles} />
    </div>
  )
}
