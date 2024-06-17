import React from 'react';
import NotCompletedList from './components/NoteList/NotCompletedList';
import CompletedList from './components/NoteList/CompletedList';
import AddNoteForm from './components/AddNoteForm';
import menuSvg from './images/dots.svg';

function App() {
  const [noteList, setNoteList] = React.useState([]);
  const [popupCompletedNotes, setPopupCompletedNotes] = React.useState(false);

  const clickMarkNote = (id) => {
    const updatedNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {...note, completed: !note.completed};
      }
      return note;
    });
    setNoteList(updatedNoteList);
  };

  const deleteNote = (id) => {
    const updateList = noteList.filter((note) => note.id !== id);
    setNoteList(updateList);
  };

  const deleteAllCompletedNotes = () => {
    const updateList = noteList.filter((note) => !note.completed);
    setNoteList(updateList);
  };

  const deleteAllNotes = () => {
    setNoteList([]);
  };
  const completedNotes = noteList.filter((note) => note.completed);
  const notCompletedNotes = noteList.filter((note) => !note.completed);

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='notelist'>
          <h1>Название списка</h1>
          <NotCompletedList
            clickMarkNote={clickMarkNote}
            notCompletedNotes={notCompletedNotes}
            noteList={noteList}
            deleteNote={deleteNote}
          />
          <AddNoteForm setNoteList={setNoteList} />
          {completedNotes.length > 0 && (
            <CompletedList
              deleteNote={deleteNote}
              setNoteList={setNoteList}
              clickMarkNote={clickMarkNote}
              completedNotes={completedNotes}
              setPopupCompletedNotes={setPopupCompletedNotes}
              popupCompletedNotes={popupCompletedNotes}
            />
          )}
        </div>

        <div className='footer'>
          {/* <div className='menu'>
            <img src={menuSvg} alt='menu' />
          </div> */}
          <div className='delete-buttons'>
            {notCompletedNotes.length > 0 && (
              <button onClick={() => deleteAllNotes()}>Очистить список</button>
            )}
            {completedNotes.length > 0 && (
              <button onClick={() => deleteAllCompletedNotes()}>Удалить все выполненные</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
