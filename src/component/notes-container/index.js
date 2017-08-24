import './_notes-container.scss'
import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NotesList from '../notes-list';

class NotesContainer extends React.Component {
  constructor(props){
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    this.props.app.setState(state=> ({
      notes: [...state.notes, note]
    }));
  }

  render() {
    return(
      <div className='note-container'>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <NotesList />
      </div>
    )
  }
}

export default NotesContainer;
