import { useEffect } from 'react'
import { useModalWindow } from '../CustomHooks/useModalWindow'
import { useRows } from '../CustomHooks/useRows'
// import { SingleRow } from '../ListOfStrings/SingleRow'
import { Modal } from '../Modal/Modal'
import style from './style.module.css'

export function Main({ selectedFiles }) {
  const {
    Ex,
    Ey,
    Ez,
    // lines,
    // data,
  } = useRows({ selectedFiles })

  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow({
    Ex,
    Ey,
    Ez,
  })

  useEffect(() => {
    console.log(Ex)
  }, [JSON.stringify(Ex)])

  return (
    <div className={style.mainPage}>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>

      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" onClick={openModalClickHandler} id="CST">
          Get modulation for CST
        </button>
        <button className={style.button} type="button" onClick={openModalClickHandler} id="points">
          Get modulation by points
        </button>
      </div>

      {/* <div className={style.rows}>
        {Ex.map((row) => (
          <SingleRow
            key={crypto.randomUUID()}
            row={row}
            // deleteString={deleteString}
          />
        ))}
      </div> */}

    </div>
  )
}
