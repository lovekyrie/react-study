import React, { Component } from 'react'

export default class CommentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      commentList: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        commentList: [
          {
            body: "react is good",
            author: "facebook"
          },
          {
            body: "vue is very good",
            author: "youyuxi"
          }
        ]
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.commentList.map((c, i) => (
          <Comment key={i} {...c}></Comment>
        ))}
      </div>
    )
  }

}

//展示组件
// class Comment extends React.PureComponent {
//   render() {

//     console.log('render comment')
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>{this.props.author}</p>
//       </div>
//     )
//   }
// }

//以函数形式创建
const Comment =React.memo(function(props){
  console.log('render comment')
  return (
    <div>
      <p>{props.body}</p>
      <p>{props.author}</p>
    </div>
  )
})