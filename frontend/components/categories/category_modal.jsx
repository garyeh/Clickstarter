import React from 'react';
import Modal from 'react-modal';

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
    top             : '20%',
    left            : '20%',
    right           : '20%',
    bottom          : '50%',
    border          : '1px solid #ccc',
    padding         : '30px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};

class CategoryModal extends React.Component {
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
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {

    return(
      <div>
        <a onClick={this.openModal}>
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_256/v1495236703/Stock/Compass_rywdvr.png" alt="Explore" />
          Explore
        </a>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Category Modal">

          <div>hi</div>
        </Modal>
      </div>
    );
  }
}

export default CategoryModal;
