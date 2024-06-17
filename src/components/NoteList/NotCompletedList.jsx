import React from 'react';
import styles from './styles.module.scss';
import deleteSvg from '../../images/delete.svg';
import uncheckedSvg from '../../images/checkbox-unchecked.svg';
import checkedSvg from '../../images/checkbox-check.svg';

const NoteList = ({notCompletedNotes, clickMarkNote, deleteNote}) => {
  return (
    <div>
      <ul>
        {notCompletedNotes.map((note) => (
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
              onClick={() => deleteNote(note.id)}
              src={deleteSvg}
              alt='delete'
              className={styles.buttonDlt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
