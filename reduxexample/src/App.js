import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostFormDesign from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <AppBar position="static">
            <Toolbar>
              <Grid
                justify="space-between" // Add it here :)
                container
                spacing={24}
              >
                <Grid item>
                  <Typography variant="h6" color="inherit">
                    Post
                  </Typography>
                </Grid>

                <Grid item>
                  <div>
                    <PostFormDesign />
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <div>
            <Posts />
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
