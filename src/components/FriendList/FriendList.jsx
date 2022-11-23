import PropTypes from 'prop-types';
import { FriendList, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status friendStatus={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
