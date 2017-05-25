import React from 'react';
import Modal from 'react-modal';

const style = {
  overlay : {
    position        : 'relative',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(55, 55, 55, 0)',
    zIndex          : 10
  },
  content : {
    display         : 'flex',
    justifyContent  : 'center',
    position        : 'absolute',
    top             :  '100px',
    left            :  0,
    right           :  0,
    bottom          :  0,
    border          : 'none',
    padding         : 0,
    margin          : 0,
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};


class SearchModal extends React.Component {
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
        <div onClick={this.openModal}>
          <img id="searchIcon" src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_64/v1495735849/Stock/search_jsyw2o.png" />
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Search Modal">

          <input id="modal" type="text" value="wey" />
        </Modal>
      </div>
    );
  }
}

export default SearchModal;
