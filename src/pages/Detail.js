import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPost} from '../configs/redux/actions/post'

class Detail extends Component {
  
  componentDidMount(){
    this.props.getPost()
  }

  render() {
    console.log(this.props.post);
    return (
      <div>
        <h1>halaman detail</h1>
        {this.props.post.posts.map((post)=>
        <h1>{post.title}</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return {
    post: state.post,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => ({
  getPost: ()=> {
    dispatch(getPost());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
