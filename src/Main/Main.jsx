import { useModalWindow } from '../CustomHooks/useModalWindow'
import { useRows } from '../CustomHooks/useRows'
// import { SingleRow } from '../ListOfStrings/SingleRow'
import { Modal } from '../Modal/Modal'
import style from './style.module.css'

export function Main({ selectedFile }) {
  const {
    arrayOfStrings,
    onClickUndoButton,
    // deleteString,
    getUndoSteps,
  } = useRows({ selectedFile })

  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow({ arrayOfStrings })

  const keyPress = (e) => {
    if (e.keyCode === 90 && e.ctrlKey && getUndoSteps()) { onClickUndoButton() }
  }

  document.onkeydown = keyPress
  // console.log(arrayOfStrings)

  return (
    <div className={style.mainPage}>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>

      <div className={style.undoButtonStyle}>
        <button
          className={`${(getUndoSteps() === 0) ? style.buttonDisabled : style.button}`}
          type="button"
          onClick={onClickUndoButton}
          disabled={getUndoSteps() === 0}
        >
          Undo deleted string
          {' '}
          {getUndoSteps() === 0 ? '' : getUndoSteps()}
        </button>
      </div>

      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" onClick={openModalClickHandler} id="CST">
          Get modulation for CST
        </button>
        <button className={style.button} type="button" onClick={openModalClickHandler} id="points">
          Get modulation by points
        </button>
      </div>

      {/* <div className={style.rows}>
        {arrayOfStrings.map((row) => (
          <SingleRow
            key={crypto.randomUUID()}
            row={row}
            deleteString={deleteString}
          />
        ))}
      </div> */}

    </div>
  )
}
