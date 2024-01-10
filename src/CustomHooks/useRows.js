import { useEffect, useState } from 'react'
import { Download } from '../Dowload/Download'
// import { Download } from '../Dowload/Download'

const { TxtReader } = require('txt-reader')

export const useRows = ({ selectedFile }) => {
  const [arrayOfStrings, setArrayOfStrings] = useState([])
  const [undoArrayOfStrings, setUndoArrayOfString] = useState([])

  useEffect(() => {
    if (selectedFile) {
      const reader = new TxtReader()
      let l = 0
      // let asd = []
      reader.loadFile(selectedFile).then((res) => {
        l = res.result
      })
        .then(() => {
          reader.getLines(1, l)
            .then((r) => {
              const asd = []
              // .split('\n')
              // .map((el) => el.trim())
              // .map((el) => el.replace(/\s\s+/g, ' '))
              // .filter((el) => el.length > 0)
              r.result.forEach((element) => (
                asd.push(`${element}\n`)
              ))
              Download(asd, 'asd.txt')
              // setArrayOfStrings(r.result)
            })
        })

      // const reader = new FileReader()
      // reader.readAsText(selectedFile)
      // // reader.readAsText(selectedFile)
      // console.log(reader)

      // reader.onload = () => {
      //   const asd = reader.result
      //     .split('\n')
      //     .map((el) => el.trim())
      //     .map((el) => el.replace(/\s\s+/g, ' '))
      //     .filter((el) => el.length > 0)
      //     .map((element) => (`${element.split(' ')[2]}\n`))
      //   Download(asd, 'asd.txt')
      // }
    }
  }, [selectedFile])

  // useEffect(() => {
  //   console.log(arrayOfStrings)
  //   Download(arrayOfStrings, 'asd.txt')
  // }, [arrayOfStrings])

  const deleteString = (id) => {
    setArrayOfStrings((element) => element.filter((el) => (el.id !== id)))
    setUndoArrayOfString((prev) => ([
      arrayOfStrings.find((element) => (element.id === id)),
      ...prev,
    ]))
  }

  const onClickUndoButton = () => {
    // e.preventDefault()
    // e.stopPropagation()
    const firstElement = undoArrayOfStrings[0]
    if (undoArrayOfStrings.length > 0) {
      const foundIndex = arrayOfStrings.findIndex((element) => (
        element.index === firstElement.index + 1
      ))
      if (foundIndex > -1) {
        setArrayOfStrings([...arrayOfStrings.toSpliced(foundIndex, 0, firstElement)])
        setUndoArrayOfString([...undoArrayOfStrings.toSpliced(0, 1)])
      }
    }
  }

  const getUndoSteps = () => undoArrayOfStrings.length

  return {
    arrayOfStrings,
    onClickUndoButton,
    deleteString,
    getUndoSteps,
  }
}
