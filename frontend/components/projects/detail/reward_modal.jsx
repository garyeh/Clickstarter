import React from 'react';
import Modal from 'react-modal';
import RewardForm from './reward_form';

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
    top             : '100px',
    left            : '20%',
    right           : '20%',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '30px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};


class RewardModal extends React.Component {
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
        <button className="addRewardButton" onClick={this.openModal}>
          Add reward
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Reward Modal">

          <RewardForm createReward={this.props.createReward}
            errors={this.props.errors}
            fetchProjectDetail={this.props.fetchProjectDetail}
            closeModal={this.closeModal}
            clearRewardErrors={this.props.clearRewardErrors} />
        </Modal>
      </div>
    );
  }
}

export default RewardModal;
