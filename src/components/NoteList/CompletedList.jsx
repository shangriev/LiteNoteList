import React from 'react';
import styles from './styles.module.scss';
import deleteSvg from '../../images/delete.svg';
import uncheckedSvg from '../../images/checkbox-unchecked.svg';
import checkedSvg from '../../images/checkbox-check.svg';
import arrow from '../../images/arrow.svg';

const CompletedList = ({
  completedNotes,
  clickMarkNote,
  deleteNote,
  setPopupCompletedNotes,
  popupCompletedNotes,
}) => {
  const openPopup = () => {
    setPopupCompletedNotes((popupCompletedNotes) => !popupCompletedNotes);
  };

  const popup = popupCompletedNotes
    ? `${styles.completedPopup} ${styles.active}`
    : styles.completedPopup;

  return (
    <div className={styles.completed}>
      <span>
        <img
          className={popupCompletedNotes ? `${styles.arrowImg} ${styles.active}` : styles.arrowImg}
          src={arrow}
          alt='open marked notes'
        />
        <p onClick={openPopup}>Выполненые</p>
      </span>
      <ul className={popup}>
        {completedNotes.map((note) => (
          <li
            key={note.id}
            className={note.completed ? `${styles.container} ${styles.active}` : styles.container}>
            <img
              onClick={() => clickMarkNote(note.id)}
              src={note.completed ? checkedSvg : uncheckedSvg}
              alt='checkbox'
            />
            {note.text}
            <img
              className={styles.buttonDlt}
              onClick={() => deleteNote(note.id)}
              src={deleteSvg}
              alt='delete'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
