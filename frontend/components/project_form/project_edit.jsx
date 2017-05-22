import React from 'react';
import { withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const DEFAULT_PHOTO = "http://res.cloudinary.com/ds1qfel8a/image/upload/v1495403855/sample.jpg";

class ProjectEdit extends React.Component {

  render() {
    console.log(this.props);
    return (<div>Hi</div>);
  }
}

export default withRouter(ProjectEdit);
