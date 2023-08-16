// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    uniquieId,
    name,
    comment,
    isFavorite,
    initialClassName,
    likebutton,
    date,
    ondeletecomment,
  } = props

  const likeImageUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeclick = () => {
    likebutton(uniquieId)
  }

  const deletecomment = () => {
    ondeletecomment(uniquieId)
  }

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="listcontainer">
      <div className="usercommentcontainer">
        <div className={initialClassName}>{name[0]}</div>
        <div>
          <div className="updatetimecontainer">
            <h1 className="username">{name}</h1>
            <p className="updatetime">{postedTime}</p>
          </div>
          <p className="usercomment">{comment}</p>
        </div>
      </div>

      <div className="favoritecontainer">
        <div className="likecontainer">
          <button type="button" className="likebutton" onClick={likeclick}>
            <img src={likeImageUrl} alt="like" className="likeimage" />
          </button>
          <p className="like">Like</p>
        </div>

        <div>
          <button
            type="button"
            className="likebutton"
            onClick={deletecomment}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className=""
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
