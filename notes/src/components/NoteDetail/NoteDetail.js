// importing libraries
import React from 'react';
import styled from 'styled-components';

// importing component
import Modal from './Modal';

// styled Note
const Note = styled.div`
  padding: 4rem;

  .menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .menu-item {
\      margin-left: 2rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .content {
    margin: 4rem 0;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  `;

class NoteDetail extends React.Component {
  state = {
    modal: false,
  }

  toggleModal = () => {
    this.setState(state => ({
      modal: !state.modal,
    }))
  }

  render () {
    const { note, fetchingNote, history} = this.props;
    return (
      <Note>
        {
          this.state.modal && 
          <Modal {...this.props} toggleModal={this.toggleModal} /> 
        }
        <div className="menu">
          <div
            className="menu-item"
            onClick={() => {
              history.push(`/notes/edit/${note._id}`);
            }}
          >
            Edit
          </div>
          <div
            className="menu-item"
            onClick={this.toggleModal}
          >
            Delete
          </div>
        </div>
        {
          fetchingNote ?
          <div>Fetching Friend ...</div> :
          !note || !note._id ?
            <div>Something has gone teribbly wrong</div> :
            <div className="content">
              <h2>{note.title}</h2>
              <div>
                <p>{note.textBody}</p>
              </div>
            </div>
        }
      </Note>
    );
  }
}
 
export default NoteDetail;