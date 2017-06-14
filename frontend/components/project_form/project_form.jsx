import React from 'react';
import { withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const DEFAULT_PHOTO = "http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_1080/v1495403855/sample.jpg";
const defaultState = (currentUser) => ({
  title: "",
  url: "",
  description: "",
  end_date: "",
  main_image_url: "",
  creator_id: currentUser.id,
  category: "",
  funding_goal: 0
});

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

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState(this.props.currentUser);
    this.upload_preset = "l6bdce2z";
    this.upload_url = `https://api.cloudinary.com/v1_1/ds1qfel8a/image/upload`;

    this.props.clearErrors();
    this.currentDate = (new Date()).toJSON().slice(0,10);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProjectDetail(this.props.match.params.projectId)
        .then(()=> {this.setState(this.props.projectDetail);});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.match.path === "/projects/:projectId/edit" && nextProps.match.path === "/projects/new") {
      this.setState(defaultState(this.props.currentUser));
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    if (this.state.main_image_url === "") {
      newState.main_image_url = DEFAULT_PHOTO;
    }
    if (this.props.match.params.projectId) {
      this.props.updateProject(newState)
        .then(project => this.props.history.push(`/projects/${project.id}`),
        err => scroll(0,0));
    } else {
      this.props.createProject(newState)
        .then(project => this.props.history.push(`/projects/${project.id}`),
        err => scroll(0,0));
    }
  }

  handleImageDrop(image) {
    this.handleImageUpload(image[0]);
  }

  handleImageUpload(image) {
    let upload = uploadRequest.post(this.upload_url)
                    .field('upload_preset', this.upload_preset)
                    .field('file', image);

    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          main_image_url: response.body.secure_url
        });
      }
    });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <form className="project-create-form" onSubmit={this.handleSubmit} >
        <div className="create-header">
          {
            this.props.match.params.projectId ?
              (
                <div>
                  <h1>Edit your project</h1>
                </div>
              )
              :
              (
                <div>
                  <h1>Let's get started.</h1>
                  <p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</p>
                </div>
              )
          }
        </div>
        <section className="create-form-contents">
          <ul className="errors" >
            {this.errors()}
          </ul>

          <div><span>Project Title</span>
            <input type="text" placeholder="Title" onChange={this.update('title')} value={this.state.title} />
          </div>

          <div><span>Website URL</span>
            <input type="text" placeholder="URL" onChange={this.update('url')} value={this.state.url} />
          </div>

          <div><span>Short description</span>
            <textarea name="Description" className="form-description" placeholder="Description" onChange={this.update('description')} value={this.state.description}></textarea>
          </div>

          <div><span>Choose a category</span>
            <select name="expertise" onChange={this.update('category')} value={this.state.category} >
              <option value="x" disabled="true">Select a category</option>
              {
                categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))
              }
            </select>
          </div>

          <div><span>Project image</span>
            <Dropzone multiple={false} accept="image/*"
              onDrop={this.handleImageDrop} className="dropzone">
              {
                this.state.main_image_url === "" ?
                  <h3>Choose an image from your computer</h3>
                  :
                  <div>
                    <img src={this.state.main_image_url} />
                  </div>
              }
            </Dropzone>
          </div>

          <div><span>End on date</span>
            <input type="date" id="projectDate" name="end_date" onChange={this.update('end_date')} value={this.state.end_date} min={this.currentDate}/>
          </div>

          <div><span>Funding Goal ($)</span>
            <input type="text" placeholder="$" onChange={this.update('funding_goal')} value={this.state.funding_goal} />
          </div>

          <div><span>Details (optional)</span>
            <textarea name="Details" className="form-description" placeholder="Details" onChange={this.update('details')} value={this.state.details}></textarea>
          </div>

          <div><span>Save your project</span>
            <input type="submit" value="Save" />
          </div>
        </section>
      </form>
    );
  }
}

export default withRouter(ProjectForm);
