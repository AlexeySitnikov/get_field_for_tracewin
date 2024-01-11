import { useRef } from 'react'
import filePickerLogo from '../Pics/1.png'
import style from './style.module.css'

export function DownloadFile({ setSelectedFiles }) {
  const pickerRef = useRef(null)

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    setSelectedFiles(e.target.files)
  }

  return (
    <div>
      <button type="button" onClick={pickFileHandler}>
        <img className={style.filePicker} src={filePickerLogo} alt="filePickerLogo" />
      </button>
      <input type="file" onChange={clickHandlerFileChange} ref={pickerRef} className={style.hiddenInput} multiple />
    </div>
  )
}
