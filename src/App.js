import { useState } from 'react'
import './App.css'
import style from './style.module.css'
import { Header } from './Header/Header'
import { Main } from './Main/Main'

function App() {
  const [selectedFiles, setSelectedFiles] = useState(null)

  if (selectedFiles) {
    return (
      <div className={style.mainPage}>
        <Header setSelectedFiles={setSelectedFiles} />
        <Main selectedFiles={selectedFiles} />
      </div>
    )
  }

  return (
    <div className={style.donloadOnlyPage}>
      <Header setSelectedFiles={setSelectedFiles} />
    </div>
  )
}

export default App
