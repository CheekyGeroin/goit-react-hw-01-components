import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
return <ul className="friend-list">
  {friends.map(({avatar, name, isOnline, id}) => (<li className="item" key={id}>
      <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
</li>))}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,
    }),
}