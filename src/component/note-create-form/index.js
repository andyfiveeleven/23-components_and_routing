import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      title: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          default='title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='content'
          default='note content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>Add Note</button>
      </form>
    )
  }
}

export default NoteCreateForm;
