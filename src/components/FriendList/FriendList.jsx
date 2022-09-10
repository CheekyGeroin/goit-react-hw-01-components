import PropTypes from 'prop-types';
import { List, Item, Status, Name, Container } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <Status stat={isOnline}></Status>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
