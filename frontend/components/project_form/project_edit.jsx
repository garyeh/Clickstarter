import React from 'react';
import { withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const DEFAULT_PHOTO = "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495403855/sample.jpg";

class ProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      description: "",
      end_date: "",
      main_image_url: "",
      creator_id: this.props.currentUser.id,
      category_id: 0
    };
  }

  render() {
    console.log(this.props);
    return (<div>Hi</div>);
  }
}

export default withRouter(ProjectEdit);
