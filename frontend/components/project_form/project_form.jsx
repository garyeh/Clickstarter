import React from 'react';
import { withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="project-create-form" >
        <section className="create-form-contents">
          <p>Choose a category:</p>
          <select name="expertise" defaultValue="0">
            <option value="0" disabled="true">Select a category</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>Give your project a title:</p>
          <input type="text" placeholder="Title" />

          <p>Short blurb:</p>
          <textarea name="Description" className="form-description" placeholder="Description"></textarea>

          <p>Upload an image:</p>

          <p>End on date</p>
          <input type="date" name="end_date" />

          <p>Funding Goal</p>
          <input type="text" placeholder="Title" />

          <p>Details (optional)</p>
          <textarea name="Details" className="form-description" placeholder="Details"></textarea>

          <input type="submit" value="Save Project!" />
        </section>
      </form>
    );
  }
}

export default withRouter(ProjectForm);
