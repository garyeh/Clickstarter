import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {typed: false, toggle: false, value: "", projectList: []};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.projects = [];
  }

  handleToggle(e) {
    e.preventDefault();
    if (this.state.toggle) {
      this.setState({ toggle: !this.state.toggle, value: "", projectList: [], typed: false });
    } else {
      this.props.fetchSearchProjects()
        .then(res => {
          this.projects = res.search;
          this.setState({ toggle: !this.state.toggle, value: "", typed: false });
        });
    }
  }

  update(field) {
    return e => {
      let newVal = e.currentTarget.value;
      if (this.state.value !== newVal) {
        let filtered = this.projects.filter( project => {
          let [title, description, val] =
          [project.title, project.description, newVal].map( (str) => (
            str.toLowerCase()
          ));
          return title.includes(val) || description.includes(val);
        });
        this.setState({ projectList: filtered.slice(0, 5), [field]: newVal, typed: true });
      }
    };
  }

  handleClick(project) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/projects/${project.id}`);
      this.setState({ projectList: [], toggle: !this.state.toggle });
    };
  }

  render() {
    return (
      <div className="searchBar">
        <div onClick={this.handleToggle}>
          <img id="searchIcon" src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_64/v1495735849/Stock/search_jsyw2o.png" />
        </div>
        {
          this.state.toggle ?
            <div className="searchContainer">
              <input type="text" placeholder="Search by title or description"
                onChange={this.update('value')} value={this.state.value} />
              <div className="searchResults">
                {
                  this.state.projectList.length === 0 && this.state.typed ?
                  <p>No results found</p>
                    :
                  this.state.projectList.map(project => (
                  <div key={project.id} onClick={this.handleClick(project)}>
                    <span>{project.title}</span>
                    <span>{project.category}</span>
                  </div>
                  ))
                }
              </div>
            </div>
          :
            ""
          }
      </div>
    );
  }
}

export default withRouter(SearchBar);
