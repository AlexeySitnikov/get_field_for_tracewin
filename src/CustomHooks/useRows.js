/* eslint-disable camelcase */

import { useEffect, useState } from 'react'

const { TxtReader } = require('txt-reader')

export const useRows = ({ selectedFiles }) => {
  const [Ex, setEx] = useState([])
  const [lines, setLines] = useState([])
  const [data, setData] = useState([])

  const getFiles = () => [...Array.from(selectedFiles)]

  const getLinesNumber = (file) => (
    new Promise((resolve) => {
      const reader = new TxtReader()
      reader.loadFile(file).then((res) => {
        resolve(res.result)
      })
    })
  )

  const getData = (file, linesNumber) => (
    new Promise((resolve) => {
      const reader = new TxtReader()
      reader.loadFile(file).then(async () => {
        reader.getLines(3, linesNumber.value.lineCount).then((res) => {
          resolve(res)
        })
      })
    })
  )

  useEffect(() => {
    // const fillArray = (row) => (
    //   new Promise((resolve) => {
    //     const as = []
    //     for (let i = 0; i < row.length; i += 1) {
    //       as.push(`${row[i].trim().replace(/\s\s+/g, ' ').split(' ')[2]}\n`)
    //     }
    //     resolve(as)
    //   })
    // )

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

    if (selectedFiles.length) {
      const files = getFiles()
      const linesNumber = Promise.all([...files.map(async (file, index) => {
        const currentLine = {
          value: await getLinesNumber(file),
          id: index,
        }
        return currentLine
      }),
      ])

      linesNumber.then((result) => {
        setLines(result)
      })
    }
  }, [JSON.stringify(selectedFiles)])

  useEffect(() => {
    if (lines.length) {
      const files = getFiles()
      const allData = Promise.all([...files.map(async (file, index) => {
        const line = lines.find((el) => el.id === index)
        const currentData = {
          value: await getData(file, line),
          id: index,
        }
        return currentData
      }),
      ])

      allData.then((result) => {
        setData(result)
      })
    }
  }, [JSON.stringify(lines)])

  useEffect(() => {
    if (data.length) {
      const fullX = []
      console.log(data)
      data.forEach((element) => {
        for (let i = 0; i < element.value.result.length; i += 1) {
          fullX.push(`${element.value.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[2]}\n`)
        }
      })
      setEx(fullX)
    }
  }, [JSON.stringify(data)])

  return {
    lines,
    data,
    Ex,
    // Ey,
    // Ez,
  }
}
