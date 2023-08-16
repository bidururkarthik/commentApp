import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentlist: [], name: '', comment: ''}

  addcomment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newcomment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isFavorite: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevcomment => ({
      commentlist: [...prevcomment.commentlist, newcomment],
      name: '',
      comment: '',
    }))
  }

  takenusername = event => {
    this.setState({name: event.target.value})
  }

  takencomment = event => {
    this.setState({comment: event.target.value})
  }

  onchangelikebutton = uniquieId => {
    this.setState(prevstate => ({
      commentlist: prevstate.commentlist.map(eachlist => {
        if (uniquieId === eachlist.id) {
          return {...eachlist, isFavorite: !eachlist.isFavorite}
        }
        return eachlist
      }),
    }))
  }

  ondeletecomment = id => {
    const {commentlist} = this.state
    this.setState({commentlist: commentlist.filter(commit => commit.id !== id)})
  }

  render() {
    const {commentlist, name, comment} = this.state

    return (
      <div className="bgcontainer">
        <div className="userfillcontainer">
          <div>
            <h1 className="heading">Comments</h1>
            <form>
              <p className="companyparagraph">Say something 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="userinput"
                onChange={this.takenusername}
              />
              <br />
              <textarea
                name="story"
                rows="5"
                cols="33"
                placeholder="Your Comment"
                onChange={this.takencomment}
              />
              <br />
              <button
                type="button"
                className="Addcommmentbutton"
                onClick={this.addcomment}
              >
                Add Comment
              </button>
            </form>
          </div>

          <div className="imagecontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="commentimage"
            />
          </div>
        </div>
        <hr />
        <div className="commentcountcontainer">
          <div className="countcontainer" data-testid="delete">
            {commentlist.length}
          </div>
          <p className="countcomment">Comments</p>
        </div>

        <ul>
          {commentlist.map(usercomment => (
            <CommentItem
              key={usercomment.id}
              name={usercomment.name}
              comment={usercomment.comment}
              initialClassName={usercomment.initialClassName}
              likebutton={this.onchangelikebutton}
              uniquieId={usercomment.id}
              date={usercomment.date}
              isFavorite={usercomment.isFavorite}
              ondeletecomment={this.ondeletecomment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
