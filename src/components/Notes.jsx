import React from 'react'
import Notesidebar from './Notesidebar';
import Main from './Main';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const Notes = () => {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
      );
      const [activeNote, setActiveNote] = useState(false);
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
    
      const onAddNote = () => {
        const newNote = {
          id: uuid(),
          title: "Untitled Note",
          body: "",
          lastModified: Date.now(),
        };
    
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
      };
    
      const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
      };
    
      const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
      };
    
      const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
      };
    
      return (
        <div className="App">
          <Notesidebar
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
          <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
      );
}

export default Notes