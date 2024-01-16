/* eslint-disable camelcase */

import { useEffect } from 'react'

const { TxtReader } = require('txt-reader')

export const useRows = ({ selectedFiles }) => {
  // const [Ex, setEx] = useState()

  const getFiles = () => [...Array.from(selectedFiles)]

  useEffect(() => {
    const getLinesNumber = async (row) => (
      new Promise((resolve) => {
        const reader = new TxtReader()
        reader.loadFile(row).then((res) => {
          resolve(res.result)
        })
      })
    )

    const getLines = (row, linesNumber) => (
      new Promise((resolve) => {
        const reader = new TxtReader()
        reader.loadFile(row).then(() => {
          reader.getLines(3, linesNumber).then((res) => {
            resolve(res)
          })
        })
      })
    )

    const fillArray = (row) => (
      new Promise((resolve) => {
        const as = []
        for (let i = 0; i < row.length; i += 1) {
          as.push(`${row[i].trim().replace(/\s\s+/g, ' ').split(' ')[2]}\n`)
        }
        resolve(as)
      })
    )

    // const f = new Promise((resolve) => {
    //   const files = [...Array.from(selectedFiles)]
    //   const fullX = []
    //   const fullY = []
    //   const fullZ = []
    //   files.forEach((row, index) => {
    //     const reader = new TxtReader()
    //     let linesNumber = 0
    //     reader.loadFile(row).then((res) => {
    //       linesNumber = res.result
    //     })
    //       .then(() => {
    //         reader.getLines(3, linesNumber)
    //           .then((response) => {
    //             resolve(response)
    //             fullX[index] = []
    //             fullY[index] = []
    //             fullZ[index] = []

    //             for (let i = 0; i < response.result.length; i += 1) {
    //               fullX[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ')
    // .split(' ')[2]}\n`)
    //               fullY[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ')
    // .split(' ')[5]}\n`)
    //               fullZ[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ')
    // .split(' ')[7]}\n`)
    //             }
    //           })
    //       })
    //   })
    // })

    if (selectedFiles) {
      const files = getFiles()
      Promise.all([...files.map((row) => getLinesNumber(row))])
        .then((res) => {
          res.forEach((file, index) => {
            getLines(files[index], file.lineCount)
              .then((response) => {
                fillArray(response.result)
                  .then((r) => (console.log(r)))
              })
          })
        })
    }
  }, [selectedFiles])

  return {
    // Ex,
    // Ey,
    // Ez,
  }
}
