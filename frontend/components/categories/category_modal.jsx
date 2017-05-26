import React from 'react';
import Modal from 'react-modal';

const categories = [
  "Art",
  "Autos",
  "Entertainment",
  "Food",
  "Music",
  "Photography",
  "Productivity",
  "Sports",
  "Technology"
];

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
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
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
      category: ""
    };

    this.pathChange = false;
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.displayIndexByCategory = this.displayIndexByCategory.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal() {
    this.setState({ modalOpen: true });
    if (this.props.history.location.pathname !== "/") {
      this.props.history.push("/");
      this.pathChange = true;
    }
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  displayIndexByCategory(category) {
    return e => {
      this.closeModal();
      this.setState({category: category}, () => {
        const categoryProjects = this.state;
        this.props.fetchCategoryProjects(categoryProjects)
          .then(() => scrollTo(0,611));
      });
    };
  }

  goBack() {
    if (this.pathChange === true) {
      this.props.history.goBack();
    }
    this.closeModal();
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

          <ul className="categoryList">
            <li><h2>Categories</h2>
              <button onClick={this.goBack.bind(this)}><img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495687648/Stock/x-categories_jlstnk.png" /></button>
            </li>
            {categories.map(category => (
              <li key={category}><button onClick={this.displayIndexByCategory(category)}>{category}</button></li>
            ))}
          </ul>
        </Modal>
      </div>
    );
  }
}

export default CategoryModal;
