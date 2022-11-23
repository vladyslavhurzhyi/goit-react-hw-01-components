import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Name,
  Text,
  StatsBox,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <img src={avatar} alt={tag} className="avatar" />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <StatsBox>
        <ListItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </ListItem>
      </StatsBox>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
