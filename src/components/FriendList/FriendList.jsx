import PropTypes from 'prop-types'
import css from './FriendList.module.css'
function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
  {friends.map(item=>(<li key={item.id} className={css.item}>
  <span className={item.isOnline ? css.green : css.red}>{item.isOnline}</span>
  <img className="avatar" src= {item.avatar} alt="User avatar" width="48" />
  <p className="name">{item.name}</p>
</li>))}
</ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        isOnline : PropTypes.bool.isRequired,
        id : PropTypes.number.isRequired,
    })).isRequired
}
export default FriendList