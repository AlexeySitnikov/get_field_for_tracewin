import { useState } from 'react'
import './App.css'
import style from './style.module.css'
import { Header } from './Header/Header'
import { Main } from './Main/Main'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  if (selectedFile) {
    return (
      <div className={style.mainPage}>
        <Header setSelectedFile={setSelectedFile} />
        <Main selectedFile={selectedFile} />
      </div>
    )
  }

  return (
    <div className={style.donloadOnlyPage}>
      <Header setSelectedFile={setSelectedFile} />
    </div>
  )
}

export default App
