/* eslint-disable camelcase */

import { useEffect } from 'react'

const { TxtReader } = require('txt-reader')

export const useRows = ({ selectedFiles }) => {
  // const [Ex, setEx] = useState()

  useEffect(() => {
    const f = new Promise((resolve) => {
      const files = [...Array.from(selectedFiles)]
      const fullX = []
      const fullY = []
      const fullZ = []
      files.forEach((row, index) => {
        const reader = new TxtReader()
        let linesNumber = 0
        reader.loadFile(row).then((res) => {
          linesNumber = res.result
        })
          .then(() => {
            reader.getLines(3, linesNumber)
              .then((response) => {
                fullX[index] = []
                fullY[index] = []
                fullZ[index] = []

                for (let i = 0; i < response.result.length; i += 1) {
                  fullX[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[2]}\n`)
                  fullY[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[5]}\n`)
                  fullZ[index].push(`${response.result[i].trim().replace(/\s\s+/g, ' ').split(' ')[7]}\n`)
                }
              })
          })
      })
      resolve(fullX)
    })

    if (selectedFiles) {
      const a = () => {
        f.then((result) => console.log(result[0]))
      }
      a()
      // setEx([1])
    }
  }, [selectedFiles])

  return {
    // Ex,
    // Ey,
    // Ez,
  }
}
