import React from 'react';
import { withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="project-create-form" >
        <div className="create-header">
          <h1>Let's get started.</h1>
          <p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</p>
        </div>
        <section className="create-form-contents">
          <p><span>Choose a category</span>
            <select name="expertise" defaultValue="0">
              <option value="0" disabled="true">Select a category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>

          <p><span>Project Title</span>
            <input type="text" placeholder="Title" />
          </p>

          <p><span>Website URL</span>
            <input type="text" placeholder="URL" />
          </p>

          <p><span>Short blurb</span>
            <textarea name="Description" className="form-description" placeholder="Description"></textarea>
          </p>

          <p><span>Upload an image:</span>
          </p>

          <p><span>End on date</span>
            <input type="date" name="end_date" />
          </p>

          <p><span>Funding Goal</span>
            <input type="text" placeholder="$" />
          </p>

          <p><span>Details (optional)</span>
            <textarea name="Details" className="form-description" placeholder="Details"></textarea>
          </p>

          <p><span>Save your project</span>
            <input type="submit" value="Save Project!" />
          </p>
        </section>
      </form>
    );
  }
}

export default withRouter(ProjectForm);
