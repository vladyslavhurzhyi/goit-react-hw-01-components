import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import statisticsData from './Statistics/statisticsData.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />
    </div>
  );
};
