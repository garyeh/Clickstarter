import React from 'react';
import Modal from 'react-modal';
import PledgeFormContainer from './pledge_form_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(55, 55, 55, 0.9)',
    zIndex          : 10
  },
  content : {
    display         : 'flex',
    justifyContent  : 'center',
    position        : 'fixed',
    top             : '35%',
    left            : '40%',
    right           : '40%',
    bottom          : '35%',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};

class PledgeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }
  

  openModal() {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
    } else {
      this.setState({ modalOpen: true });
    }
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}>
          Back this project
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Reward Modal">

          <PledgeFormContainer detail={this.props.detail}
            currentUser={this.props.currentUser}
            errors={this.props.errors}
            closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default PledgeModal;
