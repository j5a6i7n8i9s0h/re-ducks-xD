// import React, { Component } from "react";
// import PropTypes from "prop-types";
// // import { GridList, GridTile } from "material-ui/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridList from "@material-ui/core/GridList";

// class PostData extends Component {
//   render() {
//     let postContent;
//     const { posts } = this.props;

//     if (posts) {
//       postContent = (
//         <GridList cols={3}>
//           {posts.map(post => (
//             <GridListTile title={post.title} key={post.id}>

//             </GridListTile>
//           ))}
//         </GridList>
//       );
//     } else {
//       postContent = null;
//     }
//     return <div>{postContent}</div>;
//   }
// }
// PostData.PropTypes = {
//   posts: PropTypes.array.isRequired
// };
// export default PostData;
