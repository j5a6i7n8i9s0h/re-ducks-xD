import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Postz
            </Typography>
          </Toolbar>
        </AppBar>
        <Provider store={store}>
          <div>
            <PostForm />
            <Posts />
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
