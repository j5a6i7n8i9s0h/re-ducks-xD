import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class PostForm extends Component {
  getModalStyle = () => {
    return {
      margin: "auto",
      position: "absolute",
      height: "20em",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      openModal: false
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
    this.setState({ openModal: false });
    this.props.createPost(post);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="inherit"
          style={{ marginLeft: 0, position: "relative" }}
          onClick={() => {
            this.setState({ openModal: true });
          }}
        >
          Add Post
        </Button>
        <Modal
          open={this.state.openModal}
          onClose={() => {
            this.setState({ openModal: false });
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Slide
            direction="down"
            in={this.state.openModal}
            mountOnEnter
            unmountOnExit
          >
            <div style={this.getModalStyle()} className={classes.paper}>
              <h1>Add Post</h1>
              <Divider variant="middle" />
              <form onSubmit={this.onSubmit}>
                <div>
                  <TextField
                    name="title"
                    label="Title"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.onChange}
                    variant="outlined"
                    fullWidth
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
                    fullWidth
                    multiline
                    rowsMax="2"
                  />
                </div>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginRight: 10, float: "right" }}
                >
                  {" "}
                  Add Post{" "}
                </Button>
              </form>
            </div>
          </Slide>
        </Modal>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
const PostFormTemp = connect(
  null,
  { createPost }
)(PostForm);

PostFormTemp.propTypes = {
  classes: PropTypes.object.isRequired
};
const PostFormDesign = withStyles(styles)(PostFormTemp);
export default PostFormDesign;
