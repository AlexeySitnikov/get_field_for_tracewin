/* eslint-disable camelcase */

import { useEffect, useState } from 'react'

const { TxtReader } = require('txt-reader')

export const useRows = ({ selectedFiles }) => {
  const [Ex, setEx] = useState([])
  const [Ey, setEy] = useState([])
  const [Ez, setEz] = useState([])

  useEffect(() => {
    if (selectedFiles) {
      const files = [...Array.from(selectedFiles)]
      const fullX = []
      const fullY = new Array(files.length)
      const fullZ = new Array(files.length)

      files.forEach((file, index) => {
        const reader = new TxtReader()
        let linesNumber = 0
        reader.loadFile(file).then((res) => {
          linesNumber = res.result
        })
          .then(() => {
            reader.getLines(3, linesNumber)
              .then((r) => {
                const x = []
                const y = []
                const z = []

                for (let i = 0; i < r.result.length; i += 1) {
                  x.push(`${r.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[3]}\n`)
                  y.push(`${r.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[5]}\n`)
                  z.push(`${r.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[7]}\n`)
                }
                // console.log(x)
                fullX.push(x)
                console.log(fullX)
                fullY[index].push(y)
                fullZ[index].push(z)
              })
          })
      })
      setEx([...fullX])
      setEy([...fullY])
      setEz([...fullZ])
    }
  }, [selectedFiles])

  return {
    Ex,
    Ey,
    Ez,
  }
}
