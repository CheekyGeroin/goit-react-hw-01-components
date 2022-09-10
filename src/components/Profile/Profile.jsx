import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <Card>
      <Description>
        <img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Items>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  avatar: PropTypes.string.isRequired,
};
