import React from 'react';
import { withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="project-create-form" >
        <div className="create-form-content">
          <p>Choose a category:</p>
          <select name="expertise">
            <option value="Select a category" disabled="true" selected="true">Select a category</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>Give your project a title:</p>
          <input type="text" placeholder="Title" />

          <p>Short blurb:</p>
          <textarea name="review" className="form-description" placeholder="Description"></textarea>

          <p>Upload an image:</p>

          <p>End Date</p>
          <p>Funding Goal</p>
          <p>Details (optional)</p>
        </div>
      </form>
    );
  }
}

export default withRouter(ProjectForm);
