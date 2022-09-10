import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import friends from 'components/FriendList/friends'
import transactions from 'components/TransactionHistory/transactions'
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import { Container } from './App.styled';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
      </Container>
      <Container>
        <Statistics stats={data} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <TransactionHistory items={transactions} />
    </div>
  );
};
