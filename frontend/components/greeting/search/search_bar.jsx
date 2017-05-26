import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {toggle: false, value: "", projectList: []};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ toggle: !this.state.toggle });
  }

  update(field) {

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="searchBar">
        <div onClick={this.handleToggle}>
          <img id="searchIcon" src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_64/v1495735849/Stock/search_jsyw2o.png" />
        </div>
        {
          this.state.toggle ?
            <div>
              <input type="text" placeholder="Search projects"
                onChange={this.update('value')} value={this.state.value} />
            </div>
          :
            ""
          }
      </div>
    );
  }
}

export default SearchBar;
