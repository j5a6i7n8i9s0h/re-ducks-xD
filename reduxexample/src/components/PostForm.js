import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1> Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <TextField
              name="title"
              label="Title"
              margin="normal"
              value={this.state.title}
              onChange={this.onChange}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              name="body"
              label="Body"
              margin="normal"
              value={this.state.body}
              onChange={this.onChange}
              variant="outlined"
            />
          </div>
          <br />
          <Button variant="contained" color="primary" type="submit">
            {" "}
            Submit{" "}
          </Button>
        </form>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(PostForm);
