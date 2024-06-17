import React, {useState} from 'react';
import add from '../../images/add.svg';
import styles from './styles.module.scss';

const AddNoteForm = ({setNoteList}) => {
  const [text, setText] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      setNoteList((prevNoteList) => [
        ...prevNoteList,
        {id: Date.now(), text: text, completed: false},
      ]);
      setText('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockImg}>
        <img className={styles.addImg} src={add} alt='add note' />
      </div>
      <form onSubmit={addNote}>
        <input
          type='text'
          placeholder='Добавить задачу'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddNoteForm;
