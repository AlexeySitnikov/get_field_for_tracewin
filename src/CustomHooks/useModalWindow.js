import { useState } from 'react'
// import { GetModulationForCST } from '../GetModulationForCST/GetModulationForCST'
// import { GetModulationByPoints } from '../GetModulationByPoints/GetModulationByPoints'

export const useModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(null)

  const closeModalClickHandler = () => {
    setIsModalOpen(false)
  }

  const openModalClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsModalOpen(true)
    // if (e.target.id === 'CST') {
    // setContent(<GetModulationForCST arrayOfStrings={arrayOfStrings} />)
    // }
    // if (e.target.id === 'points') {
    // setContent(<GetModulationByPoints arrayOfStrings={arrayOfStrings} />)
    // }
  }

  return {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler, openModalClickHandler,
  }
}
