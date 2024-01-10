import { useState } from 'react'

export const useDimensions = () => {
  const [step, setStep] = useState(0.25)
  const [dimension, setDimension] = useState('mm')

  return {
    step, setStep, dimension, setDimension,
  }
}
